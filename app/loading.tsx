export default function BufferingLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="flex space-x-3">
        {['bg-blue-500', 'bg-green-500', 'bg-red-500'].map((color, i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded-full animate-buffering ${color}`}
            style={{
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}