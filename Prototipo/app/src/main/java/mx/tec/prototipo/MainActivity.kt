package mx.tec.prototipo

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import com.android.volley.AuthFailureError
import com.android.volley.Request
import com.android.volley.Response
import com.android.volley.toolbox.StringRequest
import com.android.volley.toolbox.Volley
import org.json.JSONObject

class MainActivity : AppCompatActivity() {

    val usernameTv =findViewById<TextView>(R.id.txtUsername_Voluntario)
    val passwordTv = findViewById<TextView>(R.id.txtPassword)

    override fun getBody(): ByteArray {
        val params2 = HashMap<String, String>()
        params2.put("email", usernameTv.text.toString())
        params2.put("password_", passwordTv.text.toString())

        return JSONObject(params2).toString().toByteArray()
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val Password = findViewById<EditText>(R.id.txtPassword)
        val Username = findViewById<EditText>(R.id.txtUsername_Voluntario)

        val btnLogin = findViewById<Button>(R.id.btnLogin)
        val btnCancel = findViewById<Button>(R.id.btnCancel)
        val btnCreate = findViewById<Button>(R.id.btnCreate)

        //Si Tiene Cuenta the Voluntario o Familia
        btnLogin.setOnClickListener{

        val loginUrl = "http://localhost:4000/login"






            //Si es cuenta de Voluntario o Familia
            if(Username.text.toString() == "User" && Password.text.toString() == "User1234"
                || Username.text.toString() == "Family" && Password.text.toString() == "Family1234"){
                Toast.makeText(this@MainActivity, Username.text, Toast.LENGTH_SHORT).show()
                val intent = Intent(this@MainActivity,Voluntario::class.java)
                intent.putExtra("User", Username.text.toString())
                startActivity(intent)
            }
            //Si es cuenta de Admin
            else if(Username.text.toString() == "Admin" && Password.text.toString() == "Admin1234"){
                Toast.makeText(this@MainActivity, Username.text, Toast.LENGTH_SHORT).show()
                val intent = Intent(this@MainActivity,Admin::class.java)
                intent.putExtra("User", Username.text.toString())
                startActivity(intent)
            }
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

    fun sendcall(url:String){
        //RequestQueue initialized
        var mRequestQueue = Volley.newRequestQueue(this)

        //String Request initialized
        var mStringRequest = object : StringRequest(Request.Method.POST, url, Response.Listener { response ->
            Toast.makeText(applicationContext, "Logged In Successfully", Toast.LENGTH_SHORT).show()


        }, Response.ErrorListener { error ->
            Log.i("This is the error", "Error :" + error.toString())
            Toast.makeText(applicationContext, "Please make sure you enter correct password and username", Toast.LENGTH_SHORT).show()
        }) {
            override fun getBodyContentType(): String {
                return "application/json"
            }

            @Throws(AuthFailureError::class)
            override fun getBody(): ByteArray {
                val params2 = HashMap<String, String>()
                params2.put("Login","your credentials" )
                params2.put("Password", "your credentials")
                return JSONObject(params2).toString().toByteArray()
            }

        }
        mRequestQueue!!.add(mStringRequest!!)


    }



}