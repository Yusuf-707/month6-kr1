import { useQuery } from "@tanstack/react-query"
import { $api } from "../../api/api"


const getUserDetail = async (id) => {
    const result = await $api.get(`/users/${id}`)
    return result.data
}

export const useUserDetail = (id) => {
    return useQuery({
        queryKey: ['users', id],
        queryFn: () => getUserDetail(id),
        enabled: !!id
    })
}