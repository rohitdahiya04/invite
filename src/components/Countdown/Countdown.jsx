import { useEffect, useState } from 'react'

const WEDDING_DATE = new Date('2026-10-14T18:00:00+05:30')

function getTimeRemaining() {
  const now = new Date()
  const difference = WEDDING_DATE.getTime() - now.getTime()

  if (difference <= 0) {
    return {
      isComplete: true,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  return {
    isComplete: false,
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

function CountdownBox({ value, label }) {
  return (
    <div
      className="
        flex
        min-w-0
        flex-1
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-[#ead1c9]
        bg-[#fffdf9]
        px-2
        py-5
        shadow-[0_8px_25px_rgba(157,90,75,0.08)]
      "
    >
      <span className="font-serif text-3xl text-[#a52f35]">
        {String(value).padStart(2, '0')}
      </span>

      <span
        className="
          mt-1
          text-[9px]
          uppercase
          tracking-[0.25em]
          text-[#9c6156]
        "
      >
        {label}
      </span>
    </div>
  )
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeRemaining)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeRemaining())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-[#faf3e8] px-5 py-5">
      <div className="mx-auto w-full max-w-md text-center">

        {/* Decorative divider */}
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-[#d8b46a]" />

          <span className="text-sm text-[#c28a2c]">
            ❈
          </span>

          <span className="h-px w-16 bg-[#d8b46a]" />
        </div>

        {/* Section label */}
        <p
          className="
            text-l
            uppercase
            tracking-[0.35em]
            text-[#b28b77]
          "
        >
          Till we meet again
        </p>

        {/* Heading */}
        <h2 className="mt-3 font-serif text-4xl text-[#a52f35]">
          {time.isComplete ? 'The day has arrived' : 'Counting the days'}
        </h2>

        {/* Countdown / Wedding day message */}
        {time.isComplete ? (
          <div className="mt-8 px-4">
            <p className="font-serif text-2xl text-[#a52f35]">
              Our forever has begun
            </p>

            <p className="mt-3 text-xl leading-6 text-[#a52f35]">
              Today, two hearts become one beautiful story.
            </p>
          </div>
        ) : (
          <div className="mt-8 flex gap-2">
            <CountdownBox value={time.days} label="Days" />
            <CountdownBox value={time.hours} label="Hours" />
            <CountdownBox value={time.minutes} label="Minutes" />
            <CountdownBox value={time.seconds} label="Seconds" />
          </div>
        )}

      </div>
    </section>
  )
}