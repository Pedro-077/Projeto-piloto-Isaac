function alterartema(){
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if (tema === "dark"){
        document.querySelector("html").setAttribute("data-bs-theme", "ligth");
        document.querySelector("#alterartema").innerHTML = `<i class="bi bi-moon"></i>`
    } else{
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterartema").innerHTML = `<i class="bi bi-lightbulb"></i>`
    }
}