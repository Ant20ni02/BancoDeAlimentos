package mx.tec.prototipo

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.os.PersistableBundle
import android.util.Log
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity
import com.android.volley.AuthFailureError
import com.android.volley.RequestQueue
import com.android.volley.Response
import com.android.volley.toolbox.JsonObjectRequest
import com.android.volley.toolbox.Volley
import org.json.JSONObject

class AvisoPrivacidad: AppCompatActivity() {

    lateinit var queue : RequestQueue

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_aviso_de_privacidad)


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

            val intent = Intent(this@AvisoPrivacidad, Inicio::class.java)
            startActivity(intent)

        }

        val shPreferenceToken = getSharedPreferences("profile", Context.MODE_PRIVATE)
        val xaccesstoken = shPreferenceToken.getString("x-access-token", "#")
        Log.e("TOKEN PRE REQUEST: ", xaccesstoken.toString())


        val requestAddSurvey = object :
            JsonObjectRequest(Method.GET, phantom, null, listener, error){
            override fun getHeaders(): MutableMap<String, String> {
                val hashMap = HashMap<String, String>()
                hashMap["Content-Type"] = "application/json; charset=UTF-8";
                //hashMap["User-Agent"] = "Mozilla/5.0"
                hashMap["x-access-token"] = xaccesstoken.toString()

                return hashMap
            }
        }

        queue = Volley.newRequestQueue(this@AvisoPrivacidad)
        queue.add(requestAddSurvey) //stores variable


        Log.e("middleware phantom", phantomresp)

        /*
        if(phantomresp == "Token inválido"){
        }*/

        //////////////////////////////

        val btnRealizar = findViewById<Button>(R.id.btn_aviso_realizar)
        val btnRegresar = findViewById<Button>(R.id.btn_aviso_regresar)

        btnRealizar.setOnClickListener {
            val intent = Intent(this@AvisoPrivacidad, EncuestaContainer::class.java)
            startActivity(intent)
        }
        btnRegresar.setOnClickListener {
            val intent = Intent(this@AvisoPrivacidad, BottomNavigation::class.java)
            startActivity(intent)
        }

        //       startActivity(intent)
    }
}