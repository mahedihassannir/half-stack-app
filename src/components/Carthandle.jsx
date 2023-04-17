import React from 'react';

const Carthandle = ({ cart, remove }) => {
    
    return (
        <div>
            <h1>{cart.length}</h1>
            {
                cart.map(res => <p className='text-center border-2 w-11/12 mx-auto mb-2' key={res._id}>{res.name}
                    <br />
                    <button onClick={() => remove(res._id)} className='link'>X</button>

                </p>)
            }

        </div>
    );
};

export default Carthandle;