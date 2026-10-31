function addNumbers(a, b){
    return a+b;
}

function testCode(){
    const result = addNumbers(10, 5);
    const output = document.getElementById("output");

    if(result === 15){
        output.textContent = "Test Passed! Result =" + result;
        output.style.color = "green";
    }else{
        output.textContent = "Test Failed!";
        output.style.color = "red";
    }
}