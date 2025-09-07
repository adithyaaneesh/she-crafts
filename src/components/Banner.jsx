import '../styles/Banner.css';

const Banner = () => {
    return(
        <section className='banner'>
            <div className='container'>
                <div className='banner-content'>
                    <h1>Handmade Crochet,Knitted <br/> with l<span>O</span>ve</h1>
                    <p>Small-batch crochet for cozy homes and giftable moments. <br/>Free shipping on orders over $75.</p>
                    <div className='banner-button'>
                        <button><a href='#'>SHOP BESTSELLERS</a></button>
                        <button><a href='#'>LEARN MORE</a></button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Banner
