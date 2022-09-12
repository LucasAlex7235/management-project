import {Request} from "./api.js"

class Departments {
    static async listDeparts(){
        const sector = await Request.newListDepartments()
        const ulVitrine = document.querySelector(".vitrine__job")


        sector.departments.forEach(departs => {
            const licard = document.createElement("li")
                const header = document.createElement("header")
                const divName = document.createElement("div")
                const nameSector = document.createElement("h3")

                const divContainer = document.createElement("div")
                const divColunm1 = document.createElement("div")
                const divColunm2 = document.createElement("div")

                const spanTitle1 = document.createElement("span")
                const spanTitle2 = document.createElement("span")

                const spanContent1 = document.createElement("span")
                const spanContent2 = document.createElement("span")

                
                licard.setAttribute("id", departs   .uuid)
                divName.classList.add("name__job")

                divContainer.classList.add("container__content")
                divColunm1.classList.add("colunm")
                divColunm2.classList.add("colunm")

                spanTitle1.classList.add("colunm__title")
                spanTitle2.classList.add("colunm__title")

                spanContent1.classList.add("colunm__content")
                spanContent2.classList.add("colunm__content")



                nameSector.innerText = sector.name
                spanTitle1.innerText = "Nome do  departamento:"
                spanTitle2.innerText = "Descrição:"


                spanContent1.innerText = departs.name
                spanContent2.innerText = departs.description



                divColunm2.append(spanTitle2, spanContent2)
                divColunm1.append(spanTitle1, spanContent1)
                divContainer.append(divColunm1, divColunm2)
                divName.append(nameSector)
                header.append(divName)
                licard.append(header, divContainer)
                ulVitrine.append(licard)
        });
    }

    static async nameTitle(){
        const profile = await Request.newProfile()
        const nameTitle = document.querySelector("h1")

        nameTitle.innerText = profile.username
    }

    static sectionsPage() {


        const profile = document.querySelector("#profile")
        const allCollaborators = document.querySelector("#allCollaborators")


        profile.addEventListener("click", (event) => {
            window.location.assign("./dashboard.html")
        })

        allCollaborators.addEventListener("click", (event) => {
            window.location.assign("./allCollab.html")
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

Departments.listDeparts()
Departments.sectionsPage()
Departments.nameTitle()
Departments.closeUser()
Departments.openMenuMobileUser()