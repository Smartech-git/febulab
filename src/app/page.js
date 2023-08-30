'use client'

import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import bgSvg1 from '../../public/assets/bgSvg1.svg'
import bgSvg2 from '../../public/assets/bgSvg2.svg'
import bgSvg3 from '../../public/assets/bgSvg3.svg'
import arrowRight from '../../public/icons/arrowRight.png'
import bannerImage from '../../public/assets/bannerImage.svg'
import excellenceIcon from '../../public/icons/excellenceIcon.png'
import collabIcon from '../../public/icons/collabIcon.png'
import cusFocusIcon from '../../public/icons/cusFocusIcon.png'
import integrityIcon from '../../public/icons/integrityIcon.png'
import safetyIcon from '../../public/icons/safetyIcon.png'
import { getLabEquipImgs } from './contentful'
import acidsDiscrip from '../../public/assets/acidsDiscrip.png'
import alcoholDiscrip from '../../public/assets/alcoholDiscrip.png'
import bufferDiscrip from '../../public/assets/bufferDiscrip.png'
import labPlasticDiscrip from '../../public/assets/labPlasticDiscrip.png'
import reagentDiscrip from '../../public/assets/reagentDiscrip.png'
import solventsDiscrip from '../../public/assets/solventsDiscrip.png'


export default function Page() {
  const [labEquipContent, setLabEquipContent] = useState(Array(10).fill({item: undefined, description: undefined, imageUrl: undefined}))

  useEffect(() => {

    const prepare = async () => {
      let dataArray;
      try {
        let res = await getLabEquipImgs()
         dataArray =  JSON.parse(res).items.map((item) => {
          return {
            title: item.fields.title,
            description: item.fields.description,
            imageUrl: item.fields.images.fields.file.url
          }
        })
      }catch(e){
      }finally{
        if(dataArray === undefined){
          setLabEquipContent(Array(10).fill({item: undefined, description: undefined, imageUrl: undefined}))
        } else {
          setLabEquipContent(dataArray)
        }
        
      }
    }
   
    prepare()
  }, [])

  return (
    <div className={styles.home}>
      <div className={styles.section1}>
        <div className={styles.leftSection}>
            <h2>Invest in modern equipment to improve your results and speed up operation</h2>
            <span>We offer wide range of laboratory equipment, customized lab coats, chemicals and reagents for medical and science laboratories. We also deal on Industrial chemicals.</span>
            <Link href={'./about'}>
               <button>
                <span>Learn More</span>
                <Image src={arrowRight} width={20} height={20} alt="arrowRight"/>
              </button>
            </Link>
           
        </div>
        <div className={styles.rightSection}>
          <Image src={bannerImage} alt="bannerImage" width={300} height={300} />
        </div> 
        <Image src={bgSvg1} alt="bgSvg1"/> 
      </div>

      <div className={styles.section2}>
        <div className={styles.section2Inner}>
          <h2 className={styles.sectionContentHeader}>Core Values</h2>
          <div className={styles.section2InfoContainer}>
            <div className={styles.section2InfoCards}>
              <div>
                <div className={styles.section2InfoCardHeader}>
                  <div className={styles.section2Icons} >
                    <Image src={excellenceIcon} width={24} height={24} alt="section2Icon" />
                  </div>
                  <span>Excellence</span>
                </div>
                <p>We strive for excellence in everything we do, from the quality of our products and services to our customer interactions and business operations. We set high standards and continuously improve to meet and exceed customer expectations.
                </p> 
              </div>

              <div>
                <div className={styles.section2InfoCardHeader}>
                  <div className={styles.section2Icons} >
                    <Image src={integrityIcon} width={24} height={24} alt="section2Icon" />
                  </div>
                  <span>Integrity</span>
                </div>
                <p>We conduct our business with the utmost integrity, and ethical standards. We are committed to maintaining transparency, respecting confidentiality, and fostering trust in all our relationships, whether with customers, suppliers, or employees.
                </p> 
              </div>

              <div>
                <div className={styles.section2InfoCardHeader}>
                  <div className={styles.section2Icons} >
                    <Image src={cusFocusIcon} width={24} height={24} alt="section2Icon" />
                  </div>
                  <span>Customer Focus</span>
                </div>
                <p>Our customers are at the heart of our business. We listen to their needs, provide personalized solutions, and ensure their satisfaction. We aim to build long-term relationships by being responsive, attentive, and dedicated to their success.
                </p>
              </div>
            </div>

            <div className={styles.section2InfoCards}>
              <div>
                <div className={styles.section2InfoCardHeader}>
                  <div className={styles.section2Icons} >
                    <Image src={collabIcon} width={24} height={24} alt="section2Icon" />
                  </div>
                  <span>Collaboration</span>
                </div>
                <p>We believe in the power of collaboration and actively seek partnerships with researchers, laboratories, and scientific institutions. By fostering a collaborative environment, we aim to facilitate knowledge sharing, innovation, and the collective advancement of scientific research.
                </p>
              </div>

              <div>
                <div className={styles.section2InfoCardHeader}>
                  <div className={styles.section2Icons} >
                    <Image src={safetyIcon} width={24} height={24} alt="section2Icon" />
                  </div>
                  <span>Safety</span>
                </div>
                <p>We prioritize the safety of our customers, employees, and the environment. We adhere to rigorous safety standards, provide proper and promote safe laboratory practices. We are committed to minimizing risks and ensuring a secure working environment.
                </p>
              </div>
            </div>
          </div>
        <Image src={bgSvg2} alt="bgSvg2" /> 
        </div>
        
      </div>

      <div className ={styles.section3}>
          <div className={styles.section3Inner}>
            <div className={styles.section3Texts}>
              <h1 className={styles.section3ContentHeader}>Products</h1>
              <h2>laboratory Equipments</h2>
              <span>
              We believe in the power of collaboration and actively seek partnerships with researchers, laboratories, and scientific institutions. By fostering a collaborative environment, we aim to facilitate knowledge sharing, innovation, and the collective advancement of scientific research.
              </span>
            </div>
            <div className={styles.section3Products}>
              {
                labEquipContent.map((data, index) => {
                  return (
                     <div key ={index}  className={styles.section3ProductCard}>
                        <div>
                          {
                            data.imageUrl === undefined ? <Skeleton height={'100%'}/> : <Image src={`https:${data.imageUrl}`} width={300} height={300} alt ="testImage"/>
                          }
                        </div>
                        <h2>{ data.title === undefined ? <Skeleton width={'70%'}/> : data.title}</h2>
                        <p>
                          {data.description === undefined ? <Skeleton width={'90%'} height={'100%'}/> : data.description}
                        </p>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <Image src={bgSvg3} alt="bgSvg3"/>
      </div>

      <div className={styles.section4}>
        <div className={styles.section3Inner}>
          <div className={styles.section4Texts}>
            <h2>Laboratory Consumables</h2>
            <span>Explore our comprehensive range of laboratory consumables, essential for conducting experiments and tests with accuracy and consistency. From acids and solvents to sample laboratory plastics and reagents, we offer reliable and high-quality products to support your laboratory workflows and scientific investigations.</span>
          </div>
          <div className={styles.section4InfoContainer}>
              <div>
                <div className={styles.section4InfoCard}>
                  <Image src={acidsDiscrip} alt="acidsDiscrip"/>
                  <div>
                    <span>Acids</span>
                  </div>
                </div>
                <div className={styles.section4InfoCard}>
                  <Image src={reagentDiscrip} alt="reagentDiscrip"/>
                  <div>
                    <span>Reagent and Chemicals</span>
                  </div>
                </div>
              </div>

              <div>
                <div className={styles.section4InfoCard}>
                 <Image src={alcoholDiscrip} alt="alcoholDsicrip"/>
                 <div>
                    <span>Alcohols</span>
                  </div>
                </div>
                <div className={styles.section4InfoCard}>
                  <Image src={bufferDiscrip} alt="bufferDiscrip"/>
                  <div>
                    <span>Buffer and Solutions</span>
                  </div>
                </div>
              </div>

              <div>
                <div className={styles.section4InfoCard}>
                  <Image src={labPlasticDiscrip} alt="labPlasticsDiscrip"/>
                  <div>
                    <span>Laboretory Plastics</span>
                  </div>
                </div>
                <div className={styles.section4InfoCard}>
                  <Image src={solventsDiscrip} alt="solventDiscrip"/>
                  <div>
                    <span>Solvents</span>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <Image src={bgSvg2} alt='bgSvg2'/>
      </div>

      <div>
        
      </div>
    </div>
  )
}
