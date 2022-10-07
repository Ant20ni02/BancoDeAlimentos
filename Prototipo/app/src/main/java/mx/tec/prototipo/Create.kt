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

        val spin_sexos = findViewById<Spinner>(R.id.spin_sexos)

        val sexos = arrayOf("Masculino","Femenino","Otro")
        val arrayAdapter = ArrayAdapter(this, android.R.layout.simple_spinner_item, sexos)
        spin_sexos.adapter = arrayAdapter

        spin_sexos.onItemSelectedListener = object :
            AdapterView.OnItemSelectedListener{
            override fun onItemSelected(p0: AdapterView<*>?, p1: View?, p2: Int, p3: Long) {

            }

            override fun onNothingSelected(p0: AdapterView<*>?) {

            }

        }

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
            val signUp = endpoint()
            val signUpUrl = signUp.globalLink + "signUp"

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