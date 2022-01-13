import React from 'react'

function NewBlog() {
    return (
        <div className='  h-screen bg-indigo-50'>
            <hr className=' pt-12' />
            <div className='grid gap-4 mx-12  grid-cols-1 lg:grid-cols-2'>
                <div>
                <p className=' capitalize customtextcolor font-semibold text-3xl'>Create A New Blog</p>
                <p className='capitalize text-gray-400 my-3 text-lg '>Use The Below Form To Create A New BLog   </p>
                <div className=' bg-white px-8 rounded-lg py-4'>
                <p className=' capitalize customtextcolor font-semibold pt-2 text-lg'>Create New Blog</p>
                <form className=' w-full pt-16' >
                    
                    <div className='w-full flex pb-6 justify-between'>
                        <p className='w1/3 text-gray-500 py-1 text-md '>Blog Title</p>
                        <input className=' w-2/3  relative  py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-gray-400 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm' />
                    </div>
                    <div className='w-full flex pb-6 justify-between'>
                        <p className='w1/3 text-gray-500 whitespace-nowrap py-1 text-md '>Blog Description
</p>
                        <textarea rows={4} className=' w-2/3  relative py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-gray-400 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm' />
                    </div>
                    <div id="upload_button" className='w-full flex pb-6 justify-between'>
                        <p className='w1/3 text-gray-500 py-1 whitespace-nowrap text-md '>Blog Image</p>
                        <input type={`file`} className=' w-2/3  relative py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-gray-400 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm' />
                    </div>
                    <div className='w-full flex pb-8 pt-12 flex-row '>
                        <div className='w-full hidden lg:block' />
                        <div className=' flex flex-row space-x-3'>
                            <button className=' rounded whitespace-nowrap px-4 py-2 text-white bg-indigo-900 '>Submit Blog</button>
                            <button className=' rounded whitespace-nowrap px-4 py-2 bg-gray-300 '>Reset</button>
                        </div>
                    </div>            

                </form>

                </div>
                </div>
                <div className=' hidden lg:block'>
                    <p className=' font-normal py-2 float-right'><span className='customtextcolor font-semibold'>Dashboard</span> / Create New Blog</p>
                </div>
            </div>
        </div>
    )
}

export default NewBlog
