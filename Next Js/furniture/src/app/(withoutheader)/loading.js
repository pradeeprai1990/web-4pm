import React from 'react'

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Loading Container */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Animated Spinner */}
          <div className="flex justify-center mb-8">
            <div className="relative w-20 h-20">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 rounded-full border-4 border-gray-200 border-t-amber-600 animate-spin"></div>

              {/* Inner pulsing circle */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 opacity-20 animate-pulse"></div>

              {/* Center dot */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Loading Text */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Loading
            </h2>
            <p className="text-gray-600 text-sm">
              Please wait while we prepare your experience
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-8 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full animate-pulse"
              style={{
                animation: 'slideInOut 2s ease-in-out infinite'
              }}
            ></div>
          </div>

          {/* Loading Steps */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Connecting to server</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Loading content</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full border-2 border-gray-300 border-t-amber-600 animate-spin flex-shrink-0"></div>
              <span className="text-gray-600 font-medium">Finalizing...</span>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-xs text-gray-500 mb-4">
              Tip: We're handpicking the best furniture for you
            </p>
            <div className="flex justify-center gap-2">
              <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center text-gray-600 text-sm">
          <p>This usually takes a few seconds...</p>
        </div>
      </div>

    </div>
  )
}
