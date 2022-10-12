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

        queue =  Volley.newRequestQueue(activity?.applicationContext)

        val listener = Response.Listener<JSONObject> { response ->
            val mensaje = response.toString()

            Log.e("ENDPOINTRESPONSE", mensaje)


            val parsedName = response.getString("firstName") + " " + response.getString("lastName")
            nombre.text = parsedName
            edad.text = response.getString("age")
            sexo.text= response.getString("sex")
            telefono.text = response.getString("phoneNumber")
            email.text = response.getString("email")

        }

        val error = Response.ErrorListener { error ->
            Log.e("ERRORLISTENER", error.toString())
        }

        val shPreferences = context?.getSharedPreferences("profile", Context.MODE_PRIVATE)

        val idUser = shPreferences?.getString("idUser","#")
        val xaccesstoken = shPreferences?.getString("x-access-token","#")

        Log.e("idUser", idUser.toString())
        Log.e("x-access-token", xaccesstoken.toString())


        val getUser = endpoint()
        val getUserRequest : String = (getUser.globalLink + "getUsersData/" + idUser)
        val intent = Intent(view.context,MainActivity::class.java)

        val request = object :
            JsonObjectRequest(Request.Method.GET, getUserRequest, null, listener, error){
            @Throws(AuthFailureError::class)
            override fun getHeaders(): MutableMap<String, String> {
                val hashMap = HashMap<String, String>()
                hashMap["Content-Type"] = "application/json; charset=UTF-8";
                //hashMap["User-Agent"] = "Mozilla/5.0"
                hashMap["x-access-token"] = xaccesstoken.toString()

                return hashMap
            }
        }

        queue.add(request)




        return view;
    }

}