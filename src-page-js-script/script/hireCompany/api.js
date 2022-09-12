export class Request {
    static baseUrl = "http://localhost:6278"
    static token = localStorage.getItem("@kenzieJob:token") || ""
    static userId = localStorage.getItem("@kenzieJob:User_id")
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async newListUsers(){
        const users = await fetch(`${this.baseUrl}/admin/out_of_work`, {
            method: "GET",
            headers: this.headers
        }) 
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))

        return users
    }

    static async newHireUser(body){
        const hire = await fetch(`${this.baseUrl}/departments/hire/`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    static async newListDepart(){
        const departCompany = await fetch(`${this.baseUrl}/departments`,{
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
        
        return departCompany
    }
}