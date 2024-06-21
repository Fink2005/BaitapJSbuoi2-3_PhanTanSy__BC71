


function wage() {
    var calculate1 = parseFloat(document.getElementById("wageAday").value)
    var calculate2 = parseFloat(document.getElementById("workDay").value)
   var sum = calculate1 * calculate2
   document.getElementById("outPut").innerText = "luong nhan duoc:" + sum;
   
}



function average() {
    var num1 = parseFloat(document.getElementById("aver1").value)
    var num2 = parseFloat(document.getElementById("aver2").value)
    var num3 = parseFloat(document.getElementById("aver3").value)
    var num4 = parseFloat(document.getElementById("aver4").value)
    var num5 = parseFloat(document.getElementById("aver5").value)
   var trungBinh = (num1 + num2 + num3 + num4 + num5) / 5
   document.getElementById("outPut2").innerText = "result:" + trungBinh;
   
}


function change() {
    var Vietnamdong = parseFloat(document.getElementById("vnd").value)

   var currency = Vietnamdong * 23500
   var phay = currency.toLocaleString()
   document.getElementById("outPut3").innerText = "vnd to dollar:" + phay;
   
}



function calculate() {
    var calculate1 = parseFloat(document.getElementById("chieudai").value)
    var calculate2 = parseFloat(document.getElementById("chieurong").value)

   var dientich = calculate1 * calculate2
   var chuvi = (calculate1 + calculate2) * 2
  
   document.getElementById("outPut4").innerText = "Dien tich va chu vi:" + dientich  + " va " + chuvi;
   
}



function calculate2() {
    var calculate1 = parseFloat(document.getElementById("num1").value)
  

   var sum1 = calculate1 % 10
   var sum2 = calculate1 / 10
   var sum3 = sum1 + sum2
   var sum4 = Math.floor(sum3)
  
   document.getElementById("outPut5").innerText = "tong so 2 chu ky: " + sum4
   
}
