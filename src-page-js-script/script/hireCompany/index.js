import { Request } from "./api.js"

class Users {
    static async listUsers() {
        const users = await Request.newListUsers()
        const modal = document.querySelector(".modal__dashboard")
       

        const ulVitrine = document.querySelector(".vitrine__job")

        users.forEach(user => {

                const licard = document.createElement("li")
                const header = document.createElement("header")
                const divName = document.createElement("div")
                const nameUser = document.createElement("h3")

                const divContainer = document.createElement("div")
                const divColunm1 = document.createElement("div")
                const divColunm2 = document.createElement("div")
                const divColunm3 = document.createElement("div")
                const spanTitle1 = document.createElement("span")
                const spanTitle2 = document.createElement("span")
                const spanTitle3 = document.createElement("span")
                const spanContent1 = document.createElement("span")
                const spanContent2 = document.createElement("span")
                const spanContent3 = document.createElement("span")

                const divFooter = document.createElement("div")
                const btnUnemployee = document.createElement("button")
                
                licard.setAttribute("id", user.uuid)
                divName.classList.add("name__job")

                divContainer.classList.add("container__content")
                divColunm1.classList.add("colunm")
                divColunm2.classList.add("colunm")
                divColunm3.classList.add("colunm")
                spanTitle1.classList.add("colunm__title")
                spanTitle2.classList.add("colunm__title")
                spanTitle3.classList.add("colunm__title")
                spanContent1.classList.add("colunm__content")
                spanContent2.classList.add("colunm__content")
                spanContent3.classList.add("colunm__content")

                divFooter.classList.add("unemployed__footer")
                btnUnemployee.setAttribute("id", "unEmp")
                btnUnemployee.classList.add("unemployee")
                btnUnemployee.classList.add("btn__footer")

                nameUser.innerText = user.username
                spanTitle1.innerText = "Modalidade:"
                spanTitle2.innerText = "Nível:"
                spanTitle3.innerText = "Departamento:"

                spanContent1.innerText = user["kind_of_work"]
                spanContent2.innerText = user["professional_level"]
                spanContent3.innerText = "Nenhum"
                btnUnemployee.innerText = "Contratar"
                

                divFooter.append(btnUnemployee)
                divColunm3.append(spanTitle3, spanContent3)
                divColunm2.append(spanTitle2, spanContent2)
                divColunm1.append(spanTitle1, spanContent1)
                divContainer.append(divColunm1, divColunm2, divColunm3)
                divName.append(nameUser)
                header.append(divName)
                licard.append(header, divContainer, divFooter)
                ulVitrine.append(licard)

        });
        this.hireUser()
    }

    static async hireUser(){
        const btnUnemployee = document.querySelectorAll("#unEmp")
        const modal = document.querySelector(".modal__backgroud__dashboard")
        const modalCard = document.querySelector(".modal__dashboard")
        const modalH3 = modal.querySelector("h3")
        const select = document.querySelector("#departOptions")
        const btnConfirm = document.querySelector("#footer--btnClose--delete")
        const btnNot = document.querySelector("#footer--btnClose--close")
        const users = await Request.newListUsers()
        const depart = await Request.newListDepart()
        let value = ""

        select.addEventListener("change", (event) => value = event.target.value)

        btnUnemployee.forEach(btn =>{
            btn.addEventListener("click", ()=>{
                users.forEach(user =>{
                    if(user.uuid == btn.parentElement.parentElement.id){
                        modalCard.setAttribute("id", user.uuid)
                        modalH3.innerText = `Deseja contratar ${user.username}?`
                        modal.classList.toggle("hidden")
                        depart.forEach(dep => {
                            const options = document.createElement("option")
                            options.value = dep.uuid
                            options.innerText = dep.name
                            select.append(options)
                        })
                    }
                })
            })
        })

        btnConfirm.addEventListener("click", async()=>{
            if(value){
                const uuidUser = btnConfirm.parentElement.parentElement.parentElement.id

                const data = {
                    "user_uuid": uuidUser,
                    "department_uuid": value
                }
                
                console.log(data)
                const hire = await Request.newHireUser(data)
                
            }
        })

        btnNot.addEventListener("click", ()=> {
            modal.classList.toggle("hidden")
            window.location.reload()
        })

    }

    static sectionsPage() {
        const creatCompany = document.querySelector("#createCompany")
        const allCompan = document.querySelector("#allCompanies")
        const allDepart = document.querySelector("#allDepart")
        const allUsers = document.querySelector("#allUsers")
        


        creatCompany.addEventListener("click", (event) => {
            window.location.assign("./dashboard.html")
        })

        allCompan.addEventListener("click", (event) => {
            window.location.assign("./allJob.html")
        })

        allDepart.addEventListener("click", (event) => {
            window.location.assign("./departments.html")
        })

        allUsers.addEventListener("click", (event) => {
            window.location.assign("./company.html")
            localStorage.setItem("@kenzieJob:AllUsers", true)
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

Users.listUsers()
Users.sectionsPage()
Users.closeUser()
Users.openMenuMobileUser()