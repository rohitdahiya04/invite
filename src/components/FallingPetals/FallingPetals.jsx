const roseColors = [
  '#a52f35', // deep red
  '#c7445a', // rose
  '#d85c70', // pink
  '#ee8f9f', // soft pink
  '#f3b5ae', // blush
  '#f2a07f', // peach
  '#f7d8c8', // pale peach
  '#f4e9d8', // ivory
]

const marigoldColors = [
  '#f4a300',
  '#e88900',
  '#f6b400',
  '#d97706',
]

const items = Array.from({ length: 15 }, (_, index) => {
  const isMarigold = index % 3 === 0

  return {
    id: index,
    type: isMarigold ? 'marigold' : 'rose',
    left: `${(index * 37) % 100}%`,
    size: `${10 + ((index * 7) % 10)}px`,
    duration: `${7 + ((index * 13) % 7)}s`,
    delay: `-${(index * 1.8) % 13}s`,
    drift: `${-80 + ((index * 29) % 160)}px`,
    rotation: `${240 + ((index * 47) % 360)}deg`,
    opacity: `${0.55 + ((index * 11) % 35) / 100}`,
    color: isMarigold
      ? marigoldColors[index % marigoldColors.length]
      : roseColors[index % roseColors.length],
  }
})

export default function FallingPetals() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
      aria-hidden="true"
    >
      {items.map((item) => (
        <span
          key={item.id}
          className={
            item.type === 'marigold'
              ? 'marigold-flower absolute -top-10 block'
              : 'rose-petal absolute -top-10 block'
          }
          style={{
            left: item.left,
            width: item.size,
            height:
              item.type === 'marigold'
                ? item.size
                : `calc(${item.size} * 0.7)`,
            animationDuration: item.duration,
            animationDelay: item.delay,
            '--petal-drift': item.drift,
            '--petal-rotation': item.rotation,
            '--petal-color': item.color,
            opacity: item.opacity,
          }}
        />
      ))}
    </div>
  )
}