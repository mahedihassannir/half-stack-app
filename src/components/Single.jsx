
const Single = ({ info, infoBtn }) => {

    let { image, brand, phone_name, } = info

    

    return (
        <div>
            <div className=' relative w-[400px] h-[600px] rounded-lg border-2 shadow-lg'>
                <div>
                    <img className='w-full h-[300px]' src={image} alt="" />
                </div>
                <div className='pl-5 pt-5'>
                    <h1 className='text-lg py-3'>{brand}</h1>
                    <p className='text-lg'>{phone_name}</p>
                </div>
                <div>
                    <button onClick={() => infoBtn(info.image)} className='py-5 bg-gray-600 text-white w-full bottom-0 absolute '>add to cart</button>
                </div>
            </div>

        </div>
    );
};

export default Single;