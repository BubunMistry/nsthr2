export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative h-12 w-12">
          {/* Animated spinner */}
          <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-primary animate-spin"></div>
          {/* Optional logo or icon in center */}
          <div className="absolute inset-1 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <p className="text-sm font-medium text-gray-600">Loading...</p>
        {/* Optional progress bar */}
        <div className="h-1 w-32 rounded-full bg-gray-200 overflow-hidden">
          <div className="h-full w-1/3 bg-primary animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

