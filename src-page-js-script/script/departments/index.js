import { Request } from "./api.js"

class Departments {
    static async listDepart() {
        const departments = await Request.newListDepart()
        const ulVitrine = document.querySelector(".vitrine__job")


        departments.forEach(elem => {
            // console.log(elem)
            const cardLi = document.createElement("li")
            const header = document.createElement("header")
            const divName = document.createElement("div")
            const name = document.createElement("h3")


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

            const footer = document.createElement("footer")
            const btnOpenModalEdit = document.createElement("button")
            const btnOpenModalDelete = document.createElement("button")

            cardLi.setAttribute("id", elem.uuid)

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

            footer.classList.add("btn--edit__delet__departments")
            btnOpenModalEdit.setAttribute("id", "edit__dep__btn")
            btnOpenModalDelete.setAttribute("id", "delete__dep__btn")
            btnOpenModalEdit.classList.add("btn__edit__dep")
            btnOpenModalDelete.classList.add("btn__edit__dep")



            name.innerText = elem.name

            spanTitle1.innerText = "Nome da empresa:"
            spanContent1.innerText = elem.companies.name

            spanTitle2.innerText = "Tempo de servi??o:"
            spanContent2.innerText = elem.companies["opening_hours"]

            spanTitle3.innerText = "Descri????o:"
            spanContent3.innerText = elem.description

            btnOpenModalEdit.innerText = "Editar"
            btnOpenModalDelete.innerText = "Deletar"

            footer.append(btnOpenModalEdit, btnOpenModalDelete)
            divColunm3.append(spanTitle3, spanContent3)
            divColunm2.append(spanTitle2, spanContent2)
            divColunm1.append(spanTitle1, spanContent1)
            divContainer.append(divColunm1, divColunm2, divColunm3)
            divName.append(name)
            header.append(divName)
            cardLi.append(header, divContainer, footer)

            ulVitrine.append(cardLi)
        });
        this.openModal()

    }

    static openModal() {
        const modalEdit = document.querySelector(".modal__backgroud__dashboard")
        const modalDelete = document.querySelector(".modal__backgroud__dashboard--delete")
        const btnEdit = document.querySelectorAll("#edit__dep__btn")

        const btnDelete = document.querySelectorAll("#delete__dep__btn")
        const deletConfir = document.querySelector("#footer--btnClose--delete")
        const deletNotConfir = document.querySelector("#footer--btnClose--close")
        const submitEdit = document.querySelector("#footer--btnClose")

        const closeModalEdit = document.querySelector("#closeModalEdit")


        btnEdit.forEach((btnEdit) => {
            btnEdit.addEventListener("click", () => {
                modalEdit.classList.toggle("hidden")
                const nameDep = btnEdit.parentElement.parentElement.querySelector(".colunm__content").innerText
                modalEdit.querySelector("#nameDep").innerText = nameDep
                modalEdit.setAttribute("id", btnEdit.parentElement.parentElement.id)
            })
        })

        submitEdit.addEventListener("click", () => {
            // modalEdit.classList.toggle("hidden")
            const id = modalEdit.id

            const descrip = modalEdit.querySelector("textarea").value

            const data = {
                "description": descrip
            }
            Request.newEditDepart(id, data)
        })

        closeModalEdit.addEventListener("click", () => {
            modalEdit.classList.toggle("hidden")
        })

        btnDelete.forEach((btnDelet) => {
            btnDelet.addEventListener("click", () => {
                modalDelete.classList.toggle("hidden")

                deletConfir.addEventListener("click", () => {
                    const idDelet = btnDelet.parentElement.parentElement.id
                    Request.deleteDepart(idDelet)
                })
            })
        })

        deletNotConfir.addEventListener("click", () => {
            modalDelete.classList.toggle("hidden")
        })


    }

    static sectionsPage() {
        const creatCompany = document.querySelector("#createCompany")
        const allUsers = document.querySelector("#allUsers")
        const unemployedUsers = document.querySelector("#unemployedUsers")
        const allCompan = document.querySelector("#allCompanies")

        creatCompany.addEventListener("click", (event) => {
            window.location.assign("./dashboard.html")
        })

        allUsers.addEventListener("click", (event) => {
            window.location.assign("./company.html")
            localStorage.setItem("@kenzieJob:AllUsers", true)
        })

        unemployedUsers.addEventListener("click", (event) => {
            window.location.assign("./hireCompany.html")
            localStorage.setItem("@kenzieJob:AllUsers", false)
        })

        allCompan.addEventListener("click", (event)=>{
            window.location.assign("./allJob.html")
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

Departments.listDepart()
Departments.sectionsPage()
Departments.closeUser()
Departments.openMenuMobileUser()