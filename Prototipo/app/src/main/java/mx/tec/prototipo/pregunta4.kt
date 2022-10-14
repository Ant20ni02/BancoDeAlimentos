package mx.tec.prototipo

import android.content.Context
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.RadioButton
import androidx.fragment.app.Fragment

class pregunta4 : Fragment() {

    lateinit var si_sal_cb : RadioButton
    lateinit var no_sal_cb : RadioButton

    lateinit var ingreso1_cb : RadioButton
    lateinit var ingreso2_cb : RadioButton

    lateinit var porcentaje1_cb : RadioButton
    lateinit var porcentaje2_cb : RadioButton
    lateinit var porcentaje3_cb : RadioButton

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = layoutInflater.inflate(R.layout.activity_encuesta_4, container, false)

        val currentFragment = context?.getSharedPreferences("currentFragment", Context.MODE_PRIVATE)
        var curr = currentFragment?.getString("currentFragment", "#")
        var next = ""

        val sharedPreference = activity?.getSharedPreferences("ANSWERS", Context.MODE_PRIVATE)
        val btnSiguiente = activity?.findViewById<Button>(R.id.btnSiguiente)
        val btnRegresar = activity?.findViewById<Button>(R.id.btnRegresar)

        si_sal_cb = view.findViewById(R.id.si_sal_cb)
        no_sal_cb = view.findViewById(R.id.no_sal_cb)

        ingreso1_cb = view.findViewById(R.id.ingreso1_cb)
        ingreso2_cb = view.findViewById(R.id.ingreso2_cb)

        porcentaje1_cb = view.findViewById(R.id.porcentaje1_rb)
        porcentaje2_cb = view.findViewById(R.id.porcentaje2_rb)
        porcentaje3_cb = view.findViewById(R.id.porcentaje3_rb)

        var pregunta1 : Boolean = false
        var pregunta2 : Boolean = false
        var pregunta3 : Boolean = false

        btnSiguiente?.setOnClickListener {
            pregunta1 = false
            pregunta2 = false
            pregunta3 = false

            //QUESTION 1
            if(si_sal_cb.isChecked){
                with(sharedPreference?.edit()) {
                    this?.putString("answer8", "Sí")
                    this?.commit()
                }
                pregunta1 = true
            }

            if(no_sal_cb.isChecked){
                with(sharedPreference?.edit()) {
                    this?.putString("answer8", "No")
                    this?.commit()
                }
                pregunta1 = true
            }

            //QUESTION 2
            if(ingreso1_cb.isChecked){
                with(sharedPreference?.edit()) {
                    this?.putString("answer9", ingreso1_cb.text.toString()) //menos de 5255
                    this?.commit()
                }
                pregunta2 = true
            }

            if(ingreso2_cb.isChecked){
                with(sharedPreference?.edit()) {
                    this?.putString("answer9", ingreso2_cb.text.toString()) //mas de 5255
                    this?.commit()
                }
                pregunta2 = true
            }

            //QUESTION 3

            if(porcentaje1_cb.isChecked){
                with(sharedPreference?.edit()) {
                    this?.putString("answer10", porcentaje1_cb.text.toString())
                    this?.commit()
                }
                pregunta3 = true
            }

            if(porcentaje2_cb.isChecked){
                with(sharedPreference?.edit()) {
                    this?.putString("answer10", porcentaje2_cb.text.toString())
                    this?.commit()
                }
                pregunta3 = true
            }

            if(porcentaje3_cb.isChecked){
                with(sharedPreference?.edit()) {
                    this?.putString("answer10", porcentaje3_cb.text.toString())
                    this?.commit()
                }
                pregunta3 = true
            }



            if(pregunta1 && pregunta2 && pregunta3){

                next = (curr.toString().toInt() + 1).toString()

                with(currentFragment?.edit()){
                    this?.putString("currentFragment",next)
                    this?.commit()
                }

                //go to the next fragment
                Log.e("next: ", next)
                (activity as EncuestaContainer?)!!.buttonPressed(next)
            }


        }

        btnRegresar?.setOnClickListener {
            curr = (curr.toString().toInt() - 1).toString() //gets back to 0

            with(currentFragment?.edit()){
                this?.putString("currentFragment",curr)
                this?.commit()
            }
            if (curr != null) {
                (activity as EncuestaContainer?)!!.buttonPressed(curr!!)
            }
        }




        return view
    }
}