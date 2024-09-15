// let mass = 80; // +prompt('Weight'); // in kg
// let height = 180; //+prompt('Height'); // in meters

let bmi = mass / height ** 2 
console.log(bmi);

bmi = Math.round(bmi * 100) / 100;
// result.innerHTML = bmi;

function calc() {
    let height = +userHeight.value;
    let weight = +userWeight.value;
    
    if (height > 3 ) { //если больше 3х, значит пользователь явно ввёл сантиметры, а не метры
        height = height / 100; // преобразовываем сантиметры в метры
    } 

    let bmi = weight / height ** 2;
    bmi = Math.round(bmi * 100) / 100;
    result.innerHTML = bmi;

    let comment;
    if (bmi <= 16) {
        comment = "Выраженный дефицит массы тела";
    } else if (bmi >= 16.001 && bmi <= 18.500) {
        comment = "Недостаточная (дефицит) масса тела";
    } else if (bmi >= 18.501 && bmi <= 25.000) {
        comment = "Индекс массы тела в норме";
    } else if (bmi >= 25.001 && bmi <= 30.000) {
        comment = "Избыточная масса тела (предожирение)";
    } else if (bmi >= 30.001 && bmi <= 35.000) {
        comment = "Ожирение 1 степени";
    } else if (bmi >= 35.001 && bmi <= 40.000) {
        comment = "Ожирение 2 степени";
    } else if (bmi >= 40) {
        comment = "Ожирение 3 степени";
    } else {comment = "Undefined BMI";}

    commentOutput.innerHTML = "Это означает: " + comment + ".";

}


