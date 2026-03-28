import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, FolderKanban, TrendingUp, UserSquare2 } from 'lucide-react'
import { createClient } from '@/utils/supabase/server'

export default async function DashboardPage() {
  const supabase = await createClient()

  // Fetch real counts
  const { count: prospectsCount } = await supabase
    .from('prospects')
    .select('*', { count: 'exact', head: true })

  const { count: clientsCount } = await supabase
    .from('clients')
    .select('*', { count: 'exact', head: true })

  const { count: projectsCount } = await supabase
    .from('projects')
    .select('*', { count: 'exact', head: true })

  // Calculate pipeline value (sum of 'value' from prospects)
  const { data: prospectsData } = await supabase
    .from('prospects')
    .select('value')
    .not('value', 'is', null)

  const pipelineValue = prospectsData?.reduce((acc, curr) => acc + (curr.value || 0), 0) || 0

  const stats = [
    {
      title: 'Total Prospects',
      value: prospectsCount?.toString() || '0',
      icon: Users,
      change: 'Données en temps réel',
    },
    {
      title: 'Clients Actifs',
      value: clientsCount?.toString() || '0',
      icon: UserSquare2,
      change: 'Mis à jour à l\'instant',
    },
    {
      title: 'Projets en cours',
      value: projectsCount?.toString() || '0',
      icon: FolderKanban,
      change: 'Suivi de vos contrats',
    },
    {
      title: 'Valeur du Pipeline',
      value: `${new Intl.NumberFormat('fr-FR').format(pipelineValue)} €`,
      icon: TrendingUp,
      change: 'Somme des prospects qualifiés',
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Vue d'ensemble</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-neutral-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-neutral-400 mt-1">
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Activité Récente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-center py-8">
              <p className="text-sm text-neutral-400">Le flux d'activité sera disponible dès vos premières actions.</p>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Raccourcis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-neutral-400 italic">"Gérez votre entreprise avec simplicité."</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
