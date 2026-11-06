import React from 'react'
import { useUsersPage } from './HomePage.api'
import { useNavigate } from 'react-router-dom'

const cardUser = (user, navigate) => {
    return (
        <div key={user.id}>
         <h1>{user.username}</h1>
         <h2>{user.name}</h2>
         <button onClick={() => navigate(`/user/${user.id}`)}>Detail</button>
         <hr />
        </div>
    )
}

export const HomePage = () => {
    const navigate = useNavigate()
    const {data, isError, error, isLoading} = useUsersPage()
    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (isError) {
        return <h1>Ошибка при получении данных: {error.message}</h1>;
    }

  return (
    <div>
        { data?.map(user => cardUser(user, navigate))}
    </div>
  )
}
