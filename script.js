let full_name = document.getElementById("full_name")
let last_name = document.getElementById("last_name")
let email_address = document.getElementById("email_address")
let reason = document.getElementById("reason")
let error = document.getElementById("error")
let bars = document.getElementById("bars")
let nav_right = document.getElementById("nav_right")

let visible = false

bars.addEventListener('click', () => {
    if(!visible) {
        nav_right.style.display = "block"
        visible = true
    }
    else {
        nav_right.style.display = "none"
        visible = false
    }
})

function submit_form() {
    if(full_name.value != "" && last_name.value != "" && email_address.value != "") {
        alert("Details recieved successfully")
    }
    else {
        error.style.display = "block"
        setTimeout(() => {
            error.style.display = "none"
        }, 1500);
    }
}