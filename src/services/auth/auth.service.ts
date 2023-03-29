import { AuthTokenList, TokenInfo } from '@/services/token/interface/token.interface'
import { LoggedUser, UserLoginInfo } from '@/services/auth/interface/auth.interface'
import { requestsApi } from '@/services/api'

export const AuthService = {
    login: (user: UserLoginInfo): Promise<AuthTokenList> => {
        return requestsApi.post(`auth/login`, user)
    },
    access: (token: TokenInfo): Promise<AuthTokenList> => {
        return requestsApi.post(`auth/access`, token)
    },
    whoAmI: (): Promise<LoggedUser> => {
        return requestsApi.post(`auth/who-iam`)
    },
}
