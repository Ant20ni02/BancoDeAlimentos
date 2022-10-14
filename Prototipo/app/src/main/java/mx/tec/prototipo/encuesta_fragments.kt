package mx.tec.prototipo

import android.app.Application
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment

class encuesta_fragments : Application(){
    // Lista de todos los fragmentos
    val identFragment = IdentificadorFragment()
    val pregunta1 = pregunta1()
    val pregunta2 = pregunta2()
    val pregunta3 = pregunta3()
    val pregunta4 = pregunta4()

    //guardar fragmentos en diccionario
    var fragmentsDic: Map<String, Fragment> = mapOf("0" to identFragment, "1" to pregunta1, "2" to pregunta2, "3" to pregunta3, "4" to pregunta4)
}