import { FaFilter, FaPenToSquare } from 'react-icons/fa6'

const rows = [
  ['Beds', 'beds', '32', '1', 'Active'],
  ['Sofas', 'sofas', '21', '2', 'Inactive'],
  ['Dining', 'dining', '16', '3', 'Active']
]

export default function ViewCategories() {
  return <StaticView title='View Category' section='Category' columns={['Name', 'Slug', 'Items', 'Order']} rows={rows} />
}

function StaticView({ title, section, columns, rows }) {
  return (
    <section className='w-full'>
      <nav className='flex border-b bg-white px-6 py-3 shadow-sm'>
        <ol className='inline-flex items-center space-x-2 text-gray-600'>
          <li><a className='text-md font-medium hover:text-indigo-600'>Home</a></li>
          <li>/</li>
          <li><a className='text-md font-medium hover:text-indigo-600'>{section}</a></li>
          <li>/</li>
          <li className='text-md font-medium text-gray-900'>{title}</li>
        </ol>
      </nav>
      <div className='p-4'>
        <div className='py-4 relative px-6 my-3 rounded-lg border border-slate-200 w-full bg-white shadow-sm'>
          <p className='font-semibold py-2 text-[20px]'>Filter</p>
          <div className='flex items-end gap-6'>
            <div className='mb-5'>
              <label className='block mb-2 font-medium text-gray-700'>Name</label>
              <input type='text' placeholder='Enter Name' className='text-[17px] border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 block w-full py-2.5 px-3' />
            </div>
            <button className='text-white bg-slate-500 hover:bg-slate-600 px-6 py-2.5 rounded-lg transition-all mb-5'>Clear</button>
            <button className='text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-2.5 rounded-lg shadow-sm transition-all mb-5'>Apply</button>
          </div>
        </div>
        <div className='bg-slate-100 flex justify-between items-center py-3 px-4 rounded-t-md border border-slate-300'>
          <div className='text-[26px] font-semibold'>{title}</div>
          <div className='flex gap-3 items-center'>
            <button className='flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm border border-slate-300 transition-all'><FaFilter /> Filter</button>
            <button className='text-white disabled:bg-slate-400 bg-indigo-600 hover:bg-indigo-700 text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all'>Delete All</button>
            <button className='text-white disabled:bg-slate-400 bg-indigo-600 hover:bg-indigo-700 text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all'>Change Status</button>
          </div>
        </div>
        <div className='border border-t-0 rounded-b-md border-slate-300 overflow-x-auto'>
          <div className='min-w-[900px]'>
            <div className='grid grid-cols-[100px_70px_repeat(4,minmax(120px,1fr))_100px_100px] text-sm uppercase bg-gray-50 border-b text-gray-700'>
              <div className='px-2 py-3 font-semibold'><input type='checkbox' className='mr-2 w-4 h-4 cursor-pointer' />Select</div>
              <div className='px-2 py-3 font-semibold'>S. No.</div>
              {columns.map((column) => <div key={column} className='px-2 py-3 font-semibold'>{column}</div>)}
              <div className='px-2 py-3 font-semibold'>Status</div>
              <div className='px-2 py-3 font-semibold'>Action</div>
            </div>
            {rows.map((row, index) => (
              <div key={row.join('-')} className='grid grid-cols-[100px_70px_repeat(4,minmax(120px,1fr))_100px_100px] bg-white border-b text-gray-700'>
                <div className='px-2 py-4'><input type='checkbox' className='w-4 h-4 cursor-pointer' /></div>
                <div className='px-2 py-4'>{index + 1}</div>
                {row.slice(0, 4).map((cell) => <div key={cell} className='px-2 py-4'>{cell}</div>)}
                <div className={`px-2 py-4 font-semibold ${row[4] === 'Active' ? 'text-green-600' : 'text-red-600 font-bold'}`}>{row[4]}</div>
                <div className='px-2 py-4'><FaPenToSquare className='text-[gold] text-xl' /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
