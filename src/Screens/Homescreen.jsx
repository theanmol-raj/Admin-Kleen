import React, { useState } from 'react'
import Dashboard from './SubScreens/Dashboard'
import Users from './SubScreens/Users'
import ContactMessage from './SubScreens/ContactMessage'
import NewBlog from './SubScreens/NewBlog'
import SubscriptionPlans from './SubScreens/SubscriptionPlans'
import AddCourse from './SubScreens/AddCourse'
import Navbar from '../Components/Navbar'
import Category from './SubScreens/Category'
import SubCategory from './SubScreens/SubCategory'

function Homescreen() {
    const [active ,SetActive] =useState(5)
    const screenArray =[<Dashboard />,<Users />,<ContactMessage/>,<NewBlog />,<SubscriptionPlans />,<AddCourse />,<Category />,<SubCategory />]
    return (
        <div className='flex h-screen'>
            <div className='w-96 bg-green-100'>
                <Navbar act={active} Set={SetActive} />
            </div>
            <div className='w-full'>
                {screenArray[active]}
            </div>
            
        </div>
    )
}

export default Homescreen
