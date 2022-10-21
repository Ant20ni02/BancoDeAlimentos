package mx.tec.prototipo

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.os.PersistableBundle
import android.util.Log
import android.widget.ImageView
import androidx.fragment.app.Fragment
import androidx.appcompat.app.AppCompatActivity
import com.android.volley.AuthFailureError
import com.android.volley.RequestQueue
import com.android.volley.Response
import com.android.volley.toolbox.JsonObjectRequest
import com.android.volley.toolbox.Volley
import com.google.android.material.bottomnavigation.BottomNavigationView
import org.json.JSONObject

class BottomNavigation: AppCompatActivity() {

    lateinit var queue : RequestQueue

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main_bottomnav)

        //////////////////////////////

        val phantom = endpoint().globalLink + "phantom"
        var phantomresp = ""

        val listener = Response.Listener<JSONObject> { response ->
            val mensaje = response.getString("mensaje")
            Log.e("ENDPOINTRESPONSE", mensaje)
            phantomresp= mensaje
        }

        val error = Response.ErrorListener { error ->
            Log.e("ERRORLISTENER", error.toString())
        }

        val shPreferenceToken = applicationContext.getSharedPreferences("profile", Context.MODE_PRIVATE)
        val xaccesstoken = shPreferenceToken.getString("x-access-token", "#")

        val requestAddSurvey = object :
            JsonObjectRequest(Method.GET, phantom, null, listener, error){
            @Throws(AuthFailureError::class)
            override fun getHeaders(): MutableMap<String, String> {
                val hashMap = HashMap<String, String>()
                hashMap["Content-Type"] = "application/json; charset=UTF-8";
                //hashMap["User-Agent"] = "Mozilla/5.0"
                hashMap["x-access-token"] = xaccesstoken.toString()

                return hashMap
            }
        }

        queue = Volley.newRequestQueue(this@BottomNavigation)

        queue.add(requestAddSurvey) //stores variable


        Log.e("middleware phantom", phantomresp)

        if(phantomresp == "Token inválido"){

            val profile = getSharedPreferences("profile", Context.MODE_PRIVATE)
            val answers = getSharedPreferences("ANSWERS", Context.MODE_PRIVATE)
            val currentFragment = getSharedPreferences("currentFragment", Context.MODE_PRIVATE)

            val prEdit = profile?.edit()
            prEdit?.clear()
            prEdit?.apply()

            val ansEd = answers?.edit()
            ansEd?.clear()
            ansEd?.apply()

            val currEd = currentFragment?.edit()
            currEd?.clear()
            currEd?.apply()

            val intent = Intent(this@BottomNavigation, Inicio::class.java)
            startActivity(intent)

        }

        //////////////////////////////

        val mainEncuestaFragment = MainEncuestaFragment()
        val mainProfileFragment = MainProfileFragment()
        val settingsFrament = MainSettingsFragment()
        val bottomNav =findViewById<BottomNavigationView>(R.id.bnv_main)
        val imageView = findViewById<ImageView>(R.id.imageView)

        loadFragment(mainEncuestaFragment) //loads the button fragment for the first time

        imageView.setOnClickListener{
            val intent = Intent(this@BottomNavigation, MainActivity::class.java)
            startActivity(intent)
        }



        bottomNav.setOnItemSelectedListener {
            when(it.itemId){
                R.id.nav_menu ->{

                    loadFragment(mainEncuestaFragment)
                    true
                }
                R.id.nav_Profile ->{

                    loadFragment(mainProfileFragment)
                    true
                }
                R.id.nav_settings ->{

                    loadFragment(settingsFrament)
                    true
                }
                else -> false
            }
        }

    }

    private  fun loadFragment(fragment: Fragment){
        val transaction = supportFragmentManager.beginTransaction()
        transaction.replace(R.id.fragmentContainer,fragment)
        transaction.addToBackStack(null)
        transaction.commit()
    }
}