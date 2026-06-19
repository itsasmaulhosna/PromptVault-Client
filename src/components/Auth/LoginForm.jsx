// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import { Eye, EyeOff } from 'lucide-react'

// export default function LoginForm() {
// const [showPassword, setShowPassword] = useState(false)

// return ( <div className="w-full max-w-2xl">
// {/* Header */} <h1 className="text-4xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
// Welcome back </h1>


//   <p className="mt-4 text-xl text-slate-600 dark:text-slate-400">
//     Sign in to your PromptVault account to continue.
//   </p>

//   {/* Form */}
//   <form className="mt-12 space-y-8">

//     {/* Email */}
//     <div>
//       <label className="mb-4 block text-sm font-medium text-slate-700 dark:text-slate-300">
//         Email
//       </label>

//       <input
//         type="email"
//         placeholder="user@promptvault.dev"
//         className="h-16 w-full rounded-3xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 px-6 text-lg text-slate-900 dark:text-white outline-none transition focus:border-indigo-500"
//       />
//     </div>

//     {/* Password */}
//     <div>
//       <label className="mb-4 block text-sm font-medium text-slate-700 dark:text-slate-300">
//         Password
//       </label>

//       <div className="relative">
//         <input
//           type={showPassword ? 'text' : 'password'}
//           placeholder="••••••••"
//           className="h-16 w-full rounded-3xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 px-6 pr-16 text-lg text-slate-900 dark:text-white outline-none transition focus:border-indigo-500"
//         />

//         <button
//           type="button"
//           onClick={() => setShowPassword(!showPassword)}
//           className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
//         >
//           {showPassword ? (
//             <EyeOff size={24} />
//           ) : (
//             <Eye size={24} />
//           )}
//         </button>
//       </div>
//     </div>

//     {/* Sign In Button */}
//     <button
//       type="submit"
//       className="h-16 w-full rounded-3xl bg-indigo-600 text-xl font-medium text-white transition hover:bg-indigo-700"
//     >
//       Sign in
//     </button>

//     {/* Google Login */}
//     <button
//       type="button"
//       className="flex h-16 w-full items-center justify-center gap-3 rounded-3xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 text-xl font-medium text-slate-900 dark:text-white transition hover:border-indigo-500"
//     >
//       <svg
//         width="24"
//         height="24"
//         viewBox="0 0 48 48"
//       >
//         <path
//           fill="#FFC107"
//           d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
//         />
//         <path
//           fill="#FF3D00"
//           d="M6.3 14.7l6.6 4.8C14.7 15 19 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4c-7.7 0-14.4 4.3-17.7 10.7z"
//         />
//         <path
//           fill="#4CAF50"
//           d="M24 44c5.2 0 10-2 13.5-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.4 39.6 16.1 44 24 44z"
//         />
//         <path
//           fill="#1976D2"
//           d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.3 5.4-6.1 6.8l6.2 5.2C39 36.8 44 31 44 24c0-1.3-.1-2.4-.4-3.5z"
//         />
//       </svg>

//       Continue with Google
//     </button>

//     {/* Register */}
//     <p className="pt-2 text-center text-lg text-slate-600 dark:text-slate-400">
//       Don't have an account?{' '}
//       <Link
//         href="/register"
//         className="font-semibold text-indigo-600 dark:text-indigo-500 hover:underline"
//       >
//         Create one
//       </Link>
//     </p>
//   </form>
// </div>


// )
// }
