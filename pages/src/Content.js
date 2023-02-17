import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Content = () => {
  const router = useRouter();
  console.log('router', router.query)
  const {query} = router
  
  return (
    <>
      <div>
        <h3>{query.title}</h3>
        <p>{query.date}</p>
        <p>{query.content}</p>
      </div>
      <Link href='/'><button>목록</button></Link>
    </>
  )
}

export default Content