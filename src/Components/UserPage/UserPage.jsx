import React from 'react'
import { useUserDetail } from './UserPage.api'
import { useNavigate, useParams } from 'react-router-dom'

const userList = (user, navigate) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <h3>{user.email}</h3>
      <h4>{user.address.city}</h4>
      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  )
}
export const UserPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const {data, isLoading, isError, error} = useUserDetail(id)
   if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (isError) {
        return <h1>Ошибка при получении данных: {error.message}</h1>;
    }
  return userList(data, navigate)
}
