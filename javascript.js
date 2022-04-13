const btn1 = document.getElementById("one");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");
const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");
const btn0 = document.getElementById("0");
const btndiv = document.getElementById("/");
const btnmult = document.getElementById("X");
const btnadd = document.getElementById("+");
const btnsubtract = document.getElementById("-");
const btnclr = document.getElementById("clear");
const btnenter = document.getElementById("enter");
let display = document.getElementById("display");
//let disCounter = document.getElementById("counter")
let displayCounter = 0;
//disCounter.textContent = displayCounter;
let currDisplay = "";
display.textContent = "";

/* Theres definitely a more efficient way to do this part, but wanted to practice to gain more muscle memory
for typing event listeners
*/

btn1.addEventListener('mouseover', ()=>{
    btn1.style.backgroundColor = "#ECB";
    btn1.style.borderColor = "#ECB365";
})
btn1.addEventListener('mouseleave', ()=>{
    btn1.style.backgroundColor = "#ECB365";
    btn1.style.borderColor = "#7a5f07";
})
btn2.addEventListener('mouseover', ()=>{
    btn2.style.backgroundColor = "#ECB";
    btn2.style.borderColor = "#ECB365";
})
btn2.addEventListener('mouseleave', ()=>{
    btn2.style.backgroundColor = "#ECB365";
    btn2.style.borderColor = "#7a5f07";
})
btn3.addEventListener('mouseover', ()=>{
    btn3.style.backgroundColor = "#ECB";
    btn3.style.borderColor = "#ECB365";
})
btn3.addEventListener('mouseleave', ()=>{
    btn3.style.backgroundColor = "#ECB365";
    btn3.style.borderColor = "#7a5f07";
})
btn4.addEventListener('mouseover', ()=>{
    btn4.style.backgroundColor = "#ECB";
    btn4.style.borderColor = "#ECB365";
})
btn4.addEventListener('mouseleave', ()=>{
    btn4.style.backgroundColor = "#ECB365";
    btn4.style.borderColor = "#7a5f07";
})
btn5.addEventListener('mouseover', ()=>{
    btn5.style.backgroundColor = "#ECB";
    btn5.style.borderColor = "#ECB365";
})
btn5.addEventListener('mouseleave', ()=>{
    btn5.style.backgroundColor = "#ECB365";
    btn5.style.borderColor = "#7a5f07";
})

btn6.addEventListener('mouseover', ()=>{
    btn6.style.backgroundColor = "#ECB";
    btn6.style.borderColor = "#ECB365";
})
btn6.addEventListener('mouseleave',()=>{
    btn6.style.backgroundColor = "#ECB365";
    btn6.style.borderColor = "#7a5f07";
})
btn7.addEventListener('mouseover', ()=>{
    btn7.style.backgroundColor = "#ECB";
    btn7.style.borderColor = "#ECB365";
})
btn7.addEventListener('mouseleave',()=>{
    btn7.style.backgroundColor = "#ECB365";
    btn7.style.borderColor = "#7a5f07";
})

btn8.addEventListener('mouseover',()=>{
    btn8.style.backgroundColor = "#ECB";
    btn8.style.borderColor = "#ECB365";
})
btn8.addEventListener('mouseleave',()=>{
    btn8.style.backgroundColor = "#ECB365";
    btn8.style.borderColor = "#7a5f07";
})

btn9.addEventListener('mouseover', ()=>{
    btn9.style.backgroundColor = "#ECB";
    btn9.style.borderColor = "#ECB365";
})
btn9.addEventListener('mouseleave', ()=>{
    btn9.style.backgroundColor = "#ECB365";
    btn9.style.borderColor = "#7a5f07";
})
btn0.addEventListener('mouseover',()=>{
    btn0.style.backgroundColor = "#ECB";
    btn0.style.borderColor = "#ECB365";
})
btn0.addEventListener('mouseleave', ()=>{
    btn0.style.backgroundColor = "#ECB365";
    btn0.style.borderColor = "#7a5f07";
})
btndiv.addEventListener('mouseover', ()=>{
    btndiv.style.backgroundColor = "#ECB";
    btndiv.style.borderColor = "#ECB365";
})
btndiv.addEventListener('mouseleave', ()=>{
    btndiv.style.backgroundColor = "#ECB365"
    btndiv.style.borderColor = "#7a5f07";
})
btndiv.addEventListener('click',()=>{
    currDisplay+="/";
    display.textContent += "/";
    displayCounter+=1;
    checkCharCount(displayCounter);
})
btnmult.addEventListener('mouseover',()=>{
    btnmult.style.backgroundColor = "#ECB";
    btnmult.style.borderColor = "#ECB365";
})
btnmult.addEventListener('mouseleave', ()=>{
    btnmult.style.backgroundColor = "#ECB365";
    btnmult.style.borderColor = "#7a5f07";
})
btnmult.addEventListener('click',()=>{
    currDisplay+="x";
    display.textContent += "x";
    displayCounter+=1;
    checkCharCount(displayCounter);
})
btnadd.addEventListener('mouseover', ()=>{
    btnadd.style.backgroundColor = "#ECB";
    btnadd.style.borderColor = "#ECB365";
})
btnadd.addEventListener('mouseleave', ()=>{
    btnadd.style.backgroundColor = "#ECB365";
    btnadd.style.borderColor = "#7a5f07";
})
btnadd.addEventListener('click',()=>{
    currDisplay+="+";
    display.textContent += "+";
    displayCounter+=1;
    checkCharCount(displayCounter);
})
btnsubtract.addEventListener('mouseover',()=>{
    btnsubtract.style.backgroundColor = "#ECB";
    btnsubtract.style.borderColor = "#ECB365";
})
btnsubtract.addEventListener('mouseleave', ()=>{
    btnsubtract.style.backgroundColor = "#ECB365";
    btnsubtract.style.borderColor = "#7a5f07";
})
btnsubtract.addEventListener('click',()=>{
    currDisplay+="-";
    display.textContent += "-";
    displayCounter+=1;
    checkCharCount(displayCounter);
})
btnclr.addEventListener('mouseover',()=>{
    btnclr.style.backgroundColor = "#ECB";
    btnclr.style.borderColor = "#ECB365";
})
btnclr.addEventListener('mouseleave', ()=>{
    btnclr.style.backgroundColor = "#ECB365";
    btnclr.style.borderColor = "#7a5f07";
})
btnclr.addEventListener('click',()=>{
    currDisplay+="";
    display.textContent = "";
    displayCounter = 0;
})
btnenter.addEventListener('mouseover', ()=>{
    btnenter.style.backgroundColor = "#ECB";
    btnenter.style.borderColor = "#ECB365";
})
btnenter.addEventListener('mouseleave', ()=>{
    btnenter.style.backgroundColor = "#ECB365";
    btnenter.style.borderColor = "#7a5f07";
})
btnenter.addEventListener('click',()=>{
    let num1 = "";
    let num2 = "";
    let operator = "";
    let operatorCounter = 0;
    for (let i = 0; i < display.textContent.length; i++ ){
        let testChar = display.textContent.charAt(i);
        if ((testChar >= '0' && testChar <= '9') || testChar == "."){
            num1+=testChar;
        } else {
            operator+=testChar;
            operatorCounter+=1;
            break;
        }
    }
    let num2Start = num1.length + operator.length;

    for ( let k = num2Start; k < display.textContent.length; k++){
        let testChar = display.textContent.charAt(k);
        if ((testChar >= '0' && testChar <= '9') || testChar == "."){
            num2+=testChar;
        } else {
            operatorCounter+=1;
            break;
        }
    }

    

    console.log(num1 + " " + num2 + " " + operator)

    handleOperators(num1, num2, operator);
})

//This section will handle adding numbers to the display


btn1.addEventListener('click',()=>{
    currDisplay+="1";
    display.textContent += "1";
    displayCounter+=1;
    checkCharCount(displayCounter);
})
btn2.addEventListener('click',()=>{
    currDisplay+="2";
    display.textContent += "2";
    displayCounter+=1;
    checkCharCount(displayCounter);
})
btn3.addEventListener('click',()=>{
    currDisplay+="3";
    display.textContent += "3";
    displayCounter+=1;
    checkCharCount(displayCounter);
})
btn4.addEventListener('click',()=>{
    currDisplay+="4";
    display.textContent += "4";
    displayCounter+=1;
    checkCharCount(displayCounter);
})
btn5.addEventListener('click',()=>{
    currDisplay+="5";
    display.textContent += "5";
    displayCounter+=1;
    checkCharCount(displayCounter);
})
btn6.addEventListener('click',()=>{
    currDisplay+="6";
    display.textContent += "6";
    displayCounter+=1;
    checkCharCount(displayCounter);
})
btn7.addEventListener('click',()=>{
    currDisplay+="7";
    display.textContent += "7";
    displayCounter+=1;
    checkCharCount(displayCounter);
})
btn8.addEventListener('click',()=>{
    currDisplay+="8";
    display.textContent += "8";
    displayCounter+=1;
    checkCharCount(displayCounter);
})
btn9.addEventListener('click',()=>{
    currDisplay+="9";
    display.textContent += "9";
    displayCounter+=1;
    checkCharCount(displayCounter);
})
btn0.addEventListener('click',()=>{
    currDisplay+="0";
    display.textContent += "0";
    displayCounter+=1;
    checkCharCount(displayCounter);
})



const divide = function (num1, num2){
    let res = parseFloat(num1) / parseFloat(num2);
    return res;
}

const multiply = function (num1, num2){
    let res = parseFloat(num1) * parseFloat(num2);
    return res;
}

const subtract = function (num1, num2){
    let res = parseFloat(num1) - parseFloat(num2);
    return res;
}
const addition = function (num1, num2){
    let res = parseFloat(num1) + parseFloat(num2);
    return res;
}

//handles all of the operator functions and returns the result
const handleOperators = function (num1, num2, operator){
    if (operator == "x"){
        let result = multiply(num1, num2);
        if (result.length > 12){
            result = "CHAR OVLD!";
            
        }
        display.textContent = result.toFixed(2);
    } else if (operator == "/"){
        if (num2 == "0"){
            //display.style.fontSize = "14px";
            display.textContent = "CANNOT /0."
            
        } else {
            let result = divide(num1,num2);
            if (result.length > 12){
                result = "CHAR OVLD!";
                
            }
            
            display.textContent = result.toFixed(2);
        }
    } else if (operator == "+"){
        let result = addition(num1, num2)
        if (result.length > 12){
            result = "CHAR OVLD!";
        }
        display.textContent = result.toFixed(2);
    } else if (operator == "-"){
        let result = subtract(num1, num2)
        if (result.length > 12){
            result = "CHAR OVLD!";
        }
        display.textContent = result.toFixed(2);
    }
    
    return result;
}

//use this to make sure characters do not overflow out of display
const checkCharCount = function (counter){
    if (counter > 12){
        display.textContent = "CHAR OVLD!"
    }
}