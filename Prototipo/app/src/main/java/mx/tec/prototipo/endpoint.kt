package mx.tec.prototipo
import android.app.Application
import android.content.Context
import android.util.Log
import com.android.volley.AuthFailureError
import com.android.volley.Response
import com.android.volley.toolbox.JsonObjectRequest
import org.json.JSONObject

class endpoint : Application() {

    var globalLink = "http://bamxapi3-env.eba-j9sdi2k3.us-east-1.elasticbeanstalk.com/"
    var phantomResponse = ""

    /*
    public fun stillToken(): String {
        val phantom = globalLink + "phantom"

        val listener = Response.Listener<JSONObject> { response ->
            val mensaje = response.toString()
            Log.e("ENDPOINTRESPONSE", mensaje)
            phantomResponse = mensaje
        }

        val error = Response.ErrorListener { error ->
            Log.e("ERRORLISTENER", error.toString())
        }

        val shPreferenceToken = getSharedPreferences("profile", Context.MODE_PRIVATE)
        val xaccesstoken = shPreferenceToken.getString("x-access-token", "#")

        val requestAddSurvey = object :
            JsonObjectRequest(Method.GET, phantom, null, listener, error){
            @Throws(AuthFailureError::class)
            override fun getHeaders(): MutableMap<String, String> {
                val hashMap = HashMap<String, String>()
                hashMap["Content-Type"] = "application/json; charset=UTF-8";
                //hashMap["User-Agent"] = "Mozilla/5.0"
                hashMap["x-access-token"] = xaccesstoken.toString()

                return hashMap
            }
        }

        return phantomResponse
    }*/

}


