import Link from 'next/link'
import { signup } from './actions'

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ message: string }>
}) {
  const { message } = await searchParams

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 mx-auto min-h-screen bg-black text-white">
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
        <h1 className="text-3xl font-bold mb-6 tracking-tight text-white">Créer un compte</h1>
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
          formAction={signup}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 text-foreground mb-4 transition-colors font-medium"
        >
          S'inscrire
        </button>

        {message && (
          <p className="mt-4 p-4 bg-neutral-900/50 text-neutral-300 border border-neutral-800 text-center rounded-md text-sm">
            {message === 'Check email to continue sign in process' ? 'Veuillez vérifier vos e-mails pour continuer.' : message}
          </p>
        )}

        <div className="text-sm text-center text-neutral-400 mt-4">
          Vous avez déjà un compte ?{' '}
          <Link href="/login" className="text-blue-500 hover:underline">
            Se connecter
          </Link>
        </div>
      </form>
    </div>
  )
}
