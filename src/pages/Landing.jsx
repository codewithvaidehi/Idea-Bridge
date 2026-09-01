import { Link } from 'react-router-dom'
import { Waypoints, Lightbulb, Users, BrainCircuit, Rocket, ArrowRight, ShoppingCart, MessageCircle } from 'lucide-react'
import { ideasSeed, companies } from '../data/mockData'
import ValidationScore from '../components/ValidationScore'

const steps = [
  { icon: Lightbulb, title: 'Suggest', body: 'Customers propose new products, features, packaging, flavors, and more.' },
  { icon: Users, title: 'Validate', body: 'The community votes, comments, and signals real purchase intent.' },
  { icon: BrainCircuit, title: 'Analyze', body: 'AI clusters thousands of responses into meaningful consumer trends.' },
  { icon: Rocket, title: 'Build', body: 'Companies use validated insight to decide what to develop next.' },
]

function FlowStrip() {
  const nodes = ['Customer', 'Idea', 'Validation', 'AI Insight', 'Company']
  return (
    <div className="relative flex items-center justify-between max-w-2xl mx-auto py-8">
      <div className="absolute left-0 right-0 h-px bg-ink/10" />
      <div className="absolute left-0 right-0 bridge-line" style={{ height: 2 }}>
        <span className="flow-dot" style={{ animationDelay: '0s' }} />
        <span className="flow-dot" style={{ animationDelay: '1.1s' }} />
        <span className="flow-dot" style={{ animationDelay: '2.2s' }} />
      </div>
      {nodes.map((n) => (
        <div key={n} className="relative flex flex-col items-center gap-2 bg-paper px-2">
          <span className="bridge-dot" />
          <span className="text-xs font-medium text-ink/60 whitespace-nowrap">{n}</span>
        </div>
      ))}
    </div>
  )
}

export default function Landing() {
  const trending = ideasSeed.slice(0, 3)

  return (
    <div>
      {/* Nav */}
      <header className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 font-display font-bold text-lg">
          <Waypoints size={24} className="text-bridge-500" /> IdeaBridge
        </div>
        <div className="flex items-center gap-3">
          <Link to="/login" className="text-sm font-medium text-ink/60 hover:text-ink">Log in</Link>
          <Link to="/signup" className="btn-primary text-sm">Get started</Link>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-10 pb-16 text-center">
        <span className="chip bg-bridge-50 text-bridge-700 mb-6 inline-block">Customer Innovation Intelligence</span>
        <h1 className="font-display text-4xl sm:text-6xl font-bold leading-[1.05] tracking-tight">
          What should companies<br /> build <span className="text-bridge-500">next?</span>
        </h1>
        <p className="text-lg text-ink/60 mt-6 max-w-xl mx-auto">
          IdeaBridge connects consumers directly with companies, turning everyday opinions into validated product opportunities.
        </p>
        <div className="flex items-center justify-center gap-3 mt-8">
          <Link to="/signup" className="btn-primary flex items-center gap-1.5">Share an Idea <ArrowRight size={16} /></Link>
          <Link to="/login" className="btn-secondary">Explore Ideas</Link>
        </div>
        <FlowStrip />
      </section>

      {/* Trending strip */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-3 gap-4">
          {trending.map((idea) => {
            const company = companies.find((c) => c.id === idea.companyId)
            return (
              <div key={idea.id} className="card p-5">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-medium" style={{ color: company?.color }}>{company?.name}</span>
                  <ValidationScore score={idea.validation} size={36} />
                </div>
                <h3 className="font-display font-semibold text-sm leading-snug mb-2">{idea.title}</h3>
                <div className="flex items-center gap-3 text-xs text-ink/50">
                  <span className="flex items-center gap-1"><ShoppingCart size={12} /> {idea.wouldBuyPct}% buy</span>
                  <span className="flex items-center gap-1"><MessageCircle size={12} /> {idea.comments}</span>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white border-y border-ink/[0.06] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-center mb-2">How It Works</h2>
          <p className="text-center text-ink/60 mb-12">One loop, four steps — from a single opinion to a validated product.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="relative">
                <div className="w-11 h-11 rounded-xl bg-bridge-500 text-white flex items-center justify-center mb-4">
                  <s.icon size={20} />
                </div>
                <h3 className="font-display font-semibold mb-1">{i + 1}. {s.title}</h3>
                <p className="text-sm text-ink/60">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For customers / For companies */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-6">
        <div className="card p-8 bg-gradient-to-br from-bridge-500 to-bridge-700 text-white">
          <span className="chip bg-white/15 text-white mb-4 inline-block">For Customers</span>
          <h3 className="font-display text-2xl font-bold mb-3">Your idea could become the next product.</h3>
          <p className="text-white/80 text-sm mb-6">Suggest, vote, and watch your ideas move through a real product pipeline — not a feedback black hole.</p>
          <Link to="/signup" className="inline-flex items-center gap-1.5 bg-white text-bridge-700 font-semibold text-sm px-5 py-2.5 rounded-full">
            Share an Idea <ArrowRight size={16} />
          </Link>
        </div>
        <div className="card p-8 bg-ink text-white">
          <span className="chip bg-white/10 text-white mb-4 inline-block">For Companies</span>
          <h3 className="font-display text-2xl font-bold mb-3">Stop guessing what customers want.</h3>
          <p className="text-white/70 text-sm mb-6">Validate demand before you build. Turn thousands of responses into a clear, testable product roadmap.</p>
          <Link to="/signup" className="inline-flex items-center gap-1.5 bg-white text-ink font-semibold text-sm px-5 py-2.5 rounded-full">
            Discover Consumer Demand <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="text-center py-16">
        <h2 className="font-display text-3xl font-bold mb-6">Start Shaping the Future</h2>
        <Link to="/signup" className="btn-primary inline-flex items-center gap-1.5">Get started <ArrowRight size={16} /></Link>
      </section>

      <footer className="border-t border-ink/[0.06] py-8 text-center text-xs text-ink/40">
        © 2026 IdeaBridge. A product intelligence prototype.
      </footer>
    </div>
  )
}
