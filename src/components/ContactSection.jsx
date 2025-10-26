import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      alert('Thanks! Your request has been noted. In a full build, this would create a booking and notify the team.');
      e.currentTarget.reset();
    }, 800);
  }

  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Get in touch</h2>
            <p className="mt-2 text-slate-600">Book an appointment or ask us anything. We’ll get back swiftly.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Full name</label>
                  <input required type="text" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="Alex Morgan" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Phone</label>
                  <input required type="tel" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="+1 202 555 0147" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Preferred date</label>
                  <input required type="date" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Service</label>
                  <select required className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900">
                    <option value="">Choose a service</option>
                    <option>Haircut & Styling</option>
                    <option>Skin & Beauty</option>
                    <option>Spa & Grooming</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Notes</label>
                  <input type="text" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="Any preferences or add‑ons" />
                </div>
              </div>
              <button disabled={submitting} type="submit" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-white text-sm font-semibold shadow-sm hover:bg-slate-800 disabled:opacity-70">
                {submitting ? 'Sending…' : 'Request Booking'}
              </button>
            </form>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-lg border border-slate-200 p-4">
                <div className="flex items-center gap-2 text-slate-900 font-medium"><Phone className="h-4 w-4" /> Phone</div>
                <p className="mt-1 text-sm text-slate-600">+1 (202) 555‑0147</p>
              </div>
              <div className="rounded-lg border border-slate-200 p-4">
                <div className="flex items-center gap-2 text-slate-900 font-medium"><Mail className="h-4 w-4" /> Email</div>
                <p className="mt-1 text-sm text-slate-600">hi@glamconnect.salon</p>
              </div>
              <div className="rounded-lg border border-slate-200 p-4">
                <div className="flex items-center gap-2 text-slate-900 font-medium"><MapPin className="h-4 w-4" /> Address</div>
                <p className="mt-1 text-sm text-slate-600">Downtown, City Center</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
              <img src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1480&auto=format&fit=crop" alt="Studio" className="h-full w-full object-cover" />
            </div>
            <div className="mt-4 text-sm text-slate-600">
              Walk‑ins welcome. Members get priority scheduling and exclusive offers.
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} GlamConnect. All rights reserved.
        </div>
      </div>
    </section>
  );
}
