import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { challenges } from '../../data/mockData'
import IdeaCard from '../../components/IdeaCard'
import ChallengeCard from '../../components/ChallengeCard'

export default function CustomerDashboard() {
  const { ideas, auth } = useApp()
  const trending = [...ideas].sort((a, b) => b.votes - a.votes).slice(0, 4)
  const recommended = challenges.slice(0, 2)

  return (
    <div className="space-y-10">
      <section className="card p-8 bg-gradient-to-br from-bridge-500 to-bridge-700 text-white">
        <h1 className="font-display text-2xl sm:text-3xl font-bold mb-2">Help build what comes next.</h1>
        <p className="text-white/80 max-w-lg mb-5">Your votes, comments, and ideas feed directly into what real companies decide to build.</p>
        <Link to="/customer/create" className="inline-flex items-center gap-1.5 bg-white text-bridge-700 font-semibold text-sm px-5 py-2.5 rounded-full">
          Share an Idea <ArrowRight size={16} />
        </Link>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display font-semibold text-lg">Recommended Challenges</h2>
          <Link to="/customer/challenges" className="text-sm text-bridge-600 font-medium hover:underline">See all</Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {recommended.map((c) => <ChallengeCard key={c.id} challenge={c} />)}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display font-semibold text-lg">Trending Ideas</h2>
          <Link to="/customer/explore" className="text-sm text-bridge-600 font-medium hover:underline">Explore all</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trending.map((idea) => <IdeaCard key={idea.id} idea={idea} />)}
        </div>
      </section>
    </div>
  )
}
