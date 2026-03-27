import Link from 'next/link'
import { login } from './actions'

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ message: string }>
}) {
  const { message } = await searchParams

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 mx-auto min-h-screen">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Retour
      </Link>

      <form
        className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
      >
        <h1 className="text-3xl font-bold mb-6 tracking-tight text-white">Connexion</h1>
        <label className="text-md font-medium" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-neutral-900 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 transition-all"
          name="email"
          placeholder="vous@exemple.com"
          required
        />
        <label className="text-md font-medium" htmlFor="password">
          Mot de passe
        </label>
        <input
          className="rounded-md px-4 py-2 bg-neutral-900 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6 transition-all"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button
          formAction={login}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 text-foreground mb-4 transition-colors font-medium"
        >
          Se connecter
        </button>

        {message && (
          <p className="mt-4 p-4 bg-red-900/50 text-red-300 border border-red-800 text-center rounded-md text-sm">
            {message === 'Could not authenticate user' ? 'Impossible d\'authentifier l\'utilisateur' : message}
          </p>
        )}

        <div className="text-sm text-center text-neutral-400 mt-4">
          Vous n'avez pas de compte ?{' '}
          <Link href="/register" className="text-blue-500 hover:underline">
            S'inscrire
          </Link>
        </div>
      </form>
    </div>
  )
}
