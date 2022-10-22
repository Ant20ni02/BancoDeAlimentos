package mx.tec.prototipo

import android.content.Context
import android.content.Intent
import android.graphics.BitmapFactory
import android.os.Bundle
import android.util.Base64
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
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

    lateinit var profilePicture : ImageView

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        val view = layoutInflater.inflate(R.layout.activity_profile_fragment,container, false)

        val shPreferences = context?.getSharedPreferences("profile", Context.MODE_PRIVATE)
        val idUser = shPreferences?.getString("idUser","#")
        val xaccesstoken = shPreferences?.getString("x-access-token","#")

        val base64_photo = shPreferences?.getString("image","#")


        /*
        val listener = Response.Listener<JSONObject> { response ->
            base64_photo = response.getString("img",)

            Log.e("ENDPOINTRESPONSE", mensaje)
        }

        val error = Response.ErrorListener { error ->
            Log.e("ERRORLISTENER", error.toString())
        }

        val getPhotoEnpoint = endpoint().globalLink + "getNamePhoto" +"/" + idUser

        val requestGetPhoto = object :
            JsonObjectRequest(Method.GET, getPhotoEnpoint, null, listener, error){
            override fun getHeaders(): MutableMap<String, String> {
                val hashMap = HashMap<String, String>()
                hashMap["Content-Type"] = "application/json; charset=UTF-8";
                hashMap["x-access-token"] = xaccesstoken.toString()

                return hashMap
            }
        }

        queue = Volley.newRequestQueue(activity?.applicationContext)
        queue.add(requestGetPhoto)
        */

        nombre = view.findViewById<TextView>(R.id.idFamTV)
        edad = view.findViewById<TextView>(R.id.txt_Edad)
        sexo = view.findViewById<TextView>(R.id.txt_Sexo)
        telefono = view.findViewById<TextView>(R.id.txt_Num)
        email = view.findViewById<TextView>(R.id.txt_Em)
        profilePicture = view.findViewById(R.id.profile_picture)


        //val imageBytes = Base64.decode(base64_photo, Base64.DEFAULT)
        //val decodedImage = BitmapFactory.decodeByteArray(imageBytes, 0, imageBytes.size)
        //profilePicture.setImageBitmap(decodedImage)







        nombre.text = shPreferences?.getString("nombre","#")
        edad.text = shPreferences?.getString("edad","#")
        sexo.text= shPreferences?.getString("sexo","#")
        telefono.text = shPreferences?.getString("telefono","#")
        email.text = shPreferences?.getString("email","#")




        Log.e("idUser", idUser.toString())
        Log.e("x-access-token", xaccesstoken.toString())
        shPreferences?.getString("firstName","#")?.let { Log.e("NAME", it) }



        return view;
    }

}