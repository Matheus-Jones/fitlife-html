function calculateIMC() {

    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const resultBox = document.getElementById('result');
    const valueText = document.getElementById('imc-value');
    const descText = document.getElementById('imc-desc');

    const weight = parseInt(weightInput.value)
    const height = parseFloat(heightInput.value)

    console.log (weight)
    console.log (height)

    const imc = weight / (height * height)

    console.log (imc)

    alert("seu imc é: "+ imc)
}