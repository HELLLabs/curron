package com.example.sahil.curron

/**
 * Created by sahil on 19/2/18.
 */
 public class Algo {
    val mltpl : Array<String> = arrayOf("Crore ","Lakh ","Thousand ","Hundred ","Rupees ",
            "and ","Paise ")
    val fig : Array<Long> = arrayOf(10000000,100000,1000,100)

    val pre : Array<String> = arrayOf("Zero ","One ","Two ","Three ","Four ","Five ","Six ",
            "Seven ","Eight ","Nine ","Ten ","Eleven ","Twelve ","Thirteen ",
            "Fourteen ","Fifteen ","Sixteen ","Seventeen ","Eighteen ","Nineteen ",
            "Twenty ","Thirty ","Forty ","Fifty ","Sixty ","Seventy ","Eighty ","Ninety ")
    var demo : String? = ""
    var amt : String? = ""

    fun cash(A: Int, B: Int) : String? {

        var a = Math.abs(A)
        var b = (Math.abs(B))
        var c : Int
        if(a == 0){
            amt = "zero "
        }
        for ((index,value) in fig.withIndex()){/*
            c = Math.floorDiv(a.toLong(),value).toInt()*/
            c = a.toLong().div(value).toInt()
            if(c > 0){
                demo = ntw(c)
                a-= c.times(value).toInt()
                amt += demo + mltpl[index]
            }
        }
        if (a != 0) {
            demo=ntw(a)
            a-= a
            amt += demo
        }
        if (a.equals(0)) {
            amt += mltpl[4];
        }
        if (a == 0 && b != 0) {
            demo=ntw(b)
            amt += mltpl[5] + demo + mltpl[6]
        }
        return amt
    }

    fun ntw(N: Int) : String {
        var n = N
        var d1 = ""
        var d2 = ""
        if (n == 0){
            return ""
        } else if (n in 10..19){
            d1 = pre[n]
            return d1
        } else if (n in 1..99 && n !in 10..19) {
            if (n in 20..99){/*
                d1 = pre[Math.floorDiv(n,10) + 18]
                n-= Math.floorDiv(n,10).times(10)*/
                d1 = pre[n.div(10).toInt() + 18]
                n-= n.div(10).toInt().times(10)
            }
            if (n in 1..9) {
                d2=pre[n];
            }
            return d1 + d2
        }else {
            return "invalid input "
        }
    }
}