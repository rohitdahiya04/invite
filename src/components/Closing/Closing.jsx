export default function Closing() {
  return (
    <section className="relative overflow-hidden bg-[#faf3e8] px-6 pb-20 pt-10">
      <div className="mx-auto flex w-full max-w-md flex-col items-center text-center">

        {/* Decorative ornament */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-[#d8b46a]" />

          <span className="text-lg text-[#c28a2c]">
            ❈
          </span>

          <span className="h-px w-12 bg-[#d8b46a]" />
        </div>

        <p className="text-xl uppercase tracking-[0.35em] text-[#b28b77]">
          With love
        </p>

        <h2 className="mt-4 text-5xl text-[#a52f35]">
          Ragini
        </h2>

        <p className="my-2 italic text-2xl text-[#c28a2c]">
          &
        </p>

        <h2 className="text-5xl text-[#a52f35]">
          Rohit
        </h2>

        <p className="mt-4  text-xl text-[#a52f35]">
          Wednesday, 14 October 2026
        </p>

        {/* Closing logo */}
        <div className="mt-10 flex flex-col items-center">
          
          {/* Gold divider */}
          <div className="mb-8 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#d8b46a]" />

            <span className="text-lg text-[#c28a2c]">
              ❈
            </span>

            <span className="h-px w-12 bg-[#d8b46a]" />
        </div>

          {/* Logo */}
          <div
            className="
              relative
              flex
              h-40
              w-40
              items-center
              justify-center
              overflow-hidden
              rounded-full
              bg-[#fffaf2]
              shadow-[0_8px_30px_rgba(150,90,50,0.12)]
            "
          >
            <img
              src="/images/logo.png"
              alt="Ragini and Rohit wedding logo"
              className="h-full w-full object-cover"
            />
          </div>
           <p className="mt-8 max-w-sm font-serif text-2xl leading-8 text-[#a52f35]">
          "As we begin this beautiful journey together, having you by our side
          would make the moment truly special"
        </p>
        </div>

      </div>
    </section>
  )
}