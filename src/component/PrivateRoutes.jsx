import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoutes = () => {

   const trainerName =  useSelector((store) => store.trainerName)

   if (trainerName) {
    console.log(trainerName)
   return <Outlet/>
   } else {
    console.log(trainerName)
    return <Navigate to="/" />
   }

}
export default PrivateRoutes