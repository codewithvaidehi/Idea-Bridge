import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'

import CustomerLayout from './components/CustomerLayout'
import CompanyLayout from './components/CompanyLayout'
import RequireRole from './components/RequireRole'
import ToastContainer from './components/Toast'

import CustomerDashboard from './pages/customer/CustomerDashboard'
import Explore from './pages/customer/Explore'
import IdeaDetail from './pages/customer/IdeaDetail'
import CreateIdea from './pages/customer/CreateIdea'
import Challenges from './pages/customer/Challenges'
import ChallengeDetail from './pages/customer/ChallengeDetail'
import MyIdeas from './pages/customer/MyIdeas'
import Profile from './pages/customer/Profile'
import Notifications from './pages/customer/Notifications'

import CompanyDashboard from './pages/company/CompanyDashboard'
import CompanyIdeas from './pages/company/CompanyIdeas'
import CompanyChallenges from './pages/company/CompanyChallenges'
import Insights from './pages/company/Insights'
import ConceptLab from './pages/company/ConceptLab'
import Analytics from './pages/company/Analytics'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/customer" element={<RequireRole role="customer"><CustomerLayout /></RequireRole>}>
          <Route index element={<CustomerDashboard />} />
          <Route path="explore" element={<Explore />} />
          <Route path="ideas" element={<MyIdeas />} />
          <Route path="ideas/:id" element={<IdeaDetail />} />
          <Route path="create" element={<CreateIdea />} />
          <Route path="challenges" element={<Challenges />} />
          <Route path="challenges/:id" element={<ChallengeDetail />} />
          <Route path="profile" element={<Profile />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>

        <Route path="/company" element={<RequireRole role="company"><CompanyLayout /></RequireRole>}>
          <Route index element={<CompanyDashboard />} />
          <Route path="ideas" element={<CompanyIdeas />} />
          <Route path="challenges" element={<CompanyChallenges />} />
          <Route path="insights" element={<Insights />} />
          <Route path="concept-lab" element={<ConceptLab />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>

        <Route path="*" element={<Landing />} />
      </Routes>
      <ToastContainer />
    </>
  )
}
