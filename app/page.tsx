import { ArrowRight, CheckCircle2, LayoutDashboard, Send, Users, Zap, Quote } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full border-b border-white/5 bg-black/50 backdrop-blur-xl z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-lg flex items-center justify-center font-bold text-lg">S</div>
            <span className="text-xl font-bold tracking-tight">SoloCRM</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#ia" className="hover:text-white transition-colors">AI Engine</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-white transition-colors">Login</Link>
            <Link href="/signup" className="px-4 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-zinc-200 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/20 blur-[120px] -z-10 rounded-full" />
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold mb-8 animate-fade-in">
            <Zap size={14} />
            L'IA AU SERVICE DES FREELANCES
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
            GÉRER SON ACTIVITÉ <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              SANS STRESS.
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10">
            Le CRM intelligent pour freelances qui centralise vos prospects, automatise vos relances et génère vos devis en un clic grâce à l'IA.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup" className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              Commencer Gratuitement <ArrowRight size={18} />
            </Link>
            <Link href="#demo" className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-white/10 rounded-full font-bold hover:bg-zinc-800 transition-colors">
              Voir la démo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Users className="text-purple-500" />}
              title="Gestion Prospects"
              description="Suivez vos opportunités commerciales de 'Nouveau' à 'Gagné' avec un pipeline visuel simple."
            />
            <FeatureCard 
              icon={<Quote className="text-blue-500" />}
              title="Devis Assistés par IA"
              description="Décrivez le projet, l'IA génère la structure, les tâches et une suggestion de prix cohérente."
            />
            <FeatureCard 
              icon={<Send className="text-emerald-500" />}
              title="Relances Automatiques"
              description="Ne perdez plus jamais un prospect. Recevez des notifications intelligentes pour vos relances."
            />
          </div>
        </div>
      </section>

      {/* Dashboard Preview Overlay */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto bg-gradient-to-b from-zinc-900 to-black border border-white/10 rounded-3xl p-4 shadow-2xl shadow-purple-500/10">
           <div className="flex items-center gap-2 mb-4 px-4 py-2 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="text-xs text-zinc-600 ml-4">solo-crm.vercel.app/dashboard</span>
           </div>
           <div className="aspect-[16/9] bg-black/50 rounded-xl overflow-hidden flex flex-col items-center justify-center p-8 text-center">
              <LayoutDashboard size={48} className="text-zinc-800 mb-4" />
              <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase italic">Pipeline Visualisation Preview</p>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white text-black rounded flex items-center justify-center font-bold text-sm">S</div>
            <span className="text-lg font-bold">SoloCRM</span>
          </div>
          <p className="text-zinc-600 text-sm italic">© 2026 SoloCRM – Propulsé par l'IA.</p>
          <div className="flex gap-6 text-zinc-400">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-3xl border border-white/5 bg-zinc-900/50 hover:bg-zinc-900 transition-colors group">
      <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-purple-500/50 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-zinc-500 leading-relaxed">{description}</p>
    </div>
  );
}
