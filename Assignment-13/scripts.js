function printNumbers() {
    let result = "";

    for (let i = 1; i <= 10; i++) {
        result += i + " ";
    }

    document.getElementById("output1").textContent = result;
}

function printEvenNumbers() {
    let result = "";

    for (let i = 2; i <= 20; i += 2) {
        result += i + " ";
    }

    document.getElementById("output2").textContent = result;
}

function calculateSum() {
    let sum = 0;

    for (let i = 1; i <= 10; i++) {
        sum += i;
    }

    document.getElementById("output3").textContent =
        "Sum = " + sum;
}

function checkPassword(){
    let password = "kartik";

    if (password === "kartik"){
       result= true;
    }else{
        result = false;
    }

    document.getElementById("output4").textContent =
        result;

}