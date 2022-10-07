package mx.tec.prototipo

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val Password = findViewById<EditText>(R.id.txtPassword)
        val Username = findViewById<EditText>(R.id.txtUsername_Voluntario)

        val btnLogin = findViewById<Button>(R.id.btnLogin)
        val btnCancel = findViewById<Button>(R.id.btnCancel)

        //Si Tiene Cuenta the Voluntario o Familia
        btnLogin.setOnClickListener{
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
        //Button Cancel
        btnCancel.setOnClickListener{
            val intent = Intent(this@MainActivity,Inicio::class.java)
            startActivity(intent)
        }
    }
}