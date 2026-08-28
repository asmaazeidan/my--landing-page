import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapPin, Navigation } from 'lucide-react'

const CENTER: [number, number] = [33.476212, 36.3290573]

// custom rose-colored pin — no external image assets needed (avoids the
// classic "broken default marker icon" bundler issue with Leaflet)
const pinIcon = L.divIcon({
  className: '',
  html: `
    <svg width="36" height="36" viewBox="0 0 24 24" style="transform: translate(-1px, -3px); filter: drop-shadow(0 4px 6px rgba(0,0,0,0.25));">
      <path d="M12 0C7.6 0 4 3.6 4 8c0 6 8 16 8 16s8-10 8-16c0-4.4-3.6-8-8-8z" fill="#9C5F6E" stroke="#FAF5EC" stroke-width="1"/>
      <circle cx="12" cy="8" r="3.2" fill="#FAF5EC"/>
    </svg>`,
  iconSize: [36, 36],
  iconAnchor: [18, 34],
  popupAnchor: [0, -30],
})

export default function Location() {
  return (
    <section id="location" className="bg-ivory py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-deep">
            موقعنا
          </span>
          <h2 className="mt-4 font-display text-3xl text-charcoal sm:text-4xl">
            تعالي زوريـنا
          </h2>
          <p className="mt-4 flex items-center justify-center gap-2 text-charcoal/70">
            <MapPin size={18} className="text-rose-deep shrink-0" />
            دمشق، سيدي مقداد، بجانب المدرسة الابتدائية
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-[2.5rem] border-4 border-cream shadow-[0_20px_60px_rgba(156,95,110,0.18)]">
          <MapContainer
            center={CENTER}
            zoom={16}
            scrollWheelZoom={false}
            style={{ height: '420px', width: '100%' }}
          >
            {/* CARTO "Positron" — a clean, minimal basemap: no business
               icons/labels clutter, just roads and soft neutral tones */}
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
            />
            <Marker position={CENTER} icon={pinIcon}>
              <Popup>AMALY COMMUNITY</Popup>
            </Marker>
          </MapContainer>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.google.com/maps?q=33.4762120,36.3290573"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-bold text-ivory shadow-sm transition-all hover:bg-gold-deep hover:shadow-md"
          >
            <Navigation size={16} />
            احصلي على الاتجاهات
          </a>
        </div>
      </div>
    </section>
  )
}
