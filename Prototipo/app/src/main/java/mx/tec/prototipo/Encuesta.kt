package mx.tec.prototipo

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast

class Encuesta : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_encuesta)

        val txtMiembros = findViewById<EditText>(R.id.txtMiembros)
        val txtGenero = findViewById<EditText>(R.id.txtGenero)
        val txtEdad = findViewById<EditText>(R.id.txtEdad)
        val txtProfecion = findViewById<EditText>(R.id.txtProfecion)
        val txtEnfermedad = findViewById<EditText>(R.id.txtEnfermedad)

        val btnCancelar = findViewById<Button>(R.id.btnCancelar_Encuesta)
        val btnCompletar = findViewById<Button>(R.id.btnCompletar_Encuesta)

        btnCompletar.setOnClickListener{
            Toast.makeText(this@Encuesta, "Encuesta Completada", Toast.LENGTH_SHORT).show()
            System.exit(0)
        }
        btnCancelar.setOnClickListener{
            Toast.makeText(this@Encuesta, "Cancelado", Toast.LENGTH_SHORT).show()
            System.exit(0)
        }
    }
}