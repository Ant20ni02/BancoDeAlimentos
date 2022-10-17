package mx.tec.prototipo

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.fragment.app.Fragment
import com.android.volley.AuthFailureError
import com.android.volley.Request
import com.android.volley.RequestQueue
import com.android.volley.Response
import com.android.volley.toolbox.JsonObjectRequest
import com.android.volley.toolbox.Volley
import org.json.JSONObject

class MainProfileFragment : Fragment() {
    lateinit var queue: RequestQueue

    lateinit var nombre :TextView
    lateinit var edad : TextView
    lateinit var sexo :TextView
    lateinit var telefono :TextView
    lateinit var email :TextView

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        val view = layoutInflater.inflate(R.layout.activity_profile_fragment,container, false)

        nombre = view.findViewById<TextView>(R.id.idFamTV)
        edad = view.findViewById<TextView>(R.id.txt_Edad)
        sexo = view.findViewById<TextView>(R.id.txt_Sexo)
        telefono = view.findViewById<TextView>(R.id.txt_Num)
        email = view.findViewById<TextView>(R.id.txt_Em)

        val shPreferences = context?.getSharedPreferences("profile", Context.MODE_PRIVATE)


        nombre.text = shPreferences?.getString("nombre","#")
        edad.text = shPreferences?.getString("edad","#")
        sexo.text= shPreferences?.getString("sexo","#")
        telefono.text = shPreferences?.getString("telefono","#")
        email.text = shPreferences?.getString("email","#")


        val idUser = shPreferences?.getString("idUser","#")
        val xaccesstoken = shPreferences?.getString("x-access-token","#")

        Log.e("idUser", idUser.toString())
        Log.e("x-access-token", xaccesstoken.toString())
        shPreferences?.getString("firstName","#")?.let { Log.e("NAME", it) }



        return view;
    }

}