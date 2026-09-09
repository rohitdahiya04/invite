import { weddingData } from '../../data/weddingData'

function EventCard({ event }) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-[#ead1c9] bg-[#fffdf9] p-6 text-center shadow-[0_8px_25px_rgba(157,90,75,0.08)]">
      {/* Decorative top line */}
      <div className="mx-auto mb-5 h-px w-12 bg-[#d8b46a]" />

      <p className="text-l uppercase tracking-[0.3em] text-[#b28b77]">
        {event.date}
      </p>

      <h3 className="mt-3 font-serif text-3xl text-[#a52f35]">
        {event.name}
      </h3>

      <p className="mt-3 text-xl font-medium text-[#80685f]">
        {event.time}
      </p>

      <p className="mt-1 text-xl leading-5 text-[#9a8177]">
        {event.venue}
      </p>
    </article>
  )
}

export default function Events() {
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
          Join us in celebration
        </p>

        <h2 className="mt-3 font-serif text-4xl text-[#a52f35]">
          Wedding Event
        </h2>

        <p className="mx-auto mt-4 max-w-sm text-xl leading-6 text-[#80685f]">
          A few beautiful moments we would love to share with you.
        </p>

        <div className="mt-8 space-y-4">
          {weddingData.events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}