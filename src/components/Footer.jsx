'use client'

import Link from 'next/link'
import Image from 'next/image'

import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

export default function Footer() {
return ( <footer className="border-t border-slate-800 bg-[#020817]"> <div className="mx-auto max-w-7xl px-6 py-16">


    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

      {/* Brand */}
      <div className="lg:col-span-1">
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.svg"
            alt="PromptVault"
            width={42}
            height={42}
          />

          <span className="text-2xl font-bold text-white">
            Prompt
            <span className="text-violet-500">Vault</span>
          </span>
        </Link>

        <p className="mt-6 max-w-sm text-base leading-8 text-slate-400">
          The community-driven marketplace for high-quality AI prompts.
          Discover, share and sell prompts for every AI tool.
        </p>

        {/* Social Links */}
        <div className="mt-8 flex items-center gap-3">

          <Link
            href="https://x.com"
            target="_blank"
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 text-slate-400 transition hover:border-violet-500 hover:text-white"
          >
            <FaXTwitter size={20} />
          </Link>

          <Link
            href="https://github.com"
            target="_blank"
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 text-slate-400 transition hover:border-violet-500 hover:text-white"
          >
            <FaGithub size={20} />
          </Link>

          <Link
            href="https://linkedin.com"
            target="_blank"
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 text-slate-400 transition hover:border-violet-500 hover:text-white"
          >
            <FaLinkedin size={20} />
          </Link>

          <Link
            href="mailto:hello@promptvault.com"
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 text-slate-400 transition hover:border-violet-500 hover:text-white"
          >
            <MdEmail size={22} />
          </Link>
        </div>
      </div>

      {/* Explore */}
      <div>
        <h3 className="mb-6 text-lg font-semibold text-white">
          Explore
        </h3>

        <ul className="space-y-4">
          <li>
            <Link
              href="/prompts"
              className="text-slate-400 transition hover:text-violet-400"
            >
              All Prompts
            </Link>
          </li>

          <li>
            <Link
              href="/popular"
              className="text-slate-400 transition hover:text-violet-400"
            >
              Most Popular
            </Link>
          </li>

          <li>
            <Link
              href="/copied"
              className="text-slate-400 transition hover:text-violet-400"
            >
              Most Copied
            </Link>
          </li>
        </ul>
      </div>

      {/* Account */}
      <div>
        <h3 className="mb-6 text-lg font-semibold text-white">
          Account
        </h3>

        <ul className="space-y-4">
          <li>
            <Link
              href="/dashboard"
              className="text-slate-400 transition hover:text-violet-400"
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              href="/submit-prompt"
              className="text-slate-400 transition hover:text-violet-400"
            >
              Submit a Prompt
            </Link>
          </li>

          <li>
            <Link
              href="/pricing"
              className="text-slate-400 transition hover:text-violet-400"
            >
              Go Premium
            </Link>
          </li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h3 className="mb-6 text-lg font-semibold text-white">
          Company
        </h3>

        <ul className="space-y-4">
          <li>
            <Link
              href="/about"
              className="text-slate-400 transition hover:text-violet-400"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/guidelines"
              className="text-slate-400 transition hover:text-violet-400"
            >
              Guidelines
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="text-slate-400 transition hover:text-violet-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-center md:flex-row">
      <p className="text-sm text-slate-500">
        © 2026 PromptVault. All rights reserved.
      </p>

      <p className="text-sm text-slate-500">
        Built for the AI prompt community.
      </p>
    </div>
  </div>
</footer>


)
}
