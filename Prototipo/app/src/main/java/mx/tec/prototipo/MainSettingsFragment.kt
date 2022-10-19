package mx.tec.prototipo

import android.content.Context
import android.content.Intent
import android.content.SharedPreferences
import android.os.Bundle
import android.preference.PreferenceManager
import android.text.method.TextKeyListener.clear
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import androidx.fragment.app.Fragment
import java.util.zip.Inflater

class MainSettingsFragment : Fragment() {
    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = layoutInflater.inflate(R.layout.cerrar_sesion_fragment,container, false)
        val cambiar_foto = view.findViewById<Button>(R.id.cambiar_foto_btn)
        val cerrar_sesion = view.findViewById<Button>(R.id.cerrar_sesion_btn)

        cambiar_foto.setOnClickListener {



        }

        cerrar_sesion.setOnClickListener {
            val profile = context?.getSharedPreferences("profile",Context.MODE_PRIVATE)
            val answers = context?.getSharedPreferences("ANSWERS", Context.MODE_PRIVATE)
            val currentFragment = context?.getSharedPreferences("currentFragment", Context.MODE_PRIVATE)

            val prEdit = profile?.edit()
            prEdit?.clear()
            prEdit?.apply()

            val ansEd = answers?.edit()
            ansEd?.clear()
            ansEd?.apply()

            val currEd = currentFragment?.edit()
            currEd?.clear()
            currEd?.apply()

            val intent = Intent(context,Inicio::class.java)
            startActivity(intent)
        }


        return view
    }

}