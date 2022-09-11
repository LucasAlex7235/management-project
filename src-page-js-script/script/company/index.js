import { Request } from "./api.js"

class Users {
    static async listUsers() {
        const users = await Request.newListUsers()
        users.forEach(user => {
            console.log(user)
        });
    }

    static sectionsPage() {
        const creatCompany = document.querySelector("#createCompany")
        const allCompan = document.querySelector("#allCompanies")
        const allDepart = document.querySelector("#allDepart")
        const unemployedUsers = document.querySelector("#unemployedUsers")


        creatCompany.addEventListener("click", (event) => {
            window.location.assign("./dashboard.html")
        })

        allCompan.addEventListener("click", (event) => {
            window.location.assign("./allJob.html")
        })

        allDepart.addEventListener("click", (event) => {
            window.location.assign("./departments.html")
        })

        unemployedUsers.addEventListener("click", (event) => {
            window.location.assign("./hireCompany.html")
            localStorage.setItem("@kenzieJob:AllUsers", false)
        })


    }

}

Users.listUsers()
Users.sectionsPage()