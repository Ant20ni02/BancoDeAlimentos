package mx.tec.prototipo

import android.content.Context
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.*
import androidx.fragment.app.Fragment
import com.android.volley.RequestQueue
import java.lang.NumberFormatException

class pregunta1 : Fragment() {
    lateinit var queue: RequestQueue
    lateinit var integrantes: TextView


    //checkboxs and edittexts
    lateinit var check1 : CheckBox // a
    lateinit var check2: CheckBox // b
    lateinit var check3: CheckBox //c
    lateinit var check4: CheckBox // d
    lateinit var check5: CheckBox // e

    lateinit var edit1: EditText
    lateinit var edit2: EditText
    lateinit var edit3: EditText
    lateinit var edit4: EditText
    lateinit var edit5: EditText

    lateinit var edits: Map<String, EditText>
    lateinit var indexQuant : MutableMap<String, Int>

    lateinit var mainString: String

    lateinit var totalRangos: String

        override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
            val view = layoutInflater.inflate(R.layout.activity_encuesta_1, container, false)
            val btnSiguiente = activity?.findViewById<Button>(R.id.btnSiguiente)
            val btnRegresar = activity?.findViewById<Button>(R.id.btnRegresar)
            val sharedPreference =
                context?.getSharedPreferences("currentFragment", Context.MODE_PRIVATE)
            val shPreferenceToken = context?.getSharedPreferences("profile", Context.MODE_PRIVATE)
            var curr = sharedPreference?.getString("currentFragment", "#")
            var next = ""
            var pregunta1: Boolean = false
            var pregunta2: Boolean = false

            val questionSP = context?.getSharedPreferences("ANSWERS", Context.MODE_PRIVATE)


            var checkedBoxNumber = 0 //number of checked boxs


            var allAnswered: Boolean = false

            //checkboxs and edittexts
            check1 = view.findViewById(R.id.infancia_cb)
            check2 = view.findViewById(R.id.niñez_cb)
            check3 = view.findViewById(R.id.adolescencia_cb)
            check4 = view.findViewById(R.id.adultez_cb)
            check5 = view.findViewById(R.id.may_cb)

            edit1 = view.findViewById(R.id.infancia_et)
            edit2 = view.findViewById(R.id.niñez_et)
            edit3 = view.findViewById(R.id.adolescencia_et)
            edit4 = view.findViewById(R.id.adultez_et)
            edit5 = view.findViewById(R.id.may_et)


            var checkboxes: Map<String, String> = mapOf("1" to "a", "2" to "b", "3" to "c", "4" to "d", "5" to "d")

            var checkbox1 : String
            var checkbox2: String
            var checkbox3 : String
            var checkbox4 : String
            var checkbox5 : String
            var checkedNumber1: String
            var checkedNumber2: String
            var checkedNumber3: String
            var checkedNumber4: String
            var checkedNumber5: String

        btnSiguiente?.setOnClickListener {

            checkbox1 = ""
            checkbox2 = ""
            checkbox3 = ""
            checkbox4 = ""
            checkbox5 = ""

            checkedNumber1 = "0"
            checkedNumber2 = "0"
            checkedNumber3 = "0"
            checkedNumber4 = "0"
            checkedNumber5 = "0"

            mainString = ""


            edits =  mapOf("1" to edit1, "2" to edit2, "3" to edit3, "4" to edit4, "5" to edit5)

            integrantes = view.findViewById(R.id.integrantes_pregunta1)
            // pregunta 1:
            if(isNumericAndPositive(integrantes.text.toString())){
                pregunta1 = true
                Log.e("pregunta1", integrantes.text.toString())
            }
            else{
                Toast.makeText(context, "Entrada de integrantes inválida", Toast.LENGTH_SHORT).show()
            }


            //pregunta 2
            if(check1.isChecked){
                if(edit1.text.toString() != "")
                {
                    pregunta2 = edit1.text.toString() != ""
                    checkedBoxNumber++
                    checkbox1 = "a"

                    if(edit1.text.toString().length == 1)
                    {
                        checkedNumber1 += edit1.text.toString()
                    }
                    else{
                        checkedNumber1 = edit1.text.toString()
                    }
                    Log.e("checkedNumber1", checkedNumber1)

                }
            }
            if(check2.isChecked){
                if(edit2.text.toString() != "")
                {
                    pregunta2 = edit2.text.toString() != ""
                    checkedBoxNumber++
                    checkbox2 = "b"

                    if(edit2.text.toString().length == 1)
                    {
                        checkedNumber2 += edit2.text.toString()
                    }
                    else{
                        checkedNumber2 = edit2.text.toString()
                    }
                    Log.e("checkedNumber2", checkedNumber2)
                }
            }
            if(check3.isChecked){
                if(edit3.text.toString() != "")
                {
                    pregunta2 = edit3.text.toString() != ""
                    checkedBoxNumber++
                    checkbox3 = "c"

                    if(edit3.text.toString().length == 1)
                    {
                        checkedNumber3 += edit3.text.toString()
                    }
                    else{
                        checkedNumber3 = edit3.text.toString()
                    }
                    Log.e("checkedNumber3", checkedNumber3)
                }
            }
            if(check4.isChecked){
                if(edit4.text.toString() != "")
                {
                    pregunta2 = edit4.text.toString() != ""
                    checkedBoxNumber++
                    checkbox4 = "d"

                    if(edit4.text.toString().length == 1)
                    {
                        checkedNumber4 += edit4.text.toString()
                    }
                    else{
                        checkedNumber4 = edit4.text.toString()
                    }
                    Log.e("checkedNumber4", checkedNumber4)
                }
            }
            if(check5.isChecked){
                if(edit5.text.toString() != "")
                {
                    pregunta2 = edit5.text.toString() != ""
                    checkedBoxNumber++
                    checkbox5 = "a"

                    if(edit5.text.toString().length == 1)
                    {
                        checkedNumber5 += edit5.text.toString()
                    }
                    else{
                        checkedNumber5 = edit5.text.toString()
                    }
                    Log.e("checkedNumber5", checkedNumber5)
                }
            }

            // check if both answers were answered

            Log.e("checkedBoxNumber", checkedBoxNumber.toString())

            if(pregunta1 && pregunta2){
                Log.e("entered mainString","pregunta1 && pregunta2")
                var total: Int = 0

                //total en checkboxes

                if(checkedNumber1 != "")
                    total += checkedNumber1.toInt()

                if(checkedNumber2 != "")
                    total += checkedNumber2.toInt()

                if(checkedNumber3 != "")
                    total += checkedNumber3.toInt()

                if(checkedNumber4 != "")
                    total += checkedNumber4.toInt()

                if(checkedNumber5 != "")
                    total += checkedNumber5.toInt()



                Log.e("integrantes: ", integrantes.text.toString())
                Log.e("TOTAL: ", total.toString())

                if(integrantes.text.toString().toInt() == total){
                    //construir string

                    if(checkbox1 != "")
                        mainString += checkbox1 + checkedNumber1 + "_"

                    if(checkbox2 != "")
                        mainString += checkbox2 + checkedNumber2 + "_"

                    if(checkbox3 != "")
                        mainString += checkbox3 + checkedNumber3 + "_"

                    if(checkbox4 != "")
                        mainString += checkbox4 + checkedNumber4 + "_"

                    if(checkbox5 != "")
                        mainString +=  checkbox5 + checkedNumber5 + "_"


                    mainString = removeLastNchars(mainString, 1)
                    Log.e("mainstring: ", mainString)

                    //save into answer2

                    if (questionSP != null) {
                        with(questionSP?.edit()){
                            this?.putString("answer1", integrantes.text.toString())
                            this?.putString("answer2", mainString)
                            this?.commit()
                        }

                        //request
                        next = (curr.toString().toInt() + 1).toString()

                        with(sharedPreference?.edit()){
                            this?.putString("currentFragment",next)
                            this?.commit()
                        }

                    }

                    //go to the next fragment
                    Log.e("next: ", next)
                    (activity as EncuestaContainer?)!!.buttonPressed(next)


                }
                else{
                    Toast.makeText(context,"Las cantidades no coinciden", Toast.LENGTH_SHORT).show()
                }
            }
        }

        btnRegresar?.setOnClickListener {
            curr = (curr.toString().toInt() - 1).toString() //gets back to 0

            with(sharedPreference?.edit()){
                this?.putString("currentFragment",curr)
                this?.commit()
            }
            if (curr != null) {
                (activity as EncuestaContainer?)!!.buttonPressed(curr!!)
            }
        }

        return view;
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

    private fun constructMainString(checkedBoxNumber:Int, mainString:String, checkboxes:Map<String, String>){

        for (x in  1 until checkedBoxNumber){
            //build string
            // letter + quantity
            this.mainString = mainString + checkboxes[x.toString()]
            Log.e("current mainString",mainString)


            //if length equals 1, ads 0 to the left
            Log.e("editslength",edits[x.toString()].toString().length.toString())

            if(edits[x.toString()].toString().length == 1)
                this.mainString = mainString + "0" + indexQuant[x.toString()].toString()
            else{
                this.mainString = mainString + indexQuant[x.toString()].toString()
            }

            if(x != checkedBoxNumber)
                this.mainString = mainString + "_"

        }
    }

    fun removeLastNchars(str: String, n: Int): String {
        return str.substring(0, str.length - n)
    }
}