import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'

const NavBar = () => {
  return (
    <nav
      className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all"
    >
      <MaxWidthWrapper>
        <div
          className="flex h-14 items-center justify-between border-b border-zinc-200"
        >
          <Link href="/" className="flex text-3xl z-40 font-semibold">
            <span>Ethanol</span>
          </Link>

          {/*Todo Add Mobile navbar*/}
          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link href="/pricing" 
              className={buttonVariants({
                variant:"ghost",
                size:"sm"
              })}>
                Pricing
              </Link>
              <Link
                href="#"
                className={buttonVariants({
                variant:"ghost",
                size:"sm"
              })}
              >
                Sign In
              </Link>
              <Link
                href="#"
                className={buttonVariants({
                size:"sm"
              })}
              >
                Get Started<ArrowRight className='ml-1.5 h-5 w-5' />
              </Link>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default NavBar