import BlogRight from '@/app/components/blog-componetnts/BlogRight'
import SideBar from '@/app/components/blog-componetnts/SideBar'
import React from 'react'

export default function Blog() {
  return (
    <div className='max-w-[1320px] mx-auto grid grid-cols-[20%_auto] gap-5'>
        <SideBar/>
        <BlogRight/>
    </div>
  )
}
x