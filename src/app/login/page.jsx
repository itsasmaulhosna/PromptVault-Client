'use client'

import AuthShowcase from '@/components/Auth/AuthShowCase'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: 'google',
      callbackURL: '/',
    })
  }

  const onSubmit = async data => {
    const { data: signInData, error } =
      await authClient.signIn.email({
        email: data.email,
        password: data.password,
      })

    console.log('signInData:', signInData)
    console.log('error:', error)

    if (error) {
      toast.error(error.message || 'Login failed')
      return
    }

    toast.success('Login successful 🎉')
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#020817] transition-colors duration-300">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left Side */}
        <AuthShowcase />

        {/* Right Side */}
        <div className="flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-xl">

            <h1 className="text-5xl font-bold text-slate-900 dark:text-white">
              Welcome back
            </h1>

            <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
              Sign in to your PromptVault account to continue.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-10 space-y-6"
            >
              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email
                </label>

                <input
                  {...register('email', {
                    required: 'Email is required',
                  })}
                  type="email"
                  placeholder="user@promptvault.dev"
                  className="w-full rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 px-5 py-4 text-slate-900 dark:text-white outline-none focus:border-indigo-500"
                />

                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Password
                </label>

                <div className="relative">
                  <input
                    {...register('password', {
                      required: 'Password is required',
                    })}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    className="w-full rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 px-5 py-4 pr-12 text-slate-900 dark:text-white outline-none focus:border-indigo-500"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full rounded-2xl bg-indigo-600 py-4 text-lg font-medium text-white transition hover:bg-indigo-700"
              >
                Sign in
              </button>

              {/* Google Login */}
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="w-full rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 py-4 text-lg font-medium text-slate-900 dark:text-white transition"
              >
                Continue with Google
              </button>

              {/* Register */}
              <p className="text-center text-slate-600 dark:text-slate-400">
                Don't have an account?{' '}
                <Link
                  href="/register"
                  className="font-medium text-indigo-600 dark:text-indigo-500"
                >
                  Create one
                </Link>
              </p>
            </form>

          </div>
        </div>

      </div>
    </div>
  )
}