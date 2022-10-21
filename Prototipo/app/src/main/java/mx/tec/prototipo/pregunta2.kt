package mx.tec.prototipo

import android.content.Context
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.*
import androidx.appcompat.app.AlertDialog
import androidx.core.view.isVisible
import androidx.fragment.app.Fragment
import java.lang.NumberFormatException

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
        enf_et_2 = view.findViewById(R.id.hip_et)
        enf_et_3 = view.findViewById(R.id.obe_et)
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
        var isPregnant : Boolean = false

        val sharedPreference = activity?.getSharedPreferences("ANSWERS", Context.MODE_PRIVATE)

        //val pregnancySP = activity?.getSharedPreferences("Pregnancy", Context.MODE_PRIVATE)

        enf_cb_1.setOnCheckedChangeListener { buttonView, isChecked ->
            enf_et_1.isEnabled = enf_cb_1.isChecked
            enf_et_1.isVisible = enf_cb_1.isChecked
        }
        enf_cb_2.setOnCheckedChangeListener { buttonView, isChecked ->
            enf_et_2.isEnabled = enf_cb_2.isChecked
            enf_et_2.isVisible = enf_cb_2.isChecked
        }
        enf_cb_3.setOnCheckedChangeListener { buttonView, isChecked ->
            enf_et_3.isEnabled = enf_cb_3.isChecked
            enf_et_3.isVisible = enf_cb_3.isChecked
        }
        enf_cb_4.setOnCheckedChangeListener { buttonView, isChecked ->
            enf_et_4.isEnabled = enf_cb_4.isChecked
            enf_et_4.isVisible = enf_cb_4.isChecked
            otra_enf.isEnabled = enf_cb_4.isChecked
            otra_enf.isVisible = enf_cb_4.isChecked
        }

        meses = view.findViewById(R.id.si_embarazo_cb_et)

        si_embarazados.setOnCheckedChangeListener { buttonView, isChecked ->
            meses.isEnabled = si_embarazados.isChecked
            meses.isVisible = si_embarazados.isChecked
        }

        var allcorrect : Boolean

        var congruentNumber : Int = 0


        btnSiguiente?.setOnClickListener {
            //pregnancy

            congruentNumber = 0
            allcorrect = true //control variable for checkbox edit texts
            meses = view.findViewById(R.id.si_embarazo_cb_et)

            if(si_embarazados.isChecked)
            {
                if(meses.text.toString() != "") {
                    with(sharedPreference?.edit()) {
                        this?.putString("answer3", meses.text.toString())
                        this?.commit()
                    }
                    pregunta2 = true
                    isPregnant = true
                }

                else{
                Toast.makeText(context, "Ingrese los meses de embarazo", Toast.LENGTH_SHORT).show()
                }
            }

            if(no_embarazados.isChecked){
                    with(sharedPreference?.edit()){
                        this?.putString("answer3", "13")
                        this?.commit()
                    }
                    pregunta2 = true
            }

            // cantidad de enfermedades
            // cantidad de familiares con una enfermedad

            if(enf_cb_1.isChecked)
            {
                diabetes = true
                if(enf_et_1.text.toString() == ""){
                    Toast.makeText(context,"Porfavor, complete todos los campos", Toast.LENGTH_SHORT).show()
                    allcorrect = false
                }
                else{
                    if(isNumericAndPositive(enf_et_1.text.toString())){
                        diabetesCantidad = enf_et_1.text.toString().toInt()
                        congruentNumber += diabetesCantidad
                    }
                    else{
                        Toast.makeText(context,"Cantidad inválida", Toast.LENGTH_SHORT).show()
                        allcorrect = false
                    }
                }
            }

            if(enf_cb_2.isChecked)
            {
                hipertension = true

                if(enf_et_2.text.toString() == ""){
                    Toast.makeText(context,"Porfavor, complete todos los campos", Toast.LENGTH_SHORT).show()
                    allcorrect = false
                }

                else{
                    if(isNumericAndPositive(enf_et_2.text.toString())) {
                        hipertensionCantidad = enf_et_2.text.toString().toInt()
                        congruentNumber += hipertensionCantidad
                    }
                    else{
                        Toast.makeText(context,"Cantidad inválida", Toast.LENGTH_SHORT).show()
                        allcorrect = false
                    }
                }
            }

            if(enf_cb_3.isChecked)
            {
                obesidad = true
                if(enf_et_3.text.toString() == ""){
                    Toast.makeText(context,"Porfavor, complete todos los campos", Toast.LENGTH_SHORT).show()
                    allcorrect = false
                }
                else{
                    if(isNumericAndPositive(enf_et_3.text.toString())) {
                        obesidadCantidad = enf_et_3.text.toString().toInt()
                        congruentNumber += obesidadCantidad
                    }
                    else{
                        Toast.makeText(context,"Cantidad inválida", Toast.LENGTH_SHORT).show()
                        allcorrect = false
                    }
                }
            }

            if(enf_cb_4.isChecked)
            {
                otra = true
                if(enf_et_4.text.toString() == "" || otra_enf.text.toString() == ""){
                    Toast.makeText(context,"Porfavor, complete todos los campos", Toast.LENGTH_SHORT).show()
                    allcorrect = false
                }
                else{
                    if(isNumericAndPositive(enf_et_4.text.toString())) {
                        otraCantidad = enf_et_4.text.toString().toInt()
                        congruentNumber += otraCantidad
                    }
                    else{
                        Toast.makeText(context,"Cantidad inválida", Toast.LENGTH_SHORT).show()
                        allcorrect = false
                    }
                }

            }

            //guardar enfermedades
            if (sharedPreference != null) {
                with(sharedPreference?.edit()) {
                    this?.putString("answer4_diabetes", diabetes.toString())
                    this?.putString("answer4_diabetesCantidad", diabetesCantidad.toString())

                    this?.putString("answer4_hipertension", hipertension.toString())
                    this?.putString("answer4_hipertensionCantidad", hipertensionCantidad.toString())

                    this?.putString("answer4_obesidad", obesidad.toString())
                    this?.putString("answer4_obesidadCantidad", obesidadCantidad.toString())

                    this?.putString("answer4_otra", otra.toString())
                    this?.putString(
                        "answer4_otra_nombre",
                        otra_enf.text.toString()
                    ) //nombre de la nueva enfermedad
                    this?.putString("answer4_otraCantidad", otraCantidad.toString())

                    this?.commit()
                }



                val answer1_integrantes = sharedPreference.getString("answer1", "#")?.toInt()

                Log.e("pregunta2: ", pregunta2.toString())
                Log.e("allcorrect: ", allcorrect.toString())
                Log.e("c <= a: ", (congruentNumber <= answer1_integrantes!!).toString())
                Log.e("congruentNumber: ", congruentNumber.toString())
                Log.e("answer1_integrantes: ", answer1_integrantes.toString())

                //comprobar que los meses de pregnancy sean >0 y menores a 12

                if(pregunta2 && isPregnant){

                    if((meses.text.toString().toInt() < 0) || (meses.text.toString().toInt() > 12)){
                        var builder = AlertDialog.Builder(view.context)

                        builder.setTitle("Advertencia")
                            .setMessage("Los meses de embarazo deben encontrarse entre el rango 0-12")
                            .setNegativeButton("Cerrar",{dialog, button -> dialog.dismiss()})
                            .show()
                        pregunta2 = false
                    }
                }

                if (pregunta2 && allcorrect && congruentNumber <= answer1_integrantes!!){

                    //request
                    next = (curr.toString().toInt() + 1).toString()
                    with(currentFragment?.edit()) {
                        this?.putString("currentFragment", next)
                        this?.commit()
                    }
                    //go to the next fragment
                    Log.e("next: ", next)

                    Log.e("congruentNumber", congruentNumber.toString())
                    Log.e("answer1_integrantes", answer1_integrantes.toString())

                    (activity as EncuestaContainer?)!!.buttonPressed(next)

                }
                else {
                    if(congruentNumber > answer1_integrantes){
                        //Toast.makeText(context, "El número total de personas con enfermedades debe coincidir con el número de inegrantes", Toast.LENGTH_SHORT).show()

                        var builder = AlertDialog.Builder(view.context)

                        builder.setTitle("Advertencia")
                            .setMessage("El número total de personas con enfermedades debe coincidir con el número de integrantes")
                            .setNegativeButton("Cerrar",{dialog, button -> dialog.dismiss()})
                            .show()

                    }
                }

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

    private fun isNumericAndPositive(s: String): Boolean{
        return try {
            s.toDouble()>0
            true
        }
        catch (e: NumberFormatException){
            false
        }
    }
}

