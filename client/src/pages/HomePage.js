import { useState, useEffect } from "react"
import { useUser } from "../utils/UserContext"

const HomePage = (props) => {
  const userCtx = useUser()

  return (
    <>
      <h1>Home Page</h1>

      { userCtx.user !== null && userCtx.user !== undefined && (
        <p>This user is logged in.</p>
      )}
    </>
  )
}

export default HomePage