import React, { useState } from 'react';
import Data from './UserData'
import OrderDropDown from '../../Components/Subcomponents/OrderDropDown'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ActionDropdown from '../../Components/Subcomponents/ActionDropDown';

function Users() {
    const [page,SetPage] = useState(1);
    const [freq ,SetFreq] = useState(5);
    const order = [5,10,15,20,25];
    const actions  = ["Actions","Activate" ,"Deactivate"]
    
    return (
        <div className={`  ${freq === 5? 'h-screen':' h-full'} w-full bg-indigo-50`}>
            <hr className=' pt-12 w-full' />
            <div className='flex w-full flex-row'>
                <div className='w-full px-8'>
               <div className='flex flex-row justify-between'>
               <p className=' capitalize customtextcolor font-semibold text-lg xl:text-3xl'>List Of All Contact Messages</p>
               <p className=' text-sm lg:text-base font-normal py-2 float-right'><span className='customtextcolor font-semibold'>Dashboard</span> / Contact Messages</p>
               </div>
                <p className='capitalize text-gray-400 my-3 text-sm lg:text-lg '>Below are list of al messages sent by the users</p>
                <div className=' bg-white px-8 rounded-lg py-4'>
                <p className=' capitalize customtextcolor font-semibold pt-2 text-lg'>All Registered Users</p>
                <div className=' flex flex-row justify-between'>
                <OrderDropDown SetFreq={SetFreq} z='z-20' list={order} />
                <div className=' flex flex-row space-x-2'>
                  <button onClick={()=>{SetPage(prev=> prev===1? 1:prev-1 )}} className=' px-3 bg-gray-200 text-xl '>{<ArrowLeftIcon fontSize='inherit' />}</button>
                  <button onClick={()=>{SetPage(page)}} className=' px-3 bg-green-200 '>{page}</button>
                  <button onClick={function(){
                    if(Data.length>page*freq){SetPage(prev=> prev+1 )}
                  }} on className=' px-3 bg-gray-200 '>{page+1}</button>
                  <button onClick={function(){
                    if(Data.length>page*freq){SetPage(prev=> prev+1 )}
                  }} className=' px-3 bg-gray-200 text-xl '><ArrowRightIcon fontSize='inherit' /></button>
            </div>
                </div>
                <div className="flex flex-col">
      <div className=" overflow-x-auto sm:-mx-6 lg:-mx-10 pt-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b pb-32 border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y   divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Full Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                   Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Primary Number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Alternate Number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Gender
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Address
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Data.filter((item,index)=> index>=freq*(page-1) & index< freq*page ).map(person=>
                    <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{person.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm  text-gray-900">{person.primary_no}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm  text-gray-900">{person.alternate_no}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm  text-gray-900">{person.gender}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm  text-gray-900">{person.Address}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    {person.status ? <div className="text-sm -ml-2 bg-green-200 text-green-900 text-center rounded-2xl  ">Active</div>
                    :<div className="text-sm bg-red-200 text-center -ml-2 rounded-2xl  text-red-900">Inactive</div>}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm  text-gray-900"><ActionDropdown z={`10`} list={actions} /></div>
                    </td>
                    
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
               

                </div>
                </div>
            </div>
        </div>
    )
}

export default Users
