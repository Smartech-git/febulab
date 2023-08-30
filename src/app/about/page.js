import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import aboutUsSection1BImage from '../../../public/assets/aboutUsSection1BImage.png'
import aboutUsSection1TImage from '../../../public/assets/aboutUsSection1.png'
import bgSvg3 from '../../../public/assets/bgSvg3.svg'
import bgSvg2 from '../../../public/assets/bgSvg2.svg'
import arrowRight from '../../../public/icons/arrowRight.png'
import aboutUsSection2Image1 from '../../../public/assets/aboutUsSection2Image1.png'
import aboutUsSection2Image2 from '../../../public/assets/aboutUsSection2Image2.png'
import aboutUsSection2Image3 from '../../../public/assets/aboutUsSection2Image3.png'

export default function page() {
  return (
    <div className={styles.about}>
        <div className={styles.aboutSection1}>
            <div className={styles.aboutSection1Inner}>
                <div className={styles.aboutSection1Left}>
                    <div>
                        <h2>About Us</h2>
                    </div>
                    <p>Febulab Scientific Services Limited aids in Africa’s growth in science and technology  By offering dependable tools, equipment, customized Lab Coats, chemicals, and reagents to labs and businesses Several industries, including the energy, environmental, chemical, mining, pharmaceutical, cosmetics, beauty, engineering, food and beverage, and educational sectors, employ our goods.
                    <br/> <br/>
                    Our team of specialists has five years of experience with lab apparatus and chemistry. In order to satisfy all of your demands, we provide a huge range of high-quality goods and services. Getting everything you need in one spot is effortless with our simple ordering and pick-up service.
                    </p>
                </div>
                <div className={styles.aboutSection1Right}>
                    <Image src={aboutUsSection1BImage} alt="aboutUs"/>
                    <Image src={aboutUsSection1TImage} alt='aboutUs' />
                </div>
            </div>
            <Image src={bgSvg3} alt="bgSvg3" />
        </div>
        <div className={styles.aboutSection2}>
            <div className={styles.aboutSection2Inner}>
                <div className={styles.aboutSection2Texts}>
                    <h2>Mission Statement</h2>
                    <p>
                    To provide exceptional laboratory supply services that enable scientific advancements and contribute to the success of research and development initiatives worldwide. We strive to deliver high-quality, reliable, and innovative laboratory products, ensuring customer satisfaction, promoting safety, and fostering a collaborative scientific community

                    </p>
                </div>
                <div className={styles.aboutSection2Images}>
                    <Image src={aboutUsSection2Image1} alt="ImageDescript"/>
                    <Image src={aboutUsSection2Image2} alt="ImageDescript"/>
                    <Image src={aboutUsSection2Image3} alt="ImageDescript"/>
                </div>
                <div className={styles.aboutSection2Texts}>
                    <h2>Vision Statement</h2>
                    <p>
                    To be the leading laboratory supply service provider recognized for our unmatched product quality, exceptional customer service, and commitment to scientific progress. We aspire to be the preferred partner for researchers, laboratories, and scientific institutions worldwide, offering comprehensive solutions that enable breakthrough discoveries and improve the quality of life.
                    </p>
                </div>
                <div className = 'button'>
                    <Link href='./contact'>
                        <button>
                            <span>Contact Us</span>
                            <Image src={arrowRight} width={20} height={20} alt="arrowRight"/>
                        </button>
                    </Link> 
                </div>     
            </div>
            <Image src={bgSvg2} alt="bgSvg2"/>
        </div>
    </div>
    
  )
}
