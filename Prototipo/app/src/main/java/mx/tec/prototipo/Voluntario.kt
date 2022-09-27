package mx.tec.prototipo

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import android.widget.Toast

class Voluntario : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_voluntario)

        val Username = intent.getStringExtra("User")
        val txtUsername = findViewById<TextView>(R.id.txtUsername_Voluntario)
        txtUsername.text = "$Username"

        val btnEncuesta = findViewById<Button>(R.id.btnEncuesta_Voluntario)
        val btnCerrarSesion = findViewById<Button>(R.id.btnCerrarSesion_Voluntario)

        btnEncuesta.setOnClickListener{
            val intent = Intent(this@Voluntario,Encuesta::class.java)
            startActivity(intent)
        }
        btnCerrarSesion.setOnClickListener{
            Toast.makeText(this@Voluntario, "Sesion Cerrada", Toast.LENGTH_SHORT).show()
            System.exit(0)
        }
    }
}