import Head from 'next/head'
import Hero from '../../components/gd/Hero';
import City from '../../components/gd/City';
import Navbar from '../../components/Navbar'
import GraphicsPack from '../../components/gd/GraphicsPack';

const graphicDesiging = () => {
    return (
        <div className="container mx-auto">
            <Head>
                <title>Graphic designing - Webnaught</title>
            </Head>
            <Navbar />

            <Hero />
            <City />
            <GraphicsPack />
        </div>
    );
}

export default graphicDesiging;