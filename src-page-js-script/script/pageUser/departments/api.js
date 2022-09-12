export class Request {
    static baseUrl = "http://localhost:6278"
    static token = localStorage.getItem("@kenzieJob:token") || ""
    static userId = localStorage.getItem("@kenzieJob:User_id")
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async newListDepartments(){
        const departs = await fetch(`${this.baseUrl}/users/departments`, {
            method: "GET",
            headers: this.headers
        }) 
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))

        return departs
    }

    static async newProfile(){
        const profile = await fetch(`${this.baseUrl}/users/profile`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))

        return profile
    }
}