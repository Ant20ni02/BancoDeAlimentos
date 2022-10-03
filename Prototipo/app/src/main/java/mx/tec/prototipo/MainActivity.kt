package mx.tec.prototipo

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.*
import com.android.volley.AuthFailureError
import com.android.volley.Request
import com.android.volley.RequestQueue
import com.android.volley.Response
import com.android.volley.toolbox.JsonArrayRequest
import com.android.volley.toolbox.JsonObjectRequest
import com.android.volley.toolbox.StringRequest
import com.android.volley.toolbox.Volley
import org.json.JSONArray
import org.json.JSONObject

class MainActivity : AppCompatActivity() {
    lateinit var queue: RequestQueue

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val usernameTv =findViewById<TextView>(R.id.txtUsername_Voluntario)
        val passwordTv = findViewById<TextView>(R.id.txtPassword)

        val btnLogin = findViewById<Button>(R.id.btnLogin)
        val btnCancel = findViewById<Button>(R.id.btnCancel)
        val btnCreate = findViewById<Button>(R.id.btnCreate)

        queue =  Volley.newRequestQueue(this@MainActivity)

        //Si Tiene Cuenta the Voluntario o Familia

        val listener = Response.Listener<JSONObject> { response ->
            val mensaje = response.toString()
            Log.e("ENDPOINTRESPONSE", mensaje)

            if(response.getString("mensaje") == "Usuario o contraseña autenticados"){
                val intent = Intent(this@MainActivity,Voluntario::class.java)

                intent.putExtra("email", usernameTv.toString())
                intent.putExtra("idUser", response.getString("idUser"))
                intent.putExtra("x-access-token", response.getString("token"))

                startActivity(intent)
            }

        }

        val error = Response.ErrorListener { error ->
            Log.e("ERRORLISTENER", error.toString())
        }

        btnLogin.setOnClickListener{

        //val loginUrl = "http://localhost:4000/login"
        val loginUrl = "http://192.168.73.166:4000/login"
        // val loginUrl = "http://10.49.187.177:4000/login"
        // Log.e("ENDPOINTRESPONSE", usernameTv.text.toString())

        val jsonBody = JSONObject()
            jsonBody.put("email",usernameTv.text.toString())
            jsonBody.put("password_",passwordTv.text.toString())

        val request = JsonObjectRequest(Request.Method.POST, loginUrl, jsonBody, listener, error)
            @Throws(AuthFailureError::class)
            fun getBodyContentType(): String {
                return "application/json"
            }

        queue.add(request)
        }

        //Button Create
        btnCreate.setOnClickListener{
                val intent = Intent(this@MainActivity,Create::class.java)
                startActivity(intent)
        }
        //Button Cancel
        btnCancel.setOnClickListener{
            System.exit(0)
        }
    }
}