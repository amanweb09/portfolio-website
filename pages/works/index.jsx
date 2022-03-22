import Navbar from '../../components/Navbar'
import Head from 'next/head'
import Card from '../../components/works/Card';
import Footer from '../../components/home/Footer';

const index = () => {
    return (
        <div className="container mx-auto">
            <Head>
                <title>Works - Webmon</title>
            </Head>
            <Navbar />

            <Card
                title="wack culture"
                subTitle="an e-commerce website"
                image="/images/wack-culture.png" />

            <Card
                title="the sorcerer's stream shop"
                subTitle="an e-commerce website"
                image="/images/sss.png" />

            <Card
                title="shoutup"
                subTitle="a real-time chat app"
                image="/images/shoutup.png" />
            <Card
                title="socialbuzz"
                subTitle="a social media app"
                image="/images/social-buzz-1.png" />
            <Card
                title="Ghost Clothing"
                subTitle="an e-commerce website"
                image="/images/ghost.png" />

            <div className="py-12">
                <h1 className='font-bold sm:text-3xl text-2xl text-center uppercase dark:text-white'>and many more!</h1>
                <button
                    style={{
                        background: "linear-gradient(90deg, #FFE600 2.33%, #D7A803 94.13%)"
                    }}
                    className='w-64 block mx-auto mt-4 h-10 font-bold uppercase'>build mine too</button>
            </div>

            <Footer />
        </div>
    );
}

export default index;