import Lottie from "lottie-react";
import Link from "next/link";
import noData from "../../../public/emptyCartAnimation.json"

export default function EmptyCart() {
  return (
    <div className=" bg-white flex items-center justify-center px-6">
      <div className="flex flex-col items-center text-center max-w-xs w-full">
        {/* Lottie animation */}
        <Lottie className='h-72 w-full ' animationData={noData} loop></Lottie>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Your cart is empty
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-10">
          Looks like you have not made<br />your choice yet...
        </p>

        {/* redirect to product page */}
        <Link href={"/products"} className="w-full border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-medium py-3 rounded-lg transition-all duration-200 text-sm tracking-wide">
          Start Shopping
        </Link>
      </div>
    </div>
  );
}
