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

