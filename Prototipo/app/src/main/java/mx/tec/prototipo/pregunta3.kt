package mx.tec.prototipo

import android.content.Context
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import android.widget.RadioButton
import android.widget.Toast
import androidx.core.view.isVisible
import androidx.fragment.app.Fragment

class pregunta3 : Fragment() {

    lateinit var si_suplemento_cb : RadioButton
    lateinit var no_suplemento_cb : RadioButton

    lateinit var si_suplemento_text : EditText


    lateinit var si_lactancia_cb : RadioButton
    lateinit var no_lactancia_cb : RadioButton

    lateinit var una_a_dos_comidas_cb : RadioButton
    lateinit var tres_o_mas_comidas_cb : RadioButton


    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = layoutInflater.inflate(R.layout.activity_encuesta_3, container, false)

        val currentFragment = context?.getSharedPreferences("currentFragment", Context.MODE_PRIVATE)
        var curr = currentFragment?.getString("currentFragment", "#")
        var next = ""

        val sharedPreference = activity?.getSharedPreferences("ANSWERS", Context.MODE_PRIVATE)
        val btnSiguiente = activity?.findViewById<Button>(R.id.btnSiguiente)
        val btnRegresar = activity?.findViewById<Button>(R.id.btnRegresar)

        si_suplemento_text = view.findViewById(R.id.si_suplemento_cb_et)
        si_suplemento_cb = view.findViewById(R.id.si_suplemento_cb)
        no_suplemento_cb = view.findViewById(R.id.no_suplemento_cb)

        si_lactancia_cb = view.findViewById(R.id.si_lactancia_cb)
        no_lactancia_cb = view.findViewById(R.id.no_lactancia_cb)

        una_a_dos_comidas_cb = view.findViewById(R.id.opcion1_comidas)
        tres_o_mas_comidas_cb = view.findViewById(R.id.opcion2_comidas)


        si_suplemento_cb.setOnCheckedChangeListener { buttonView, isChecked ->
            si_suplemento_text.isEnabled = si_suplemento_cb.isChecked
            si_suplemento_text.isVisible = si_suplemento_cb.isChecked
        }


        var pregunta1 : Boolean = false
        var pregunta2 : Boolean = false
        var pregunta3 : Boolean = false


        btnSiguiente?.setOnClickListener {
            pregunta1 = false
            pregunta2 = false
            pregunta3 = false

            //FIRST QUESTION
            if(si_suplemento_cb.isChecked){ //

                if(si_suplemento_text.text.toString() != ""){
                    with(sharedPreference?.edit()) {
                        this?.putString("answer5", "Sí")
                        this?.putString("answer5_suplemento", si_suplemento_text.text.toString())
                        this?.commit()
                    }
                    pregunta1 = true
                }
                else{
                    Toast.makeText(context, "Especifique el suplemento", Toast.LENGTH_SHORT).show()
                }
            }

            if(no_suplemento_cb.isChecked){
                with(sharedPreference?.edit()) {
                    this?.putString("answer5", "No")
                    this?.putString("answer5_suplemento", "")
                    this?.commit()
                }
                pregunta1 = true
            }

            //SECOND QUESTION
            if (si_lactancia_cb.isChecked){
                with(sharedPreference?.edit()) {
                    this?.putString("answer6", "Sí")
                    this?.commit()
                }
                pregunta2 = true
            }

            if(no_lactancia_cb.isChecked){
                with(sharedPreference?.edit()) {
                    this?.putString("answer6", "No")
                    this?.commit()
                }
                pregunta2 = true
            }

            //THIRD QUESTION

            if(una_a_dos_comidas_cb.isChecked){
                with(sharedPreference?.edit()) {
                    this?.putString("answer7", "De 1 a 2 comidas")
                    this?.commit()
                }
                pregunta3 = true
            }

            if(tres_o_mas_comidas_cb.isChecked){
                with(sharedPreference?.edit()) {
                    this?.putString("answer7", "De 3 a más comidas")
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
            else{
                Toast.makeText(context, "Porfavor, complete todos los campos", Toast.LENGTH_SHORT).show()
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