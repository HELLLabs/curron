package com.example.sahil.curron

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    private var rupees : Int = 0
    private var paise : Int = 0
    private val algo  = Algo()
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }
    fun SubmitBtnClicked(view: View){
        //rupees =
       rupees = rupeesText.text.toString().toInt()
        paise = paiseText.text.toString().toInt()
        WordsTextview.text = algo.cash(rupees,paise)
    }
}
