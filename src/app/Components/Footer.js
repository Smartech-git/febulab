'use client'

import React, {useState, useEffect} from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import contact from '../../../public/icons/contactLogo.png'
import email from '../../../public/icons/emailLogo.png'
import instagram from '../../../public/icons/instagramLogo.png'
import linkedIn from '../../../public/icons/linkedinLogo.png'
import facebook from '../../../public/icons/facebookLogo.png'
import logo from '../../../public/assets/logo.png'
import { getContacts, getSocialsDetials } from '../contentful'

export default function Page() {
  const [contacts, setContacts] = useState({phoneNumber: '+234-803-4044-222', email: 'contact@febulab.com'})
  const [socials, setSocials] = useState({ instagram: null, facebook: null, linkedIn: null})

  useEffect(() => {
    const prepare = async () =>{
      let res = await getContacts()
      setContacts(JSON.parse(res).fields)
    }

    prepare()
    
  }, [])

  useEffect(() => {
    const prepare = async () =>{
      let res = await getSocialsDetials()
      setSocials(JSON.parse(res).fields)
    }
    prepare()
    
  }, [])
  
  return (
    <div className={styles.footer}>
      <div style={{height: 'fit-content'}}>
        {/* <div className='headerLogo'>
            <Image src={logo} alt ="logo"/>
            <span>Febulab</span>
        </div> */}
      </div>
      <div className={styles.footerDetails}>
        <div className={styles.footerLeft}>
            <p>
            Febulab Scientific Services Limited supports Africa&apos;s scientific and technological growth by providing reliable tools, customized lab coats, chemicals, and equipment to various industries.
            <br/> <br/> With expertise in lab apparatus and chemistry, we offer a wide range of high-quality goods and services, ensuring easy ordering and pickup for all your needs.
            </p>
            <div className={styles.contactFooter}>
                <div className={styles.contactPhone}>
                    <Image src={contact} width={24} height={24} alt='phoneContact'/>
                    <span>{contacts.phoneNumber}</span>
                </div>
                <div className={styles.contactEmail}>
                    <Image src={email} width={24} height={24}  alt="email"/>
                    <span>{contacts.email}</span>
                </div>  
            </div>
        </div>
        <div className={styles.footerCenter}>
          <div>
            <Link className={styles.footerCenterLink} href='/'>
              <span>Home</span>
            </Link>
            <Link className={styles.footerCenterLink} href='../about' >
              <span>About</span>
            </Link>
            <Link className={styles.footerCenterLink} href='../products'>
              <span>Products</span>
            </Link>
            <Link className={styles.footerCenterLink} href='../contact'>
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
        <div className={styles.footerRight}>
          <div>
            <div className={styles.socials}>
                <a href={socials.instagram}>
                    <Image src={instagram}  width={40} height={40} alt='instagramLogo' />
                </a>
                
                <a href = {socials.facebook}>
                    <Image src={facebook} width={40} height={40} alt='facebookLogo' />
                </a>
                
                <a href = {socials.linkedIn}>
                    <Image src={linkedIn}  width={24} height={40} alt='linkedInLogo' />
                </a>
            </div>
            <div className={styles.termsConditions}>
              <h3>Terms and Conditions</h3>
              <h3>Private Policy</h3>
            </div>
          </div>      
        </div>
      </div>  
    </div>
  )
}

