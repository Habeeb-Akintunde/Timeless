let productHidden = document.querySelectorAll(`.product-cards-hide`)
let productcards = document.querySelectorAll(`.product-cards`)
let number2 = document.getElementById("number2")
number2.setAttribute("data-action", "number2")
let number1 = document.getElementById("number1")
number1.setAttribute("data-action", "number1")
let part = document.getElementById("part")


part.addEventListener("click", (event)=>{
    let userTarget = event.target
    
    let userData = userTarget.dataset.action 
    
    if (userData === "number2") {
        productcards.forEach((item)=>{
            item.style.display = "none" 
        })
        productHidden.forEach((view)=>{
            view.style.display = "flex"
        })
        number1.style.backgroundColor = "#625B71"
        number2.style.backgroundColor = "#1D192B"
    }else if(userData === "number1") {
        productcards.forEach((item)=>{
            item.style.display = "flex" 
        })
        productHidden.forEach((view)=>{
            view.style.display = "none"
        })
        number1.style.backgroundColor = "#1D192B"
        number2.style.backgroundColor = "#625B71"
    }
    
})
