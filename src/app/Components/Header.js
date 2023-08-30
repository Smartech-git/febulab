'use client'
import React, {useEffect, useState}  from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getContacts, getSocialsDetials} from '../contentful'
import Image from 'next/image'
import contact from '../../../public/icons/contactLogo.png'
import email from '../../../public/icons/emailLogo.png'
import instagram from '../../../public/icons/instagramLogo.png'
import linkedIn from '../../../public/icons/linkedinLogo.png' 
import facebook from '../../../public/icons/facebookLogo.png'
import logo from '../../../public/assets/logo.png'
import Menu from '../Components/Menu.js'

export default function Page({props}) {
  const [contacts, setContacts] = useState({phoneNumber: '+234-803-4044-222', email: 'contact@febulab.com'})
  const [socials, setSocials] = useState({ instagram: null, facebook: null, linkedIn: null})
  const [mobileNav, setMobileNav] = useState(undefined)
  const path = usePathname()
  
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
 
  const handleMobileNav = () =>{
    if(mobileNav) {
      setMobileNav(false)
    }else {
      setMobileNav(true)
    }
  }

  return (
    <header >
        <div className = 'topHeaderSection'>
          <div className='contactsHeader'>
            <div>
              <Image
              src={contact}
              width={40}
              height={40}
              alt='contacts'
              className='headerIcons'
              />
              <span className='topHeaderText'>{contacts.phoneNumber}</span>
            </div>

            <div>
              <Image src={email} width={40} height={40} alt='email' className='headerIcons' />
              <span className='topHeaderText'>{contacts.email}</span>
            </div>
          </div>
          <div className='socialsHeader'>
            <a href={socials.instagram}>
              <Image src={instagram}  width={40} height={40} alt='instagramLogo' className='headerIcons' />
            </a>
            
            <a href = {socials.facebook}>
              <Image src={facebook} width={40} height={40} alt='facebookLogo' className='headerIcons' />
            </a>
            
            <a href = {socials.linkedIn}>
              <Image src={linkedIn}  width={40} height={40} alt='linkedInLogo' className='headerIcons' />
            </a>
          </div>
        </div>

        <div className = 'bottomHeaderSection'>
          <Link href='/'>
            <div className = 'headerLogo'>
                <Image src = {logo} width={40} height={40} alt= 'logo'/>
                <span>Febulab</span>
            </div>
          </Link>
          <div className = 'headerNav'>
            <Link href='/'><div className={path === '/'? 'headerNav_active' : ''}><span>Home</span></div></Link>
            <Link href='../about'><div className={path === '/about'? 'headerNav_active' : ''}><span>About Us</span></div></Link>
            <Link href='../products/laboratoryEquipments'><div className={ /(products\/)\w+/g.test(path) ? 'headerNav_active' : ''}><span>Products</span></div></Link>
            <Link href='../contact'><div className={path === '/contact'? 'headerNav_active' : ''}><span>Contact Us</span></div></Link>
          </div>
          <div className = 'mobileNav'>
              <span>Menu</span>
              <div onClick={handleMobileNav}>
                 <Menu state = {mobileNav}/>
              </div>
            
          </div>
        </div>
      
      <div className= {`mobileHeaderNav ${mobileNav ? 'mobileNavVisible' : ''}  ${mobileNav === false ? 'mobileNavInvisible' :  ''}`}>
        <div className = 'headerNav'>
          <Link href='/'><div onClick={handleMobileNav} className={path === '/'? 'headerNav_active' : ''}><span>Home</span></div></Link>
          <Link href='../about'><div onClick={handleMobileNav}  className={path === '/about'? 'headerNav_active' : ''}><span>About Us</span></div></Link>
          <Link href='../products/laboratoryEquipments'><div onClick={handleMobileNav}  className={ /(products\/)\w+/g.test(path)  ? 'headerNav_active' : ''}><span>Products</span></div></Link>
          <Link href='../contact'><div onClick={handleMobileNav}  className={path === '/contact'? 'headerNav_active' : ''}><span>Contact Us</span></div></Link>
        </div>
        <div className = 'topHeaderSection'>
          <div className='socialsHeader'>
            <a href={socials.instagram}>
              <Image src={instagram}  width={40} height={40} alt='instagramLogo' className='headerIcons' />
            </a>
            
            <a href = {socials.facebook}>
              <Image src={facebook} width={40} height={40} alt='facebookLogo' className='headerIcons' />
            </a>
            
            <a href = {socials.linkedIn}>
              <Image src={linkedIn}  width={40} height={40} alt='linkedInLogo' className='headerIcons' />
            </a>
          </div>
        </div>
      </div >
   
        
    </header>
  )
}
