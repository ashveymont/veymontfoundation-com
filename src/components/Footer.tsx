import Link from 'next/link'

const navLinks = [
  { label: 'Home',        href: '/'           },
  { label: 'Mission',     href: '/mission'     },
  { label: 'Initiatives', href: '/initiatives' },
  { label: 'Founder',     href: '/founder'     },
  { label: 'Impact',      href: '/impact'      },
  { label: 'Journal',     href: '/journal'     },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--obsidian)' }} className="pt-20 pb-10">
      <div style={{ maxWidth: '1200px', padding: '0 60px', margin: '0 auto' }}>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-16 pb-16 mb-10"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
        >
          {/* Brand */}
          <div>
            <p
              className="font-display font-light text-[22px] mb-4 tracking-[0.05em]"
              style={{ color: 'var(--white)' }}
            >
              The Veymont Foundation
            </p>
            <p
              className="font-body font-light text-[13px] leading-relaxed"
              style={{ color: 'rgba(246,242,234,0.4)', maxWidth: '320px' }}
            >
              A privately funded humanitarian foundation improving human dignity through
              nourishment, education, and healthcare. Est. 2024.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4
              className="font-body text-[11px] tracking-eyebrow uppercase mb-5"
              style={{ color: 'var(--copper)' }}
            >
              Navigate
            </h4>
            <nav className="flex flex-col gap-[10px]">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="footer-link font-body font-light text-[13px]"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Foundation info */}
          <div>
            <h4
              className="font-body text-[11px] tracking-eyebrow uppercase mb-5"
              style={{ color: 'var(--copper)' }}
            >
              The Foundation
            </h4>
            <div className="flex flex-col gap-[10px]">
              <span
                className="font-body font-light text-[13px]"
                style={{ color: 'rgba(246,242,234,0.45)' }}
              >
                Privately Funded
              </span>
              <span
                className="font-body font-light text-[13px]"
                style={{ color: 'rgba(246,242,234,0.45)' }}
              >
                No Public Donations
              </span>
              <Link href="/mission" className="footer-link font-body font-light text-[13px]">
                Our Philosophy
              </Link>
              <Link href="/founder" className="footer-link font-body font-light text-[13px]">
                Ashan Veymont
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p
            className="font-body text-[11px] tracking-[0.05em]"
            style={{ color: 'rgba(246,242,234,0.25)' }}
          >
            © {new Date().getFullYear()} The Veymont Foundation. All rights reserved.
          </p>
          <p
            className="font-display font-light text-[13px]"
            style={{ color: 'rgba(246,242,234,0.3)', fontStyle: 'italic' }}
          >
            &ldquo;What is given to us should be given forward.&rdquo;
          </p>
        </div>

      </div>
    </footer>
  )
}
