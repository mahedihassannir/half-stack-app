import React, { useEffect, useState } from 'react';
import Single from './Single';
import './cart.css'
import Carthandle from './Carthandle';


const Products = () => {
    let [api, setApi] = useState([])
    useEffect(() => {
        let url = `https://raw.githubusercontent.com/ProgrammingHero1/banglar-tshirt/main/public/tshirts.json`
        fetch(url)
            .then(res => res.json())
            .then(data => setApi(data))

    }, [])

    let [cart, serHandle] = useState([])

    let handleaddtoCart = (mahedi) => {

        let total = [...cart, mahedi]
        serHandle(total)

        console.log(total);


    }

    
    


    let remove = id => {
        let remaning = cart.filter(ts => ts._id !== id);
        serHandle(remaning)

    }
    return (
        <div className='use2side'>

            <div className=' mt-5 ml-4 grid grid-cols-3 gap-4'>
                {
                    api.map(mahedi =>

                        <Single
                            key={mahedi._id}
                            info={mahedi}
                            infoBtn={handleaddtoCart}

                        ></Single>)

                }


            </div>
            <div className='mt-5 text-white ml-3 h-[700px] bg-gray-500'>
                <Carthandle

                    cart={cart}
                    key={cart._id}
                    remove={remove}


                >

                </Carthandle>
            </div>
        </div>
    );
};

export default Products;