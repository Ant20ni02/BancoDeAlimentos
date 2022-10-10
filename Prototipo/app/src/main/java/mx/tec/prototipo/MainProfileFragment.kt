package mx.tec.prototipo

import android.content.Intent
import android.content.Intent.getIntent
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import com.android.volley.Request
import com.android.volley.RequestQueue
import com.android.volley.Response
import com.android.volley.toolbox.JsonObjectRequest
import com.android.volley.toolbox.Volley
import org.json.JSONObject

class MainProfileFragment : Fragment() {
    lateinit var queue: RequestQueue

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        val view = layoutInflater.inflate(R.layout.activity_profile_fragment,container, false)
        var nombre = view.findViewById<TextView>(R.id.txt_Nombre)
        val edad = view.findViewById<TextView>(R.id.txt_Edad)
        val sexo = view.findViewById<TextView>(R.id.txt_Sexo)
        val telefono = view.findViewById<TextView>(R.id.txt_Num_Telefono)
        val email = view.findViewById<TextView>(R.id.txt_Email_Create)

        queue =  Volley.newRequestQueue(view.context)

        val listener = Response.Listener<JSONObject> { response ->
            val mensaje = response.toString()

            Log.e("ENDPOINTRESPONSE", mensaje)

            val parsedName = response.getString("firstName") + " " + response.getString("lastName")
            nombre.text = parsedName
            edad.text = response.getString("age")
            sexo.text = response.getString("sexo")
            telefono.text = response.getString("phoneNumber")
            email.text = response.getString("email")

        }

        val error = Response.ErrorListener { error ->
            Log.e("ERRORLISTENER", error.toString())
        }

        val getUser = endpoint()
        val getUserRequest = getUser.globalLink + "getUsersData/" +
        val intent = Intent(view.context,MainActivity::class.java)



        val bundle : Bundle? = intent.extras
        val idUser = intent

        val request = JsonObjectRequest(Request.Method.POST, signUpUrl, jsonBody, listener, error)



        return view;
    }

}