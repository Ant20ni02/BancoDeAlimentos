package mx.tec.prototipo
import android.app.Application
import com.android.volley.AuthFailureError
import com.android.volley.toolbox.JsonObjectRequest

class endpoint : Application() {
    //var globalLink = "http://192.168.0.17:4000/"
    //var globalLink = "http://localhost:4000/"
    var globalLink = "http://bamxapi3-env.eba-j9sdi2k3.us-east-1.elasticbeanstalk.com/"


    public fun stillToken(){
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


    }

}


