package mx.tec.prototipo

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.*
import com.android.volley.AuthFailureError
import com.android.volley.Request
import com.android.volley.RequestQueue
import com.android.volley.Response
import com.android.volley.toolbox.JsonObjectRequest
import com.android.volley.toolbox.Volley
import org.json.JSONObject

class Create : AppCompatActivity() {
    lateinit var queue: RequestQueue
    lateinit var txtSexo: String

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_create)

        val spin_sexos = findViewById<Spinner>(R.id.spin_sexos)

        val sexos = arrayOf("Masculino","Femenino","Otro")

        val arrayAdapter = ArrayAdapter(this, android.R.layout.simple_spinner_dropdown_item, sexos)
        spin_sexos.adapter = arrayAdapter

        spin_sexos.onItemSelectedListener = object :
            AdapterView.OnItemSelectedListener{
            override fun onItemSelected(p0: AdapterView<*>?, p1: View?, p2: Int, p3: Long) {
                txtSexo = spin_sexos.selectedItem.toString()
            }
            override fun onNothingSelected(p0: AdapterView<*>?) {
            }
        }


        val txtNombre = findViewById<EditText>(R.id.txt_Nombre)
        val txtApellidos = findViewById<EditText>(R.id.txt_Apellido)
        val txtEdad = findViewById<EditText>(R.id.txt_Edad)
        //val txtSexo = findViewById<EditText>(R.id.txt_)
        val txtTelefono = findViewById<EditText>(R.id.txt_Num_Telefono)
        val txtCorreo = findViewById<EditText>(R.id.txt_Email_Create)
        val txtContrasena = findViewById<EditText>(R.id.txt_Password_Create)
        val txtContConfirmation = findViewById<EditText>(R.id.txt_Password_Create_Confirmar)

        val btnRegresar = findViewById<Button>(R.id.btnRegresar)
        val btnRegistrarse = findViewById<Button>(R.id.btnCrearCuenta)

        val signUpLogo = findViewById<ImageView>(R.id.signUpLogo)

        queue =  Volley.newRequestQueue(this@Create)

        val listener = Response.Listener<JSONObject> { response ->
            val mensaje = response.toString()
            val intent = Intent(this@Create,MainActivity::class.java)

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


            if(txtNombre.text.toString() == "" || txtApellidos.text.toString() == "" || txtCorreo.text.toString() == ""
                || txtContrasena.text.toString() == "" || txtEdad.text.toString() == "" || txtTelefono.text.toString() == ""
                )
                Toast.makeText(this@Create,"Por favor, complete todos los campos", Toast.LENGTH_SHORT).show()
            else{
                val jsonBody = JSONObject()

                jsonBody.put("firstName",txtNombre.text.toString())
                jsonBody.put("lastName",txtApellidos.text.toString())
                jsonBody.put("email", txtCorreo.text.toString())
                jsonBody.put("password_", txtContrasena.text.toString())
                jsonBody.put("age", txtEdad.text.toString())
                jsonBody.put("sex", txtSexo)
                jsonBody.put("phoneNumber", txtTelefono.text.toString())
                jsonBody.put("userType", "Voluntario")
                jsonBody.put("isActive", 0)

                val request = JsonObjectRequest(Request.Method.POST, signUpUrl, jsonBody, listener, error)
                /*
                @Throws(AuthFailureError::class)

                fun getBodyContentType(): String {
                    return "application/json"
                }*/
                queue.add(request)
            }
        }

        btnRegresar.setOnClickListener{
            val intent = Intent(this@Create,MainActivity::class.java)
            startActivity(intent)
        }

        signUpLogo.setOnClickListener{
            val intent = Intent(this@Create,Inicio::class.java)
            startActivity(intent)
        }
    }
}