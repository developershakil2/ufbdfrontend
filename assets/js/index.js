

const closeFunc = ()=>{
    pop.style.display="block";
    pop.style.position = "fixed";
}



setTimeout(closeFunc, 10000);
const pop = document.querySelector("#popup");

function popup(){
   pop.style.display = "none" 
    

}



const openpop = ()=>{
    pop2.style.display = "block"
    pop2.style.position = "fixed";
}


const pop2 = document.querySelector("#popup2");

function popup2(){
   pop2.style.display = "none" 
    

}


