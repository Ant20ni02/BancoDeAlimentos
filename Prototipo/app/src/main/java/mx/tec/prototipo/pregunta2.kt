package mx.tec.prototipo

import android.content.Context
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.*
import androidx.fragment.app.Fragment

class pregunta2 : Fragment(){

    lateinit var enf_cb_1 : CheckBox
    lateinit var enf_cb_2 : CheckBox
    lateinit var enf_cb_3 : CheckBox
    lateinit var enf_cb_4 : CheckBox

    lateinit var enf_et_1 : EditText
    lateinit var enf_et_2 : EditText
    lateinit var enf_et_3 : EditText
    lateinit var enf_et_4 : EditText
    lateinit var otra_enf : EditText


    lateinit var no_embarazados : RadioButton
    lateinit var si_embarazados : RadioButton

    lateinit var meses : EditText


    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = layoutInflater.inflate(R.layout.activity_encuesta_2,container, false)

        val btnSiguiente = activity?.findViewById<Button>(R.id.btnSiguiente)
        val btnRegresar = activity?.findViewById<Button>(R.id.btnRegresar)

        val currentFragment = context?.getSharedPreferences("currentFragment", Context.MODE_PRIVATE)
        var curr = currentFragment?.getString("currentFragment", "#")


        enf_cb_1 = view.findViewById(R.id.diabetes_cb)
        enf_cb_2 = view.findViewById(R.id.hip_cb)
        enf_cb_3 = view.findViewById(R.id.obe_cb)
        enf_cb_4 = view.findViewById(R.id.otra_cb)

        enf_et_1 = view.findViewById(R.id.diabetes_et)
        enf_et_2 = view.findViewById(R.id.obe_et)
        enf_et_3 = view.findViewById(R.id.hip_et)
        enf_et_4 = view.findViewById(R.id.otra_et)

        otra_enf = view.findViewById(R.id.otra_et2)

        no_embarazados = view.findViewById(R.id.no_embarazo_cb)
        si_embarazados = view.findViewById(R.id.si_embarazo_cb)

        var next = ""

        var diabetes = false
        var diabetesCantidad = 0

        var hipertension = false
        var hipertensionCantidad = 0

        var obesidad = false
        var obesidadCantidad = 0

        var otra = false
        var otraCantidad = 0

        var pregunta2 : Boolean = false

        val sharedPreference = activity?.getSharedPreferences("Enfermedades", Context.MODE_PRIVATE)

        val pregnancySP = activity?.getSharedPreferences("Pregnancy", Context.MODE_PRIVATE)


        btnSiguiente?.setOnClickListener {
            //pregnancy

            meses = view.findViewById(R.id.si_embarazo_cb_et)

            if(si_embarazados.isChecked)
            {
                with(pregnancySP?.edit()){
                    this?.putString("months", meses.text.toString())
                    this?.commit()
                }
                pregunta2 = true
            }

            if(no_embarazados.isChecked){
                with(pregnancySP?.edit()){
                    this?.putString("months", "13")
                    this?.commit()
                }
                pregunta2 = true
            }

            // cantidad de enfermedades
            // cantidad de familiares con una enfermedad

            if(enf_cb_1.isChecked)
            {
                diabetes = true
                diabetesCantidad = enf_et_1.text.toString().toInt()
            }

            if(enf_cb_2.isChecked)
            {
                hipertension = true
                hipertensionCantidad = enf_et_2.text.toString().toInt()
            }

            if(enf_cb_3.isChecked)
            {
                obesidad = true
                obesidadCantidad = enf_et_3.text.toString().toInt()
            }

            if(enf_cb_1.isChecked)
            {
                otra = true
                otraCantidad = enf_et_4.text.toString().toInt()
            }

            //guardar enfermedades
            if (sharedPreference != null) {
                with(sharedPreference?.edit()){
                    this?.putString("diabetes", diabetes.toString())
                    this?.putString("diabetesCantidad", diabetesCantidad.toString())

                    this?.putString("hipertension", hipertension.toString())
                    this?.putString("hipertensionCantidad", hipertensionCantidad.toString())

                    this?.putString("obesidad", obesidad.toString())
                    this?.putString("obesidadCantidad", obesidadCantidad.toString())

                    this?.putString("otra", otra.toString())
                    this?.putString("otra_nombre", otra_enf.text.toString()) //nombre de la nueva enfermedad
                    this?.putString("otraCantidad", otraCantidad.toString())

                    this?.commit()
                }

                //request
                next = (curr.toString().toInt() + 1).toString()

                //go to the next fragment
                Log.e("next: ", next)

                if(pregunta2)
                    (activity as EncuestaContainer?)!!.buttonPressed(next)
                else{
                    Toast.makeText(context, "Porfavor, complete todos los campos", Toast.LENGTH_SHORT).show()
                }

            }



        }
        btnRegresar?.setOnClickListener {
            curr = (curr.toString().toInt() - 1).toString() //gets back to 0

            if (curr != null) {
                (activity as EncuestaContainer?)!!.buttonPressed(curr!!)
            }
        }


        return view
    }
}