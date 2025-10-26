import { useState } from 'react';
import { Menu, X, Scissors, User, Calendar } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="inline-flex items-center justify-center rounded-md bg-gradient-to-tr from-fuchsia-500 via-sky-500 to-violet-500 p-[2px]">
              <div className="rounded-md bg-white p-2">
                <Scissors className="h-5 w-5 text-slate-800" />
              </div>
            </div>
            <span className="font-semibold tracking-tight text-slate-900">GlamConnect</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-white text-sm font-medium shadow-sm hover:bg-slate-800">
              <Calendar className="h-4 w-4" /> Book Now
            </a>
            <a href="#login" className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-slate-900 text-sm font-medium hover:bg-slate-50">
              <User className="h-4 w-4" /> Sign In
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-200 py-3">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
                  {item.label}
                </a>
              ))}
              <div className="flex gap-2 pt-2">
                <a href="#contact" onClick={() => setOpen(false)} className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-white text-sm font-medium shadow-sm hover:bg-slate-800">
                  <Calendar className="h-4 w-4" /> Book
                </a>
                <a href="#login" onClick={() => setOpen(false)} className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-slate-900 text-sm font-medium hover:bg-slate-50">
                  <User className="h-4 w-4" /> Sign In
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
