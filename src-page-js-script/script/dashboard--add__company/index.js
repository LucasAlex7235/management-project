import {Request} from "./api.js"

class Dashboard {
    static async createCompany() {
        const name = document.querySelector("#nameCompany")
        const description = document.querySelector("#descripCompany")
        const hours = document.querySelector("#hoursCompany")
        const select = document.querySelector("#areasAll")
        const btnSubmit = document.querySelector("#submitData")
        let value = ""
        let depart = ""

        select.addEventListener("change", (event) => value = event.target.value)

        const listSectors = await Request.newListSectors()

            listSectors.forEach(elem => {
                const options = document.createElement("option")
                options.value = elem.uuid
                options.innerText = elem.description
                select.append(options)
            });


        btnSubmit.addEventListener("click", async(event) => {
            event.preventDefault()
        
            const data = {
                "name": name.value,
                "opening_hours": `${hours.value}:00`,
                "description": description.value,
                "sector_uuid": value
            }
            const creatCompany = await Request.newCreateCompany(data)
        })
    }

    static sectionsPage(){
        const allCompan = document.querySelector("#allCompanies")
        const allDepart = document.querySelector("#allDepart")
        const allUsers = document.querySelector("#allUsers")
        const unemployedUsers = document.querySelector("#unemployedUsers")

        allCompan.addEventListener("click", (event)=>{
            window.location.assign("./allJob.html")
        })

        allDepart.addEventListener("click", (event)=>{
            window.location.assign("./departments.html")
        })

        allUsers.addEventListener("click", (event)=>{
            window.location.assign("./company.html")
            localStorage.setItem("@kenzieJob:AllUsers", true)
        })

        unemployedUsers.addEventListener("click", (event)=>{
            window.location.assign("./hireCompany.html")
            localStorage.setItem("@kenzieJob:AllUsers", false)
        })


    }

    static closeUser() {
        const close = document.querySelector("figure")
        const menuExit = document.querySelector(".scroolProfile")
        const exit = document.querySelector("#exitProfile")




        close.addEventListener("click", () => {
            menuExit.classList.toggle("hidden")
            exit.addEventListener("click", () => {
                window.location.assign("../../index.html")
            })
        })


    }

    static openMenuMobileUser(){
        const menuMobile = document.querySelector("#menuMobile")
        const menu = document.querySelector("#mobileOptions")
        console.log(menuMobile)

        menuMobile.addEventListener("click", ()=>{
            menu.classList.toggle("hidden")
            menuMobile.innerText == "Menu"? menuMobile.innerText = "Close": menuMobile.innerText = "Menu"
        })
    }
}

Dashboard.createCompany()
Dashboard.sectionsPage()
Dashboard.closeUser()
Dashboard.openMenuMobileUser()