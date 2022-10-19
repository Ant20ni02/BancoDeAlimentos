package mx.tec.prototipo

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.MediaController
import android.widget.VideoView
import androidx.annotation.RawRes
import androidx.fragment.app.Fragment

class MainEncuestaFragment:Fragment() {
    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = layoutInflater.inflate(R.layout.activity_realizar_encuesta_fragment,container, false)

        //// video ////
        val videoView = view.findViewById<VideoView>(R.id.fragment_video)
        val mediaController = MediaController(context)
        mediaController.setAnchorView(videoView)

        val currPackage = context?.packageName
        val offlineUri = Uri.parse("android.resource://" + currPackage.toString() + "/" + R.raw.bancovid)
        //val offlineUri = RawResourceDataSource

        videoView.setMediaController(mediaController)
        videoView.setVideoURI(offlineUri)
        videoView.requestFocus()
        videoView.start()







        val goToSurvey = view.findViewById<Button>(R.id.btn_realizar)

        goToSurvey.setOnClickListener {
            val intent = Intent(context,AvisoPrivacidad::class.java)
            startActivity(intent)

        }


        return view;
    }
}