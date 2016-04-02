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
  var besede = ['stol', 'miza', 'pero', 'jablana', 'WTF', 'LOL'];
  var rNum = (Math.floor((Math.random() * 6)));
  var izbranaBeseda = besede[rNum];
  alert(izbranaBeseda);
  var i = 1;
  alert('Ugani ' + izbranaBeseda.length + ' mestno besedo.');
  while((izbranaBeseda.length > 0) && (i < 10)) {
    inputChar = prompt('Vnesite črko:');
    if (izbranaBeseda.includes(inputChar)) {
      izbranaBeseda = izbranaBeseda.replace(inputChar, '');
      //izbranaBeseda = izbranaBeseda.substr(0, izbranaBeseda.indexOf(inputChar)) + izbranaBeseda.substr(izbranaBeseda.indexOf(inputChar) + 1);
    }
    alert(izbranaBeseda);
    i++;
  }
}

Vislice();
