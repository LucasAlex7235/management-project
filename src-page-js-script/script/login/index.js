import { Request } from "./api.js"

class Login {
    static nothaveAccount() {
        const btnCreateAccount = document.querySelector(".footer--create__account")

        btnCreateAccount.addEventListener("click", (event) => {
            window.location.assign("./src-page-js-script/page/signup.html")
        })
    }

    static newLoginUser() {
        const email = document.querySelector("#emailUser")
        const pass = document.querySelector("#passwordUser")
        const btnSubmit = document.querySelector(".submit")

        btnSubmit.addEventListener("click", async (event) => {
            event.preventDefault()
            const data = {
                "email": email.value,
                "password": pass.value
            }
            const loginToken = await Request.loginUser(data)
            const token = localStorage.setItem("@kenzieJob:token", loginToken.token)
            const userId = localStorage.setItem("@kenzieJob:User_id", loginToken.uuid)
            window.location.assign("./src-page-js-script/page/dashboard.html")
        })
    }
}

Login.nothaveAccount()
Login.newLoginUser()