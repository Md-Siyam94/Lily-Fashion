'use client'
import { useParams } from 'next/navigation';
import React, { useContext, useState } from 'react'
import { products } from '@/components/data/products';
import { RiShoppingCartLine } from 'react-icons/ri';
import Image from 'next/image';
import { CartContext } from '@/contex/CartProvider';
import ProductShowcase from '@/components/common/ProductShowcase';

export default function ProductDetails() {
    const { id } = useParams();
    const { cart, setCart } = useContext(CartContext)
    const [quantity, setQuantity] = useState(1)
    // get product
    const product = products.find((product) => product.id === Number(id));
    const { price, name, category, image, rating, inStock, sizes, colors, description } = product || {}
    const [selectedColor, setSelectedColor] = useState(colors[0])
    const [selectedSize, setSelectedSize] = useState(sizes[0])
    // total Price
    const totalPrice = price * quantity;

    // Add to cart
    const handleAddToCart = () => {
        const productInfo = {
            id: id,
            name: name,
            price: totalPrice,
            image: image,
            quantity: quantity,
            size: selectedSize,
            color: selectedColor
        }

        setCart((prevCart) => [...prevCart, productInfo])
    }

    return (
        <div>
            <div className="max-w-7xl   mx-auto lg:mt-5 rounded-2xl  ">
                <div className="lg:flex w-full mx-auto  bg-base-100  px-4 shadow-sm">
                    <figure className="px-10">
                        <Image
                            height={500}
                            width={500}
                            className="  mx-auto p-7 "
                            src={image}
                            alt={category} />
                    </figure>
                    <div className=" pl-12 lg:pl-0 pt-7">
                        <h2 className="card-title">
                            {name}
                        </h2>
                        <p className=" my-4 text-gray-500">Description: <span className="text-black  ">{description}</span></p>
                        <p className=" my-4 text-gray-500">Category: <span className="text-blue-500  ">{category}</span></p>
                        <p className="my-4">{inStock ? <span className="text-teal-500">In Stock</span> : <span className="text-red-500">Out of Stock</span>}</p>
                        <p className="text-xl font-bold">TK {price}</p>
                        {/* Size selector */}
                        <div className='my-4'>
                            <p className="text-sm  font-semibold text-gray-700 mb-2">
                                Select Size: <span className="text-red-500">*</span></p>
                            <div className="flex  gap-2 flex-wrap">
                                {sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-5 py-2 rounded-lg border text-xs font-medium transition ${selectedSize === size
                                            ? 'border-teal-500 text-teal-600 bg-blue-50 shadow-sm'
                                            : 'border-gray-300 text-gray-700 hover:border-gray-400 bg-white'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Color selector */}
                        <div>
                            <p className="text-sm  font-semibold text-gray-700 mb-2">
                                Select Color: <span className="text-red-500">*</span></p>
                            <div className="flex  gap-2 flex-wrap">
                                {colors.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`px-5 py-2 rounded-lg border text-xs font-medium transition ${selectedColor === color
                                            ? 'border-teal-500 text-teal-600 bg-blue-50 shadow-sm'
                                            : 'border-gray-300 text-gray-700 hover:border-gray-400 bg-white'
                                            }`}
                                    >
                                        {color}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity and Add to Cart */}
                        <div className="flex my-10 items-center gap-3 flex-wrap">
                            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                                <button
                                    onClick={() => setQuantity((quantity) => Math.max(1, quantity - 1))}
                                    className="w-10 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition text-lg font-medium"
                                >
                                    −
                                </button>
                                <span className="w-12 text-center text-base font-semibold text-gray-800">
                                    {quantity}
                                </span>
                                <button
                                    onClick={() => setQuantity((quantity) => quantity + 1)}
                                    className="w-10 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition text-lg font-medium"
                                >
                                    +
                                </button>
                            </div>

                            <button onClick={() => handleAddToCart()} className="flex-1 flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 hover:cursor-pointer hover:text-white font-bold py-3 px-6 rounded-xl transition shadow-sm hover:shadow-md">
                                <RiShoppingCartLine size={24} />
                                ADD TO CART
                            </button>

                            <button
                            // onClick={() => setWishlist((w) => !w)}
                            // className={`w-12 h-12 rounded-xl border flex items-center justify-center transition ${
                            //   wishlist
                            //     ? 'border-red-400 text-red-500 bg-red-50'
                            //     : 'border-gray-200 text-gray-400 hover:border-gray-400 hover:text-gray-600'
                            // }`}
                            >
                                {/* <BiHeart size={18} fill={wishlist ? 'currentColor' : 'none'} /> */}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="mt-8  ">
                <ProductShowcase title={"More Products"} />
            </div>
        </div>
    )
}
