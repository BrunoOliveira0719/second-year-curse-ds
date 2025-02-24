function calculatorIMC() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    if (weight && height) {
        const imc = (weight / (height * height)).toFixed(2)

        let classification = "";
                
        if (imc < 18.5) {
            classification = "Underweight";
        } else if (imc < 25) {
            classification = "Normal weight";
        } else if (imc < 30) {
            classification = "Overweigtht";
        } else {
            classification = "Obsesity";
        }
        document.getElementById("result").innerHTML =  `Your IMC is: ${imc}, and the classification is: ${classification}!`;
    } else {
        document.getElementById("result").innerHTML = "Please write number"
    }
}
