export class Request {
    static baseUrl = "http://localhost:6278"
    static token = localStorage.getItem("@kenzieJob:token") || ""
    static userId = localStorage.getItem("@kenzieJob:User_id")
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async listCompany(){
        const list = await fetch(`${this.baseUrl}/companies`,{
            method: "GET"
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => err)

        return list
    }

    static async newListSectors(){
        const sectors = await fetch(`${this.baseUrl}/sectors`,{
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => err)

        return sectors
    }
    
    static async newCreateCompany(body) {
        const create = await fetch(`${this.baseUrl}/companies`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.log(err))
    }

    
}