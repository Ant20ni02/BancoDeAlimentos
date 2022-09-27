package mx.tec.prototipo

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import android.widget.Toast

class Admin : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_admin)

        val btnEncuesta = findViewById<Button>(R.id.btnEncuestas_Admin)
        val btnCerrarSesion = findViewById<Button>(R.id.btnCerrarSesion_Admin)

        val Username = intent.getStringExtra("User")
        val txtUsername = findViewById<TextView>(R.id.txtUsername_Admin)
        txtUsername.text = "$Username"

        btnEncuesta.setOnClickListener{
            val intent = Intent(this@Admin,Encuesta_RES::class.java)
            startActivity(intent)
        }
        btnCerrarSesion.setOnClickListener{
            Toast.makeText(this@Admin, "Sesion Cerrada", Toast.LENGTH_SHORT).show()
            System.exit(0)
        }
    }
}