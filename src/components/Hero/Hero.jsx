import { weddingData } from '../../data/weddingData'
const heroImage = `${import.meta.env.BASE_URL}images/hero/phool-banri-banro.png`

export default function Hero() {
  return (
    <section
      className="
        relative
        w-full
        max-w-full
        overflow-hidden
        bg-[#f6ede2]
        bg-[radial-gradient(circle_at_18%_35%,rgba(214,161,132,0.18),transparent_32%),radial-gradient(circle_at_82%_35%,rgba(194,138,44,0.12),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(165,47,53,0.08),transparent_35%)]
        pt-20
        "
    >
      {/* Ambient background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_center,rgba(255,250,242,0.95)_0%,rgba(250,239,225,0.8)_38%,rgba(239,220,202,0.45)_68%,rgba(229,207,187,0.25)_100%)]
        "
      />

      {/* Main artwork */}
      <div className="relative z-10 flex w-full justify-center">
        <div className="relative w-full max-w-[430px]">
          <img
            src={heroImage}
            alt="Ragini and Rohit wedding"
            className="block h-auto w-full object-contain"
          />

          {/* Bottom fade */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-[180px]
              bg-gradient-to-b
              from-transparent
              via-[#f6ede2]/60
              to-[#f6ede2]
            "
          />
        </div>
      </div>

      {/* Wedding information */}
      <div
        className="
          relative
          z-20
          -mt-12
          w-full
          px-6
          pb-14
          text-center
        "
      >
        <h1
          className="
            font-display
            text-5xl
            font-medium
            leading-tight
            text-[#a52f35]
          "
        >
          Ragini <span className="italic text-[#c28a2c]">&</span> Rohit
        </h1>

        <p
          className="
            mx-auto
            mt-5
            max-w-sm
            text-xl
            italic
            leading-6
            text-[#80685f]
          "
        >
          Together with our families, we joyfully invite you to celebrate
          our wedding
        </p>

        <p
          className="
            mt-5
            font-serif
            text-2xl
            text-[#a52f35]
          "
        >
          {weddingData.wedding.displayDate}
        </p>
      </div>
    </section>
  )
}