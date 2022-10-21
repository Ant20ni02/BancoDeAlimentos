package mx.tec.prototipo

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.os.PersistableBundle
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity

class AvisoPrivacidad: AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_aviso_de_privacidad)

        //val phantom = endpoint().stillToken()

        /*if(phantom == "Token inválido"){

            val profile = getSharedPreferences("profile", Context.MODE_PRIVATE)
            val answers = getSharedPreferences("ANSWERS", Context.MODE_PRIVATE)
            val currentFragment = getSharedPreferences("currentFragment", Context.MODE_PRIVATE)

            val prEdit = profile?.edit()
            prEdit?.clear()
            prEdit?.apply()

            val ansEd = answers?.edit()
            ansEd?.clear()
            ansEd?.apply()

            val currEd = currentFragment?.edit()
            currEd?.clear()
            currEd?.apply()

            val intent = Intent(this@AvisoPrivacidad, Inicio::class.java)
            startActivity(intent)

        }*/

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