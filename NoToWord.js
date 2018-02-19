function myFunction()
{
    var a=document.getElementById("rupees").value;     // a have the value of rupees.
    var b=document.getElementById("paise").value;      // b have the value of paise.
    var words= cash(a,b);
    document.getElementById("demo").innerHTML = words;
}

function cash(a,b)                //this function returns the final  complete string. 
{
  var mltpl = ["Crore ","Lakh ","Thousand ","Hundred ","Rupees ","and ","Paise "];     // suffixes. 
    var fig = [10000000,100000,1000,100];                     // amount respestive to suffixes above.
    var demo = "",amt = "",i;                    // amt will contain the complete string, demo is temprary string and i is loop variable.
    a = Math.abs(a);                        
    b = Math.abs(b);                        //taking the absolute values of a & b to include -ve value cases for a & b.
    if(a==0)
    {
        amt = "zero ";                      // print zero if rupees value is 0.
    }
    for (i = 0; i < 4; i++)   // this loop will join the no. & their respective multiple suffixes.
    {
       if(Math.floor(a/(fig[i])) != 0)    //this condition will return true if amount is a multiple of crore,lakh,thousand or hundred respectively after each loop counter. 
        {
          demo = ntw(Math.floor(a/(fig[i])));     //here we are storing the 2 digit word string in demo for respective multiples by calling ntw function.
            a-= Math.floor((a/(fig[i])))*(fig[i]);  // subtracting the amount from a which is already taken above.
            amt = amt + demo + mltpl[i];            // joining the 2 digit word and its corresponding multiplier suffix.
        }
    }
    if(a!=0)      // in above loop we have taken the amount which have multiplier suffixes but here we are joining words for 1 to 99.
    {
        demo=ntw(a);
        a-= a;
        amt = amt + demo;
    }
    if(a==0)
    {
        amt = amt + mltpl[4];  // here we are joining word 'Rupees' to the string.
    }
    if(a==0 && b!=0)          // here we are adding the words for paise also if b is not 0.
    {
        demo=ntw(b);
        amt = amt + mltpl[5] + demo + mltpl[6];
    }
    return amt;
}
function ntw(n)              //this function takes int no.(1 to 99 only) as parameter & return corresponding no. in words as a string. 
{
  var pre =["Zero ","One ","Two ","Three ","Four ","Five ","Six ",
  "Seven ","Eight ","Nine ","Ten ","Eleven ","Twelve ","Thirteen ",
  "Fourteen ","Fifteen ","Sixteen ","Seventeen ","Eighteen ","Nineteen ",
  "Twenty ","Thirty ","Forty ","Fifty ","Sixty ","Seventy ","Eighty ","Ninety "];  // here these words are placed in sequence.
  var d1 = "", d2 = "";
  if(n==0)                  // if n is 0 then return empty string. 
    {
      return "";
    }
    else if(n<=19 && n>=10)
    {      // words are stored in sequencial order corresponding to the value of n in array named pre.
           //here we are using array values directly by case value or n.
      d1 = pre[n];      
      return d1;
    }
    else if((n>0 && n<10)||(n>19 && n<100))   //this condition includes the no. other than (10 to 19) from (1 to 99).
    {
      if(n>19 && n<100)     // this includes 20,30,40,50,60,70,80,90 (here we are using Math.floor function to take greatest integer value).
      {
        d1=pre[Math.floor(n/10)+18];    //here we are using array values by adding 18 to the case value.
        n-= Math.floor(n/10)*10;        // taking the unit's place of n.
      }

      if (n>0 && n<10)         //this includes 1,2,3,4,5,6,7,8,9 
      {
        d2=pre[n];             //here we are using array values directly by case value or n.
      }

      //d1 = d1 + d2;           // here we are joining unit's & ten's place to make a 2 digit word string.
      return d1 + d2;
    }
    else                       // error message will be returned if value of n is not between 1 to 99.
    {
      return "invalid input ";
    }
}