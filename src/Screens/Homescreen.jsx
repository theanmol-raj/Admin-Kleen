import React, { useLayoutEffect, useState } from 'react'
import Dashboard from './SubScreens/Dashboard'
import Users from './SubScreens/Users'
import ContactMessage from './SubScreens/ContactMessage'
import NewBlog from './SubScreens/NewBlog'
import SubscriptionPlans from './SubScreens/SubscriptionPlans'
import AddCourse from './SubScreens/AddCourse'
import Navbar from '../Components/Navbar'
import Category from './SubScreens/Category'
import SubCategory from './SubScreens/SubCategory'
import MenuIcon from '@mui/icons-material/Menu';

function Homescreen() {
    const [active ,SetActive] =useState(5)
    const screenArray =[<Dashboard />,<Users />,<ContactMessage/>,<NewBlog />,<SubscriptionPlans />,<AddCourse />,<Category />,<SubCategory />]
    const [small ,SetSmall] =useState(false)
    const [nav ,SetNav] = useState (true)
    
    useLayoutEffect(()=>{
        console.log(window.innerWidth)
        window.addEventListener("resize" ,()=>{

            if(window.innerWidth < 800){
                SetSmall(true)
            }else{SetSmall(false)}
        })

    },[])
    
    return (
        <div className='flex overflow-hidden'>
            <div className={` ${small? (nav ? 'fixed ' : ' relative hidden ') : 'md:w-96 ' } md:relative z-50 bg-green-100 `}>
                 <Navbar navobj={{small,SetNav}}  act={active} Set={SetActive} />
            </div>
            <div className='w-full relative'>
            {small && !nav && <button onClick={()=>{SetNav(true)}} className=' absolute z-20 top-5 left-5'><MenuIcon fontSize='inherit' /></button> }

                {screenArray[active]}
            </div>
            
        </div>
    )
}

export default Homescreen
