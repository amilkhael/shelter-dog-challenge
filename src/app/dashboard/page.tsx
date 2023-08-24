"use client"

import { useSearchingDogs } from "@hooks/Dogs/useSearchingDogs"

const Dashboard = () => {
  const params = {
    ageMax: 1,
  }
  const { isLoading, data } = useSearchingDogs(true, params)

  if (isLoading) return <p>...Loading</p>

  console.log(data)

  return <p>Dashboard</p>
}

export default Dashboard
