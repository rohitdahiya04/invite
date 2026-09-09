export default function Header() {
  return (
    <header
      className="
    fixed
    left-0
    top-0
    z-50
    flex
    h-20
    w-full
    items-center
    justify-center
    bg-[#f6ede2]/45
    backdrop-blur-xl
    backdrop-saturate-150
    shadow-[0_4px_20px_rgba(90,55,40,0.08)]
  "
    >
      <div className="relative -mb-6">
        <img
          src={`${import.meta.env.BASE_URL}images/logo.png`}
          alt="Ragini & Rohit Wedding"
          className="
            h-24
            w-24
            rounded-full
            object-cover
            shadow-[0_4px_18px_rgba(120,70,40,0.15)]
          "
        />
      </div>
    </header>
  )
}