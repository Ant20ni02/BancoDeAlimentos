package mx.tec.prototipo

import android.content.Context
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
    lateinit var queue2 : RequestQueue

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val usernameTv =findViewById<TextView>(R.id.txtEmail)
        val passwordTv = findViewById<TextView>(R.id.txtPassword)

        val btnLogin = findViewById<Button>(R.id.btnLogin)
        val signUpLink = findViewById<TextView>(R.id.signUpLink)

        val loginLogo = findViewById<ImageView>(R.id.loginLogo)
        val sharedPreference = getSharedPreferences("profile", Context.MODE_PRIVATE)


        queue =  Volley.newRequestQueue(this@MainActivity)
        queue2 =  Volley.newRequestQueue(this@MainActivity)


        //Si Tiene Cuenta the Voluntario o Familia

        val error = Response.ErrorListener { error ->
            Log.e("ERRORLISTENER", error.toString())
        }

        val listenerProfile = Response.Listener<JSONObject> { response ->
            val mensaje = response.toString()

            Log.e("ENDPOINTRESPONSE", mensaje)
            Log.e("nombre",response.getString("firstName"))




            with(sharedPreference.edit()){
                putString("nombre", response.getString("firstName") + " " + response.getString("lastName"))
                putString("edad", response.getString("age"))
                putString("sexo", response.getString("sex"))
                putString("telefono", response.getString("phoneNumber"))
                apply()
            }
        }






        val listener = Response.Listener<JSONObject> { response ->
            val mensaje = response.toString()
            Log.e("ENDPOINTRESPONSE", mensaje)

            if(response.getString("mensaje") == "Usuario o contraseña autenticados"){
                val intent = Intent(this@MainActivity,BottomNavigation::class.java)

                with(sharedPreference.edit()){
                    putString("email", usernameTv.text.toString())
                    putString("idUser", response.getString("idUser"))
                    putString("x-access-token", response.getString("token"))
                    commit()
                }

                //request for fetching user's data and store into sharedpreferences

                val getUserRequest : String = endpoint().globalLink + "getUsersData/" + response.getString("idUser")

                val requestUsersData = object :
                    JsonObjectRequest(Request.Method.GET, getUserRequest, null, listenerProfile, error){
                    @Throws(AuthFailureError::class)
                    override fun getHeaders(): MutableMap<String, String> {
                        val hashMap = HashMap<String, String>()
                        hashMap["Content-Type"] = "application/json; charset=UTF-8";
                        //hashMap["User-Agent"] = "Mozilla/5.0"
                        hashMap["x-access-token"] = response.getString("token")

                        return hashMap
                    }
                }

                queue2.add(requestUsersData)



                //change Screen
                startActivity(intent)
            }else{
                Toast.makeText(this@MainActivity, response.getString("mensaje"), Toast.LENGTH_SHORT).show()
            }

        }



        btnLogin.setOnClickListener{

        //val loginUrl = "http://localhost:4000/login"
        val login = endpoint()
        val loginUrl = login.globalLink + "login"
            // val loginUrl = "http://10.49.187.177:4000/login"
        // Log.e("ENDPOINTRESPONSE", usernameTv.text.toString())

            if(usernameTv.text.toString() == "" || passwordTv.text.toString() == ""){
                Toast.makeText(this@MainActivity,"Por favor, complete todos los campos", Toast.LENGTH_SHORT).show()
            }
            else{
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
        }

        signUpLink.setOnClickListener{
            val intent = Intent(this@MainActivity,Create::class.java)
            startActivity(intent)
        }

        loginLogo.setOnClickListener{
            val intent = Intent(this@MainActivity,Inicio::class.java)
            startActivity(intent)
        }
    }
}