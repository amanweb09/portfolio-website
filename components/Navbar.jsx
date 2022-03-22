import { useEffect, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import ThemeToggle from '../util/themeToggle';
import SideMenu from './SideMenu';

const Navbar = () => {
    const router = useRouter()
    const [theme, setTheme] = useState('light')
    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        setTheme(window.localStorage.getItem('theme'))
    }, [])

    function toggleWebsiteTheme() {
        if (theme === 'light') {
            setTheme('dark')
            ThemeToggle('dark')
            return;
        }
        if (theme == 'dark') {
            setTheme('light')
            ThemeToggle('light')
            return;
        }
        setTheme('dark')
        ThemeToggle('dark')
        return;
    }

    function openMenu() {
        setShowMenu(true)
    }

    return (
        <>
            <div
                style={{ height: '12vh' }}
                className="w-full dark:text-gray-100 flex sm:mb-0 mb-2 sm:px-2 sm:rounded-sm shadow-lg items-center justify-between relative px-2">
                {
                    showMenu && <SideMenu setShowMenu={setShowMenu} />
                }
                <div
                    onClick={openMenu}
                    className='w-14 h-14 rounded-lg ham sm:hidden flex-center flex-col bg-white dark:bg-slate-600'>
                    <div className='bg-black bars w-8 rounded-full dark:bg-white'></div>
                    <div className='bg-black bars w-8 rounded-full dark:bg-white'></div>
                    <div className='bg-black bars w-8 rounded-full dark:bg-white'></div>
                </div>

                <img
                    src="/images/logo.png"
                    alt="logo"
                    onClick={() => router.push('/')}
                    className="cursor-pointer sm:w-16 w-12 sm:hidden block absolute logo" />

                <img
                    src="/images/logo.png"
                    alt="logo"
                    onClick={() => router.push('/')}
                    className="cursor-pointer sm:w-16 w-12 sm:block hidden" />

                <ul className="sm:flex hidden items-center justify-center sm:mt-0 mt-4">
                    <li>
                        <Link href="/services"><a
                            className='dark:text-gray-100 sm:mx-6 mx-4 hover:text-purple-600 font-semibold sm:text-base text-sm'>
                            Services
                        </a></Link>
                        <Link href="/works"><a
                            className='dark:text-gray-100 sm:mx-6 mx-4 hover:text-purple-600 font-semibold sm:text-base text-sm'>
                            Our Works
                        </a></Link>
                        <Link href="/"><a aria-disabled={true}
                            className='dark:text-gray-100 sm:mx-6 mx-4 hover:text-purple-600 font-semibold sm:text-base text-sm'>
                            Startup Assistance <span className='text-yellow-500 text-xs ml-2 font-semibold'>(launching soon)</span>
                        </a></Link>
                    </li>
                </ul>

                <div className="flex-center">
                    <button
                        onClick={() => router.push('/contact')}
                        className='w-48 h-10 dark:bg-white dark:text-black sm:block hidden font-semibold bg-black text-white cursor-pointer'>
                        GET IN TOUCH
                    </button>
                    <div
                        onClick={toggleWebsiteTheme}
                        className='w-10 h-10 rounded-lg ham cursor-pointer bg-white dark:bg-slate-600 hidden sm:flex sm:items-center sm:justify-center ml-4'>
                        <img
                            className='w-6'
                            src={theme === 'light' ? "/images/sun.png" : theme === 'dark' ? "/images/moon.png" : "/images/sun.png"}
                            alt="light" />
                    </div>
                </div>
                <div
                    onClick={toggleWebsiteTheme}
                    className='w-10 h-10 rounded-lg ham bg-white dark:bg-slate-600 sm:hidden flex-center'>
                    <img
                        className='w-6'
                        src={theme === 'light' ? "/images/sun.png" : theme === 'dark' ? "/images/moon.png" : "/images/sun.png"}
                        alt="light" />
                </div>
            </div>
            <style jsx>
                {
                    `
                    .ham {
                        box-shadow: inset 4px 4px 7px 2px rgba(0, 0, 0, 0.15);
                    }
                    .bars {
                        height: 6px;
                    }
                    .bars:nth-child(2) {
                        margin: 5px 0;
                    }
                    .logo {
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%)
                    }
    `
                }
            </style>
        </>
    );
}


export default Navbar;