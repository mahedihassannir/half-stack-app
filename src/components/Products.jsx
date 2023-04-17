import React, { useEffect, useState } from 'react';
import Single from './Single';
import './cart.css'


const Products = () => {
    let [api, setApi] = useState([])
    useEffect(() => {
        let url = `https://openapi.programming-hero.com/api/phones?search=iphone`
        fetch(url)
            .then(res => res.json())
            .then(data => setApi(data.data))

    }, [])

    let [handle, serHandle] = useState([])

    let handleaddtoCart = (mahedi) => {

        let total = [...handle, mahedi]
        serHandle(total)



    }


    return (
        <div className='use2side'>

            <div className=' mt-5 ml-4 grid grid-cols-3 gap-4'>
                {
                    api.map(mahedi =>

                        <Single
                            key={mahedi.image}
                            info={mahedi}
                            infoBtn={handleaddtoCart}

                        ></Single>)

                }


            </div>
            <div className='mt-5 text-white ml-3 h-[700px] bg-gray-500'>

            </div>
        </div>
    );
};

export default Products;