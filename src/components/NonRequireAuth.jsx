import useAuth from '../hooks/useAuth'
import {useLocation,Navigate,Outlet} from 'react-router-dom'
function RequireAuth() {
    const {auth} = useAuth();
    const location = useLocation();
  return (
    auth?.name ? <Navigate to={'/dashboard/home'} state={{from:location}} replace /> : <Outlet/>
  )
}

export default RequireAuth