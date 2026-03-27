import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus, MoreHorizontal } from 'lucide-react'
import { createClient } from '@/utils/supabase/server'

export default async function ProjectsPage() {
  const supabase = await createClient()
  const { data: projects } = await supabase
    .from('projects')
    .select('*, clients(name)')
    .order('created_at', { ascending: false })

  const statusMap: Record<string, string> = {
    'active': 'Actif',
    'completed': 'Terminé',
    'on_hold': 'En pause'
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Projets</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium flex items-center gap-2 transition-colors">
          <Plus className="h-4 w-4" />
          Nouveau Projet
        </button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tous les Projets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border border-neutral-800 rounded-md overflow-hidden">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-neutral-400 bg-neutral-900 uppercase border-b border-neutral-800">
                <tr>
                  <th className="px-6 py-3">Nom du Projet</th>
                  <th className="px-6 py-3">Client</th>
                  <th className="px-6 py-3">Statut</th>
                  <th className="px-6 py-3">Échéance</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects && projects.length > 0 ? (
                  projects.map((project) => (
                    <tr key={project.id} className="bg-neutral-950 border-b border-neutral-800 hover:bg-neutral-900/50">
                      <td className="px-6 py-4 font-medium text-white">
                        {project.name}
                      </td>
                      <td className="px-6 py-4">{project.clients?.name || '-'}</td>
                      <td className="px-6 py-4">
                        <span className="bg-neutral-800 text-white text-xs font-medium px-2.5 py-0.5 rounded capitalize">
                          {statusMap[project.status] || project.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {project.end_date ? new Date(project.end_date).toLocaleDateString('fr-FR') : '-'}
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
                      Aucun projet trouvé.
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
