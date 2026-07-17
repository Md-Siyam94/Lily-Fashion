'use client'
import EmptyCart from '@/components/common/EmptyCart'
import { CartContext } from '@/contex/CartProvider'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import * as motion from "motion/react-client"
import { RxCross2 } from 'react-icons/rx'

export default function Cart() {
  const { cart, setCart } = useContext(CartContext)
  const [selected, setSelected] = useState([]);

  // total price
  const totalPrice = selected?.reduce((sum, product) => sum + product.price, 0);
  const isDisabled = selected.length === 0
  // total quantity
  const totalQuantity = selected?.reduce((sum, product) => sum + product.quantity, 0);

  // get product form checkbox
  const handleChange = (e) => {
    const product = JSON.parse(e.target.value);
    if (e.target.checked) {
      setSelected([...selected, product]);
    } else {
      setSelected(selected.filter(item => item.id !== product.id));
    }
  };

  // delete product from cart
  const handleCancel = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }
  return (
    <div className='max-w-7xl mx-auto grid grid-cols-12 gap-5 max-h-screen[calc(100vh-100px)] overflow-y-scroll xl:pb-10 lg:px-20 px-5 pt-5'>
      {/* cart product section */}
      <div className="overflow-x-auto lg:col-span-8 col-span-12">
        {
          cart.length > 0 ?
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Select</th>
                  <th>Image</th>
                  <th className='hidden lg:block'>Details</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  cart.map(cartProdcut => {
                    return <tr key={cartProdcut.id}>
                      <td>
                        <input type="checkbox" onClick={handleChange} value={JSON.stringify(cartProdcut)}
                          className="checkbox checkbox-md" />
                      </td>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <Link href={cartProdcut.image} >
                              <Image
                                height={500}
                                width={500}
                                className='lg:w-20 w-10 lg:h-20 h-10 object-cover'
                                src={cartProdcut.image}
                                alt="product Image" />
                            </Link>
                          </div>
                          <div>
                            <div className="font-bold">{cartProdcut.name}</div>

                            <div className='font-semibold'>Tk {cartProdcut.price} </div>
                          </div>
                        </div>
                      </td>
                      <td className='hidden lg:block'>
                        <p className='text-xs'>Color: {cartProdcut.color}</p>
                        <p className="text-xs">Size: {cartProdcut.size}</p>
                        <p className="text-xs ">Quantity{cartProdcut.quantity}</p>
                      </td>
                     
                      <th>
                        <motion.div

                          whileHover={{
                            scale: [null, 1, 1.05],
                            transition: {
                              duration: 0.1,
                              times: [0, 0.6, 1],
                              ease: ["easeInOut", "easeOut"],
                            },
                          }}
                          transition={{
                            duration: 0.1,
                            ease: "easeOut",
                          }}
                        >
                          <button onClick={() => handleCancel(cartProdcut.id)} ><RxCross2 className='text-2xl     text-red-500 hover:text-red-600' /></button>
                        </motion.div>
                      </th>
                    </tr>
                  })
                }
              </tbody>
            </table> : <div ><EmptyCart></EmptyCart>
            </div>
        }
      </div>
      {/* payment section */}
      <div className='lg:col-span-4 col-span-12 w-full grid shadow max-h-[calc(100vh-150px)] p-5 rounded-xl'>
        <h1 className='text-2xl font-semibold'>Payment Info</h1>

        <div className='mt-4'>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Payment with</legend>
            <select defaultValue="SSL Commerze" className="select">
              <option disabled={true}>SSL Commerze</option>
            </select>
          </fieldset>
        </div>
        <div className='flex w-full justify-between mt-8'>
          <h2 className='font-semibold opacity-80'>Total products</h2>
          <p className=' font-semibold'>{totalQuantity }</p>
        </div>
        <div className='flex w-full justify-between mb-8 mt-2'>
          <h2 className=' font-semibold opacity-80'>Total price</h2>
          <p className=' font-semibold'>{totalPrice} Tk</p>
        </div>
        {
          isDisabled && <p className='font-semibold text-red-500 text-sm mb-2'>Selecte atleast 1 product to continue buying</p>
        }
        <button disabled={isDisabled} type='button' onClick={() => document.getElementById('my_modal_2').showModal()} className={isDisabled ? "bg-gray-300 cursor-not-allowed text-lg font-semibold py-2 w-full rounded-lg" : ' text-xl font-semibold py-2 w-full rounded-lg hover:cursor-pointer bg-teal-700 text-white hover:bg-teal-800'}>Buy Products</button>
      </div>

      {/* Open the modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-2xl">Thank you for Buying</h3>
         
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

    </div>
  )
}
