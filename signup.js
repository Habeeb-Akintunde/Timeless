let rememberContainer = document.getElementById("remember")
let unchecked = document.getElementById("unchecked")
unchecked.setAttribute("data-action", "unchecked")
let checked = document.getElementById("checked")
checked.setAttribute("data-action", "checked")

rememberContainer.addEventListener("click", (event)=>{
    let userEvent = event.target
    
    let userTargetData = userEvent.dataset.action     

    if(userTargetData === "unchecked"){
        unchecked.style.display = "none"
        checked.style.display = "flex"
    }else{
        unchecked.style.display = "flex"
        checked.style.display = "none"
    }    
})

const passwordInput = document.getElementById("password")
const passwordIcon = document.getElementById("hide-icon")
passwordIcon.setAttribute("data-action", "hidden")
const review = document.getElementById("review")
review.setAttribute("data-action", "review")

passwordIcon.addEventListener("click", (event)=>{
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        let userTarget = event.target
        let userData = userTarget.dataset.action 
    if (userData === "hidden") {
        passwordIcon.style.display = "none"
        review.style.display = "flex"
    }  
})
review.addEventListener("click", (event)=>{
    let userTarget = event.target
    let userData = userTarget.dataset.action 
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

if (userData === "review") {
    passwordIcon.style.display = "flex"
    review.style.display = "none"
}  
})



const passwordInput2 = document.getElementById("password2")
const passwordIcon2 = document.getElementById("hide-icon2")
passwordIcon2.setAttribute("data-action", "hidden")
const review2 = document.getElementById("review2")
review2.setAttribute("data-action", "review")

passwordIcon2.addEventListener("click", (event)=>{
    const type = passwordInput2.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput2.setAttribute('type', type);

        let userTarget = event.target
        let userData = userTarget.dataset.action 
    if (userData === "hidden") {
        passwordIcon2.style.display = "none"
        review2.style.display = "flex"
    }  
})
review2.addEventListener("click", (event)=>{
    let userTarget = event.target
    let userData = userTarget.dataset.action 
        const type = passwordInput2.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput2.setAttribute('type', type);

    if (userData === "review") {
        passwordIcon2.style.display = "flex"
        review2.style.display = "none"
    }  
})