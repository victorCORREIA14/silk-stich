import { Route, Routes } from "react-router-dom"
import LoginView from "../views/login"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginView />} />
    </Routes>
  )
}

export default AppRoutes