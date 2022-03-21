import Navbar from '../../components/Navbar'
import Head from 'next/head'
import Card from '../../components/works/Card';
import Footer from '../../components/home/Footer';

const index = () => {
    return (
        <div className="bg-black">
            <Head>
                <title>Works - Webmon</title>
            </Head>
            <div className='bg-gray-100 w-full h-max px-4 dark:bg-slate-900'>
                <Navbar />
            </div>
            <section>
                <Card
                    title="wack culture"
                    subTitle="an e-commerce website"
                    image="/images/wack-culture.png" />
                <div className="w-full h-4 mt-6 bg-green-200 dark:bg-slate-600 block"></div>

                <Card
                    title="the sorcerer's stream shop"
                    subTitle="an e-commerce website"
                    image="/images/sss.png" />

                <div className="w-full h-4 mt-6 bg-green-200 dark:bg-slate-600 block"></div>

                <Card
                    title="shoutup"
                    subTitle="a real-time chat app"
                    image="/images/shoutup.png" />

                <div className="w-full h-4 mt-6 bg-green-200 dark:bg-slate-600 block"></div>

                <Card
                    title="social buzz"
                    subTitle="a social media app"
                    image="/images/social-buzz.png" />

                <div className="w-full h-4 mt-6 bg-green-200 dark:bg-slate-600 block"></div>

                <div className="py-12">
                    <h1 className='font-bold sm:text-3xl text-2xl text-center uppercase dark:text-white'>and many more!</h1>
                    <button
                        style={{
                            background: "linear-gradient(90deg, #FFE600 2.33%, #D7A803 94.13%)"
                        }}
                        className='w-64 block mx-auto mt-4 h-10 font-bold uppercase'>build mine too</button>
                </div>
            </section>

                        <Footer />
        </div>
    );
}

export default index;