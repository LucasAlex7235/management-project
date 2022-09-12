import { Request } from "./api.js"

class Users {
    static async listUsers() {
        const users = await Request.newListUsers()
        const ulVitrine = document.querySelector(".vitrine__job")

        users.forEach(async user => {
            if (user.department_uuid) {
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
                const btnUpdate = document.createElement("button")
                const btnDismiss = document.createElement("button")

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

                divFooter.classList.add("employee__footer")
                btnUpdate.setAttribute("id", "attEmp")
                btnUpdate.classList.add("att__employee")
                btnUpdate.classList.add("btn__footer")

                btnDismiss.setAttribute("id", "closeEmp")
                btnDismiss.classList.add("close__employee")
                btnDismiss.classList.add("btn__footer")

                nameUser.innerText = user.username
                spanTitle1.innerText = "Modalidade:"
                spanTitle2.innerText = "Nível:"
                spanTitle3.innerText = "Departamento:"

                spanContent1.innerText = user["kind_of_work"]
                spanContent2.innerText = user["professional_level"]
                spanContent3.innerText = "Nenhum"
                btnUpdate.innerText = "Atualizar"
                btnDismiss.innerText = "Demitir"

                const departments = await Request.newListDepart()
                departments.forEach(depar => {
                    if (depar.uuid == user.department_uuid) {
                        spanContent3.innerText = depar.name
                    }
                })

                divFooter.append(btnUpdate, btnDismiss)
                divColunm3.append(spanTitle3, spanContent3)
                divColunm2.append(spanTitle2, spanContent2)
                divColunm1.append(spanTitle1, spanContent1)
                divContainer.append(divColunm1, divColunm2, divColunm3)
                divName.append(nameUser)
                header.append(divName)
                licard.append(header, divContainer, divFooter)
                ulVitrine.append(licard)
            }
        });
        setTimeout(() => {
            this.updateUser()
        }, "100")
    }

    static updateUser() {
        const modal = document.querySelector(".modal__backgroud__dashboard")
        const modalCard = document.querySelector(".modal__dashboard")
        const btnUpd = document.querySelectorAll("#attEmp")
        const btnDemi = document.querySelectorAll("#closeEmp")

        const btnSubmit = document.querySelector("#footer--btnClose--delete")
        const btnClose = document.querySelector("#footer--btnClose--close")
        const selectModalidades = document.querySelector("#modalities")
        const selectLevel = document.querySelector("#level")

        let level = ""
        let modalities = ""

        selectModalidades.addEventListener("change", (event) => modalities = event.target.value)
        selectLevel.addEventListener("change", (event) => level = event.target.value)

        btnUpd.forEach(btn => {
            btn.addEventListener("click", () => {
                modal.classList.toggle("hidden")
                btnSubmit.addEventListener("click", () => {
                    const data = {
                        "kind_of_work": modalities,
                        "professional_level": level
                    }
                    if (modalities && level) {
                        Request.newUpdateUser(btn.parentElement.parentElement.id, data)
                    }

                })
            })
        })

        btnDemi.forEach(btn => {
            btn.addEventListener("click", () => {
                Request.newDismissUser(btn.parentElement.parentElement.id)
            })
        })

        btnClose.addEventListener("click", () => {
            modal.classList.toggle("hidden")

        })



    }

    static closeUser() {
        const close = document.querySelector("#closeUserAdmin")
        const menuExit = document.querySelector(".scroolProfile")
        const exit = document.querySelector("#exitProfile")




        close.addEventListener("click", () => {
            menuExit.classList.toggle("hidden")
            exit.addEventListener("click", () => {
                window.location.assign("../../index.html")
            })
        })


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
Users.closeUser()

