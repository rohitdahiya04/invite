const couple = {
  bride: {
    name: 'Ragini Gupta',
    parents: 'Daughter of Mrs. Vijayalaxmi Gupta & Mr. Om Prakash Gupta',
  },
  groom: {
    name: 'Rohit Dahiya',
    parents: 'Son of Mrs. Sneh Lata & Mr. Mehar Singh',
  },
}

function PersonCard({ name, parents }) {
  return (
    <div className="rounded-2xl border border-[#ead1c9] bg-[#fffdf9] px-5 py-7 text-center shadow-[0_8px_25px_rgba(157,90,75,0.08)]">
      <h3 className="font-serif text-3xl text-[#a52f35]">
        {name}
      </h3>

      <p className="mt-3 text-xl leading-5 text-[#80685f]">
        {parents}
      </p>
    </div>
  )
}

export default function Couple() {
  return (
    <section className="bg-[#faf3e8] px-5 py-12">
      <div className="mx-auto w-full max-w-md text-center">

        {/* Divider */}
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-[#d8b46a]" />
          <span className="text-sm text-[#c28a2c]">❈</span>
          <span className="h-px w-16 bg-[#d8b46a]" />
        </div>

        <p className="text-l uppercase tracking-[0.35em] text-[#b28b77]">
          Two families, one bond
        </p>

        <h2 className="mt-3 font-serif text-4xl text-[#a52f35]">
          The couple
        </h2>

        <div className="mt-8 space-y-4">
          <PersonCard
            name={couple.bride.name}
            parents={couple.bride.parents}
          />

          <PersonCard
            name={couple.groom.name}
            parents={couple.groom.parents}
          />
        </div>
      </div>
    </section>
  )
}