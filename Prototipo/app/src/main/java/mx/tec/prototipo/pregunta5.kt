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
import com.android.volley.AuthFailureError
import com.android.volley.RequestQueue
import com.android.volley.Response
import com.android.volley.toolbox.JsonObjectRequest
import com.android.volley.toolbox.Volley
import org.json.JSONArray
import org.json.JSONObject
import org.w3c.dom.Text

class pregunta5 : Fragment() {
    lateinit var queue : RequestQueue
    lateinit var queue2 : RequestQueue
    lateinit var queue3 : RequestQueue

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = layoutInflater.inflate(R.layout.activity_encuesta_5, container, false)
        val imageView4 = activity?.findViewById<ImageView>(R.id.imageView4)
        val sharedPreference = activity?.getSharedPreferences("ANSWERS", Context.MODE_PRIVATE)


        var RadioButtonFrequency: Array<String> = arrayOf("a","b","c","d")
        var tipoDeAlimento: Map<String, String> = mapOf("Leche" to "a", "Pollo" to "c", "Atún" to "c", "Carne de res" to "b", "Carne de cerdo" to "b", "Huevo" to "c", "Arroz" to "d", "Tortilla" to "c", "Verduras" to "c", "Verduras_enlatadas" to "c", "Frutas" to "c", "Frutas_enlatadas" to "c", "Frijol" to "d", "Nuez" to "d", "Refresco" to "a")
        var viewTextsPositions : Array<String> = arrayOf("Leche", "Pollo", "Atún", "Carne de res", "Carne de cerdo", "Huevo", "Arroz", "Tortilla", "Verduras", "Verduras_enlatadas", "Frutas", "Frutas_enlatadas", "Frijol", "Nuez", "Refresco")
        var quantityET : Array<EditText>? = arrayOf(view.findViewById(R.id.leche_cantidad), view.findViewById(R.id.pollo_cantidad), view.findViewById(R.id.atun_cantidad), view.findViewById(R.id.carneRes_cantidad), view.findViewById(R.id.carneCerdo_cantidad), view.findViewById(R.id.huevo_cantidad), view.findViewById(R.id.arroz_cantidad), view.findViewById(R.id.tortilla_cantidad),view.findViewById(R.id.verduras_cantidad), view.findViewById(R.id.verduras_enlatadas_cantidad), view.findViewById(R.id.frutas_cantidad), view.findViewById(R.id.frutas_enlatadas_cantidad), view.findViewById(R.id.frijol_cantidad), view.findViewById(R.id.nuez_cantidad), view.findViewById(R.id.refresco_cantidad))
        var radioGroups : Array<RadioGroup>? = arrayOf(view.findViewById(R.id.leche_radiogroup), view.findViewById(R.id.pollo_radiogroup), view.findViewById(R.id.atun_radiogroup), view.findViewById(R.id.carne_de_res_radiogroup), view.findViewById(R.id.carne_de_cerdo_radiogroup), view.findViewById(R.id.huevo_radiogroup), view.findViewById(R.id.arroz_radiogroup), view.findViewById(R.id.tortilla_radiogroup), view.findViewById(R.id.verduras_radiogroup), view.findViewById(R.id.verduras_enlatadas_radiogroup), view.findViewById(R.id.frutas_enteras_radiogroup), view.findViewById(R.id.frutas_enlatadas_radiogroup), view.findViewById(R.id.frijol_radiogroup), view.findViewById(R.id.nuez_radiogroup), view.findViewById(R.id.refresco_radiogroup))

        val shPreferenceToken = context?.getSharedPreferences("profile",Context.MODE_PRIVATE)

        val xaccesstoken = shPreferenceToken?.getString("x-access-token","#")

        val surveyStuff = context?.getSharedPreferences("survey", Context.MODE_PRIVATE)
        val idFamily = surveyStuff?.getString("idFamily", "#")

        val error = Response.ErrorListener { error ->
            Log.e("ERRORLISTENER", error.toString())
        }

        val listenerDisease = Response.Listener<JSONObject>{ response ->
            val mensaje = response.toString()
            Log.e("listenerDis RESPONSE", mensaje)



        }



        val listenerPregnancy = Response.Listener<JSONObject>{ response ->
            val mensaje = response.toString()
            Log.e("listenerPreg RESPONSE", mensaje)

            //enfermedades

            val enfermedadesEndpoint = endpoint().globalLink + "assignMedicalCondition"
            val medical1 = JSONObject()
            val medical2 = JSONObject()
            val medical3 = JSONObject()
            val medical4 = JSONObject()
            var medicalCocoon = JSONArray()

            var mainMedicalConditions = JSONObject()


            //if diabetes
            if(sharedPreference?.getString("answer4_diabetes", "#") == "true"){
                medical1.put("medicalConditionName", "Diabetes")
                medical1.put("medicalConditionNumber", sharedPreference?.getString("answer4_diabetesCantidad", "#"))
                medical1.put("idFamily", idFamily)
                medicalCocoon.put(medical1)
            }
            //if hipertensión
            if(sharedPreference?.getString("answer4_hipertension", "#") == "true"){
                medical2.put("medicalConditionName", "Hipertensión")
                medical2.put("medicalConditionNumber", sharedPreference?.getString("answer4_hipertensionCantidad", "#"))
                medical2.put("idFamily", idFamily)
                medicalCocoon.put(medical2)
            }
            //if obesidad
            if(sharedPreference?.getString("answer4_obesidad", "#") == "true"){
                medical3.put("medicalConditionName", "Obesidad")
                medical3.put("medicalConditionNumber", sharedPreference?.getString("answer4_obesidadCantidad", "#"))
                medical3.put("idFamily", idFamily)
                medicalCocoon.put(medical3)
            }
            //if otra
            if(sharedPreference?.getString("answer4_otra", "#") == "true"){
                medical4.put("medicalConditionName", sharedPreference?.getString("answer4_otra_nombre","#"))
                medical4.put("medicalConditionNumber", sharedPreference?.getString("answer4_otraCantidad", "#"))
                medical4.put("idFamily", idFamily)
                medicalCocoon.put(medical4)
            }

            mainMedicalConditions.put("conditions", medicalCocoon)



            val requestAssignMedicalCondition = object :
                JsonObjectRequest(Method.POST, enfermedadesEndpoint, mainMedicalConditions, listenerDisease, error){
                @Throws(AuthFailureError::class)
                override fun getHeaders(): MutableMap<String, String> {
                    val hashMap = HashMap<String, String>()
                    hashMap["Content-Type"] = "application/json; charset=UTF-8";
                    //hashMap["User-Agent"] = "Mozilla/5.0"
                    hashMap["x-access-token"] = xaccesstoken.toString()

                    return hashMap
                }
            }

            queue3 = Volley.newRequestQueue(activity?.applicationContext)
            queue3.add(requestAssignMedicalCondition)





        }





        val listenerAnswers = Response.Listener<JSONObject> { response ->
            val mensaje = response.toString()
            Log.e("listenerAns", mensaje)

            //starts second request
            val pregnancyMonths = sharedPreference?.getString("answer3","#")

            val pregnancyEndpoint = endpoint().globalLink + "setPregnancy/" + pregnancyMonths + "/" + idFamily

            val requestUpdatePregnancy = object :
                JsonObjectRequest(Method.PUT, pregnancyEndpoint, null, listenerPregnancy, error){
                @Throws(AuthFailureError::class)
                override fun getHeaders(): MutableMap<String, String> {
                    val hashMap = HashMap<String, String>()
                    hashMap["Content-Type"] = "application/json; charset=UTF-8";
                    //hashMap["User-Agent"] = "Mozilla/5.0"
                    hashMap["x-access-token"] = xaccesstoken.toString()

                    return hashMap
                }
            }

            queue2 = Volley.newRequestQueue(activity?.applicationContext)
            queue2.add(requestUpdatePregnancy)

        }


        var mainJsonObject = JSONObject()
        var jsonArray = JSONArray()
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

        pregunta1.put("idQuestion", "1")
        pregunta1.put("idSurvey", surveyStuff?.getString("idSurvey","#"))
        pregunta1.put("answer", sharedPreference?.getString("answer1","#"))

        pregunta2.put("idQuestion", "2")
        pregunta2.put("idSurvey", surveyStuff?.getString("idSurvey","#"))
        pregunta2.put("answer", sharedPreference?.getString("answer2","#"))


        if(sharedPreference?.getString("answer5","#") == "Sí"){
            pregunta5.put("idQuestion", "5")
            pregunta5.put("idSurvey", surveyStuff?.getString("idSurvey","#"))
            pregunta5.put("answer", sharedPreference?.getString("answer5_suplemento","#"))
        }
        else{
            pregunta5.put("idQuestion", "5")
            pregunta5.put("idSurvey", surveyStuff?.getString("idSurvey","#"))
            pregunta5.put("answer", "Ninguno")
        }

        pregunta6.put("idQuestion", "6")
        pregunta6.put("idSurvey", surveyStuff?.getString("idSurvey","#"))
        pregunta6.put("answer", sharedPreference?.getString("answer6","#"))

        pregunta7.put("idQuestion", "7")
        pregunta7.put("idSurvey", surveyStuff?.getString("idSurvey","#"))
        pregunta7.put("answer", sharedPreference?.getString("answer7","#"))

        pregunta8.put("idQuestion", "8")
        pregunta8.put("idSurvey", surveyStuff?.getString("idSurvey","#"))
        pregunta8.put("answer", sharedPreference?.getString("answer8","#"))

        pregunta9.put("idQuestion", "9")
        pregunta9.put("idSurvey", surveyStuff?.getString("idSurvey","#"))
        pregunta9.put("answer", sharedPreference?.getString("answer9","#"))

        pregunta10.put("idQuestion", "10")
        pregunta10.put("idSurvey", surveyStuff?.getString("idSurvey","#"))
        pregunta10.put("answer", sharedPreference?.getString("answer10","#"))

        jsonArray.put(pregunta1)
        jsonArray.put(pregunta2)
        jsonArray.put(pregunta5)
        jsonArray.put(pregunta6)
        jsonArray.put(pregunta7)
        jsonArray.put(pregunta8)
        jsonArray.put(pregunta9)
        jsonArray.put(pregunta10)

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
            allCantidadesFilled = false
            allFrequencysSelected = false

            //retrieve tables data
            var RadioSelectedButton : RadioButton
            for (x in 0..14){
                var pregunta11 = JSONObject()

                currentQuantity = quantityET?.get(x)?.text.toString()

                if(currentQuantity == "")
                {
                    Toast.makeText(context, "Porfavor, ingrese todos los campos", Toast.LENGTH_SHORT).show()
                    allCantidadesFilled = false
                    break
                }
                else{
                    allCantidadesFilled = true
                }


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

                    // add string to the array
                    pregunta11.put("idQuestion", "11")
                    pregunta11.put("idSurvey", surveyStuff?.getString("idSurvey","#"))
                    pregunta11.put("answer", currentString)

                    jsonArray.put(pregunta11)

                    continue
                }else{
                    Toast.makeText(context, "Porfavor, ingrese todos los campos", Toast.LENGTH_SHORT).show()
                    break
                }

            }

            //add json array to main json object
            mainJsonObject.put("questionList", jsonArray)
            Log.e("question List", mainJsonObject.getString("questionList"))

            //main REQUEST

            val answersRequestEndpoint = endpoint().globalLink + "insertQuestionList"
            val requestAddAnswers = object :
                JsonObjectRequest(Method.POST, answersRequestEndpoint, mainJsonObject, listenerAnswers, error){
                @Throws(AuthFailureError::class)
                override fun getHeaders(): MutableMap<String, String> {
                    val hashMap = HashMap<String, String>()
                    hashMap["Content-Type"] = "application/json; charset=UTF-8";
                    //hashMap["User-Agent"] = "Mozilla/5.0"
                    hashMap["x-access-token"] = xaccesstoken.toString()

                    return hashMap
                }
            }
            queue = Volley.newRequestQueue(activity?.applicationContext)

            //final request, next fragment


            if(allCantidadesFilled && allFrequencysSelected){
                queue.add(requestAddAnswers)
                val intent = Intent(context,letreroFinal::class.java)
                startActivity(intent)
            }
            else{
                Log.e("something not selected", "conditional works")
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