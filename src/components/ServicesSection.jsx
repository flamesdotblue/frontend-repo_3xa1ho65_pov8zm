import { Scissors, Sparkles, Bath, Calendar } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Haircut & Styling',
    desc: 'Precision cuts, fades, blowouts, and styling for all hair types.',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1480&auto=format&fit=crop',
  },
  {
    icon: Sparkles,
    title: 'Skin & Beauty',
    desc: 'Facials, clean-ups, makeup, threading and glow‑up rituals.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1480&auto=format&fit=crop',
  },
  {
    icon: Bath,
    title: 'Spa & Grooming',
    desc: 'Relaxing spa, manicures, pedicures and beard grooming.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1480&auto=format&fit=crop',
  },
];

const gallery = [
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1480&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522336572468-97b06e8ef143?q=80&w=1480&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1480&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1480&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1480&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1480&auto=format&fit=crop',
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Our Services</h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">Curated treatments for every identity and occasion.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-white text-sm font-semibold shadow-sm hover:bg-slate-800">
            <Calendar className="h-4 w-4" /> Book a Slot
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, image }) => (
            <div key={title} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">{title}</h3>
                </div>
                <p className="mt-2 text-sm text-slate-600">{desc}</p>
                <div className="mt-4">
                  <a href="#contact" className="inline-flex items-center rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div id="gallery" className="mt-14">
          <h3 className="text-lg font-semibold text-slate-900">Gallery</h3>
          <p className="mt-1 text-sm text-slate-600">A glimpse of our craft and space.</p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {gallery.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                <img src={src} alt={`Gallery ${i+1}`} className="h-28 w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
