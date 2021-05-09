import Header from '@/components/header/header'
import React from 'react'

export default function SiteLayout (props) {
  const { children } = props
  return (
    <div {...props}>
      <Header />
      
      <main className="container px-5 py-8 mx-auto flex sm:flex-nowrap flex-wrap">
        {children}
      </main>
    </div>
  )
}
