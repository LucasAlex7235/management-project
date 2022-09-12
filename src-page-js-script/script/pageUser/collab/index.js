import {Request} from "./api.js"

class Collaborators{
    static async listCollaborators(){
        const ulVitrine = document.querySelector(".vitrine__job")
        const collab = await Request.newListCollaborators()

        collab.forEach(users => {
            users.users.forEach(user => {
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


                nameUser.innerText = user.username
                spanTitle1.innerText = "Modalidade:"
                spanTitle2.innerText = "Nível:"
                spanTitle3.innerText = "Departamento:"

                spanContent1.innerText = user["kind_of_work"]
                spanContent2.innerText = user["professional_level"]
                spanContent3.innerText = users.name

                divColunm3.append(spanTitle3, spanContent3)
                divColunm2.append(spanTitle2, spanContent2)
                divColunm1.append(spanTitle1, spanContent1)
                divContainer.append(divColunm1, divColunm2, divColunm3)
                divName.append(nameUser)
                header.append(divName)
                licard.append(header, divContainer)
                ulVitrine.append(licard)
            })
        });
        
    }

    static async nameTitle(){
        const profile = await Request.newProfile()
        const nameTitle = document.querySelector("h1")

        nameTitle.innerText = profile.username
    }

    static sectionsPage() {


        const profile = document.querySelector("#profile")
        const allDepart = document.querySelector("#allDepart")


        profile.addEventListener("click", (event) => {
            window.location.assign("./dashboard.html")
        })

        allDepart.addEventListener("click", (event) => {
            window.location.assign("./departments.html")
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

Collaborators.listCollaborators()
Collaborators.nameTitle()
Collaborators.sectionsPage()
Collaborators.closeUser()
Collaborators.openMenuMobileUser()

