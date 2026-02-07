'use client'

import React from "react"
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

const services = [
  {
    title: 'Toner & Printing Materials',
    description: 'High-quality toner cartridges and printing supplies for all major brands.',
    imageLabel: 'Service image',
    imageSrc:'/toner.webp',
  },
  {
    title: 'Printer Spare Parts',
    description: 'Genuine and compatible spare parts for printer maintenance and repairs.',
    imageLabel: 'Service image',
    imageSrc: '/printer-spare.webp',
  },
  {
    title: 'Digital Printer Maintenance & Repair',
    description: 'Professional maintenance and repair services for digital printers.',
    imageLabel: 'Service image',
    imageSrc: '/printer-maintainance.webp',
  },
  {
    title: 'Graphic Design & Printing',
    description: 'Custom graphic design services with professional printing execution.',
    imageLabel: 'Service image',
    imageSrc: '/graphic-design.webp',
  },
  {
    title: 'Branding & Stationery',
    description: 'Complete branding solutions including business cards and stationery.',
    imageLabel: 'Service image',
    imageSrc: '/branding.webp'
  },
]

const whyChooseUs = [
  'High-quality materials',
  'Skilled technical support',
  'Fast and reliable service',
  'Affordable and transparent pricing',
  'Trusted by businesses',
]
const WHATSAPP_NUMBER = '254746382681'

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleSectionClick = (sectionId: string) => {
    scrollToSection(sectionId)
    window.history.replaceState(null, '', '/')
  }

  useEffect(() => {
    const sectionId = new URLSearchParams(window.location.search).get('section')
    if (!sectionId) return

    const timer = window.setTimeout(() => {
      scrollToSection(sectionId)
      window.history.replaceState(null, '', '/')
    }, 50)

    return () => window.clearTimeout(timer)
  }, [])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const lines = [
      '*New Contact Message*',
      '',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      'Message:',
      formData.message,
    ]
    const message = lines.join('\n')
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <main id="top" className="bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            type="button"
            className="flex items-center gap-3 cursor-pointer"
            aria-label="Go to landing page"
            onClick={() => handleSectionClick('top')}
          >
            <Image
              src="/meshtech-logo.svg"
              alt="MESHTECH QUALITY SOLUTION logo"
              width={1024}
              height={300}
              className="h-12 w-auto"
            />
          </button>
          <div className="flex items-center gap-6">
            <button
              type="button"
              className="text-sm font-medium hover:text-primary transition cursor-pointer"
              onClick={() => handleSectionClick('services')}
            >
              Services
            </button>
            <button
              type="button"
              className="text-sm font-medium hover:text-primary transition cursor-pointer"
              onClick={() => handleSectionClick('why-us')}
            >
              Why Us
            </button>
            <button
              type="button"
              className="text-sm font-medium hover:text-primary transition cursor-pointer"
              onClick={() => handleSectionClick('contact')}
            >
              Contact
            </button>
            <Button asChild className="bg-accent text-accent-foreground hover:opacity-90">
              <Link href="/quote">Get Quote</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-primary via-primary to-secondary text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/hero-poster.jpg"
          >
            <source src="/hero-optimized.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-accent font-semibold text-sm">Trusted Printing Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Printing & Branding Solutions in Kenya
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-95 text-balance">
            From toner supplies to digital printer maintenance, branding, and professional
            printing — we keep your business running smoothly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:opacity-90 font-semibold"
            >
              <Link href="/quote">Get a Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-semibold bg-transparent"
              onClick={() => handleSectionClick('services')}
            >
              Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary">About Us</h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                MESHTECH QUALITY SOLUTION is your trusted partner for reliable printing
                materials, printer maintenance, and branding services. We serve businesses
                and individuals with a commitment to quality, reliability, and technical
                expertise.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                With years of experience in the printing industry, we understand the
                challenges businesses face. Our mission is to provide affordable, transparent,
                and fast solutions that keep your operations running smoothly.
              </p>
            </div>
            <Image
              src="/about.webp"
              alt="Team providing professional printing, toner, and breanding services"
              width={1536}
              height={1024}
              className="min-h-70 w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 bg-muted scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">Our Services</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive printing and branding solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="mb-5 rounded-lg overflow-hidden border border-border">
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      width={1536}
                      height={1024}
                      className="w-full h-52 rounded-lg object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-16 sm:py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-primary">
                Why Choose MESHTECH?
              </h2>
              <ul className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <span className="text-lg text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-linear-to-br from-secondary to-primary rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
              <p className="mb-6 text-white/90">
                We believe in delivering excellence through every interaction. Our team of
                skilled professionals is dedicated to understanding your unique needs and
                providing solutions that exceed expectations.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Expert consultation for all projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Quality assurance at every step</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>24/7 customer support</span>
                </div>
              </div>
              <div className="mt-8">
                <Image
                  src="/office.webp"
                  alt="company office image"
                  width={1536}
                  height={1024}
                  className="w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
            Need reliable printing or printer maintenance?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today and let our experts help you find the perfect solution for your
            business needs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:opacity-90 font-semibold"
          >
            <Link href="/quote">Get a Quote</Link>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-muted scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-primary">Get In Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your needs..."
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white resize-none"
                    required
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary text-white hover:opacity-90 font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
              </div>

              <div className="bg-white p-6 rounded-lg border border-border hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                    <p className="text-foreground/70">+2547 4638-2681 | +2547 4644-5209</p>
                    <p className="text-sm text-foreground/60 mt-1">Mon-Sat: 9AM - 7PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-border hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Email</h4>
                    <p className="text-foreground/70">info@meshtechqualitysolution.com</p>
                    <p className="text-sm text-foreground/60 mt-1">
                      Response within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-border hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Location</h4>
                    <p className="text-foreground/70">Along Geoffrey Kamau Ave, Nakuru</p>
                    <p className="text-foreground/70">Nakuru, Kenya</p>
                  </div>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d329486.21004239103!2d35.9917329!3d-0.353925!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18298d0014a534e9%3A0x6ca98453dda10f5d!2sMESHTECH%20QUALITY%20SOLUTIONS!5e1!3m2!1sen!2ske!4v1770463014875!5m2!1sen!2ske"
                title="Location map for printer repair and branding services in Kenya"
                allowFullScreen
                className="min-h-55 w-full h-auto rounded-lg"
                referrerPolicy="no-referrer-when-downgrade"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
