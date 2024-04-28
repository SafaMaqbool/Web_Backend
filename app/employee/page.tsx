import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'


const Employeepage = () => {
  return (
    <div className='flex flex-col gap-4 mt-4 max-width-[100px] justify-center items-center'>
        <h1 className='text-4xl font-bold text-center'>CRUD Operation using NextJs 14, prisma and postgrel</h1>
        <Button asChild>
          <Link href="/employee/create">
          Create
          </Link>
          </Button>
    </div>
  )
}

export default Employeepage