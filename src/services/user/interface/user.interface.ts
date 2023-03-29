import { Role } from '@/services/user/enum/role.enum'

export interface User {
    id: number
    firstName: string
    lastName: string
    avatar_id?: number
    create_date: string
    updated_date?: string
    role: Role
}
