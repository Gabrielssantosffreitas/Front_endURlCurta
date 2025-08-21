function isLogado(){
    alert("Voce logado")
    if(window.localStorage.getItem("logado") != "true"){
        window.location.href = "login.html"
    }
}
window.document.addEventListener("DOMContentLoaded", isLogado )