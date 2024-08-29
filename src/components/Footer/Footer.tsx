import React from 'react'

const Footer = () => {
  return (
    <div className='bg-offwhite dark:bg-darkfooter text-md text-offwhitetext'>
      <div className='flex items-center w-full p-2'>
        <div className='ml-4'>India</div>
      </div>
      <div className='flex flex-wrap w-full justify-between border-t border-[#DADCE0] space-x-4 p-2'>
        <div className='flex flex-wrap justify-center md:justify-start space-x-4 ml-4 grow'>                     
          <a href="">About</a>
          <a href="">Advertising</a>
          <a href="">Business</a>
          <a href="" className='whitespace-nowrap'>How Search works</a>
        </div>
        <div className='flex flex-wrap justify-center md:justify-end space-x-4 pr-4 grow'>     
        <a href=''>Privacy</a>
        <a href=''>Terms</a>
        <a href=''>Settings</a>
        </div>   
      </div>
    </div>
  )
}

export default Footer
