export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-6">
        {/* Spinner Circle */}
        <div className="h-14 w-14 relative">
          <div className="absolute inset-0 border-4 border-[#29A0D8] border-t-transparent rounded-full animate-spin"></div>
        </div>

        {/* Optional Loading Text */}
        <p className="text-sm font-medium text-[#29A0D8]">Loading...</p>
      </div>
    </div>
  );
}
