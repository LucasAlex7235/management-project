import {Request} from "./api.js"


class Signup{
    static haveAccount(){
        const btnAccount = document.querySelector(".footer--create__account")

        btnAccount.addEventListener("click", (event)=>{
            window.location.assign("../../index.html")
        })
    }
    static newCreateAccount(){
        const name = document.querySelector("#nameUser")
        const email = document.querySelector("#emailUser")
        const pass = document.querySelector("#passwordUser")
        const level = document.querySelector("#levelUser")

        const btnSubmit = document.querySelector(".submit")

        btnSubmit.addEventListener("click", (event)=>{
            event.preventDefault()
            
            const data = {
                "password": pass.value,
                "email": email.value,
                "professional_level": level.value.toLowerCase(),
                "username": name.value
              }

              Request.createAccount(data)
        })
    }
}

Signup.haveAccount()
Signup.newCreateAccount()