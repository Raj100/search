import React from 'react'

const Footer = () => {
  return (
    <div className='bg-offwhite dark:bg-darkfooter text-md text-offwhitetext'>
      <div className='flex items-center w-full p-2'>
        <div className='ml-4'>India</div>
      </div>
      <div className='flex w-full justify-between border-t border-[#DADCE0] space-x-4 p-2'>
        <div className='flex  space-x-4 ml-4'>                     
          <div>About</div>
          <div>Advertising</div>
          <div>Business</div>
          <div>How Search works</div>
        </div>
        <div className='flex space-x-4 pr-4'>     
        <div>Privacy</div>
        <div>Terms</div>
        <div>Settings</div>
        </div>   
      </div>
    </div>
  )
}

export default Footer
