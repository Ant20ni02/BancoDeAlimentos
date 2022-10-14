package mx.tec.prototipo

import android.app.PendingIntent.getActivity
import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import androidx.fragment.app.Fragment
import com.android.volley.AuthFailureError
import com.android.volley.Request
import com.android.volley.RequestQueue
import com.android.volley.Response
import com.android.volley.toolbox.JsonObjectRequest
import com.android.volley.toolbox.Volley
import com.google.android.material.internal.ContextUtils
import com.google.android.material.internal.ContextUtils.getActivity
import org.json.JSONObject

class IdentificadorFragment : Fragment(){

    lateinit var queue : RequestQueue
    lateinit var txtid : TextView

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        val view: View = layoutInflater.inflate(R.layout.activity_identificador_fragment,container, false)
        val btnSiguiente = activity?.findViewById<Button>(R.id.btnSiguiente)
        val btnRegresar = activity?.findViewById<Button>(R.id.btnRegresar)
        val sharedPreference = context?.getSharedPreferences("currentFragment", Context.MODE_PRIVATE)
        val shPreferenceToken = context?.getSharedPreferences("profile",Context.MODE_PRIVATE)
        val xaccesstoken = shPreferenceToken?.getString("x-access-token","#")

        val curr = sharedPreference?.getString("currentFragment","#")
        var next = ""

        Log.e("x-access-token", xaccesstoken.toString())

        txtid = view.findViewById(R.id.txt_id)

        /*
        if (txtid.text.toString() == "")
            txtid.text = "0"
        */

        val listener = Response.Listener<JSONObject> { response ->
            val mensaje = response.toString()
            Log.e("ENDPOINTRESPONSE", mensaje)


            ////////////////// If idFamily do exist }///////////////
            if(response.getString("exist") == "true"){
                if (sharedPreference != null) {
                    with(sharedPreference.edit()){
                        putString("currentFragment","1")
                        commit()
                    }
                    //request
                    next = sharedPreference?.getString("currentFragment","#").toString()
                }

                //validate if user exists (REQUEST)

                //Encuesta Container found in Map method
                if (next != null) {
                    (activity as EncuestaContainer?)!!.buttonPressed(next)
                }

                Log.e("curr2", next.toString())

                ///////////////////////////////////////
            }
            else{
                Toast.makeText(activity, "Identificador no encontrado", Toast.LENGTH_SHORT).show()
            }
        }

        val error = Response.ErrorListener { error ->
            Log.e("ERRORLISTENER", error.toString())
        }

        btnSiguiente?.setOnClickListener{ view ->
                //comprobar que el idFamily existe

                //comprobar que el identificador no esté vacío

                if(txtid.text.toString() == "")
                    Toast.makeText(activity,"Porfavor, ingrese un identificador", Toast.LENGTH_SHORT).show()
                else{


                val idFamilyExists = endpoint().globalLink + "idFamilyExists/" + txtid.text.toString()
                queue =  Volley.newRequestQueue(activity?.applicationContext)

                val request = object :
                    JsonObjectRequest(Request.Method.GET, idFamilyExists, null, listener, error){
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

                }
        }

        btnRegresar?.setOnClickListener { view->

            val intent = Intent(activity,AvisoPrivacidad::class.java)
            startActivity(intent)

            /*
            if (curr != null) {
                (activity as EncuestaContainer?)!!.buttonPressed(curr)
            }*/

        }

        return view;
    }
}