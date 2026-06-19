'use client'

import AuthShowcase from '@/components/Auth/AuthShowCase'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { authClient } from '@/lib/auth-client'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

const handleGoogleSignIn =async()=>{
        await authClient.signIn.social({
            provider:'google'
        })
      }


  const onSubmit =async data => {
const {data:signUpData,error} = await authClient.signUp.email({
  email:data.email,
  password:data.password,
  name:data.name,
  image:data.photo,
  role:data.role,
  callbackURL:'/'
})
console.log("data",data);
console.log("signUpData",signUpData);
console.log("error",error);
    
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#020817] transition-colors duration-300">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left Side */}
        <AuthShowcase />

        {/* Right Side */}
        <div className="flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-xl">

            <h2 className="text-5xl font-bold text-slate-900 dark:text-white">
              Create your account
            </h2>

            <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
              Join the community and start sharing great prompts.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-10 space-y-6"
            >
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Full name
                </label>

                <input
                  {...register('name', {
                    required: 'Name is required',
                  })}
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 px-5 py-4 text-slate-900 dark:text-white outline-none focus:border-indigo-500"
                />

                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

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
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 px-5 py-4 text-slate-900 dark:text-white outline-none focus:border-indigo-500"
                />

                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Photo */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Photo URL
                </label>

                <input
                  {...register('photo')}
                  type="text"
                  placeholder="https://..."
                  className="w-full rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 px-5 py-4 text-slate-900 dark:text-white outline-none focus:border-indigo-500"
                />

                <p className="mt-2 text-sm text-slate-500">
                  Optional — link to a profile image
                </p>
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
                      minLength: {
                        value: 6,
                        message:
                          'Password must be at least 6 characters',
                      },
                    })}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
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

                <p className="mt-2 text-sm text-slate-500">
                  Min 6 chars, 1 uppercase, 1 number
                </p>
              </div>

{/* role */}
{/* Role */}
<div>
  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
    Select Role
  </label>

  <select
    {...register('role', {
      required: 'Role is required',
    })}
    defaultValue="user"
    className="
      w-full
      rounded-2xl
      border
      border-slate-300
      dark:border-slate-800
      bg-white
      dark:bg-slate-950
      px-5
      py-4
      text-slate-900
      dark:text-white
      outline-none
      focus:border-indigo-500
      cursor-pointer
    "
  >
    <option value="user">User</option>
    <option value="creator">Creator</option>
  </select>

  {errors.role && (
    <p className="mt-1 text-sm text-red-500">
      {errors.role.message}
    </p>
  )}

  <p className="mt-2 text-sm text-slate-500">
    Choose how you want to use PromptVault.
  </p>
</div>

              {/* Register Button */}
              <button
                type="submit"
                className="w-full rounded-2xl bg-indigo-600 py-4 text-lg font-medium text-white transition hover:bg-indigo-700"
              >
                Create Account
              </button>

              {/* Google Button */}
              <button

                type="button"
                onClick={handleGoogleSignIn}
                className="w-full rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 py-4 text-lg font-medium text-slate-900 dark:text-white"
              >
                Continue with Google
              </button>

              {/* Login */}
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
        </div>

      </div>
    </div>
  )
}