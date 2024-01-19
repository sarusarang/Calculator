
function add(e) {

    display.value += e.target.id

    console.log(e);
}

clr = ()=>{

    display.value=" "

}

getres =()=>{

    if(display.value==" "){
        alert("enter values")
    }
    else{

        try{

            display.value = eval(display.value)
        }

        catch{

            alert("invalid expression")
            display.value=" "

        }


    }

}

backspace = ()=>{

     display.value = display.value.slice(0,-1);

}