import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { demographics, categoryTrend, priceSensitivity } from '../../data/mockData'
import { useApp } from '../../context/AppContext'
import ChartCard from '../../components/ChartCard'

const DEMO_COLORS = ['#5B5FEF', '#FF8A3D', '#14B8A6', '#9A9BF6']

export default function Analytics() {
  const { ideas } = useApp()
  const categoryCounts = Object.entries(
    ideas.reduce((acc, i) => { acc[i.category] = (acc[i.category] || 0) + 1; return acc }, {})
  ).map(([name, value]) => ({ name, value }))

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold mb-1">Analytics</h1>
        <p className="text-ink/50 text-sm">Consumer demand, demographics, and pricing signals across your ideas.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <ChartCard title="Consumer Demand Over Time" subtitle="Monthly response volume">
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={categoryTrend}>
              <defs>
                <linearGradient id="respGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5B5FEF" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#5B5FEF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EEF0F6" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip />
              <Area type="monotone" dataKey="responses" stroke="#5B5FEF" fill="url(#respGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Demographic Distribution" subtitle="Respondents by age group">
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={demographics} dataKey="value" nameKey="name" innerRadius={55} outerRadius={85} paddingAngle={3}>
                {demographics.map((d, i) => <Cell key={i} fill={DEMO_COLORS[i % DEMO_COLORS.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-3 mt-2 justify-center">
            {demographics.map((d, i) => (
              <span key={d.name} className="text-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ background: DEMO_COLORS[i % DEMO_COLORS.length] }} />
                {d.name} · {d.value}%
              </span>
            ))}
          </div>
        </ChartCard>

        <ChartCard title="Price Sensitivity" subtitle="Acceptance rate by price point">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={priceSensitivity}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EEF0F6" />
              <XAxis dataKey="price" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip cursor={{ fill: '#FFF4EC' }} />
              <Bar dataKey="acceptance" fill="#FF8A3D" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Ideas by Category" subtitle="Submission volume across categories">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={categoryCounts} layout="vertical" margin={{ left: 10 }}>
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={110} axisLine={false} tickLine={false} />
              <Tooltip cursor={{ fill: '#F1F1FE' }} />
              <Bar dataKey="value" fill="#14B8A6" radius={[0, 6, 6, 0]} barSize={16} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  )
}
