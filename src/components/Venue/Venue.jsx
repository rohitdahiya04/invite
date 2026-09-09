import venueImage from '/images/hero/venue1.png';
import { weddingData } from '../../data/weddingData'

export default function Venue() {
  const { venue } = weddingData

  return (
    <section className="bg-[#faf3e8] px-5 py-12">
      <div className="mx-auto w-full max-w-md text-center">

        {/* Section divider */}
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-[#d8b46a]" />
          <span className="text-sm text-[#c28a2c]">❈</span>
          <span className="h-px w-16 bg-[#d8b46a]" />
        </div>

        <p className="text-l uppercase tracking-[0.35em] text-[#b28b77]">
          Where we say yes
        </p>

        <h2 className="mt-3 font-serif text-4xl text-[#a52f35]">
          The Venue
        </h2>

        {/* Venue card */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-[#ead1c9] bg-[#fffdf9] shadow-[0_8px_25px_rgba(157,90,75,0.08)]">

          {/* Image placeholder */}
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#eadfd3]">
            <div className="flex h-full items-center justify-center text-sm text-[#9a8177]">
              <img
                        src={venueImage}
                        alt="Ragini and Rohit wedding"
                        className="absolute inset-0 h-full w-full object-cover object-top"
                />
            </div>
          </div>

          <div className="px-6 py-7">

            <h3 className="font-serif text-3xl text-[#a52f35]">
              {venue.name}
            </h3>

            <div className="mt-5 space-y-3 text-xl text-[#80685f]">
              <p>
                📍 {venue.address}
              </p>

              <p>
                🕕 {venue.time}
              </p>
            </div>

            <p className="mt-5 text-xl leading-6 text-[#9a8177]">
              {venue.description}
            </p>

            <a
              href={venue.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="
                mt-6
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-[#a52f35]
                px-6
                py-3
                text-l
                font-medium
                tracking-[0.12em]
                text-white
                transition
                hover:bg-[#8f292f]
              "
            >
              GET DIRECTIONS
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}