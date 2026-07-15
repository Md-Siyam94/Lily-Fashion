'use client'
import Image from 'next/image';
import React from 'react'
import { Rating } from 'react-simple-star-rating';

export default function ProductCard({ product }) {
    const { id, price, name, category, image, rating } = product || {}
    return (
        <div className="card bg-base-100  shadow-sm">
            <figure>
                <Image
                    width={500}
                    height={500}
                    className="w-full h-64 object-cover" src={image}
                    alt={category} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}

                </h2>
                <div
                className='inline-flex items-center'
                    style={{
                        direction: 'ltr',
                        fontFamily: 'sans-serif',
                        touchAction: 'none'
                    }}
                >
                    <Rating
                    
                        initialValue={2}
                        onClick={function noRefCheck() { }}
                        readonly
                    />
                </div>
                <p>TK {price}</p>

                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    )
}
