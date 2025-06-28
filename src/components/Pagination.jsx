import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

  const {page,handlepagechange,totalpage} = useContext(AppContext);
  return (
    <div className='fixed bottom-0 inset-x-0 bg-white py-2 border-t-2 border-t-gray-300 w-full'>

        <div className='flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto' >
          { page > 1 &&
            (<button onClick={()=>handlepagechange(page-1)}  className='border-2 border-gray-300 py-1 px-4 rounded-md' >
              Previous
            </button>)
          }

          { page < totalpage &&
            (<button onClick={()=>handlepagechange(page+1)} className='border-2 border-gray-300 py-1 px-4 rounded-md'>
              Next
            </button>)
          }

          <p className='text-sm font-semibold ml-auto'>page {page} of {totalpage}</p>
        </div>

    </div>
  )
}

export default Pagination