import { useState, useEffect } from 'react'
import Link from 'next/link'
import MenuIcon from '../icons/Menu'
import NavItems from '../NavItems/NavItems'
import MobileNav from '../MobileNav/MobileNav'
import styles from './Header.module.scss'
import Image from 'next/image'

type IHeaderProps = {
  dark?: boolean
  hidesignIn?: boolean
  className?: string
  classNameBg?: string
  transParentOnMobile?: boolean
}

function Header(props: IHeaderProps) {
  const [mobileNavVisible, setMobileNavVisible] = useState(false)
  const [activePage, setActivePage] = useState('home')
  const [headerStyles] = useState<any>(
    props.className &&
      props.className
        .split(' ')
        .map((classname) => {
          return (styles[`${classname}`] && styles[`${classname}`]) || classname
        })
        .join(' ')
  )

  const dark = props.dark

  useEffect(() => {
    setActivePage(window.location.pathname.slice(1))
  }, [])

  useEffect(() => {
    
    document.body.style.overflowY = mobileNavVisible ? 'hidden' : 'visible'

  }, [mobileNavVisible])

    
  const toggleMobileNav = () => setMobileNavVisible((state) => !state)

  return (
    <>
      <header
        className={`${styles.header}`}
      >
        <div
          className={`bg-${dark ? 'transparent' : 'black'} ${
            styles['header-style']
          } px-6 xl:px-0 ${headerStyles} `}
        >
          <div className="lg:px-3 xl:px-0 lg:container mx-auto">
            <div className={`flex items-center justify-between px-0`}>
              <div className="flex">
                <Link href="/">
                  <a className="pointer">
                    <Image
                      loading="lazy"
                      src={`/assets/Logo${!dark ? '-White' : '-Black'}.svg`}
                      alt="logo"
                      height="24px"
                      width="155px"
                      quality={75}
                    />
                  </a>
                </Link>
              </div>

              <div
                className={` flex flex-row flex-1 text-${
                  !dark ? 'white' : 'black'
                }`}
              >
                <div className="flex-shrink w-1/3"></div>
                <nav className="xl:flex flex-1 hidden justify-around items-center ">
                  <NavItems activePage={activePage} />

                  <Link href="/contact">
                    <a
                      className={`${props.classNameBg} ${
                        dark ? 'black' : 'secondary'
                      } hover:bg-${dark ? 'black' : 'white'} text-${
                        dark ? 'white' : 'black'
                      } ${styles['contact-button']}`}
                    >
                      Contact
                    </a>
                  </Link>
                </nav>
              </div>
              <MobileNav
                onClick={toggleMobileNav}
                mobileNavVisible={mobileNavVisible}
                activePage={activePage}
              />
              <div className="xl:hidden">
                <MenuIcon
                  color={`${!dark ? '#fff' : '#000'}`}
                  onClick={toggleMobileNav}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
