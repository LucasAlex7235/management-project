export class Request {
    static baseUrl = "http://localhost:6278"
    static token = localStorage.getItem("@kenzieJob:token") || ""
    static userId = localStorage.getItem("@kenzieJob:User_id")
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
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

    static async newEditDepart(id, body){
        const departEdit = await fetch(`${this.baseUrl}/departments/${id}`,{
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))

    }

    static async deleteDepart(id){
        const delet = await fetch(`${this.baseUrl}/departments/${id}`, {
            method: "DELETE",
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
    }
     
}