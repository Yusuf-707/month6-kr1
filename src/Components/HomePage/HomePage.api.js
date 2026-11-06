import { $api } from '../../api/api'
import { useQuery } from '@tanstack/react-query'
const getUsersApi = async ()=> {
    const result = await $api.get('/users')
    return result.data
}
export const useUsersPage = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: getUsersApi
    })
}