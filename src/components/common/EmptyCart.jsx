import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="flex flex-col items-center text-center max-w-xs w-full">

        {/* Illustration */}
        <div className="relative w-56 h-56 mb-8">

          {/* Soft teal circle background */}
          <div className="absolute inset-4 rounded-full bg-teal-50" />

          {/* Stars */}
          {/* Top-left star */}
          <svg className="absolute top-4 left-6 w-9 h-9" viewBox="0 0 36 36" fill="none">
            <path
              d="M18 3l3.6 10.8H33l-9.2 6.7 3.5 10.8L18 25l-9.3 6.3 3.5-10.8L3 13.8h11.4z"
              fill="#c8e6a0"
              stroke="#8bc34a"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>

          {/* Bottom-right star */}
          <svg className="absolute bottom-6 right-4 w-11 h-11" viewBox="0 0 36 36" fill="none">
            <path
              d="M18 3l3.6 10.8H33l-9.2 6.7 3.5 10.8L18 25l-9.3 6.3 3.5-10.8L3 13.8h11.4z"
              fill="#f5e97a"
              stroke="#d4a900"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>

          {/* Bottom-left small star */}
          <svg className="absolute bottom-12 left-8 w-7 h-7" viewBox="0 0 36 36" fill="none">
            <path
              d="M18 3l3.6 10.8H33l-9.2 6.7 3.5 10.8L18 25l-9.3 6.3 3.5-10.8L3 13.8h11.4z"
              fill="none"
              stroke="#aad4d0"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>

          {/* Plus signs */}
          <svg className="absolute top-10 left-16 w-5 h-5 text-gray-300" viewBox="0 0 20 20">
            <line x1="10" y1="2" x2="10" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="2" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <svg className="absolute top-16 right-8 w-4 h-4 text-gray-300" viewBox="0 0 20 20">
            <line x1="10" y1="2" x2="10" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="2" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>

          {/* Speed lines near cart */}
          <svg className="absolute top-[48%] left-10 w-12 h-4" viewBox="0 0 48 16" fill="none">
            <line x1="0" y1="4" x2="28" y2="4" stroke="#aad4d0" strokeWidth="2" strokeLinecap="round" />
            <line x1="6" y1="10" x2="30" y2="10" stroke="#aad4d0" strokeWidth="2" strokeLinecap="round" />
          </svg>

          {/* Shopping Cart SVG */}
          <div className="absolute inset-0 flex items-center justify-center translate-x-2 translate-y-2">
            <svg width="96" height="88" viewBox="0 0 96 88" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Cart body */}
              <path
                d="M14 8h8l10 40h36l8-28H28"
                stroke="#3ba8a8"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              {/* Cart fill */}
              <path
                d="M28 20h44l-6 20H38z"
                fill="#b2e0e0"
                opacity="0.5"
              />
              <path
                d="M28 20h44l-6 20H38z"
                stroke="#3ba8a8"
                strokeWidth="3"
                strokeLinejoin="round"
                fill="none"
              />
              {/* Handle */}
              <path
                d="M14 8h8"
                stroke="#3ba8a8"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Wheels */}
              <circle cx="42" cy="54" r="5" fill="#3ba8a8" />
              <circle cx="42" cy="54" r="2.5" fill="white" />
              <circle cx="64" cy="54" r="5" fill="#3ba8a8" />
              <circle cx="64" cy="54" r="2.5" fill="white" />
              {/* Ground line */}
              <line x1="10" y1="64" x2="84" y2="64" stroke="#d1d5db" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Text */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Your cart is empty
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-10">
          Looks like you have not made<br />your choice yet...
        </p>

        {/* CTA */}
        <Link href={"/products"} className="w-full border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-medium py-3 rounded-lg transition-all duration-200 text-sm tracking-wide">
          Start Shopping
        </Link>
      </div>
    </div>
  );
}
