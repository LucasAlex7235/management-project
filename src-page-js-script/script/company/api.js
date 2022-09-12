export class Request {
    static baseUrl = "http://localhost:6278"
    static token = localStorage.getItem("@kenzieJob:token") || ""
    static userId = localStorage.getItem("@kenzieJob:User_id")
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async newListUsers(){
        const users = await fetch(`${this.baseUrl}/users`, {
            method: "GET",
            headers: this.headers
        }) 
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))

        return users
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

    static async newUpdateUser(id, body){
        const updade = await fetch(`${this.baseUrl}/admin/update_user/${id}`,{
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
        
        return updade
    }

    static async newDismissUser(id){
        const dismiss = await fetch(`${this.baseUrl}/departments/dismiss/${id}`,{
            method: "PATCH",    
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
        
        return dismiss
    }
}