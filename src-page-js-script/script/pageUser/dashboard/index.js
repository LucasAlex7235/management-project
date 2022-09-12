import {Request} from "./api.js"

class UserProfile {
    static async profileUser(){
        const profile = await Request.newProfile()
        const depart = await Request.newListCollaborators()

        const nameTitle = document.querySelector("h1")
        const liCard = document.querySelector(".userProfile")

        const name = liCard.querySelector("h3")
        const email = liCard.querySelector("#emailUser")
        const levelUser = liCard.querySelector("#levelUser")
        const departUser = liCard.querySelector("#departUser")

        liCard.setAttribute("id", profile.uuid)

        nameTitle.innerText = profile.username
        name.innerText = profile.username
        email.innerText = profile.email
        levelUser.innerText = profile.professional_level

        depart.forEach(depart => {
            departUser.innerText = profile.department_uuid == null? "Nenhum": depart.name
        })
    }

    static editProfile(){
        const btnEdit = document.querySelector("#unEmp")
        const btnSubmit = document.querySelector("#footer--btnCloseCreate")
        const btnClose = document.querySelector("#closeModalCreateDep")

        const modal = document.querySelector(".modal__backgroud__dashboard--create__depart")

        const nameImput = document.querySelector("#newName")
        const emailImput = document.querySelector("#newEmail")
        const passImput = document.querySelector("#newPass")

        btnEdit.addEventListener("click", ()=>{
            modal.classList.toggle("hidden")

        })

        btnSubmit.addEventListener("click", ()=>{
            
            const data = {
                "username": nameImput.value,
                "email": emailImput.value,
                "password": passImput.value
            }

            Request.newEditProfile(data )
        })

        btnClose.addEventListener("click", ()=>{
            modal.classList.toggle("hidden")
        })
    }

    static sectionsPage() {

        const allCollaborators = document.querySelector("#allCollaborators")
        const allDepart = document.querySelector("#allDepart")


        allCollaborators.addEventListener("click", (event) => {
            window.location.assign("./allCollab.html")
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

UserProfile.profileUser()
UserProfile.editProfile()
UserProfile.sectionsPage()
UserProfile.closeUser()
UserProfile.openMenuMobileUser()