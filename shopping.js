// displaying
let storedImageUrl = localStorage.getItem('selectedImg');
console.log(storedImageUrl);

let images = document.createElement("img")
images.src = storedImageUrl

console.log(storedImageUrl);

let displayContainer = document.getElementById("display-img")
displayContainer.append(images)
// let displayImageContainer = document.querySelectorAll(".img")
// displayImageContainer.forEach((item, index)=>{
//     item.append(images)
// })  



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


let sideContent = document.getElementById("side-content")

let image = document.querySelectorAll(".imgg")
image.forEach((param, index)=>{
    param.setAttribute("data-action", index)
})
let productsDetails = document.querySelectorAll(".brand")
productsDetails.forEach((pro, index)=>{
    pro.setAttribute("data-action", index)
})

function myFunction() {
    let displayImage = document.getElementById("display-img")
    let products = document.querySelectorAll(`.product`)
            products.forEach((item, index)=>{
            item.addEventListener("click", (event)=>{
            let userData = event.target 
            let grandParent = userData.parentElement.parentElement
            let user = Number(userData.dataset.action)
            
            let ID = index

            if (event.target.tagName === 'IMG') {
                let imgElement = event.target;
                displayImage.innerHTML = ``

                if (ID === user) {
                    const imgClone = imgElement.cloneNode(true);

                    displayImage.append(imgClone)
                    window.scrollTo(0, 0);
                    
                    
                }

                
            }   

        })
    })
  
}

myFunction()




 
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



