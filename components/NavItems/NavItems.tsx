import Link from 'next/link'
import React from 'react'

interface INavItemsProps {
  onClick?: () => void
  activePage: string
}

const NavItems = (props: INavItemsProps) => {
  return (
    <>
      <Link href="/work">
        <a
          className={`relative py-2 ${props.activePage == 'work' ? 'activeClass ' : ''}`}
          onClick={props.onClick}
        >
          Works
        </a>
      </Link>
      <Link href="/services">
        <a
          className={`relative py-2 ${props.activePage == 'services' ? 'activeClass ' : ''}`}
          onClick={props.onClick}
        >
          Services
        </a>
      </Link>
      <Link href="/pricing">
        <a
          className={`relative py-2 ${props.activePage == 'pricing' ? 'activeClass' : ''}`}
          onClick={props.onClick}
        >
          Pricing
        </a>
      </Link>
      <Link href="/insights">
        <a
          className={`relative py-2 ${props.activePage == 'insights' ? 'activeClass' : ''}`}
          onClick={props.onClick}
        >
          Insights
        </a>
      </Link>
      <Link href="/about">
        <a
          className={`relative py-2 ${props.activePage == 'about' ? 'activeClass' : ''}`}
          onClick={props.onClick}
        >
          About
        </a>
      </Link>
     
      <Link href="/contact">
        <a
          className={` ${
            props.activePage == 'contact'
              ? 'activeClass xl:hidden'
              : ' xl:hidden'
          }`}
          onClick={props.onClick}
        >
          Contact
        </a>
      </Link>
    </>
  )
}

export default NavItems
