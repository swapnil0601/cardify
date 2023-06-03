'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Loading from '@/components/Common/Loading'

const page = () => {
  const router = useRouter();
  
  setTimeout(() => {
    router.push('/decks')
  }, 1000);

  return (
    <Loading />
  )
}

export default page 