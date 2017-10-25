function myFunction()
{
    var a=document.getElementById("rupees").value;
    var b=document.getElementById("paise").value;
    var words= cash(a,b);
    document.getElementById("demo").innerHTML = words;
}

function cash(a,b)
{
  var mltpl = ["crore ","lakh ","thousand ","hundred ","rupees ","and ","paise "];
    var fig = [10000000,100000,1000,100];
    var demo = "",amt = "",i;
    a = Math.abs(a);
    b = Math.abs(b);
    if(a==0)
    {
        amt = "zero ";
    }
    for (i = 0; i < 4; i++) 
    {
       if(Math.floor(a/(fig[i])) != 0)
        {
          demo=ntw(Math.floor(a/(fig[i])));
            a-= Math.floor((a/(fig[i])))*(fig[i]);
            amt = amt + demo + mltpl[i];
        }
    }
    if(a!=0)
    {
        demo=ntw(a);
        a-= a;
        amt = amt + demo;
    }
    if(a==0)
    {
        amt = amt + mltpl[4];
    }
    if(a==0 && b!=0)
    {
        demo=ntw(b);
        amt = amt + mltpl[5] + demo + mltpl[6];
    }
    return amt;
}
function ntw(n)
{
  var pre =["zero ","one ","two ","three ","four ","five ","six ",
  "seven ","eight ","nine ","ten ","eleven ","twelve ","thirteen ",
  "fourteen ","fifteen ","sixteen ","seventeen ","eighteen ","ninteen ",
  "twenty ","thirty ","forty ","fifty ","sixty ","seventy ","eighty ","ninty "];
  var d1 = "", d2 = "";
  if(n==0) 
    {
      return "";
    }
    else if(n<=19 && n>=10)
    {
        switch(n)
      {
          case 10 :
          case 11 :
          case 12 :
          case 13 :
          case 14 :
          case 15 :
          case 16 :
          case 17 :
          case 18 :
          case 19 :d1 = pre[n];
                   break;
          default : break;
      }
        return d1;
    }
    else if((n>0 && n<10)||(n>19 && n<100))
    {
      var m=n;
      switch(Math.floor(n/10))
      {
          case 2 :
          case 3 :
          case 4 :
          case 5 :
          case 6 :
          case 7 :
          case 8 :
          case 9 :d1=pre[Math.floor(n/10)+18];
                n-= Math.floor(n/10)*10;
                  break;
          default: break;
      }
      switch(n)
      {
          case 0 :d2='';
                  break;
          case 1 :
          case 2 :
          case 3 :
          case 4 :
          case 5 :
          case 6 :
          case 7 :
          case 8 :
          case 9 : d2=pre[n];
                 break;
          default: break;
      }
      if(m<10)
      {
          return d2;
      }
      else
      {
          //d1 = d1.concat(d2);
          d1 = d1 + d2;
          return d1;
      }
    }
    else
    {
      return "invalid input ";
    }
}