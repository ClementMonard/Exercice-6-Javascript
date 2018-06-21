//Déclaration de la fonction
function division(){
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  if(/^[0-9.]+$/.test(firstNumber && secondNumber) == true) {
    //Récupération du reste de la division
    var result = firstNumber % secondNumber;
    alert(result);
  }else {
    alert('Ceci n\'est pas un chiffre.');
  }
}
