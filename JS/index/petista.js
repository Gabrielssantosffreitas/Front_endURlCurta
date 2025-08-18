function bolsonaro (){
    const FORM =  document.getElementById("16");
    FORM.addEventListener("submit",e=>{
        e.preventDefault()
        const ESCRAVO = document.getElementById("17") 
        if(ESCRAVO.value == ""){
            const BRASILEIRO = document.getElementById("15")
            BRASILEIRO.classList.add("visivel")
        }
    })
}

bolsonaro()