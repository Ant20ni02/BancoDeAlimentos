package mx.tec.prototipo

import android.Manifest
import android.app.PendingIntent.getActivity
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.location.Location
import android.location.LocationListener
import android.location.LocationManager
import android.os.Build
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import androidx.annotation.RequiresApi
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat.getSystemService
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

class IdentificadorFragment : Fragment(), LocationListener{

    lateinit var queue : RequestQueue
    lateinit var txtid : TextView
    var latitude : Double = 0.0
    var longitude : Double = 0.0
    lateinit var locationManager: LocationManager

    @RequiresApi(Build.VERSION_CODES.S)
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

        locationManager = activity?.getSystemService(Context.LOCATION_SERVICE)
                as LocationManager

        if(ActivityCompat.checkSelfPermission(requireContext(),
                Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED)
            locationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER,0,0f,this)


        Log.e("x-access-token", xaccesstoken.toString())

        txtid = view.findViewById(R.id.txt_id)

        /*
        if (txtid.text.toString() == "")
            txtid.text = "0"
        */

        ///////////////// Location //////////////////////

        var familyExist : Boolean = false

        val listenerFamily = Response.Listener<JSONObject> { response ->
            val mensaje = response.toString()
            Log.e("ENDPOINTRESPONSE", mensaje)


            ////////////////// If idFamily do exist }///////////////
            if(response.getString("exist") == "true"){
                familyExist = true
                if (sharedPreference != null) {
                    with(sharedPreference.edit()){
                        putString("currentFragment","1")
                        commit()
                    }
                    //request
                    next = sharedPreference?.getString("currentFragment","#").toString()
                    Log.e("curr2", next.toString())

                }
            }
            else{
                Toast.makeText(activity, "Identificador no encontrado", Toast.LENGTH_SHORT).show()
            }
        }

        val listenerSurvey = Response.Listener<JSONObject> { response ->
            val mensaje = response.toString()
            Log.e("ENDPOINTRESPONSE", mensaje)
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
                val addSurvey = endpoint().globalLink + "addSurvey/"
                queue =  Volley.newRequestQueue(activity?.applicationContext)




                val request = object :
                    JsonObjectRequest(Method.GET, idFamilyExists, null, listenerFamily, error){
                    @Throws(AuthFailureError::class)
                    override fun getHeaders(): MutableMap<String, String> {
                        val hashMap = HashMap<String, String>()
                        hashMap["Content-Type"] = "application/json; charset=UTF-8";
                        //hashMap["User-Agent"] = "Mozilla/5.0"
                        hashMap["x-access-token"] = xaccesstoken.toString()

                        return hashMap
                        }
                    }

                    /////////////////////////////////////7
                    //validate if user exists (REQUEST)
                    //Encuesta Container found in Map method

                    ///////////////////////////////////////

                    queue.add(request)

                    //if idFamilyExists


                    if(familyExist){

                        val surveyAttributes = JSONObject()
                        surveyAttributes.put("idUser", shPreferenceToken?.getString("idUser", "#") )
                        surveyAttributes.put("idFamily", txtid.text.toString())

                        surveyAttributes.put("latitude", latitude.toString())
                        surveyAttributes.put("longitude", longitude.toString())

                        //request

                        val requestAddSurvey = object :
                            JsonObjectRequest(Method.POST, addSurvey, surveyAttributes, listenerSurvey, error){
                            @Throws(AuthFailureError::class)
                            override fun getHeaders(): MutableMap<String, String> {
                                val hashMap = HashMap<String, String>()
                                hashMap["Content-Type"] = "application/json; charset=UTF-8";
                                //hashMap["User-Agent"] = "Mozilla/5.0"
                                hashMap["x-access-token"] = xaccesstoken.toString()

                                return hashMap
                            }
                        }

                        Log.e("latitude", latitude.toString())
                        Log.e("longitude", longitude.toString())

                        queue.add(requestAddSurvey)

                        if (next != null) {
                            (activity as EncuestaContainer?)!!.buttonPressed(next)
                        }

                    }

                }
        }

        btnRegresar?.setOnClickListener { view->
            val intent = Intent(activity,AvisoPrivacidad::class.java)
            startActivity(intent)
        }

        return view;
    }

    override fun onLocationChanged(location: Location) {
        latitude = location.latitude
        longitude = location.longitude
    }
}