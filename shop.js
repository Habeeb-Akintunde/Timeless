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

// cart and adding
let cart = document.querySelectorAll(`.cart`)
cart.forEach((item, index)=>{
    item.setAttribute("data-action", "cart")
    item.setAttribute(`id`, index)
})
let added = document.querySelectorAll(`.added`)
added.forEach((item, index)=>{
    item.setAttribute("data-action", index)
    item.id = index
})
let cartContainer = document.querySelectorAll(`.cart-like`)


// cart.addEventListener

cartContainer.forEach((item, index)=>{
   


   item.addEventListener("click", (event)=>{

    let userID = index
    let userTarget = event.target      
  
    let userData = Number(userTarget.dataset.action) 
    let itemID = Number(userTarget.id) 
    
    
    if (userID === itemID) {
        cart.forEach((item, index)=>{
            if (itemID === index) {
                item.style.display = "none"
            }          
        })
        added.forEach((item, index)=>{
            if (itemID === index) {
                item.style.display = "flex"
            }  
        })
    }else (userData === itemID) 
        cart.forEach((item, index)=>{   
            if (index === userData) {
                item.style.display = "flex"
            }          
        })
        added.forEach((item, index)=>{
            if (index === userData) {
                item.style.display = "none"
            }  
        })
})
})




// import { myFunction } from "./shopping.js"

// displaying clicked products


let productDisplay = document.querySelectorAll(".product")
productDisplay.forEach((item, index)=>{
    item.addEventListener("click", (event)=>{
        
        let userEvent = event.target
        let userParent = userEvent.parentElement.parentElement
        
        
        // console.log(userEvent);
        
        item.setAttribute("id", index)

        if (userParent.classList.contains("product") || userEvent.classList.contains("product-details") || userEvent.classList.contains("product-cards")) {
            
            let newID = Number(item.id)
            
            
            
        }
        
        
        
        
        
        
    })
})