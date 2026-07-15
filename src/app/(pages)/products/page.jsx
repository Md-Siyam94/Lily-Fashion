import React from 'react';
import { products } from '@/components/data/products';
import ProductCard from '@/components/cards/ProductCard';

const page = () => {
    console.log(products);
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5 items-center'>
                {
                    products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default page;