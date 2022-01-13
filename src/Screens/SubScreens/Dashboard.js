import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function Dashboard() {
    const Data =[{icon:<VisibilityIcon fontSize='inherit'/>,title:'Subscription Plans',value:'11'},{icon:<PersonAddIcon fontSize='inherit' />,title:'Subscriptions',value:'80'},{icon:<PersonIcon fontSize='inherit' />,title:'Total Users',value:'183.000'},{icon:<BookmarkIcon fontSize='inherit' />,title:'Total Blogs',value:'112'}]
    const Card = ({item}) => (<div className='shadow-lg py-4 px-4 lg:my-6 rounded-xl bg-gray-900 flex flex-row'>
        <div className={` px-2 pb-1   text-white rounded-md text-4xl ${item.y===0 ? ' bg-purple-600':''} ${item.y===1 ? 'bg-green-600':''} ${item.y===2 ? 'bg-red-600':''} ${item.y===3 ? 'bg-blue-600':''}`}>{item.x.icon}</div>
        <div className='pl-4'>
            <p className=' font-semibold text-base text-white'>{item.x.title}</p>
            <p className=' font-light text-sm text-white'>{item.x.value}</p>
        </div>
    </div>)

    return (
        <div className='  h-screen bg-indigo-50'>
            <hr className=' pt-12' />
            <div className=' ml-8  '>
                <div>
                <p className=' capitalize customtextcolor font-semibold text-3xl'>Create A New Blog</p>
                <p className='capitalize text-gray-400 my-3 text-lg '>Use The Below Form To Create A New BLog   </p>
                <div className=' flex w-full flex-col mr-8 lg:mr-0 lg:flex-row'>
                <div className=' grid  grid-cols-2 lg:w-4/6 gap-5 lg:grid-cols-4'>
                 {Data.map((x,y)=> <Card key={y} item={{x,y}} />)}

                </div>
                <div className='py-4 w-full mt-8 lg:mt-6  px-4 lg:my-6 lg:w-2/6 shadow-2xl rounded-xl bg-white lg:mx-8 flex flex-row'>
        <div className={` px-2  pb-1 text-white rounded-md text-4xl`}><img className='h-12 w-12' alt='' src='https://automobile-admin.gamingpandastudios.com/assets/images/faces/man.png' /></div>
        <div className='pl-4'>
            <p className=' font-semibold '>Admin User</p>
            <p className=' '>admin@gmail.com</p>
        </div>
    </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Dashboard
