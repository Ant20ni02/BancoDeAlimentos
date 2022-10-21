package mx.tec.prototipo
import android.app.Application
import android.content.Context
import android.media.MediaCodec
import android.util.Log
import com.android.volley.AuthFailureError
import com.android.volley.RequestQueue
import com.android.volley.Response
import com.android.volley.toolbox.JsonObjectRequest
import com.android.volley.toolbox.Volley
import org.json.JSONObject

class endpoint : Application() {

    var globalLink = "http://bamxapi3-env.eba-j9sdi2k3.us-east-1.elasticbeanstalk.com/"
    var phantomResponse = ""

}


