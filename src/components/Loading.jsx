//
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="relative w-24 h-24">
        {/* Animated outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-400 animate-spin"></div>

        {/* Animated middle ring */}
        <div
          className="absolute inset-2 rounded-full border-4 border-transparent border-b-purple-500 border-l-purple-400 animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
        ></div>

        {/* Animated inner ring */}
        <div className="absolute inset-4 rounded-full border-3 border-transparent border-t-cyan-400 animate-pulse"></div>

        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Loading text */}
      <div className="absolute bottom-32 flex flex-col items-center gap-2">
        <p className="text-slate-300 font-medium tracking-widest animate-pulse">
          LOADING
        </p>
        <div className="flex gap-1">
          <div
            className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
