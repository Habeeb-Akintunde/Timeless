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