window.document.addEventListener('DOMContentLoaded', () => {

if(window.localStorage.getItem("logado") != "true"){
    window.location.href="/login.html";
}

})
