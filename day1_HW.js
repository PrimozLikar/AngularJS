//General
function isNumber(testNum) {
  return !isNaN(parseFloat(testNum)) && isFinite(testNum);
}

//FizzBuzz
function FizzBuzz() {
  var inputNum = prompt('Vpiši štev:');
  var outArray = [];
  for (i=1;i<=inputNum;i++) 
    {
      if(i%3===0 && i%5===0){
        outArray.push('fizzbuzz');
      }
      else if(i%3===0) {
        outArray.push('fizz');      
      }
      else if(i%5===0) {
        outArray.push('buzz');      
      }  
      else
        {
        outArray.push(i);         
        }
    }
  alert(outArray);
}

//FizzBuzz();
  
//UganiStevilo
function UganiStevilo() {
  var rNum=Math.floor((Math.random() * 100) + 1);
  var i=0;
  var inputNum = -1;
  while(rNum != inputNum) {
    inputNum = prompt('Ugani številko med 0 in 100:');
    if(inputNum<rNum){
      alert ('Skrito število je večje');
    }
    else if(inputNum>rNum) {
      alert ('Skrito število je manjše');    
    }
    i++;
  }
  alert ('Končno si uganil, da je ' + rNum + "! Število poskusov:"+i);    
}

function UganiStevilo2() {
  var lBound = parseInt(prompt('Spodnja meja:'));
  var uBound = parseInt(prompt('Zgornja meja:'));
  if(!(isNumber(lBound) && isNumber(uBound))) {
    alert('Vnesi cela števila!');
    return;
  }
  var rNum = (lBound + Math.floor((Math.random() * uBound)));
  var i = 0;
  var inputNum = rNum - 1;
  var outArray = [];
  while((rNum != inputNum) && (i < 15)) {
    inputNum = prompt('Ugani številko med ' + lBound + ' in ' + uBound + ':');
    while(!isNumber(inputNum)) {
      alert('Vnesi celo število!');
      inputNum = prompt('Vnesi številko med ' + lBound + ' in ' + uBound + ':');
    }
    outArray.push(inputNum);     
    if(inputNum < rNum){
      alert ('Skrito število je večje');
    }
    else if(inputNum > rNum) {
      alert ('Skrito število je manjše');    
    }
    i++;
  }    
  if(inputNum == rNum) {
    alert ('Končno si uganil, da je ' + rNum + '! Število poskusov: ' + i + '. Tvoji poizkusi: ' + outArray);  
  }
  else  {
    alert ('Nisi uspel uganiti v ' + i + ' poizkusih. Skrito število je bilo ' + rNum + '. Tvoji poizkusi: ' + outArray);    
  }
}

//UganiStevilo2();


function Vislice() {
  var besede = ['stol', 'miza', 'pero', 'jablana', 'WTF', 'LOL', 'serveti', 'brezobzirnost', 'palačinka'];
  //var besede = ['jablana', 'palačinka'];
  var rNum = (Math.floor((Math.random() * besede.length)));
  var izbranaBeseda = besede[rNum];
  var origBeseda = izbranaBeseda;
  var maskBeseda = izbranaBeseda.replace(/./g, '_');
  //alert(izbranaBeseda);
  //alert(maskBeseda);
  var stPoskusov = 16;
  var i = 0;
  var j = 0;
  var k = 0;
  var l = 0;
  var indx = 0;
  alert('Ugani ' + izbranaBeseda.length + ' mestno besedo v ' + stPoskusov + ' poizkusih.');
  while((l < izbranaBeseda.length) && (k < stPoskusov)) {
    inputChar = prompt('Vnesite črko:');
    if(inputChar.length != 1) {
      alert('Veljaven vnos je ena sama črka.');
      continue;
    }
    while (izbranaBeseda.toLowerCase().includes(inputChar.toString().toLowerCase())) {
      indx = izbranaBeseda.toLowerCase().indexOf(inputChar.toString().toLowerCase());
      maskBeseda = maskBeseda.substr(0, origBeseda.indexOf(inputChar.toString(), indx)) + inputChar.toString() + maskBeseda.substr(origBeseda.indexOf(inputChar.toString(), indx) + 1);
      izbranaBeseda = izbranaBeseda.replace(izbranaBeseda.charAt(indx), '@');
      j++;
      l++;
    }
    if(j > 0) {
      alert('Odlično! Črka ' + inputChar.toString() + ' se ponovi ' + j + ' krat.');
      j = 0;
    }
    else {
      i++;
      alert('Te črke ni v besedi. Imaš še ' + (stPoskusov - i).toString() + ' poskusov.');      
    }
    k++;
    //alert(izbranaBeseda);
    alert(maskBeseda);
  }
  if(l == izbranaBeseda.length) {
    alert('Čestitam, besedo ' + origBeseda + ' si uganil v ' + k + ' poizkusih.');    
  }
}

Vislice();
