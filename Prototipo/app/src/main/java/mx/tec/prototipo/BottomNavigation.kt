package mx.tec.prototipo

import android.os.Bundle
import android.os.PersistableBundle
import androidx.fragment.app.Fragment
import androidx.appcompat.app.AppCompatActivity
import com.google.android.material.bottomnavigation.BottomNavigationView

class BottomNavigation: AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main_bottomnav)

        val mainEncuestaFragment = MainEncuestaFragment()
        val mainProfileFragment = MainProfileFragment()
        val bottomNav =findViewById<BottomNavigationView>(R.id.bnv_main)

        loadFragment(mainEncuestaFragment) //loads the button fragment for the first time

        bottomNav.setOnItemSelectedListener {
            when(it.itemId){
                R.id.nav_menu ->{
                    loadFragment(mainEncuestaFragment)
                    true
                }
                R.id.nav_Profile ->{
                    loadFragment(mainProfileFragment)
                    true
                }
                else -> false
            }
        }

    }

    private  fun loadFragment(fragment: Fragment){
        val transaction = supportFragmentManager.beginTransaction()
        transaction.replace(R.id.fragmentContainer,fragment)
        transaction.addToBackStack(null)
        transaction.commit()
    }
}