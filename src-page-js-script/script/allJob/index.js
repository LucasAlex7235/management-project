import { Request } from "./api.js"

class Company {
    static async listCompany() {
        const companies = await Request.newListCompany()
        const ulVitrine = document.querySelector(".vitrine__job")

        companies.forEach(elem => {
            // console.log(elem)
            const cardLi = document.createElement("li")
            const header = document.createElement("header")
            const divName = document.createElement("div")
            const name = document.createElement("h3")
            const departPrimary = document.createElement("span")


            const divContainer = document.createElement("div")
            const divColunm1 = document.createElement("div")
            const divColunm2 = document.createElement("div")
            const divColunm3 = document.createElement("div")

            const spanTitle1 = document.createElement("span")
            const spanTitle2 = document.createElement("span")
            const spanContent1 = document.createElement("span")
            const spanContent2 = document.createElement("span")


            const depart = document.createElement("h3")
            const select = document.createElement("select")
            const options = document.createElement("option")

            const divBtnFooter = document.createElement("div")

            const createOpenModal = document.createElement("button")
            const btnOpenModal = document.createElement("button")

            cardLi.setAttribute("id", elem.uuid)

            divName.classList.add("name__job")

            departPrimary.classList.add("card__Depart")
            divContainer.classList.add("container__content")

            divColunm1.classList.add("colunm")
            divColunm2.classList.add("colunm")
            divColunm3.classList.add("colunm")

            spanTitle1.classList.add("colunm__title")
            spanTitle2.classList.add("colunm__title")

            spanContent1.classList.add("colunm__content")
            spanContent2.classList.add("colunm__content")

            divBtnFooter.classList.add("footer__btnModal")

            createOpenModal.setAttribute("id", "createDep")
            btnOpenModal.setAttribute("id", "openJob")


            name.innerText = "Empresa"
            departPrimary.innerText = elem.sectors.description
            elem.sectors.description == "TI" ? departPrimary.setAttribute("id", "tiCard") :
                elem.sectors.description == "Alimenticio" ? departPrimary.setAttribute("id", "foodCard") :
                    elem.sectors.description == "Automotiva" ? departPrimary.setAttribute("id", "autoCard") : ""
                    elem.sectors.description == "Varejo" ? departPrimary.setAttribute("id", "retailCard") : ""
                    elem.sectors.description == "Textil" ? departPrimary.setAttribute("id", "textilCard") : ""
                    elem.sectors.description == "Aeroespacial" ? departPrimary.setAttribute("id", "aeroCard") : ""
                    elem.sectors.description == "Atacado" ? departPrimary.setAttribute("id", "wholesaleCard") : ""
                    elem.sectors.description == "Manufatura" ? departPrimary.setAttribute("id", "manufacCard") : ""

            spanTitle1.innerText = "Nome da empresa:"
            spanContent1.innerText = elem.name

            spanTitle2.innerText = "Tempo de serviço:"
            spanContent2.innerText = elem["opening_hours"]

            depart.innerText = "Departamentos:"
            options.innerText = elem.sectors.description

            createOpenModal.innerText = "Criar Departamento"
            btnOpenModal.innerText = "Abrir"


            divBtnFooter.append(createOpenModal, btnOpenModal)
            select.append(options)
            divColunm3.append(depart, select)
            divColunm2.append(spanTitle2, spanContent2)
            divColunm1.append(spanTitle1, spanContent1)
            divContainer.append(divColunm1, divColunm2, divColunm3)
            divName.append(name)
            header.append(divName, departPrimary)
            cardLi.append(header, divContainer, divBtnFooter)

            ulVitrine.append(cardLi)
        });
        this.openModal()
    }

    static openModal() {
        const btnOpenModal = document.querySelectorAll("#openJob")
        const btnCreateDep = document.querySelectorAll("#createDep")
        const modal = document.querySelector(".modal__backgroud__dashboard")
        const modalVitrine = document.querySelector(".depart__vitrine")
        const btnCloseModal = document.querySelector("#footer--btnClose")

        const create = document.querySelector(".modal__backgroud__dashboard--create__depart")
        const createVitrine = create.querySelector(".depart__vitrine")
        const submitBtn = document.querySelectorAll("#footer--btnCloseCreate")
        const closeModalCreateDep = document.querySelectorAll("#closeModalCreateDep")

        btnOpenModal.forEach(btn => {
            btn.addEventListener("click", async (event) => {
                event.preventDefault()
                const idModal = btn.parentElement.parentElement.id

                const departContent = await Request.newListDepartCompany(idModal)

                modalVitrine.innerHTML = ""
                modal.classList.toggle("hidden")

                departContent.forEach((depart) => {

                    const namedepart = depart.name
                    const descriDepart = depart.description

                    const divColunm = document.createElement("div")
                    const spanName = document.createElement("span")
                    const spandescrip = document.createElement("span")

                    divColunm.classList.add("colunm")
                    spanName.classList.add("name__depart")
                    spandescrip.classList.add("descrip__depart")

                    spanName.innerText = namedepart
                    spandescrip.innerText = descriDepart

                    divColunm.append(spanName, spandescrip)
                    modalVitrine.append(divColunm)
                })
            })
        })

        btnCreateDep.forEach(btn => {
            btn.addEventListener("click", async (event) => {
                event.preventDefault()
                const idModal = btn.parentElement.parentElement.id
                createVitrine.setAttribute("id", idModal)
                create.classList.toggle("hidden")
            })
        })

        submitBtn.forEach(btn => {
            btn.addEventListener("click", async() => {
                const nameDep = createVitrine.querySelector("input").value
                const descripDep = createVitrine.querySelector("textarea").value
                const id = btn.parentElement.parentElement.querySelector(".depart__vitrine").id

                const data = {
                    "name": nameDep,
                    "description": descripDep,
                    "company_uuid": id
                }

                const createDeparApi = await Request.newCreatDepart(data)
                console.log(id)
            })
        })

        closeModalCreateDep.forEach(btn => {
            btn.addEventListener("click", ()=>{
                create.classList.toggle("hidden")
            })
        })

        btnCloseModal.addEventListener("click", () => {
            modal.classList.toggle("hidden")
        })
    }

    static sectionsPage() {
        const creatCompany = document.querySelector("#createCompany")
        const allDepart = document.querySelector("#allDepart")
        const allUsers = document.querySelector("#allUsers")
        const unemployedUsers = document.querySelector("#unemployedUsers")

        creatCompany.addEventListener("click", (event) => {
            window.location.assign("./dashboard.html")
            console.log(1)
        })

        allDepart.addEventListener("click", (event) => {
            window.location.assign("./departments.html")
        })

        allUsers.addEventListener("click", (event) => {
            window.location.assign("./company.html")
            localStorage.setItem("@kenzieJob:AllUsers", true)
        })

        unemployedUsers.addEventListener("click", (event) => {
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
}

Company.listCompany()
Company.sectionsPage()
Company.closeUser()