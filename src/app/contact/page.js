'use client'

import React, {useState} from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import contact from '../../../public/icons/contactLogo.png'
import email from '../../../public/icons/emailLogo.png'
import contactImageB from '../../../public/assets/contactImageB.png'
import contactImageT from '../../../public/assets/contactImageT.png'
import bgSvg2 from  '../../../public/assets/bgSvg2.svg'

export default function Page() {
  const [contacts, setContacts] = useState({phoneNumber: '+234-803-4044-222', email: 'contact@febulab.com'})
  const [socials, setSocials] = useState({ instagram: '', facebook: '', linkedIn: ''})

  return (
    <div className ={styles.contact}>
        <div className={styles.contactSection1}>
            <div className={styles.contactSection1Inner}>
                <h2>Contact Us</h2>
                <div>
                    <div className={styles.contactSection1Left}>
                        <span>Reach out to us</span>
                        <div className={styles.contactSchedule}>
                            <span>Monday - Friday</span> <span>Equipment and Instrument Supply</span>
                        </div>
                        <div className={styles.contactSchedule}>
                            <span>{"8am - 6pm (UTC + 1)"}</span> <span>Chemical and Reagent Supply</span>
                        </div>
                        <div className={styles.contactSchedule}>
                            <span>Saturday: 10am - 4pm</span> <span>Customized Lab Coats</span>
                        </div>

                        <div className={styles.contactDetials}>
                            <span>Contact Us for More Enquires</span>
                            <div>
                                <div className={styles.contactDetialsWrapper}>
                                    <Image src={contact}  width={40} height={40} alt='contactUs'/>
                                    <span>{contacts.phoneNumber}</span>
                                </div>
                                <div className={styles.contactDetialsWrapper}>
                                    <Image src={email}  width={40} height={40} alt='contactUs'/>
                                    <span>{contacts.email}</span> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contactSection1Right}>
                        <Image src={contactImageB} alt="contactImageB"/>
                        <Image src={contactImageT} alt="contactImageT"/>
                    </div>
                </div>
            </div>
            <Image src={bgSvg2} alt="bgSvg3" />
        </div>
    </div>
  )
}
