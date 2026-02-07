import type { Metadata } from 'next'

import QuotePage from '@/components/quote-page'

export const metadata: Metadata = {
  title: 'Get a Quote',
  description:
    'Request a quote for printing materials, toner supplies, printer spare parts, digital printer maintenance, branding and stationery services in Kenya.',
}

export default function Page() {
  return <QuotePage />
}
