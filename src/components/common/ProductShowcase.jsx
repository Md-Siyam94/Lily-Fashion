'use client'
import React from 'react'
import { products } from '@/components/data/products'
import ProductCard from '@/components/cards/ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import Image from 'next/image'
import { Autoplay, Pagination } from "swiper/modules";
export default function ProductShowcase({title}) {

    return (
        <div className=' max-w-7xl mx-auto section-gap px-5'>
            <h1 className="text-4xl font-sans mb-8">{title}</h1>
            <div >
                <Swiper
                slidesPerView={5}
        spaceBetween={30}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 4500,
                    
                }}

                modules={[Pagination, Autoplay]}>
                    {products.map((product) => (
                        <SwiperSlide key={product.id} >
                            <div className=" bg-base-100  shadow-sm">
                                <figure>
                                    <Link href={`/products/${product.id}`} className="group cursor-pointer">
                                        <Image
                                            width={500}
                                            height={500}
                                            className="w-full h-64 object-cover rounded-lg" src={product.image}
                                            alt={product.category} />
                                    </Link>
                                </figure>
                                <div className="card-body">
                                    <h2 className=" font-semibold">
                                        {product.name}

                                    </h2>
                                    {/* <ReactStars
                    size={30}
                    value={rating}
                    edit={false}
                /> */}
                                    <p className='text-lg font-semibold'>TK {product.price}</p>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
        </div>
    )
}
