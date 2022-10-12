package mx.tec.prototipo

import android.app.Application
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment

class encuesta_fragments : Application(){
    // Lista de todos los fragmentos
    val identFragment = IdentificadorFragment()
    val pregunta1 = pregunta1()

    //guardar fragmentos en diccionario
    var fragmentsDic: Map<String, Fragment> = mapOf("0" to identFragment, "1" to pregunta1)
}