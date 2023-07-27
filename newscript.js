let result = document.getElementById("inputbox");

let calc=(number)=>{
    result.value += number;
}

let totalresult=()=>{
    try{
        result.value=eval(result.value);
    }
    catch(err){
        alert("Please enter the valid inputs.")
    }
}

let clr=()=>{
    result.value = " ";
}

let del=()=>{
    result.value = result.value.slice(0,-1);
}