package mx.tec.prototipo

import android.content.Intent
import android.net.Uri
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.MediaController
import android.widget.VideoView
import androidx.viewpager.widget.ViewPager
import androidx.viewpager2.widget.ViewPager2

class Inicio : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_inicio)

        val videoView = findViewById<VideoView>(R.id.Inicio_Vid)
        val mediaController = MediaController(this)
        mediaController.setAnchorView(videoView)

        val offlineUri = Uri.parse("android.resource://$packageName/${R.raw.bancovid}")

        videoView.setMediaController(mediaController)
        videoView.setVideoURI(offlineUri)
        videoView.requestFocus()
        videoView.start()

        val btnLogin = findViewById<Button>(R.id.btn_Inicio_Login)
        val btnCreate = findViewById<Button>(R.id.btn_Inicio_Crear_Cuenta)
        val btnSalir = findViewById<Button>(R.id.btn_Inicio_Salir)

        btnCreate.setOnClickListener{
            val intent = Intent(this@Inicio,Create::class.java)
            startActivity(intent)
        }
        btnLogin.setOnClickListener{
            val intent = Intent(this@Inicio,MainActivity::class.java)
            startActivity(intent)
        }
        btnSalir.setOnClickListener{
            System.exit(0)
        }

        //val Banco_View_Pager = findViewById<ViewPager2>(R.id.Banco_View_Pager)
        //val adapter = Image_Adapter(this)
        //Banco_View_Pager.adapter = adapter

    }
}