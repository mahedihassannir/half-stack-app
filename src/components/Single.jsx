
const Single = ({ info, infoBtn }) => {

    let { picture, name, gender, _id, price, } = info



    return (
        <div>
            <div className=' relative w-[400px] h-[600px] rounded-lg border-2 shadow-lg'>
                <div>
                    <img className='w-full h-[300px]' src={picture} alt="" />
                </div>
                <div className='pl-5 pt-5'>
                    <h1 className='text-lg py-3'>{name}</h1>
                    <p className='text-lg'>{price}</p>
                </div>
                <div>
                    <button onClick={() => infoBtn(info)} className='py-5 bg-gray-600 text-white w-full bottom-0 absolute '>add to cart</button>
                </div>
            </div>

        </div>
    );
};

export default Single;