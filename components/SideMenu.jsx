import Link from "next/link";

const SideMenu = ({ setShowMenu }) => {
    return (
        <div className="w-full h-full fixed inset-0 bg-white dark:bg-slate-700 wrapper">

            <span
                onClick={() => setShowMenu(false)}
                className="absolute left-4 top-2 text-5xl cursor-pointer text-black dark:text-white hover:text-pink-500">
                &times;
            </span>

            <div className="w-full h-16 shadow-lg flex items-center justify-end">
                <h1 className="font-bold text-lg text-black dark:text-white float-right mr-2">WEBMON</h1>
            </div>

            <ul className="w-full flex-center flex-col mt-16">
                <li>
                    <Link href='/services'><a
                        onClick={() => setShowMenu(false)}
                        className="dark:text-white text-black font-bold block mx-auto w-max uppercase mb-6">
                        Services
                    </a></Link>
                    <Link href='/services/webdev_apps'><a
                        onClick={() => setShowMenu(false)}
                        className="dark:text-white text-black font-bold block mx-auto w-max uppercase mb-6">
                        Website or App Development
                    </a></Link>
                    <Link href='/services/graphic-designing'><a
                        onClick={() => setShowMenu(false)}
                        className="dark:text-white text-black font-bold block mx-auto w-max uppercase mb-6">
                        Graphic designing
                    </a></Link>
                    <Link href='/services/seo'><a
                        onClick={() => setShowMenu(false)}
                        className="dark:text-white text-black block mx-auto font-bold w-max uppercase mb-6">
                        SEO
                    </a></Link>
                    <Link href='/works'><a
                        onClick={() => setShowMenu(false)}
                        className="dark:text-white text-black block mx-auto font-bold w-max uppercase mb-6">
                        Our works
                    </a></Link>
                    <Link href='/services/seo'><a
                        onClick={() => setShowMenu(false)}
                        className="dark:text-white text-black block mx-auto font-bold w-max uppercase mb-6">
                        Startup Assistance <span className="ml-2 font-semibold text-yellow-500">(launchign soon)</span>
                    </a></Link>
                    <Link href='/contact'><a
                        onClick={() => setShowMenu(false)}
                        className="text-pink-500 block mx-auto font-bold w-max uppercase mb-6">
                        Get in Touch
                    </a></Link>
                </li>
            </ul>


            <style jsx>
                {
                    `
                        .wrapper {
                            z-index: 99;
                        }
                    `
                }
            </style>
        </div>
    );
}

export default SideMenu;