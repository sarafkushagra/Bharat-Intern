let detel = document.querySelector(".detel");
let home = document.querySelector("#home");
let aboutme = document.querySelector("#aboutme")
let connect = document.querySelector(".connect")
let inf = document.querySelector(".inf")

aboutme.addEventListener("click", () => {
    detel.style.display = "none";
    connect.style.display = "none";
    inf.style.display = "block";
})

home.addEventListener("click", () => {
    detel.style.display = "block";
    connect.style.display = "block";
    inf.style.display = "none";
})

