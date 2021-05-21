function convertFahrToCelsius(ferh){
    
if (typeof(ferh) == "number") {
  var cel = (ferh - 32) * 5/9;
  return cel.toFixed(4)
} else {
    return "  is not a valid number but a "+ typeof(ferh)
}
}
const newNumber=convertFahrToCelsius(10)
console.log(newNumber)




//question number 2

function checkYuGiOh(n){
    let newArr = [];
    if((typeof n === "string" && n.match(/[a-zA-Z]/gi)) || typeof n === "object" || typeof n === "undefined" || typeof n === "boolean"){
            console.log(`invalid parameter: ${n}`);
    }else{
    let j;
    for(j = n; j >0; j--){
        newArr.unshift(n--)
        for (i = 0; i < newArr.length; i++){
            if(newArr[i] % 2 === 0 && newArr[i] % 3 === 0 && newArr[i] % 5 === 0){
                newArr[i] = "yu-gi-oh"
            }else if(newArr[i] % 2 === 0 && newArr[i] % 3 === 0){
                 newArr[i] = "yu-gi"
            }else if(newArr[i] % 2 === 0 && newArr[i] % 5 === 0){
                newArr[i] = "yu-oh"
            }else if(newArr[i] % 3 === 0 && newArr[i] % 5 === 0){
                newArr[i] = "gi-oh" 
            }else if(newArr[i] % 2 === 0){
                newArr[i] =  "yu"
            }else if(newArr[i] % 3 === 0){
                newArr[i] =  "gi"
            }else if(newArr[i] % 5 === 0){
                newArr[i] = "oh"
            }else{
                newArr[i]
            }           
        }
    }
    console.log (newArr);
    }
}

checkYuGiOh(30)
checkYuGiOh(10)
checkYuGiOh("5")
checkYuGiOh("fizzbuzz is meh")
checkYuGiOh(true)
checkYuGiOh([10])
checkYuGiOh({value: 10})
checkYuGiOh()
