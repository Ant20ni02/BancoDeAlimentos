package mx.tec.prototipo
import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.FragmentContainer

class EncuestaContainer : AppCompatActivity (){

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main_encuesta)

        val sharedPreference = getSharedPreferences("currentFragment", Context.MODE_PRIVATE)

        if(savedInstanceState != null)
            return

        buttonPressed("0") //starts and loads the id fragment

        with(sharedPreference.edit()){
            putString("currentFragment","0")
            commit()
        }

        var curr = ""


        val btnRegresar = findViewById<Button>(R.id.btnRegresar)
        val btnSiguiente = findViewById<Button>(R.id.btnSiguiente)

        val fragmentsDic = encuesta_fragments().fragmentsDic
        //fragmentsDic[curr]?.let { loadFragment(it) }


        //index, fragment name

        //comprobar si el fragmento está en el diccionario



        btnRegresar.setOnClickListener {
            curr = sharedPreference?.getString("currentFragment","#").toString()
            if(curr == "0"){
                val intent = Intent(this@EncuestaContainer,BottomNavigation::class.java)
                startActivity(intent)
            }
        }
        btnSiguiente.setOnClickListener {
            curr = sharedPreference?.getString("currentFragment","#").toString()
            if (curr != null) {
                buttonPressed(curr)
            }
            //load.loadFragment()
        }
    }
    private  fun loadFragment(fragment: Fragment){
        val transaction = supportFragmentManager.beginTransaction()
        transaction.replace(R.id.fragmentContainer,fragment)
        transaction.addToBackStack(null)
        transaction.commit()
    }

    fun buttonPressed (curr : String){
        val fragmentsDic = encuesta_fragments().fragmentsDic

        Log.e("curr", curr.toString())
        Log.e("fragmentsDisc", fragmentsDic[curr].toString())

        if(fragmentsDic[curr] != null){
            fragmentsDic[curr]?.let {
                loadFragment(it)
                Log.e("it?", it.toString())
            }

        }
        else{
            Toast.makeText(this@EncuestaContainer, "El fragmento no existe", Toast.LENGTH_SHORT).show()
        }

    }
}