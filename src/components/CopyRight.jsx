import React from 'react'

export default function CopyRight() {
  return (
    <div className="py-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-slate-400">
          <span>
            &copy; {new Date().getFullYear()} WebWorkers. All rights reserved.
          </span>
          <span className="mt-2 md:mt-0">Designed & built with care.</span>
        </div>
      </div>
  )
}
