import useAuth from '../hooks/useAuth'
import {useLocation,Navigate,Outlet} from 'react-router-dom'
function RequireAuth({allowedRoles}) {
    const {auth} = useAuth();
    const location = useLocation();
  return (
    allowedRoles.includes(auth?.role) ? <Outlet/> : auth?.name ? <Navigate to={'/dashboard/profile'} state={{from:location}} replace /> : <Navigate to={'/'} state={{from:location}} replace />
  )
}

export default RequireAuth