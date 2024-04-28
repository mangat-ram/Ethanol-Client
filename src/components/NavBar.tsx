import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'

const NavBar = () => {
  return (
    <nav
      className="sticky h-20 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/30 backdrop-blur-md transition-all font-cabinet font-extrabold"
    >
      <MaxWidthWrapper>
        <div
          className="flex h-20 items-center justify-between border-b border-zinc-200"
        >
          <Link href="/" className="flex text-3xl z-40 font-semibold">
            <span className="font-featureDeck font-bold">Ethanol</span>
          </Link>

          {/*Todo Add Mobile navbar*/}
          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link href="#features" 
              className={buttonVariants({
                variant:"ghost",
                size:"xl"
              })}>
                Features
              </Link>
              <Link href="/pricing" 
              className={buttonVariants({
                variant:"ghost",
                size:"xl"
              })}>
                Testimonials
              </Link>
              <Link href="/pricing" 
              className={buttonVariants({
                variant:"ghost",
                size:"xl"
              })}>
                Pricing
              </Link>
              <Link
                href="/signIn"
                className={buttonVariants({
                variant:"ghost",
                size:"xl"
              })}
              >
                Sign In
              </Link>
              <Link
                href="/signUp"
                className={buttonVariants({
                size:"xl"
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