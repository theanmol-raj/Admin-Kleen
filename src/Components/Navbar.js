import React from 'react'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import SignalCellularAltRoundedIcon from '@mui/icons-material/SignalCellularAltRounded';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import CategoryIcon from '@mui/icons-material/Category';
import SubjectIcon from '@mui/icons-material/Subject';
import CloseIcon from '@mui/icons-material/Close';

function Navbar({act,Set,navobj}) {
    const Navitems =[{icon:<GridViewRoundedIcon fontSize='inherit'/> ,name:'Dashboard'},{icon:<GroupRoundedIcon fontSize='inherit'/> ,name:'registered users'},{icon:<EmailRoundedIcon fontSize='inherit' /> ,name:'Contact Messages'},{icon:<BorderColorRoundedIcon fontSize='inherit' /> ,name:'Create New Blog'},{icon:<SignalCellularAltRoundedIcon fontSize='inherit' /> ,name:'Add subscription Plans'},{icon:<TagRoundedIcon fontSize='inherit' /> ,name:'Add new course'},
    {icon:<CategoryIcon fontSize='inherit' /> ,name:'Category'},
    {icon:<SubjectIcon fontSize='inherit' /> ,name:'SubCategory'}]
    return (
        <div className={` ${navobj.small? 'h-full' : 'h-screen'} h-screen md:h-full`}>
            <div className=' p-8 relative'>
                <button onClick={()=>{Set(0)}}>
                <img alt='' className=' mt-4 w-1/2  lg:w-11/12 lg:mx-auto lg:h-5/6' src='https://automobile-admin.gamingpandastudios.com/assets/images/logo/logo.png' />
                </button>
                {navobj.small && <button onClick={()=>{navobj.SetNav(false)}} className=' absolute top-1 right-10 text-2xl '><CloseIcon fontSize='inherit' /></button>}
            </div>
            <div className=' flex align-middle overflow-y-scroll h-72 lg:h-full scrollbar-hide flex-col mx-10'>
                <p className=' pt-1 font-medium customtextcolor mb-4'>Menu</p>
                {Navitems.map((x,y)=>(<button onClick={()=>{Set(y)}} className={act===y ? ' align-middle text-white rounded-lg bg-green-600 font-semibold pt-2 pb-3 whitespace-nowrap my-2  px-4  text-left text-sm' : 'font-semibold pt-2 pb-3 my-1  px-4 customtextcolor text-left'}><span className={act===y?'mr-4 -mt-1 text-white xl:text-2xl':'mr-4 -mt-1 text-gray-500'}>{x.icon}</span>{x.name}</button>))
                }
                
            </div>
            
            
        </div>
    )
}

export default Navbar
