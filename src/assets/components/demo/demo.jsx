import React from 'react'
import './demo.css'
function Demo() {
  return (
    <>
        <div className='flex px-40'>
            <div className=' pt-32 h-screen w-1/2'>
                <h1 className='text-6xl font-bold josekin text-pink-600'>Watch a Demo</h1>
                <hr className='m-2 w-1/2'/>
                <h4 className='text-3xl mt-5 mb-3 px-4 font-semibold text-yellow-200'>Instructions:</h4>
                <p className='px-10 text-gray-200 z-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ullam nobis, sunt quae qui, eligendi quis debitis vitae fuga dolore fugiat rem nostrum quo cumque facilis inventore sint illo quod deleniti. Vero doloribus vel, inventore, aperiam earum hic libero porro quis labore nostrum adipisci neque similique sit facilis perspiciatis amet molestiae aspernatur dolores blanditiis consequuntur id magnam. Quod, explicabo itaque a recusandae, porro sed labore quae ex sequi maiores cumque commodi sunt nemo, fuga beatae odio tempore tempora aliquam eos fugiat! Nemo molestiae ea saepe iusto? Libero, nostrum eaque obcaecati unde corporis pariatur maiores quasi nam, aliquam dolorum deserunt omnis.</p>
                <div className='flex justify-start  items-center mt-10'>
                <button className='px-8 py-3 ml-10 font-bold rounded-md bg-red-500 text-white hover:bg-red-600'>Try Yourself</button>

                </div>
            </div>
            <div className=' h-screen flex justify-center items-center '>
                <div>
                    <div className='bg-teal-400 p-10 relative -ml-16 -z-2 youtube rounded-3xl'>
                    <iframe className='rounded-2xl' width="560" height="350" src="https://www.youtube.com/embed/iDCS2sxDWIE" title="Social_Abstractions" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Demo