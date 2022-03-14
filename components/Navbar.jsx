import Link from 'next/link'
import ToggleSwitch from './ToggleSwitch';

const Navbar = () => {
    return (
        <>
            <div
                style={{ height: '12vh' }}
                className="w-full flex sm:flex-row flex-col sm:my-0 my-2 items-center justify-between">
                <div className="font-bold text-lg">
                    WebNaught
                </div>

                <ul className="flex-center sm:mt-0 mt-4">
                    <li>
                        <Link href="/services"><a
                            className='sm:mx-6 mx-4 hover:text-purple-600 font-semibold sm:text-base text-sm'>
                            Services
                        </a></Link>
                        <Link href="/services"><a
                            className='sm:mx-6 mx-4 hover:text-purple-600 font-semibold sm:text-base text-sm'>
                            Our Works
                        </a></Link>
                        <Link href="/services"><a
                            className='sm:mx-6 mx-4 hover:text-purple-600 font-semibold sm:text-base text-sm'>Startup Assistance
                        </a></Link>
                    </li>
                </ul>

                <div className="flex-center">
                    <button className='w-48 h-10 sm:block hidden bg-black text-white cursor-pointer'>GET IN TOUCH</button>
                    {/* <div className='ml-4'>
                    <ToggleSwitch />
                    </div> */}
                </div>

            </div>
{/* 
            <div
                style={{ height: '1px', 
                // background: "linear-gradient(101.91deg, #121FCF 25.64%, #CF1512 71.9%, #C2161F 71.9%)" 
                background: "#dcdcdc"
            }}
                className="w-full sm:hidden block mt-6"></div> */}
        </>
    );
}


export default Navbar;