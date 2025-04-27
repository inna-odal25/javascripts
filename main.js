//ADDITION
function add(){
  const num1 = document.getElementById("value1").value;
  const num2 = document.getElementById("value2").value;
  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers!");
    return;
  }

  const total = parseFloat(num1) + parseFloat(num2);
  // alert(total);
  document.getElementById("result").innerHTML = total;
}

//SUBTRACTION
function sub(){
  const num1 = document.getElementById("value1").value;
  const num2 = document.getElementById("value2").value;
  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers!");
    return;
  }

  //if i use PARSEINT i can't handle the DECIMAL
  // const total = parseInt(num1) - parseInt(num2);
  const total = parseFloat(num1) - parseFloat(num2);
  // alert(total);
  document.getElementById("result").innerHTML = total;
}

//MULTIPLICATION
function multi(){
  const num1 = document.getElementById("value1").value;
  const num2 = document.getElementById("value2").value;
  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers!");
    return;
  }

  const total = parseFloat(num1) * parseFloat(num2);
  // alert(total);
  document.getElementById("result").innerHTML = total;
}

//DIVISION
function div(){
  const num1 = document.getElementById("value1").value;
  const num2 = document.getElementById("value2").value;
  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers!");
    return;
  }

  if(parseFloat((num2)) === 0){
    alert("Can't divide by zero!")
    return;
  }
  const total = parseFloat(num1) / parseFloat(num2);
  
  // alert(total);
  document.getElementById("result").innerHTML = total;
}
