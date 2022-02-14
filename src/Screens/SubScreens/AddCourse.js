import React from 'react'
import CategoryDrop from '../../Components/Subcomponents/CategoryDrop'

function AddCourse() {
    const category = [
        { name: 'Wade Cooper' },
        { name: 'Arlene Mccoy' },
        { name: 'Devon Webb' },
        { name: 'Tom Cook' },
        { name: 'Tanya Fox' },
        { name: 'Hellen Schmidt' },
      ]
    return (
        <div className='  lg:h-screen bg-indigo-50'>
            <hr className=' pt-12' />
            <div className='grid gap-4 mx-4 lg:mx-12  grid-cols-1 lg:grid-cols-2'>
                <div>
                <p className=' capitalize customtextcolor font-semibold text-lg lg:text-3xl'>Add a new Course</p>
                <p className='capitalize text-gray-400 my-3 text-sm lg:text-lg '>Use The Below Form To Add A New Course</p>
                <div className=' bg-white px-8 rounded-lg py-4'>
                <p className=' capitalize customtextcolor font-semibold pt-2 text-lg'>Add A New Course</p>
                <form className=' w-full pt-16' >
                    <div className='w-full flex flex-col lg:flex-row pb-6 justify-between'>
                        <p className='w-1/3 text-gray-500 py-1 text-sm lg:text-md  '>Category</p>
                        <CategoryDrop z='z-20' list={category} />
                    </div>
                    <div className='w-full flex pb-6 flex-col lg:flex-row justify-between'>
                        <p className='w1/3 text-gray-500 py-1 text-sm lg:text-md '>Sub -Category</p>
                        <CategoryDrop z='z-10' list={category} />
                    </div>
                    <div className='w-full flex pb-6 flex-col lg:flex-row justify-between'>
                        <p className='w1/3 text-gray-500 py-1 text-sm lg:text-md '>Course Title</p>
                        <input className=' lg:w-2/3  relative  py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-gray-400 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm' />
                    </div>
                    <div className='w-full flex pb-6 flex-col lg:flex-row justify-between'>
                        <p className='w1/3 text-gray-500 py-1 text-sm lg:text-md '>Course Description</p>
                        <textarea rows={4} className=' lg:w-2/3  relative py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-gray-400 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm' />
                    </div>
                    <div id="upload_button" className='w-full flex pb-6 flex-col lg:flex-row justify-between'>
                        <p className='w1/3 text-gray-500 py-1 text-sm lg:text-md '>Course Image</p>
                        <input type={`file`} className=' lg:w-2/3  relative py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-gray-400 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm' />
                    </div>
                    <div className='w-full flex pb-6 flex-col lg:flex-row justify-between'>
                        <p className='w1/3 text-gray-500 py-1 text-sm lg:text-md '>Course Video</p>
                        <input type={`file`} className=' lg:w-2/3  relative py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-gray-400 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm' />
                    </div>
                    <div className='w-full flex pb-8 flex-col lg:flex-row pt-12  '>
                        <div className='w-full hidden lg:block' />
                        <div className=' flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-3'>
                            <button className=' rounded whitespace-nowrap px-4 py-2 text-white bg-indigo-900 '>Submit course</button>
                            <button className=' rounded whitespace-nowrap px-4 py-2 bg-gray-300 '>Reset</button>
                        </div>
                    </div>            

                </form>

                </div>
                </div>
                <div className=' hidden lg:block'>
                    <p className=' font-normal py-2 float-right'><span className='customtextcolor font-semibold'>Dashboard</span> / Add new course</p>
                </div>
            </div>
        </div>
    )
}

export default AddCourse
