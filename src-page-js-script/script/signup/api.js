export class Request{
    static baseUrl = "http://localhost:6278"
    static token = localStorage.getItem("@kenzieJob:token") || ""
    static userId = localStorage.getItem("@kenzieJob:User_id")
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${this.token}`
    }
    static async createAccount(body){
        const create = await fetch(`${this.baseUrl}/auth/register/user`,{
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => {
            window.location.assign("../../index.html")
        })
        .catch(err => console.log(err))
    }
}


/*
const loginUser = await fetch(`${this.baseUrl}/users/login/`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                localStorage.setItem("@kenzieRedeSocial:token", res.token)
                localStorage.setItem("@kenzieRedeSocial:User_id", res["user_uuid"])
                if (localStorage.getItem("@kenzieRedeSocial:token") != "undefined") {
                    window.location.assign('../../src/pages/dashboard.html')
                }else{
                    const modal = document.querySelector(".modal")
                    const btn = document.querySelector("#closeNew")
                    btn.addEventListener("click", ()=>{
                        modal.classList.add("hiden")
                    })
                    modal.classList.remove("hiden")
                }
            })
            .catch(err => console.log(err))
    }


*/