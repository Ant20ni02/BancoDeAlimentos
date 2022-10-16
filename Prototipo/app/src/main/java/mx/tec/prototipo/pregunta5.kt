package mx.tec.prototipo

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.*
import androidx.core.view.isVisible
import androidx.fragment.app.Fragment
import org.json.JSONObject
import org.w3c.dom.Text

class pregunta5 : Fragment() {
    lateinit var leche_cantidad: EditText
    lateinit var leche_diario : RadioButton
    lateinit var leche_dos_veces : RadioButton
    lateinit var leche_casi_nunca : RadioButton
    lateinit var leche_nunca : RadioButton


    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = layoutInflater.inflate(R.layout.activity_encuesta_5, container, false)
        val imageView4 = activity?.findViewById<ImageView>(R.id.imageView4)
        val sharedPreference = activity?.getSharedPreferences("ANSWERS", Context.MODE_PRIVATE)


        var RadioButtonFrequency: Array<String> = arrayOf("a","b","c","d")
        var tipoDeAlimento: Map<String, String> = mapOf("Leche" to "a", "Pollo" to "c", "Atún" to "c", "Carne de res" to "b", "Carne de cerdo" to "b", "Huevo" to "c", "Arroz" to "b", "Tortilla" to "c", "Verduras" to "b", "Verduras_enlatadas" to "c", "Frutas" to "b", "Frutas_enlatadas" to "c", "Frijol" to "b", "Nuez" to "b", "Refresco" to "a")
        var quantityEdits : Array<String>  = arrayOf("leche", "pollo", "atun", "carneRes", "carneCerdo", "huevo", "arroz", "tortilla", "verduras", "verduras_enlatadas", "frutas", "frutas_enlatadas", "frijol", "nuez", "refresco")
        var viewTextsPositions : Array<String> = arrayOf("Leche", "Pollo", "Atún", "Carne de res", "Carne de cerdo", "Huevo", "Arroz", "Tortilla", "Verduras", "Verduras_enlatadas", "Frutas", "Frutas_enlatadas", "Frijol", "Nuez", "Refresco")
        var quantityET : Array<EditText>? = arrayOf(view.findViewById(R.id.leche_cantidad), view.findViewById(R.id.pollo_cantidad), view.findViewById(R.id.atun_cantidad), view.findViewById(R.id.carneRes_cantidad), view.findViewById(R.id.carneCerdo_cantidad), view.findViewById(R.id.huevo_cantidad), view.findViewById(R.id.arroz_cantidad), view.findViewById(R.id.tortilla_cantidad),view.findViewById(R.id.verduras_cantidad), view.findViewById(R.id.verduras_enlatadas_cantidad), view.findViewById(R.id.frutas_cantidad), view.findViewById(R.id.frutas_enlatadas_cantidad), view.findViewById(R.id.frijol_cantidad), view.findViewById(R.id.nuez_cantidad), view.findViewById(R.id.refresco_cantidad))
        var radioGroups : Array<RadioGroup>? = arrayOf(view.findViewById(R.id.leche_radiogroup), view.findViewById(R.id.pollo_radiogroup), view.findViewById(R.id.atun_radiogroup), view.findViewById(R.id.carne_de_res_radiogroup), view.findViewById(R.id.carne_de_cerdo_radiogroup), view.findViewById(R.id.huevo_radiogroup), view.findViewById(R.id.arroz_radiogroup), view.findViewById(R.id.tortilla_radiogroup), view.findViewById(R.id.verduras_radiogroup), view.findViewById(R.id.verduras_enlatadas_radiogroup), view.findViewById(R.id.frutas_enteras_radiogroup), view.findViewById(R.id.frutas_enlatadas_radiogroup), view.findViewById(R.id.frijol_radiogroup), view.findViewById(R.id.nuez_radiogroup), view.findViewById(R.id.refresco_radiogroup))
        //var xd : Array<EditText> = arrayOf(view.findViewById(R.id.leche_cantidad))

        //build json array
        val pregunta1 = JSONObject()
        val pregunta2 = JSONObject()
        val pregunta5 = JSONObject()
        val pregunta6 = JSONObject()
        val pregunta7 = JSONObject()
        val pregunta8 = JSONObject()
        val pregunta9 = JSONObject()
        val pregunta10 = JSONObject()
        val pregunta11 = JSONObject()

        pregunta1.put("answer1", sharedPreference?.getString("answer1","#"))
        pregunta2.put("answer2")







        val btnSiguiente = activity?.findViewById<Button>(R.id.btnSiguiente)
        val btnRegresar = activity?.findViewById<Button>(R.id.btnRegresar)

        val currentFragment = context?.getSharedPreferences("currentFragment", Context.MODE_PRIVATE)
        var curr = currentFragment?.getString("currentFragment", "#")

        var builtStrings : Array<String>
        var currentFrequencyId : String
        var currentQuantity : String
        var currentString : String
        var currentQuestion : String
        var currentType : String
        var allCantidadesFilled : Boolean = true
        var allFrequencysSelected : Boolean = true

        btnSiguiente?.setOnClickListener {
            currentQuantity = ""
            currentFrequencyId = ""
            currentQuestion = ""
            currentType = ""
            /*
            val intent = Intent(context,letreroFinal::class.java)
            startActivity(intent)
            */

            //retrieve tables data
            var RadioSelectedButton : RadioButton
            for (x in 0..14){
                currentQuantity = quantityET?.get(x)?.text.toString()
                currentQuestion = ""
                currentType = tipoDeAlimento.get(viewTextsPositions[x]).toString()
                var selectedRadioButtonId : Int? = radioGroups?.get(x)?.checkedRadioButtonId
                var radioButton = selectedRadioButtonId?.let { it1 ->
                    radioGroups?.get(x)?.findViewById<RadioButton>(
                        it1
                    )
                }
                var index = radioGroups?.get(x)?.indexOfChild(radioButton)

                if(index != -1){
                    if(index == 0){
                        currentFrequencyId = RadioButtonFrequency[0]
                    }
                    if(index == 1){
                        currentFrequencyId = RadioButtonFrequency[1]
                    }
                    if(index == 2){
                        currentFrequencyId = RadioButtonFrequency[2]
                    }
                    if(index == 3){
                        currentFrequencyId = RadioButtonFrequency[3]
                    }
                    allFrequencysSelected = true
                }
                else{
                    allFrequencysSelected = false
                }

                if(x<9)
                    currentQuestion = "0" + (x+1).toString()
                else{
                    currentQuestion = (x+1).toString()
                }

                if(allCantidadesFilled && allFrequencysSelected){
                    currentString = currentType + "_" + currentQuestion + "_" + currentFrequencyId + "_" + currentQuantity
                    Log.e("currentString", currentString)
                    continue
                }else{
                    Toast.makeText(context, "Porfavor, ingrese todos los campos", Toast.LENGTH_SHORT).show()
                    break
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

}