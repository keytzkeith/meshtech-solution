import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import SiteFooter from '@/components/site-footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'MESHTECH QUALITY SOLUTION | Printing, Toner & Printer Repair in Kenya',
    template: '%s | MESHTECH QUALITY SOLUTION',
  },
  description:
    'MESHTECH QUALITY SOLUTION provides professional printing materials, toner supplies, printer spare parts, digital printer maintenance, branding and stationery services in Kenya.',
  keywords: [
    'printing services Kenya',
    'toner supplies Kenya',
    'printer repair Kenya',
    'printer spare parts',
    'digital printer maintenance',
    'branding services',
    'stationery printing',
    'MESHTECH QUALITY SOLUTION',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'MESHTECH QUALITY SOLUTION | Printing, Toner & Printer Repair in Kenya',
    description:
      'MESHTECH QUALITY SOLUTION provides professional printing materials, toner supplies, printer spare parts, digital printer maintenance, branding and stationery services in Kenya.',
    type: 'website',
    siteName: 'MESHTECH QUALITY SOLUTION',
    images: [
      {
        url: '/meshtech-logo.svg',
        alt: 'MESHTECH QUALITY SOLUTION logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MESHTECH QUALITY SOLUTION | Printing, Toner & Printer Repair in Kenya',
    description:
      'MESHTECH QUALITY SOLUTION provides professional printing materials, toner supplies, printer spare parts, digital printer maintenance, branding and stationery services in Kenya.',
    images: ['/meshtech-logo.svg'],
  },
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  )
}
