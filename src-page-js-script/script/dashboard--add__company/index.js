import {Request} from "./api.js"

class Dashboard {
    static createCompany() {
        const name = document.querySelector("#nameCompany")
        const description = document.querySelector("#descripCompany")
        const hours = document.querySelector("#hoursCompany")
        const select = document.querySelector("#areasAll")
        const btnSubmit = document.querySelector("#submitData")
        let value = ""
        let depart = ""

        select.addEventListener("change", (event) => value = event.target.value)

        btnSubmit.addEventListener("click", async(event) => {
            event.preventDefault()
            const listSectors = await Request.listCompany()

            listSectors.forEach(elem => elem.sectors.description == value? depart = elem.sectors.uuid: "")

            const data = {
                "name": name.value,
                "opening_hours": `${hours.value}:00`,
                "description": description.value,
                "sector_uuid": depart
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
            window.location.assign("./company.html")
            localStorage.setItem("@kenzieJob:AllUsers", false)
        })


    }
}

Dashboard.createCompany()
Dashboard.sectionsPage()