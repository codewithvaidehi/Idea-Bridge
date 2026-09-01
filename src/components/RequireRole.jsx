import { Navigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function RequireRole({ role, children }) {
  const { auth } = useApp()
  if (!auth) return <Navigate to="/login" replace />
  if (auth.role !== role) return <Navigate to={auth.role === 'customer' ? '/customer' : '/company'} replace />
  return children
}
