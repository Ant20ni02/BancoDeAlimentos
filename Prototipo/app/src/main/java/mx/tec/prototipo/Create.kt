package mx.tec.prototipo

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast

class Create : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_create)
        val txtUsername = findViewById<EditText>(R.id.txt_Username_Create)
        val txtEmail = findViewById<EditText>(R.id.txt_Email_Create)
        val txtPassword = findViewById<EditText>(R.id.txt_Password_Create)

        val btnCancelar = findViewById<Button>(R.id.btnCancelar_Crear)
        val btnCrear = findViewById<Button>(R.id.btnCompletar_Crear)

        btnCrear.setOnClickListener{
            Toast.makeText(this@Create, "Cuenta Creada", Toast.LENGTH_SHORT).show()
            System.exit(0)
            //how to go back and not open diff slide
        }
        btnCancelar.setOnClickListener{
            Toast.makeText(this@Create, "Cancelado", Toast.LENGTH_SHORT).show()
            System.exit(0)
        }
    }
}