'use client'
import { useParams } from 'next/navigation';
import React, { useContext, useState } from 'react'
import { products } from '@/components/data/products';
import { RiShoppingCartLine } from 'react-icons/ri';
import { FaRegHeart } from 'react-icons/fa';
import Image from 'next/image';
import { BiHeart } from 'react-icons/bi';
import { CartContext } from '@/contex/CartProvider';

export default function ProductDetails() {
    const { id } = useParams();
    const { cart, setCart } = useContext(CartContext)
    //   console.log(Number(id));
    const [selectedColor, setSelectedColor] = useState("")
    const [quantity, setQuantity] = useState(1)

    console.log(cart);
    const product = products.find((product) => product.id === Number(id));
    const { price, name, category, image, rating, inStock, sizes, colors, description } = product || {}


    const handleAddToCart = () => {
        const productInfo = {
            id: id,
            name: name,
            price: price,
            image: image,
            quantity: quantity,
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
                    <div className=" pl-12 lg:pl-0">
                        <h2 className="card-title">
                            {name}
                        </h2>
                        <p className=" my-4 text-gray-500">Description: <span className="text-black  ">{description}</span></p>
                        <p className=" my-4 text-gray-500">Category: <span className="text-blue-500  ">{category}</span></p>
                        <p className="my-4">{inStock ? <span className="text-green-500">In Stock</span> : <span className="text-red-500">Out of Stock</span>}</p>
                        <p className="text-xl font-bold">TK {price}</p>
                        <p className="flex my-4 gap-2"> Size: {sizes?.join(", ")}</p>

                        {/* Color selector */}
                        <div>
                            <p className="text-sm  font-semibold text-gray-700 mb-2">
                                Select Color: <span className="text-red-500">*</span></p>
                            <div className="flex  gap-2 flex-wrap">
                                {colors.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`px-5 py-2 rounded-lg border text-sm font-medium transition ${selectedColor === color
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

                            <button onClick={() => handleAddToCart()} className="flex-1 flex items-center justify-center gap-2 bg-teal-400 hover:bg-teal-500 hover:cursor-pointer hover:text-white font-bold py-3 px-6 rounded-xl transition shadow-sm hover:shadow-md">
                                <RiShoppingCartLine size={18} />
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
            <div className="px-8 mt-5 lg:mt-0 ">
                <h1 className="text-xl font-semibold ">More products</h1>
                <div>

                    {/* {
                        products.map((signleProduct) => <Link to={`/product-details/${signleProduct?._id}`} key={signleProduct?._id} className="py-2 my-2  flex gap-4 border-b border-b-gray-400 ">
                            <img className="h-16 w-16 object-cover" src={signleProduct?.image} alt="product image" />
                            <div>
                                <h2>{signleProduct?.name}</h2>
                                <p className="text-sm">Brand: {signleProduct?.brand}</p>
                            </div>

                        </Link>)
                    } */}
                </div>
            </div>
        </div>
    )
}
