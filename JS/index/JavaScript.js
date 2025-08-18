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

handleFormSubmit();