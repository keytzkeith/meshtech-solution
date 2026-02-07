'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/button'

const serviceOptions = [
  'Toner & Printing Materials',
  'Printer Spare Parts',
  'Digital Printer Maintenance & Repair',
  'Graphic Design & Printing',
  'Branding & Stationery',
]

const WHATSAPP_NUMBER = '254746382681'
const KENYA_PHONE_REGEX = /^254(7\d{8}|1\d{8})$/

export default function QuotePage() {
  const [quoteData, setQuoteData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '254',
    service: '',
    quantity: '',
    budget: '',
    deadline: '',
    details: '',
  })
  const today = new Date()
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset())
  const minDeadlineDate = today.toISOString().split('T')[0]

  const handleQuoteInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '')
      const localPart = digitsOnly.startsWith('254')
        ? digitsOnly.slice(3)
        : digitsOnly.startsWith('0')
          ? digitsOnly.slice(1)
          : digitsOnly
      const phone = `254${localPart}`.slice(0, 12)
      setQuoteData((prev) => ({
        ...prev,
        phone,
      }))
      return
    }

    setQuoteData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!KENYA_PHONE_REGEX.test(quoteData.phone)) {
      window.alert('Enter a valid Kenyan phone in 254XXXXXXXXX format.')
      return
    }

    const lines = [
      '*New Quote Request*',
      '',
      `Full Name: ${quoteData.fullName}`,
      `Company: ${quoteData.company || '-'}`,
      `Email: ${quoteData.email}`,
      `Phone: ${quoteData.phone}`,
      `Service: ${quoteData.service}`,
      `Quantity/Volume: ${quoteData.quantity || '-'}`,
      `Budget Range (KES): ${quoteData.budget || '-'}`,
      `Deadline: ${quoteData.deadline || '-'}`,
      '',
      'Project Details:',
      quoteData.details,
    ]

    const message = lines.join('\n')
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    setQuoteData({
      fullName: '',
      company: '',
      email: '',
      phone: '254',
      service: '',
      quantity: '',
      budget: '',
      deadline: '',
      details: '',
    })
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="Go to homepage">
            <Image
              src="/meshtech-logo.svg"
              alt="MESHTECH QUALITY SOLUTION logo"
              width={1024}
              height={300}
              className="h-12 w-auto"
            />
          </Link>
          <Button asChild variant="outline">
            <Link href="/">Back Home</Link>
          </Button>
        </nav>
      </header>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">Get a Quote</h1>
              <p className="text-lg text-foreground/70 mb-8">
                Share your requirements and we will send a tailored quote quickly.
              </p>
              <div className="space-y-4">
                <div className="rounded-lg border border-border bg-muted p-4">
                  <p className="font-semibold text-primary">Fast Response</p>
                  <p className="text-sm text-foreground/70">Most quotes are shared within 24 hours.</p>
                </div>
                <div className="rounded-lg border border-border bg-muted p-4">
                  <p className="font-semibold text-primary">Custom Pricing</p>
                  <p className="text-sm text-foreground/70">Pricing is based on service type, volume, and timeline.</p>
                </div>
                <div className="rounded-lg border border-border bg-muted p-4">
                  <p className="font-semibold text-primary">Expert Guidance</p>
                  <p className="text-sm text-foreground/70">We can suggest the best materials and options for your budget.</p>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-6 sm:p-8 border border-border">
              <form onSubmit={handleQuoteSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium mb-2 text-foreground">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={quoteData.fullName}
                      onChange={handleQuoteInputChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2 text-foreground">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={quoteData.company}
                      onChange={handleQuoteInputChange}
                      placeholder="Company name"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="quoteEmail" className="block text-sm font-medium mb-2 text-foreground">
                      Email
                    </label>
                    <input
                      id="quoteEmail"
                      name="email"
                      type="email"
                      value={quoteData.email}
                      onChange={handleQuoteInputChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={quoteData.phone}
                      onChange={handleQuoteInputChange}
                      placeholder="254712345678"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2 text-foreground">
                    Service Type
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={quoteData.service}
                    onChange={handleQuoteInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                    required
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium mb-2 text-foreground">
                      Quantity / Volume
                    </label>
                    <input
                      id="quantity"
                      name="quantity"
                      type="text"
                      value={quoteData.quantity}
                      onChange={handleQuoteInputChange}
                      placeholder="e.g. 500 flyers"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2 text-foreground">
                      Budget Range (KES)
                    </label>
                    <input
                      id="budget"
                      name="budget"
                      type="text"
                      value={quoteData.budget}
                      onChange={handleQuoteInputChange}
                      placeholder="e.g. 20,000"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="deadline" className="block text-sm font-medium mb-2 text-foreground">
                    Deadline
                  </label>
                  <input
                    id="deadline"
                    name="deadline"
                    type="date"
                    value={quoteData.deadline}
                    onChange={handleQuoteInputChange}
                    min={minDeadlineDate}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm font-medium mb-2 text-foreground">
                    Project Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    value={quoteData.details}
                    onChange={handleQuoteInputChange}
                    placeholder="Describe your requirements"
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white resize-none"
                    required
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-white hover:opacity-90 font-semibold"
                >
                  Submit Quote Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
