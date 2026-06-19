'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Globe } from 'lucide-react'
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from 'react-icons/fa6'

export default function Footer() {
return ( <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#020817] transition-colors duration-300"> <div className="mx-auto max-w-7xl px-6 py-16">


    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

      {/* Brand */}
      <div>
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="PromptVault"
            width={42}
            height={42}
          />

          <span className="text-2xl font-bold text-slate-900 dark:text-white">
            Prompt
            <span className="text-violet-600">Vault</span>
          </span>
        </Link>

        <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400">
          Discover, bookmark and share the best AI prompts for
          ChatGPT, Claude, Gemini and more.
        </p>

        <div className="mt-6 flex items-center gap-3">
              <Link
    href="#"
    target="_blank"
    className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-violet-500 transition"
  >
    <FaGithub size={18} />
  </Link>

  <Link
    href="#"
    target="_blank"
    className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-violet-500 transition"
  >
    <FaLinkedin size={18} />
  </Link>

  <Link
    href="#"
    target="_blank"
    className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-violet-500 transition"
  >
    <FaXTwitter size={18} />
  </Link>

          <Link
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-violet-500 transition"
          >
            <Globe size={18} />
          </Link>

          <Link
            href="mailto:hello@promptvault.com"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-violet-500 transition"
          >
            <Mail size={18} />
          </Link>
        </div>
      </div>

      {/* Explore */}
      <div>
        <h3 className="mb-5 text-lg font-semibold text-slate-900 dark:text-white">
          Explore
        </h3>

        <ul className="space-y-3">
          <li>
            <Link href="/prompts" className="text-slate-600 dark:text-slate-400 hover:text-violet-500">
              All Prompts
            </Link>
          </li>
          <li>
            <Link href="/categories" className="text-slate-600 dark:text-slate-400 hover:text-violet-500">
              Categories
            </Link>
          </li>
          <li>
            <Link href="/trending" className="text-slate-600 dark:text-slate-400 hover:text-violet-500">
              Trending Prompts
            </Link>
          </li>
          <li>
            <Link href="/popular" className="text-slate-600 dark:text-slate-400 hover:text-violet-500">
              Popular Prompts
            </Link>
          </li>
        </ul>
      </div>

      {/* Account */}
      <div>
        <h3 className="mb-5 text-lg font-semibold text-slate-900 dark:text-white">
          Account
        </h3>

        <ul className="space-y-3">
          <li>
            <Link href="/login" className="text-slate-600 dark:text-slate-400 hover:text-violet-500">
              Login
            </Link>
          </li>
          <li>
            <Link href="/register" className="text-slate-600 dark:text-slate-400 hover:text-violet-500">
              Register
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="text-slate-600 dark:text-slate-400 hover:text-violet-500">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/submit-prompt" className="text-slate-600 dark:text-slate-400 hover:text-violet-500">
              Submit Prompt
            </Link>
          </li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h3 className="mb-5 text-lg font-semibold text-slate-900 dark:text-white">
          Company
        </h3>

        <ul className="space-y-3">
          <li>
            <Link href="/about" className="text-slate-600 dark:text-slate-400 hover:text-violet-500">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-slate-600 dark:text-slate-400 hover:text-violet-500">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy" className="text-slate-600 dark:text-slate-400 hover:text-violet-500">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="text-slate-600 dark:text-slate-400 hover:text-violet-500">
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>

    </div>

    <div className="mt-14 flex flex-col gap-4 border-t border-slate-200 dark:border-slate-800 pt-8 md:flex-row md:items-center md:justify-between">
      <p className="text-sm text-slate-500 dark:text-slate-400">
        © 2026 PromptVault. All rights reserved.
      </p>

      <p className="text-sm text-slate-500 dark:text-slate-400">
        Built for AI Creators
      </p>
    </div>

  </div>
</footer>


)
}
