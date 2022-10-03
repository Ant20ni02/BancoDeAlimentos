package mx.tec.prototipo

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast

class Create : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_create)
        val txtUsername = findViewById<EditText>(R.id.txtNombreSU)
        val txtEmail = findViewById<EditText>(R.id.txtApellidosSU)
        val txtPassword = findViewById<EditText>(R.id.txtEdadSU)

        val btnCancelar = findViewById<Button>(R.id.btnRegresar)
        val btnCrear = findViewById<Button>(R.id.btnRegistrarse)

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