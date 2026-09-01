import { challenges } from '../../data/mockData'
import ChallengeCard from '../../components/ChallengeCard'

export default function Challenges() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold mb-1">Innovation Challenges</h1>
        <p className="text-ink/50 text-sm">Companies are actively looking for ideas in these briefs.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {challenges.map((c) => <ChallengeCard key={c.id} challenge={c} />)}
      </div>
    </div>
  )
}
