export default function WeddingQuote() {
  return (
    <section className="relative overflow-hidden bg-[#faf3e8] px-6 py-12">
      <div className="mx-auto flex w-full max-w-md flex-col items-center text-center">
        
        {/* Decorative ornament */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-[#d8b46a]" />

          <span className="text-lg text-[#c28a2c]">
            ❈
          </span>

          <span className="h-px w-12 bg-[#d8b46a]" />
        </div>

        {/* Quote */}
        <blockquote className="font-serif text-2xl leading-[1.65] text-[#7f5148]">
          <span className="block">
            Somewhere between a thousand moments,
          </span>

          <span className="block">
            two hearts found their way to each other.
          </span>

          <span className="mt-2 block text-[#a52f35]">
            Now begins the story of forever.
          </span>
        </blockquote>
      </div>
    </section>
  )
}