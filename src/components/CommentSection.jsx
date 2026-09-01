import { useState } from 'react'
import { ThumbsUp } from 'lucide-react'
import { useApp } from '../context/AppContext'

export default function CommentSection({ ideaId, comments }) {
  const { addComment } = useApp()
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    addComment(ideaId, text.trim())
    setText('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-5">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add to the discussion..."
          className="flex-1 rounded-full border border-ink/10 px-4 py-2 text-sm focus:border-bridge-400"
        />
        <button type="submit" className="btn-primary text-sm px-4 py-2">Post</button>
      </form>
      <div className="space-y-4">
        {comments.map((c, i) => (
          <div key={i} className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-bridge-100 text-bridge-700 flex items-center justify-center text-xs font-semibold shrink-0">
              {c.author.slice(0, 2).toUpperCase()}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">{c.author}</div>
              <p className="text-sm text-ink/70 mt-0.5">{c.text}</p>
              <button className="flex items-center gap-1 text-xs text-ink/40 mt-1 hover:text-bridge-600">
                <ThumbsUp size={12} /> {c.likes}
              </button>
            </div>
          </div>
        ))}
        {comments.length === 0 && <p className="text-sm text-ink/40">Be the first to share your thoughts.</p>}
      </div>
    </div>
  )
}
