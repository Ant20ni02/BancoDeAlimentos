package mx.tec.prototipo

import android.content.Intent
import android.os.Bundle
import android.os.PersistableBundle
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity

class AvisoPrivacidad: AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_aviso_de_privacidad)

        val btnRealizar = findViewById<Button>(R.id.btn_aviso_realizar)
        val btnRegresar = findViewById<Button>(R.id.btn_aviso_regresar)

        btnRealizar.setOnClickListener {
            val intent = Intent(this@AvisoPrivacidad, EncuestaContainer::class.java)
            startActivity(intent)
        }
        btnRegresar.setOnClickListener {
            val intent = Intent(this@AvisoPrivacidad, BottomNavigation::class.java)
            startActivity(intent)
        }

        //       startActivity(intent)


    }
}