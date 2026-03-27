'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Sparkles, Loader2, Send } from 'lucide-react'
import { generateProposal } from './actions'

export default function ProposalsPage() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.currentTarget)
    try {
      const res = await generateProposal(formData)
      setResult(res.proposal)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Propositions IA</h1>
          <p className="text-neutral-400">Générez des propositions professionnelles en quelques secondes.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-blue-500" />
              Générateur
            </CardTitle>
            <CardDescription>Saisissez les détails du projet ci-dessous.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nom du Client</label>
                <input
                  name="clientName"
                  required
                  className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Acme Corp"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description du Projet</label>
                <textarea
                  name="projectDescription"
                  required
                  rows={4}
                  className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  placeholder="Nous avons besoin d'une refonte complète de notre site marketing..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Budget Estimé (€)</label>
                <input
                  name="budget"
                  type="number"
                  className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="5000"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                {loading ? 'Génération...' : 'Générer la Proposition'}
              </button>
            </form>
          </CardContent>
        </Card>

        <Card className="h-full min-h-[400px]">
          <CardHeader>
            <CardTitle>Résultat</CardTitle>
            <CardDescription>Votre proposition générée apparaîtra ici.</CardDescription>
          </CardHeader>
          <CardContent>
            {result ? (
              <div className="space-y-4">
                <div className="prose prose-invert prose-sm max-w-none p-4 rounded-md bg-neutral-950 border border-neutral-800 whitespace-pre-wrap">
                  {result}
                </div>
                <button className="w-full bg-neutral-800 hover:bg-neutral-700 text-white rounded-md px-4 py-2 font-medium flex items-center justify-center gap-2 transition-colors">
                  <Send className="h-4 w-4" />
                  Envoyer au Client
                </button>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center min-h-[250px] text-neutral-500 text-sm">
                Aucune proposition générée pour le moment.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
