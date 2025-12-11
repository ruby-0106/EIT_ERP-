export default function Logo({ size = 40 }) {
  return (
    <div className="flex items-center gap-3 select-none" aria-label="EIT Lasertechnik">
      <div
        className="grid place-items-center rounded-md"
        style={{ width: size, height: size, backgroundColor: '#3755a4' }}
      >
        <span className="text-white font-bold" style={{ fontSize: size * 0.45 }}>EIT</span>
      </div>
      <span className="font-semibold text-gray-900">Lasertechnik</span>
    </div>
  )
}
