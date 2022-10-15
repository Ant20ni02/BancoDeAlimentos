package mx.tec.prototipo

import android.content.Context
import android.content.Intent
import android.os.Bundle
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

        var RadioButtonFrequency: Map<Int, String> = mapOf(0 to "a", 1 to "b", 2 to "c", 3 to "d")
        var tipoDeAlimento: Map<String, String> = mapOf("Leche" to "a", "Pollo" to "c", "Atún" to "c", "Carne de res" to "b", "Carne de cerdo" to "b", "Huevo" to "c", "Arroz" to "b", "Tortilla" to "c", "Verduras" to "b", "Verduras_enlatadas" to "c", "Frutas" to "b", "Frutas_enlatadas" to "c", "Frijol" to "b", "Nuez" to "b", "Refresco" to "a")


        //build json array
        val pregunta1 = JSONObject()

        val btnSiguiente = activity?.findViewById<Button>(R.id.btnSiguiente)
        val btnRegresar = activity?.findViewById<Button>(R.id.btnRegresar)

        val currentFragment = context?.getSharedPreferences("currentFragment", Context.MODE_PRIVATE)
        var curr = currentFragment?.getString("currentFragment", "#")


        btnSiguiente?.setOnClickListener {
            val intent = Intent(context,letreroFinal::class.java)
            startActivity(intent)
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

        pregunta1.put("answer1", sharedPreference?.getString("answer1","#"))


        return view
    }

}