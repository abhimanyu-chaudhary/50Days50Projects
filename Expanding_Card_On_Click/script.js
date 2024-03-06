document.querySelectorAll(".card").forEach(card =>{
        card.addEventListener('click', ()=>{
            removeActiveClass();
            card.classList.add("active");
        })
})

function removeActiveClass(){
    document.querySelectorAll(".card").forEach(card =>{
        card.classList.remove("active");
    })
}