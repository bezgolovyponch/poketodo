import { AuthLayout } from '@/router/routerComponents/AuthLayout'
import { ComponentProps, ComponentType } from 'react'

export default function AuthHOC(WrappedComponent: ComponentType, authRequired: boolean) {
    return (props: ComponentProps<typeof Object>) => {
        return (
            <AuthLayout>
                <WrappedComponent {...props} />
            </AuthLayout>
        )
    }
}
