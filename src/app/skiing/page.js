import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Skiing.module.css';
import NavBar from '../components/Navbar';
import Link from 'next/link';

export default function Skiing() {
    return (
        <div className={styles.container}>
        <NavBar />
            <Head>
                <title>Enjoy Skiing</title>
            </Head>
            <main className={styles.main}>
                <section className={styles.hero}>
                    <h1>The <span className={styles.secondary}>joy</span> of Skiing</h1>
                    <p>Skiing offers <span className={styles.primary}>adventure</span>, scenic views, and physical activity.</p>
                </section>
                <section className={styles.features}>
                    <div className={styles.feature}>
                        <h2>Adventure</h2>
                        <p><span className={styles.primary_underline}>Explore</span> challenging slopes and conquer new heights.</p>
                        <Image src="/skiing-slopes.jpg" alt="Skiing Adventure" width={300} height={200} />
                    </div>
                    <div className={styles.feature}>
                        <h2>Scenic Views</h2>
                        <p>Enjoy breathtaking views of snow-covered mountains and pristine landscapes.</p>
                        <Image src="/snow-sunset.jpg" alt="Skiing Scenic Views" width={300} height={200} />
                    </div>
                    <div className={styles.feature}>
                        <h2>Better With Friends</h2>
                        <p>Share the experience with <span className={styles.primary_underline}>friends</span> and family for a memorable trip.</p>
                        <Image src="/skiing-friends.jpg" alt="Skiing Physical Activity" width={300} height={200} />
                    </div>
                </section>
                
                <section className={styles.gallery}>
            
                    <div className={styles.hero}>
                        <h1><span className={styles.primary}>Explore</span> Skiing</h1>
                    </div>
                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <h2>Find the Right Gear</h2>
                            <p>A great way to get gear is through buying used gear. Many skiiers look to upgrade every year, and you can find great prices for skiing equipment.</p>
                        </div>
                    <div className={styles.feature}>
                        <h2>Staying Safe</h2>
                        <p>Understand the importance of safety while skiing. <span className={styles.secondary_underline}>Always</span> wear a helmet and share your location with a friend while on the slope.</p>
                    </div>
                        <div className={styles.feature}>
                        <h2>Enjoy the Experience</h2>
                        <p>Embrace the thrill of skiing and make unforgettable memories on the slopes with friends and family.</p>
                    </div>
                    </div>
                </section>
                <section className={styles.cta}>
                    <h2>Ready to Hit the Slopes?</h2>
                    <Link href="https://www.stevenspass.com/plan-your-trip/lift-access/tickets.aspx" passHref>
                        <button className={styles.ctaButton}>Start Your Adventure</button>
                    </Link>
                </section>
            </main>
            <footer className={styles.footer}>
                <p>For more information on how to ski, or what proper equipment to wear, go to your local ski shop</p>
            </footer>
        </div>
    );
}