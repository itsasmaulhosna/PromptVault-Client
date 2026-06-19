'use client'

import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

export default function RegisterForm() {
const [showPassword, setShowPassword] = useState(false)

return ( <div className="w-full max-w-xl"> <h2 className="text-5xl font-bold text-slate-900 dark:text-white">
Create your account </h2>


  <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
    Join the community and start sharing great prompts.
  </p>

  <form className="mt-10 space-y-6">

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
        Full name
      </label>

      <input
        type="text"
        placeholder="Jane Doe"
        className="w-full rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 px-5 py-4 text-slate-900 dark:text-white outline-none focus:border-indigo-500"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
        Email
      </label>

      <input
        type="email"
        placeholder="you@example.com"
        className="w-full rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 px-5 py-4 text-slate-900 dark:text-white outline-none focus:border-indigo-500"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
        Photo URL
      </label>

      <input
        type="text"
        placeholder="https://..."
        className="w-full rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 px-5 py-4 text-slate-900 dark:text-white outline-none focus:border-indigo-500"
      />

      <p className="mt-2 text-sm text-slate-500">
        Optional — link to a profile image
      </p>
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
        Password
      </label>

      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="••••••••"
          className="w-full rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 px-5 py-4 pr-12 text-slate-900 dark:text-white outline-none focus:border-indigo-500"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      <p className="mt-2 text-sm text-slate-500">
        Min 6 chars, 1 uppercase, 1 number
      </p>
    </div>

    <button
      type="submit"
      className="w-full rounded-2xl bg-indigo-600 py-4 text-lg font-medium text-white hover:bg-indigo-700 transition"
    >
      Create Account
    </button>

    <button
      type="button"
      className="w-full rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 py-4 text-lg font-medium text-slate-900 dark:text-white"
    >
      Continue with Google
    </button>

    <p className="text-center text-slate-600 dark:text-slate-400">
      Already have an account?{' '}
      <Link
        href="/login"
        className="font-medium text-indigo-600 dark:text-indigo-500"
      >
        Sign in
      </Link>
    </p>
  </form>
</div>


)
}
