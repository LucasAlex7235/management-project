export class Request {
    static baseUrl = "http://localhost:6278"
    static token = localStorage.getItem("@kenzieJob:token") || ""
    static userId = localStorage.getItem("@kenzieJob:User_id")
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async newListCompany(){
        const list = await fetch(`${this.baseUrl}/companies`,{
            method: "GET"
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => err)

        return list
    }

    static async newListDepartCompany(id){
        const departCompany = await fetch(`${this.baseUrl}/departments/${id}`,{
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))

        return departCompany
    }

    static async newCreatDepart(body){
        const createDep = await fetch(`${this.baseUrl}/departments`,{
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))

    }
     
}