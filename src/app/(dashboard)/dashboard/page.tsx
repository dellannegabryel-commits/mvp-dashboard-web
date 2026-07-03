import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Wrench, AlertTriangle, CheckCircle } from 'lucide-react'

const stats = [
  { title: 'Convênios Ativos', value: '3', icon: FileText, description: 'Em execução' },
  { title: 'Instrumentos', value: '6', icon: Wrench, description: 'Total cadastrados' },
  { title: 'Riscos Altos', value: '2', icon: AlertTriangle, description: 'Laranja e vermelho' },
  { title: 'Concluídos', value: '1', icon: CheckCircle, description: 'Encerrados' },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Visão geral dos convênios e instrumentos</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-muted-foreground text-xs">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
