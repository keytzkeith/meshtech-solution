import type { Metadata } from 'next'

import HomePage from '@/components/home-page'

export const metadata: Metadata = {
  title: 'Printing & Branding Solutions in Kenya',
  description:
    'MESHTECH QUALITY SOLUTION provides professional printing materials, toner supplies, printer spare parts, digital printer maintenance, branding and stationery services in Kenya.',
}

export default function Page() {
  return <HomePage />
}
