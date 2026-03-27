import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus, MoreHorizontal } from 'lucide-react'
import { createClient } from '@/utils/supabase/server'

export default async function ProspectsPage() {
  const supabase = await createClient()
  const { data: prospects } = await supabase
    .from('prospects')
    .select('*')
    .order('created_at', { ascending: false })

  const statusMap: Record<string, string> = {
    'new': 'Nouveau',
    'contacted': 'Contacté',
    'proposal_sent': 'Proposition envoyée',
    'won': 'Gagné',
    'lost': 'Perdu'
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Prospects</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium flex items-center gap-2 transition-colors">
          <Plus className="h-4 w-4" />
          Ajouter un Prospect
        </button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tous les Prospects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border border-neutral-800 rounded-md overflow-hidden">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-neutral-400 bg-neutral-900 uppercase border-b border-neutral-800">
                <tr>
                  <th className="px-6 py-3">Nom</th>
                  <th className="px-6 py-3">Entreprise</th>
                  <th className="px-6 py-3">Statut</th>
                  <th className="px-6 py-3">Valeur</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {prospects && prospects.length > 0 ? (
                  prospects.map((prospect) => (
                    <tr key={prospect.id} className="bg-neutral-950 border-b border-neutral-800 hover:bg-neutral-900/50">
                      <td className="px-6 py-4 font-medium text-white">
                        {prospect.name}
                        <div className="text-neutral-500 font-normal">{prospect.email}</div>
                      </td>
                      <td className="px-6 py-4">{prospect.company || '-'}</td>
                      <td className="px-6 py-4">
                        <span className="bg-neutral-800 text-white text-xs font-medium px-2.5 py-0.5 rounded capitalize">
                          {statusMap[prospect.status] || prospect.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {prospect.value ? `${prospect.value} €` : '-'}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-neutral-400 hover:text-white">
                          <MoreHorizontal className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-neutral-500">
                      Aucun prospect trouvé. Ajoutez votre premier prospect pour commencer !
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
