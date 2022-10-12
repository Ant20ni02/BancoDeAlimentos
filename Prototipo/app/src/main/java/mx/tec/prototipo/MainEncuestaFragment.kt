package mx.tec.prototipo

import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import androidx.fragment.app.Fragment

class MainEncuestaFragment:Fragment() {
    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = layoutInflater.inflate(R.layout.activity_realizar_encuesta_fragment,container, false)

        val goToSurvey = view.findViewById<Button>(R.id.btn_realizar)

        goToSurvey.setOnClickListener {
            val intent = Intent(context,AvisoPrivacidad::class.java)
            startActivity(intent)

        }


        return view;
    }
}