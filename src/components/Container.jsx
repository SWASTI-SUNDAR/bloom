import React from 'react'

const Container = ({children}) => {
  return (
    <div className='px-5 lg:px-28 mx-auto md:px-28 xl:px-56'>
      {children}
    </div>
  )
}

export default Container
