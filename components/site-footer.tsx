'use client'

import React from "react"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SiteFooter() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    window.history.replaceState(null, '', '/')
  }

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            {isHomePage ? (
              <button
                type="button"
                className="flex items-center gap-2 mb-4 w-fit cursor-pointer"
                aria-label="Go to landing page"
                onClick={() => scrollToSection('top')}
              >
                <Image
                  src="/meshtech-logo.svg"
                  alt="MESHTECH QUALITY SOLUTION logo"
                  width={1024}
                  height={300}
                  className="h-12 w-auto"
                />
              </button>
            ) : (
              <Link
                href="/?section=top"
                className="flex items-center gap-2 mb-4 w-fit"
                aria-label="Go to landing page"
              >
                <Image
                  src="/meshtech-logo.svg"
                  alt="MESHTECH QUALITY SOLUTION logo"
                  width={1024}
                  height={300}
                  className="h-12 w-auto"
                />
              </Link>
            )}
            <p className="text-white/80 text-sm">
              Smart printing and branding solutions you can trust.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                {isHomePage ? (
                  <button
                    type="button"
                    className="hover:text-accent transition cursor-pointer"
                    onClick={() => scrollToSection('services')}
                  >
                    Services
                  </button>
                ) : (
                  <Link href="/?section=services" className="hover:text-accent transition">
                    Services
                  </Link>
                )}
              </li>
              <li>
                {isHomePage ? (
                  <button
                    type="button"
                    className="hover:text-accent transition cursor-pointer"
                    onClick={() => scrollToSection('why-us')}
                  >
                    Why Us
                  </button>
                ) : (
                  <Link href="/?section=why-us" className="hover:text-accent transition">
                    Why Us
                  </Link>
                )}
              </li>
              <li>
                {isHomePage ? (
                  <button
                    type="button"
                    className="hover:text-accent transition cursor-pointer"
                    onClick={() => scrollToSection('contact')}
                  >
                    Contact
                  </button>
                ) : (
                  <Link href="/?section=contact" className="hover:text-accent transition">
                    Contact
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
          <p>© {currentYear} MESHTECH QUALITY SOLUTION. All rights reserved.</p>
          <p className="mt-3">
            <span className="font-semibold text-white">Developer:</span>{' '}
            <span>Keith Odera</span>{' '}
            <a
              href="tel:+254746445209"
              className="text-white/90 hover:text-accent transition"
            >
              254746445209
            </a>{' '}
            <a
              href="mailto:oderakeith@gmail.com"
              className="text-white/90 hover:text-accent transition"
            >
              oderakeith@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
