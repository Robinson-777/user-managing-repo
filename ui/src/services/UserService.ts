export type UsersModel = {
    _id: number, firstName: string, lastName: string, emailId: string
}
export class UserService {

    apiUrl: string = "http://localhost:3080"
    public async getAllUsers(): Promise<any> {
        const response = await fetch(this.apiUrl + '/api/users');
        return await response.json();
    }

    public async createUser(data: UsersModel): Promise<any> {

        const response = await fetch(this.apiUrl + `/api/user`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: data })
        })
        return await response.json();
    }

    public async deleteUser(userId: number): Promise<any> {
        const response = await fetch(this.apiUrl + `/api/user/${userId}`, { method: 'DELETE' })
        return await response.json();
    }

    public async editUser(data: UsersModel): Promise<any> {
        const response = await fetch(this.apiUrl + `/api/user`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: data })
        })
        return await response.json();
    }
}