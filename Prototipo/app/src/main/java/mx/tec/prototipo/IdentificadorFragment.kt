package mx.tec.prototipo

import android.app.PendingIntent.getActivity
import android.content.Context
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import androidx.fragment.app.Fragment
import com.google.android.material.internal.ContextUtils
import com.google.android.material.internal.ContextUtils.getActivity

class IdentificadorFragment : Fragment(){
    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        val view: View = layoutInflater.inflate(R.layout.activity_identificador_fragment,container, false)
        //val view2: View = layoutInflater.inflate(R.layout.activity_main_encuesta,container, false)

        val host = EncuestaContainer()
        //val btnSiguiente = view.findViewById<Button>(R.id.btnSiguiente)
        val btnSiguiente = activity?.findViewById<Button>(R.id.btnSiguiente)
        val btnRegresar = activity?.findViewById<Button>(R.id.btnRegresar)

            btnSiguiente?.setOnClickListener{ view ->

            val sharedPreference = context?.getSharedPreferences("currentFragment", Context.MODE_PRIVATE)

            if (sharedPreference != null) {
                with(sharedPreference.edit()){
                    putString("currentFragment","1")
                    commit()
                }
                //request
            }

            val curr = sharedPreference?.getString("currentFragment","#")

                //validate if user exists (REQUEST)

                //Encuesta Container find in Map method
                if (curr != null) {
                    (activity as EncuestaContainer?)!!.buttonPressed(curr)
                }

            Log.e("curr2", curr.toString())
        }
        return view;
    }
}