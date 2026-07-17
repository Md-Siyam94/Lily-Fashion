'use client'
import Image from 'next/image';
import Link from 'next/link';
import { Rating } from 'react-simple-star-rating'

export default function ProductCard({ product }) {
    const { id, price, name, category, image, rating } = product || {}
    return (
        <div className=" bg-base-100  shadow-sm">
            <figure>
                <Link href={`/products/${id}`} key={id} className="group cursor-pointer">
                    <Image
                        width={500}
                        height={500}
                        className="w-full h-64 object-cover rounded-lg" src={image}
                        alt={category} />
                </Link>
            </figure>
            <div className="card-body">
                <h2 className=" font-semibold">
                    {name}

                </h2>
                 <div className="flex items-center gap-1.5 mb-2">
          <Rating
            initialValue={product.rating}
            readonly
            size={16}
            fillColor="#f97316"
            emptyColor="#d1d5db"
            allowFraction
            SVGstyle={{ display: 'inline' }}
          />
          <span className="text-xs text-gray-500">({rating} Ratings)</span>
        </div>
                <p className='text-lg font-semibold'>TK {price}</p>
            </div>
        </div>
    )
}
