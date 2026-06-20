'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import VMonogram from '@/components/brand/VMonogram'

const navLinks = [
  { label: 'Home',        href: '/'            },
  { label: 'Philosophy',  href: '/philosophy'   },
  { label: 'Initiatives', href: '/initiatives'  },
  { label: 'Founder',     href: '/founder'      },
  { label: 'Impact',      href: '/impact'       },
  { label: 'Journal',     href: '/journal'      },
]

export default function Nav() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
        animate={{
          backgroundColor: scrolled ? 'rgba(246,242,234,0.96)' : 'rgba(0,0,0,0)',
          backdropFilter:  scrolled ? 'blur(10px)' : 'blur(0px)',
          borderBottom:    scrolled ? '1px solid #E2D9CB' : '1px solid transparent',
          paddingTop:      scrolled ? '18px' : '28px',
          paddingBottom:   scrolled ? '18px' : '28px',
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        style={{ paddingLeft: 'clamp(16px, 5vw, 60px)', paddingRight: 'clamp(16px, 5vw, 60px)' }}
      >
        <Link
          href="/"
          style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
        >
          <VMonogram size={14} color="var(--copper)" opacity={0.6} />
          <span
            className="font-display font-light text-[15px] tracking-[0.25em] uppercase"
            style={{ color: 'var(--obsidian)' }}
          >
            The Veymont Foundation
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-10 list-none">
          {navLinks.map(({ label, href }) => {
            const active = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="font-body text-[12px] tracking-[0.18em] uppercase no-underline transition-opacity duration-200"
                  style={{
                    color:   'var(--obsidian)',
                    opacity: active ? 1 : 0.55,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = active ? '1' : '0.55')}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-0"
          style={{ padding: '10px', minWidth: '44px', minHeight: '44px', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation"
        >
          <span className="block w-6 h-px" style={{ background: 'var(--obsidian)' }} />
          <span className="block w-6 h-px" style={{ background: 'var(--obsidian)' }} />
          <span className="block w-6 h-px" style={{ background: 'var(--obsidian)' }} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-8"
            style={{ background: 'var(--white)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute cursor-pointer bg-transparent border-0"
              style={{
                top:            '16px',
                right:          '16px',
                color:          'var(--obsidian)',
                fontSize:       '28px',
                lineHeight:     1,
                minWidth:       '44px',
                minHeight:      '44px',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
              }}
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation"
            >
              ×
            </button>

            {navLinks.map(({ label, href }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: 'easeOut' }}
              >
                <Link
                  href={href}
                  className="font-display font-light text-[32px] no-underline"
                  style={{ color: 'var(--forest)', fontStyle: 'italic' }}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
