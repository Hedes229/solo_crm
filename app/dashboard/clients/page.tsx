import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus, MoreHorizontal } from 'lucide-react'
import { createClient } from '@/utils/supabase/server'

export default async function ClientsPage() {
  const supabase = await createClient()
  const { data: clients } = await supabase
    .from('clients')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Clients</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium flex items-center gap-2 transition-colors">
          <Plus className="h-4 w-4" />
          Ajouter un Client
        </button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tous les Clients</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border border-neutral-800 rounded-md overflow-hidden">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-neutral-400 bg-neutral-900 uppercase border-b border-neutral-800">
                <tr>
                  <th className="px-6 py-3">Nom</th>
                  <th className="px-6 py-3">Entreprise</th>
                  <th className="px-6 py-3">Téléphone</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {clients && clients.length > 0 ? (
                  clients.map((client) => (
                    <tr key={client.id} className="bg-neutral-950 border-b border-neutral-800 hover:bg-neutral-900/50">
                      <td className="px-6 py-4 font-medium text-white">
                        {client.name}
                        <div className="text-neutral-500 font-normal">{client.email}</div>
                      </td>
                      <td className="px-6 py-4">{client.company || '-'}</td>
                      <td className="px-6 py-4">{client.phone || '-'}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-neutral-400 hover:text-white">
                          <MoreHorizontal className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-neutral-500">
                      Aucun client trouvé. Ajoutez votre premier client pour commencer !
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
