'use client'
import { useParams } from 'next/navigation';
import React from 'react'
import products from '../../components/data/products';

export default function ProductDetails() {
  const {id} = useParams();
  console.log(id);
  const product = products.find((p) => p._id === id);
  console.log(product)


  return (
     <div className="lg:w-10/12 py-14  mx-auto lg:mt-5 rounded-2xl grid lg:grid-cols-12 ">
            {/* <div className="lg:flex w-full mx-auto  bg-base-100 lg:col-span-9 px-4 shadow-sm">
                <figure className="px-10">
                    <img
                        className="h-96 w-96 mx-auto p-7 "
                        src={image}
                        alt={category} />
                </figure>
                <div className=" pl-12 lg:pl-0">
                    <h2 className="card-title">
                        {name}
                        <div className="badge">({material})</div>
                    </h2>
                    <p className=" my-4 text-gray-500">Brand: <span className="text-blue-500  ">{brand}</span></p>
                    <p className=" my-4 text-gray-500">Category: <span className="text-blue-500  ">{category}</span></p>

                    <p className="my-4">{inStock ? <div className="text-green-500">In Stock</div> : <div className="text-red-500">Not available</div>}</p>
                    <p className="flex  gap-2"> Size: {size?.join(", ")}
                    </p>
                    <p className="flex gap-2 my-4">color: {color?.join(", ")}
                    </p>
                    <p>TK. <span className="text-lg font-semibold">{price} {currency}</span></p>
                    <div className="my-6 grid md:grid-cols-2  gap-4">
                        <button  onClick={() => handleAddToCart(_id)} type="button" className="py-3 px-10  rounded-lg bg-teal-400 hover:bg-teal-500 hover:cursor-pointer hover:text-white flex gap-2">Add to Cart<RiShoppingCartLine className='text-2xl' /></button>
                        <button onClick={() => handleAddToWishlist(_id)} type="button" className="py-3 px-10 mt-5 lg:mt-0 rounded-lg bg-teal-400 hover:bg-teal-500 hover:cursor-pointer hover:text-white flex gap-2">Add to Wishlist<FaRegHeart className="text-2xl" /></button>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-3 px-8 mt-5 lg:mt-0 lg:max-h-[calc(100vh-130px)]  overflow-y-scroll">
                <h1 className="text-xl font-semibold ">More products</h1>
                <div>

                    {
                        products.map((signleProduct) => <Link to={`/product-details/${signleProduct?._id}`} key={signleProduct?._id} className="py-2 my-2  flex gap-4 border-b border-b-gray-400 ">
                            <img className="h-16 w-16 object-cover" src={signleProduct?.image} alt="product image" />
                            <div>
                                <h2>{signleProduct?.name}</h2>
                                <p className="text-sm">Brand: {signleProduct?.brand}</p>
                            </div>

                        </Link>)
                    }
                </div>
            </div> */}
        </div>
  )
}
