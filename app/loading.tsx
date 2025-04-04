export default function BufferingLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
      <div className="flex space-x-3">
        {['bg-blue-300', 'bg-blue-500', 'bg-blue-700'].map((color, i) => (
          <div
            key={i}
            className={`w-5 h-5 rounded-full animate-bounce ${color}`}
            style={{
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
