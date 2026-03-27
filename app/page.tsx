import Link from 'next/link'
import { ArrowRight, Sparkles, LayoutDashboard, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto w-full border-b border-neutral-900/50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl leading-none">S</span>
          </div>
          <span className="text-xl font-bold tracking-tight">SoloCRM</span>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/login" className="text-neutral-400 hover:text-white transition-colors">
            Connexion
          </Link>
          <Link 
            href="/register" 
            className="bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors"
          >
            Commencer
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24 sm:py-32 lg:px-8 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-8 border border-blue-500/20">
          <Sparkles className="w-4 h-4" />
          <span>Le CRM nouvelle génération pour les freelances</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-500 max-w-4xl mx-auto mb-8 leading-tight">
          Gérez votre activité solo avec une élégance inégalée.
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          SoloCRM allie un design raffiné à une IA puissante pour vous aider à gérer vos prospects, vos clients et à générer des propositions gagnantes en quelques secondes.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link 
            href="/register" 
            className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-lg"
          >
            Essai gratuit
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link 
            href="/login" 
            className="w-full sm:w-auto bg-neutral-900 text-white px-8 py-4 rounded-full font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center border border-neutral-800 text-lg"
          >
            Accéder au Dashboard
          </Link>
        </div>

        {/* Aperçu du Dashboard */}
        <div className="mt-20 w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />
          <img 
            src="/dashboard-preview.png" 
            alt="Aperçu du Dashboard SoloCRM" 
            className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Fonctionnalités */}
        <div className="grid md:grid-cols-3 gap-8 w-full mt-32 text-left">
          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
            <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-6">
              <LayoutDashboard className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Pipeline Intuitif</h3>
            <p className="text-neutral-400">Suivez vos prospects visuellement du premier contact au contrat signé avec notre tableau Kanban.</p>
          </div>
          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
            <div className="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Propositions IA</h3>
            <p className="text-neutral-400">Générez des propositions de projet professionnelles et persuasives en quelques secondes grâce à l'IA.</p>
          </div>
          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
            <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Vitesse Éclair</h3>
            <p className="text-neutral-400">Basé sur Next.js App Router pour des temps de chargement instantanés et une interface réactive.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-900/50 py-12 text-center text-neutral-500 text-sm">
        <p>© {new Date().getFullYear()} SoloCRM. Tous droits réservés.</p>
      </footer>
    </div>
  )
}
