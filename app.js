const input = document.getElementById("input");
const result = document.getElementById("result");
const inputType = document.getElementById("inputType");
const resulType = document.getElementById("resultType");

let inputTypeValue, resultTypeValue;

input.addEventListener("keyup", myResult)
inputType.addEventListener("change",myResult)
resulType.addEventListener("change",myResult)

inputTypeValue = inputType.value;
resultTypeValue = resulType.value;


function myResult() {

    inputTypeValue = inputType.value;
    resultTypeValue = resulType.value;
    
    if (inputTypeValue === "meter" && resultTypeValue === "centimeter") {
        result.value = Number(input.value) * 100;
    }
    else if(inputTypeValue === "meter" && resultTypeValue==="kilometer"){
        result.value = Number(input.value) * 0.001;
    }
    else if(inputTypeValue === "meter" && resultTypeValue==="meter"){
        result.value = Number(input.value);
    }
    if (inputTypeValue === "kilometer" && resultTypeValue === "meter") {
        result.value = Number(input.value) * 1000;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue==="centimeter"){
        result.value = Number(input.value) * 100000;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue==="kilometer"){
        result.value = Number(input.value);
    }
    if (inputTypeValue === "centimeter" && resultTypeValue === "meter") {
        result.value = Number(input.value) / 100;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue==="kilometer"){
        result.value = Number(input.value) / 100000;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue==="centimeter"){
        result.value = Number(input.value);
    }
}