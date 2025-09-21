'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Solutions', href: '/#solutions', isHash: true },
  { name: 'Military/Defense', href: '/military-defense', isHash: false },
  { name: 'FMV Processing', href: '/fmv', isHash: false },
  { name: 'AI Chatbot', href: '/ai-chatbot', isHash: false },
  { name: 'Videos', href: '/videos', isHash: false },
  { name: 'Podcasts', href: '/podcasts', isHash: false },
  { name: 'Pricing', href: '/pricing', isHash: false },
  { name: 'Resources', href: '/resources', isHash: false },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-secondary-200 z-50">
      <nav className="container-custom flex items-center justify-between py-4" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
            <ShieldCheckIcon className="h-8 w-8 text-primary-600" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-secondary-900">Tech Maven</span>
              <span className="text-xs text-secondary-600 uppercase tracking-wider">Geospatial</span>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-6 xl:gap-x-8">
          {navigation.map((item) => (
            item.isHash ? (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link text-sm"
                onClick={(e) => {
                  // Only prevent default for hash links on the same page
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    const element = document.querySelector(item.href.replace('/', ''));
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item.name}
              </Link>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link text-sm"
              >
                {item.name}
              </Link>
            )
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-4">
          <div className="text-xs text-secondary-500 bg-secondary-100 px-3 py-1 rounded-full">
            <span className="font-semibold">CLEARED</span> Personnel Available
          </div>
          <Link href="#contact" className="btn-primary">
            Request Demo
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-secondary-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
                <ShieldCheckIcon className="h-8 w-8 text-primary-600" />
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-secondary-900">Tech Maven</span>
                  <span className="text-xs text-secondary-600 uppercase tracking-wider">Geospatial</span>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-secondary-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-secondary-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    item.isHash ? (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="nav-link-mobile"
                        onClick={(e) => {
                          // Only prevent default for hash links on the same page
                          if (window.location.pathname === '/') {
                            e.preventDefault();
                            const element = document.querySelector(item.href.replace('/', ''));
                            element?.scrollIntoView({ behavior: 'smooth' });
                          }
                          setMobileMenuOpen(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="nav-link-mobile"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  ))}
                </div>
                <div className="py-6 space-y-4">
                  <div className="text-xs text-secondary-500 bg-secondary-100 px-3 py-1 rounded-full inline-block">
                    <span className="font-semibold">CLEARED</span> Personnel Available
                  </div>
                  <Link
                    href="#contact"
                    className="btn-primary w-full text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Request Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}