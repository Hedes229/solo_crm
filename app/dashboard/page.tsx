import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, FolderKanban, TrendingUp, UserSquare2 } from 'lucide-react'

// Dummy data for now
const stats = [
  {
    title: 'Total Prospects',
    value: '24',
    icon: Users,
    change: '+12% depuis le mois dernier',
  },
  {
    title: 'Clients Actifs',
    value: '12',
    icon: UserSquare2,
    change: '+2 nouveaux cette semaine',
  },
  {
    title: 'Projets en cours',
    value: '8',
    icon: FolderKanban,
    change: '3 approchent de la fin',
  },
  {
    title: 'Valeur du Pipeline',
    value: '45 200 €',
    icon: TrendingUp,
    change: '+5 000 € depuis le mois dernier',
  },
]

export default function DashboardPage() {
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
            <div className="space-y-4">
              <p className="text-sm text-neutral-400">Chargement du flux d'activité...</p>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Échéances à venir</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-neutral-400">Chargement des échéances...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
