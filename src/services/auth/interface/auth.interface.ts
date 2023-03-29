export interface UserLoginInfo {
    email: string
    password: string
}

export interface UserInfo {
    username: string
    email: string
    first_name: string
    last_name: string
}

export interface LoggedUser {
    id: number
    firstName: string
    lastName: string
    companyEmail: string
}
