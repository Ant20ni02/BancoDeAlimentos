package mx.tec.prototipo
import android.Manifest
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.location.Location
import android.location.LocationListener
import android.location.LocationManager
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.fragment.app.FragmentContainer
import com.android.volley.AuthFailureError
import com.android.volley.RequestQueue
import com.android.volley.Response
import com.android.volley.toolbox.JsonObjectRequest
import com.android.volley.toolbox.Volley
import org.json.JSONObject

class EncuestaContainer : AppCompatActivity (){
    lateinit var locationManager: LocationManager
    lateinit var queue : RequestQueue

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main_encuesta)


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

            val intent = Intent(this@EncuestaContainer, Inicio::class.java)
            startActivity(intent)
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

        queue = Volley.newRequestQueue(this@EncuestaContainer)

        queue.add(requestAddSurvey) //stores variable


        Log.e("middleware phantom", phantomresp)


        val sharedPreference = getSharedPreferences("currentFragment", Context.MODE_PRIVATE)

        if(savedInstanceState != null)
            return

        buttonPressed("0") //starts and loads the id fragment

        with(sharedPreference.edit()){
            putString("currentFragment","0")
            commit()
        }

        var curr = ""


        val btnRegresar = findViewById<Button>(R.id.btnRegresar)
        val btnSiguiente = findViewById<Button>(R.id.btnSiguiente)

        val fragmentsDic = encuesta_fragments().fragmentsDic
        //fragmentsDic[curr]?.let { loadFragment(it) }


        //index, fragment name

        //comprobar si el fragmento está en el diccionario



        btnRegresar.setOnClickListener {

            curr = sharedPreference?.getString("currentFragment","#").toString()
            if(curr == "0"){
                val intent = Intent(this@EncuestaContainer,BottomNavigation::class.java)
                startActivity(intent)
            }
        }
        btnSiguiente.setOnClickListener {
            curr = sharedPreference?.getString("currentFragment","#").toString()
            if (curr != null) {
                buttonPressed(curr)
            }
            //load.loadFragment()
        }
    }
    private  fun loadFragment(fragment: Fragment){
        val transaction = supportFragmentManager.beginTransaction()
        transaction.replace(R.id.fragmentContainer,fragment)
        transaction.addToBackStack(null)
        transaction.commit()
    }

    fun buttonPressed (curr : String){
        val fragmentsDic = encuesta_fragments().fragmentsDic

        Log.e("curr", curr.toString())
        Log.e("fragmentsDisc", fragmentsDic[curr].toString())

        if(fragmentsDic[curr] != null){
            fragmentsDic[curr]?.let {
                loadFragment(it)
                Log.e("it?", it.toString())
            }

        }
        else{
            Toast.makeText(this@EncuestaContainer, "El fragmento no existe", Toast.LENGTH_SHORT).show()
        }

    }

}