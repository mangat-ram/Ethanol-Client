import React from 'react'
import { tailMergeConfig } from '../lib/utils'

const MaxWidthWrapper = ({className,children}) => {
  return (
    <div
      className={tailMergeConfig("mx-auto w-full max-w-screen-xl px-2.5 md:px-20",className)}
    >
      {children}
    </div>
  )
}

export default MaxWidthWrapper;