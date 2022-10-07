package mx.tec.prototipo

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.*
import mx.tec.prototipo.databinding.ActivityCreateBinding
import mx.tec.prototipo.databinding.ActivityMainBinding

class Create : AppCompatActivity() {

    private lateinit var binding: ActivityCreateBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityCreateBinding.inflate(layoutInflater)
        setContentView(binding.root)

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



        binding.btnCompletarCrear.setOnClickListener{
            Toast.makeText(this@Create, "Cuenta Creada", Toast.LENGTH_SHORT).show()
            val intent = Intent(this@Create,Inicio::class.java)
            startActivity(intent)
            //how to go back and not open diff slide
        }
        binding.btnCancelarCrear.setOnClickListener{
            Toast.makeText(this@Create, "Cancelado", Toast.LENGTH_SHORT).show()
            val intent = Intent(this@Create,Inicio::class.java)
            startActivity(intent)
        }
    }
}