let cart = document.querySelectorAll(`.cart`)
cart.forEach((item, index)=>{
    item.setAttribute("data-action", "add")
    item.setAttribute(`id`, index)
})
let added = document.querySelectorAll(`.added`)
added.forEach((item, index)=>{
    item.setAttribute("data-action", index)
    item.id = index
})
let cartContainer = document.querySelectorAll(`.cart-like`)
let displayImage = document.getElementById("display-img")





// function imgindex() {
//     let image = document.querySelectorAll(".imgg")
//                 image.forEach((param, index)=>{

//                 param.onclick = function(){
//                     console.log(index);
                    
//                 }
                            

// })
// }


let products = document.querySelectorAll(`.product`)
products.forEach((item, index)=>{
    item.addEventListener("click", (event)=>{
        let userData = event.target 
        let grandParent = userData.parentElement.parentElement
        console.log(grandParent);
        
        let ID = index
        // console.log(userData);
        
        console.log(ID);
        
        let image = document.querySelectorAll(".imgg")
                image.forEach((param, index)=>{

                param.onclick = function(event){
                    let user = event.target 
                    let parent = user.parentElement.parentElement
                    // console.log(parent);
                    
                    // console.log(user);
                    
                    console.log(index);

                    if (condition) {
                        
                    }
                    
                }
        
                

})
    

    })
})



// image.













// cart.addEventListener

cartContainer.forEach((item, index)=>{
   


   item.addEventListener("click", (event)=>{

    let userID = index
    let userTarget = event.target      
  
    let userData = Number(userTarget.dataset.action) 
    let itemID = Number(userTarget.id) 
    console.log(userData);
    console.log(itemID);
    
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



