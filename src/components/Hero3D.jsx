import Spline from '@splinetool/react-spline';
import { Star } from 'lucide-react';

export default function Hero3D() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[70vh] sm:h-[80vh] lg:h-[86vh]">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Star className="h-3.5 w-3.5 text-amber-500" />
                Unisex Salon • Modern • Vibrant
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                GlamConnect
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-700">
                Elevate your look with premium hair, skin and grooming experiences. Book online, manage your profile, and enjoy seamless service with verified professionals.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#services" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-white text-sm font-semibold shadow-sm hover:bg-slate-800">
                  Browse Services
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-slate-900 text-sm font-semibold hover:bg-slate-50">
                  Book an Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">About Us</p>
            <p className="mt-2 text-sm text-slate-600">
              A sanctuary for all genders to feel empowered. Our certified artists blend technique and creativity to craft your signature style.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">Smart Booking</p>
            <p className="mt-2 text-sm text-slate-600">
              Real‑time scheduling, reminders, and profile management. Members earn rewards with every visit.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">Trusted Team</p>
            <p className="mt-2 text-sm text-slate-600">
              Reviews after completion, managed by our admins. Staff have dedicated portals for attendance and bookings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
