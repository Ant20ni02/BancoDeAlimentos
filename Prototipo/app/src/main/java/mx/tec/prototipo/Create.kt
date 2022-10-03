package mx.tec.prototipo

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import com.android.volley.AuthFailureError
import com.android.volley.Request
import com.android.volley.RequestQueue
import com.android.volley.Response
import com.android.volley.toolbox.JsonObjectRequest
import com.android.volley.toolbox.Volley
import org.json.JSONObject

class Create : AppCompatActivity() {
    lateinit var queue: RequestQueue
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_create)

        val intent = Intent(this@Create,MainActivity::class.java)

        val txtNombre = findViewById<EditText>(R.id.txtNombreSU)
        val txtApellidos = findViewById<EditText>(R.id.txtApellidosSU)
        val txtEdad = findViewById<EditText>(R.id.txtEdadSU)
        val txtSexo = findViewById<EditText>(R.id.txtSexoSU)
        val txtTelefono = findViewById<EditText>(R.id.txtTelefonoSU)
        val txtCorreo = findViewById<EditText>(R.id.txtConfContraseñaSU)
        val txtContrasena = findViewById<EditText>(R.id.txtContraseñaSU)
        val txtContConfirmation = findViewById<EditText>(R.id.txtConfContraseñaSU)


        val btnRegresar = findViewById<Button>(R.id.btnRegresar)
        val btnRegistrarse = findViewById<Button>(R.id.btnRegistrarse)

        queue =  Volley.newRequestQueue(this@Create)

        val listener = Response.Listener<JSONObject> { response ->
            val mensaje = response.toString()
            Log.e("ENDPOINTRESPONSE", mensaje)

            if(response.getString("mensaje") == "Usuario insertado correctamente"){
                //return to login
                Toast.makeText(this@Create,"Usuario registrado satisfactoriamente", Toast.LENGTH_SHORT).show()
                startActivity(intent)
            }

        }

        val error = Response.ErrorListener { error ->
            Log.e("ERRORLISTENER", error.toString())
        }

        btnRegistrarse.setOnClickListener{
            val signUpUrl = "http://192.168.73.166:4000/signUp"
            val jsonBody = JSONObject()

            jsonBody.put("firstName",txtNombre.text.toString())
            jsonBody.put("lastName",txtApellidos.text.toString())
            jsonBody.put("email", txtCorreo.text.toString())
            jsonBody.put("password_", txtContrasena.text.toString())
            jsonBody.put("age", txtEdad.text.toString())
            jsonBody.put("sex", txtSexo.text.toString())
            jsonBody.put("phoneNumber", txtTelefono.text.toString())
            jsonBody.put("userType", "Voluntario")

            val request = JsonObjectRequest(Request.Method.POST, signUpUrl, jsonBody, listener, error)
            @Throws(AuthFailureError::class)
            fun getBodyContentType(): String {
                return "application/json"
            }
            queue.add(request)
        }

        btnRegresar.setOnClickListener{
            startActivity(intent)
        }
    }
}