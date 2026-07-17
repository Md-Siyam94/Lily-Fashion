'use client'
import Image from 'next/image';
import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';
import { Rating } from 'react-simple-star-rating'
// import ReactStars from "react-rating-stars-component";

export default function ProductCard({ product }) {
    const { id, price, name, category, image, rating } = product || {}
    console.log(rating);
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
                <div
                    style={{
                        direction: 'ltr',
                        fontFamily: 'sans-serif',
                        touchAction: 'none'
                    }}
                >
                    <Rating 
                    className=''
                        initialValue={2}
                        onClick={function noRefCheck() { }}
                        readonly
                    />
                </div>
                <p className='text-lg font-semibold'>TK {price}</p>
            </div>
        </div>
    )
}
