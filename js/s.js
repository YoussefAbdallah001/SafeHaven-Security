window.onscroll = ()=>{
    if (document.documentElement.scrollTop > 300) {
        btn.style.display = "block"
    } else {

        btn.style.display = "none"
    }
}
let btn = document.getElementById("kkk");
btn.addEventListener("click", () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
})