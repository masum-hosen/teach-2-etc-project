const bar = document.getElementById("bar");
const menu = document.getElementById("menu");


if(bar){
    bar.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}

// bar.addEventListener("click", ()=>{
//     if (menu.style.display === "block") {
//         menu.style.display = "none";
//     }else{
//         menu.style.display = "block";
//     }
// })

