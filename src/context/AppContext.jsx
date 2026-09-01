import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'
import { ideasSeed, notificationsSeed, currentCustomer } from '../data/mockData'

const AppContext = createContext(null)

const STORAGE_KEY = 'ideabridge_state_v1'

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch (e) { /* ignore corrupt state */ }
  return null
}

function seedState() {
  return {
    auth: null, // { role: 'customer' | 'company', name, companyId }
    ideas: ideasSeed,
    notifications: notificationsSeed,
    savedIdeaIds: [],
    votesCast: {}, // ideaId -> 'Definitely' | 'Probably' | 'Maybe' | 'No'
  }
}

export function AppProvider({ children }) {
  const [state, setState] = useState(() => loadState() || seedState())
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const pushToast = useCallback((message, tone = 'default') => {
    const id = Math.random().toString(36).slice(2)
    setToasts((t) => [...t, { id, message, tone }])
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3200)
  }, [])

  const login = useCallback((role, name, companyId) => {
    setState((s) => ({ ...s, auth: { role, name: name || (role === 'customer' ? currentCustomer.name : 'Company Admin'), companyId: companyId || 'fizzco' } }))
  }, [])

  const logout = useCallback(() => {
    setState((s) => ({ ...s, auth: null }))
  }, [])

  const voteIntent = useCallback((ideaId, choice) => {
    setState((s) => {
      const prevChoice = s.votesCast[ideaId]
      if (prevChoice === choice) return s // no-op if same
      const ideas = s.ideas.map((idea) => {
        if (idea.id !== ideaId) return idea
        const intentData = idea.intentData.map((d) => ({ ...d }))
        const keyMap = { Definitely: 'Definitely Buy', Probably: 'Probably Buy', Maybe: 'Maybe', No: 'No' }
        // remove previous choice weight
        if (prevChoice) {
          const prevLabel = keyMap[prevChoice]
          const prevEntry = intentData.find((d) => d.label === prevLabel)
          if (prevEntry && prevEntry.value > 0) prevEntry.value -= 1
        }
        const label = keyMap[choice]
        const entry = intentData.find((d) => d.label === label)
        if (entry) entry.value += 1
        const total = intentData.reduce((sum, d) => sum + d.value, 0) || 1
        const buyWeight = intentData.filter((d) => d.label.includes('Buy')).reduce((sum, d) => sum + d.value, 0)
        const wouldBuyPct = Math.round((buyWeight / total) * 100)
        const votes = prevChoice ? idea.votes : idea.votes + 1
        return { ...idea, intentData, wouldBuyPct, votes }
      })
      return { ...s, ideas, votesCast: { ...s.votesCast, [ideaId]: choice } }
    })
  }, [])

  const upvote = useCallback((ideaId) => {
    setState((s) => ({
      ...s,
      ideas: s.ideas.map((idea) => (idea.id === ideaId ? { ...idea, votes: idea.votes + 1 } : idea)),
    }))
  }, [])

  const toggleSave = useCallback((ideaId) => {
    setState((s) => {
      const saved = s.savedIdeaIds.includes(ideaId)
      return { ...s, savedIdeaIds: saved ? s.savedIdeaIds.filter((id) => id !== ideaId) : [...s.savedIdeaIds, ideaId] }
    })
  }, [])

  const addComment = useCallback((ideaId, text) => {
    setState((s) => ({
      ...s,
      ideas: s.ideas.map((idea) => idea.id === ideaId
        ? { ...idea, comments: idea.comments + 1, commentsList: [{ author: s.auth?.name?.split(' ')[0] || 'You', text, likes: 0 }, ...idea.commentsList] }
        : idea),
    }))
  }, [])

  const submitIdea = useCallback((payload) => {
    const id = payload.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 40) + '-' + Math.random().toString(36).slice(2, 6)
    const newIdea = {
      id,
      title: payload.title,
      companyId: payload.companyId,
      category: payload.category,
      creator: 'You',
      createdDaysAgo: 0,
      pitch: payload.description.slice(0, 120),
      description: payload.description,
      problem: payload.problem,
      targetCustomer: payload.targetCustomer,
      whyBuy: payload.whyBuy,
      suggestedPrice: Number(payload.price) || 0,
      votes: 1,
      comments: 0,
      wouldBuyPct: 0,
      validation: 42,
      status: 'New',
      priceData: [
        { label: '₹30', value: 20 }, { label: '₹40', value: 20 }, { label: '₹50', value: 20 }, { label: '₹60', value: 20 }, { label: '₹70+', value: 20 },
      ],
      intentData: [
        { label: 'Definitely Buy', value: 0, color: '#14B8A6' },
        { label: 'Probably Buy', value: 0, color: '#5B5FEF' },
        { label: 'Maybe', value: 0, color: '#FF8A3D' },
        { label: 'No', value: 0, color: '#D8DAE5' },
      ],
      needs: [],
      commentsList: [],
      journey: ['Submitted'],
      journeyStage: 0,
    }
    setState((s) => ({ ...s, ideas: [newIdea, ...s.ideas] }))
    return id
  }, [])

  const setIdeaStatus = useCallback((ideaId, status) => {
    setState((s) => ({ ...s, ideas: s.ideas.map((idea) => (idea.id === ideaId ? { ...idea, status } : idea)) }))
  }, [])

  const markAllRead = useCallback(() => {
    setState((s) => ({ ...s, notifications: s.notifications.map((n) => ({ ...n, read: true })) }))
  }, [])

  const value = useMemo(() => ({
    ...state,
    toasts,
    pushToast,
    login,
    logout,
    voteIntent,
    upvote,
    toggleSave,
    addComment,
    submitIdea,
    setIdeaStatus,
    markAllRead,
  }), [state, toasts, pushToast, login, logout, voteIntent, upvote, toggleSave, addComment, submitIdea, setIdeaStatus, markAllRead])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
