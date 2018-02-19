package com.example.sahil.curron

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Toast
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    private var rupees : Int = 0
    private var paise : Int = 0
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }
    fun SubmitBtnClicked(view: View){
        if (rupeesText.text.isNullOrEmpty() && paiseText.text.isNullOrEmpty()) {
            Toast.makeText(this, "Enter any amount", Toast.LENGTH_SHORT).show()
            WordsTextview.text = ""
        } else if (rupeesText.text.isNullOrEmpty()){
            Execute(1)
        } else if (paiseText.text.isNullOrEmpty()) {
            Execute(2)
        }else {
            Execute(0)
        }
    }
    private fun Execute(check1 : Int){
        if(check1 == 1){
            if (paiseText.text.length > 2){
                Toast.makeText(this, "Enter Valid Length", Toast.LENGTH_SHORT).show()
            } else {
                paise = paiseText.text.toString().toInt()
                WordsTextview.text = Algo().cash(0,paise)
                //setEmpty()
            }
        } else if (check1 == 2){
            if (rupeesText.text.length > 9){
                Toast.makeText(this, "Enter Valid Length", Toast.LENGTH_SHORT).show()
            } else {
                rupees = rupeesText.text.toString().toInt()
                WordsTextview.text = Algo().cash(rupees,0)
               // setEmpty()
            }
        } else {
            if (rupeesText.text.length > 9 || paiseText.text.length > 2){
                Toast.makeText(this, "Enter Valid Length", Toast.LENGTH_SHORT).show()
            } else {
                rupees = rupeesText.text.toString().toInt()
                paise = paiseText.text.toString().toInt()
                WordsTextview.text = Algo().cash(rupees,paise)
                //setEmpty()
            }
        }
    }/*
    private fun setEmpty(){
        rupeesText.text.clear()
        paiseText.text.clear()
    }*/
}
