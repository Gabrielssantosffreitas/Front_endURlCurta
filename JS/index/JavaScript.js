function handleFormSubmit() {
    const form = document.getElementById("16");
    form.addEventListener("submit", e => {
        e.preventDefault();
        const urlInput = document.getElementById("17");
        if (urlInput.value == "") {
            const errorSpan = document.getElementById("15");
            errorSpan.classList.add("visivel");
        }
    });
}

// quando cliclar no btn  ir para uma nova pagaina html
// pegar o btn
const btnVerlinks = document.getElementById("14")
// escuatar envento clcik 
btnVerlinks.addEventListener("click", e =>{
// abriar um pagania html 
const Troca = window.location.href = "/pages/Capivara/index.html"
} )





handleFormSubmit();