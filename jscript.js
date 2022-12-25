let number;
const generating_number = ()=>{
    let n1 = Math.random();
    let n2 = n1*10;
    n2 = Math.trunc(n2);
    n2 = (n2%6)+1;
    number=n2;
    console.log(number);  
}
generating_number();
const generate_number_btn_click =()=>{
    document.querySelector("#section1").style.display = "none";
    document.querySelector("#section2").style.display = "none";
    document.querySelector("#section3").style.display = "block";

    setTimeout(()=>{
        document.querySelector("#ip_field").value="";
        document.querySelector("#section1").style.display = "none";
        document.querySelector("#section2").style.display = "block";
        document.querySelector("#section3").style.display = "none";
    },3000)
}

const check_number =()=>{
    let value = document.querySelector("#ip_field").value;
    if(value == number)
    {
        alert("Congreates,You win");
    }
    else
    {
        alert("Try again ");
    }
    generating_number();
    generate_number_btn_click();
}


