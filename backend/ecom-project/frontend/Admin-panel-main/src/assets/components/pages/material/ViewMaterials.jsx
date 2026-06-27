import { useMemo, useState } from 'react'
import { FaFilter, FaPenToSquare, FaXmark } from 'react-icons/fa6'

const materialRows = [
  { id: 1, name: 'Sheesham Wood', finish: 'Natural', products: '26', order: '1', status: 'Active' },
  { id: 2, name: 'Rattan', finish: 'Cane weave', products: '14', order: '2', status: 'Inactive' },
  { id: 3, name: 'Leather', finish: 'Matte', products: '8', order: '3', status: 'Active' }
]

export default function ViewMaterials() {
  const [filterOpen, setFilterOpen] = useState(false)
  const [filterName, setFilterName] = useState('')
  const [appliedName, setAppliedName] = useState('')
  const [rows, setRows] = useState(materialRows)
  const [selected, setSelected] = useState([])
  const [notice, setNotice] = useState(null)

  const filteredRows = useMemo(() => {
    const term = appliedName.trim().toLowerCase()
    if (!term) return rows

    return rows.filter((row) =>
      [row.name, row.finish, row.products, row.order, row.status].some((value) =>
        String(value).toLowerCase().includes(term)
      )
    )
  }, [appliedName, rows])

  const allSelected = filteredRows.length > 0 && filteredRows.every((row) => selected.includes(row.id))

  const showNotice = (type, message) => {
    setNotice({ type, message })
    window.setTimeout(() => setNotice(null), 2200)
  }

  const handleFilter = (event) => {
    event.preventDefault()
    setAppliedName(filterName)
    showNotice('success', 'Material filter applied successfully.')
  }

  const clearFilter = () => {
    setFilterName('')
    setAppliedName('')
    showNotice('info', 'All filters removed')
  }

  const toggleRow = (id) => {
    setSelected((current) =>
      current.includes(id) ? current.filter((itemId) => itemId !== id) : [...current, id]
    )
  }

  const toggleAll = (checked) => {
    if (checked) {
      setSelected((current) => Array.from(new Set([...current, ...filteredRows.map((row) => row.id)])))
      return
    }

    setSelected((current) => current.filter((id) => !filteredRows.some((row) => row.id === id)))
  }

  const deleteSelected = () => {
    if (selected.length === 0) {
      showNotice('error', 'Please select at least one material to delete.')
      return
    }

    setRows((current) => current.filter((row) => !selected.includes(row.id)))
    setSelected([])
    showNotice('success', 'Selected materials have been deleted successfully.')
  }

  const changeStatus = () => {
    if (selected.length === 0) {
      showNotice('error', 'Please select at least one material to change status.')
      return
    }

    setRows((current) =>
      current.map((row) =>
        selected.includes(row.id)
          ? { ...row, status: row.status === 'Active' ? 'Inactive' : 'Active' }
          : row
      )
    )
    setSelected([])
    showNotice('success', 'Material status updated successfully.')
  }

  return (
    <section className='w-full'>
      <nav className='flex border-b bg-white px-6 py-3 shadow-sm'>
        <ol className='inline-flex items-center space-x-2 text-gray-600'>
          <li>
            <a className='text-md font-medium hover:text-indigo-600'>Home</a>
          </li>
          <li>/</li>
          <li>
            <a className='text-md font-medium hover:text-indigo-600'>Material</a>
          </li>
          <li>/</li>
          <li className='text-md font-medium text-gray-900'>View Material</li>
        </ol>
      </nav>

      <div className={`overflow-hidden p-4 transition-all duration-300 ease-out ${filterOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <form onSubmit={handleFilter} className='relative my-3 w-full rounded-lg border border-slate-200 bg-white px-6 py-4 shadow-sm'>
          <button
            type='button'
            onClick={() => setFilterOpen(false)}
            className='absolute right-4 top-4 cursor-pointer text-[28px] text-gray-600 hover:text-black'
          >
            <FaXmark />
          </button>

          <p className='py-2 text-[20px] font-semibold'>Filter</p>

          <div className='flex flex-col gap-4 md:flex-row md:items-end md:gap-6'>
            <div className='mb-5 w-full md:max-w-sm'>
              <label className='mb-2 block font-medium text-gray-700'>Material Name</label>
              <input
                type='text'
                name='name'
                autoComplete='off'
                value={filterName}
                onChange={(event) => setFilterName(event.target.value)}
                placeholder='Enter Material Name'
                className='block w-full rounded-lg border border-slate-300 px-3 py-2.5 text-[17px] focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400'
              />
            </div>

            <div className='flex items-center gap-3 pt-2'>
              <button type='button' onClick={clearFilter} className='rounded-lg bg-slate-500 px-6 py-2.5 text-white transition-all hover:bg-slate-600'>
                Clear
              </button>
              <button type='submit' className='rounded-lg bg-indigo-600 px-6 py-2.5 text-white shadow-sm transition-all hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300'>
                Apply
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className='p-4'>
        <div className='flex flex-col gap-3 rounded-t-md border border-slate-300 bg-slate-100 px-4 py-3 md:flex-row md:items-center md:justify-between'>
          <div className='text-[26px] font-semibold'>View Material</div>

          <div className='flex flex-wrap items-center gap-3'>
            <button
              type='button'
              onClick={() => setFilterOpen(true)}
              className='flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-100 px-4 py-2 text-sm text-slate-700 transition-all hover:bg-slate-200'
            >
              <FaFilter />
              Filter
            </button>

            <button
              type='button'
              onClick={deleteSelected}
              disabled={selected.length === 0}
              className='rounded-lg bg-indigo-600 px-5 py-2.5 text-sm text-white shadow-sm transition-all hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-400'
            >
              Delete All
            </button>

            <button
              type='button'
              onClick={changeStatus}
              disabled={selected.length === 0}
              className='rounded-lg bg-indigo-600 px-5 py-2.5 text-sm text-white shadow-sm transition-all hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-400'
            >
              Change Status
            </button>
          </div>
        </div>

        <div className='overflow-x-auto rounded-b-md border border-t-0 border-slate-300'>
          <div className='min-w-[850px] text-left text-gray-700'>
            <div className='grid grid-cols-[100px_70px_minmax(180px,1fr)_minmax(140px,1fr)_100px_100px_100px_100px] border-b bg-gray-50 text-sm uppercase'>
              <div className='flex items-center px-2 py-3 font-semibold'>
                <input
                  type='checkbox'
                  checked={allSelected}
                  onChange={(event) => toggleAll(event.target.checked)}
                  className='mr-2 h-4 w-4 cursor-pointer rounded border-gray-300 bg-gray-100 text-indigo-600 focus:ring-indigo-500'
                />
                Select
              </div>
              <div className='px-2 py-3 font-semibold'>S. No.</div>
              <div className='px-2 py-3 font-semibold'>Material Name</div>
              <div className='px-2 py-3 font-semibold'>Finish</div>
              <div className='px-2 py-3 font-semibold'>Products</div>
              <div className='px-2 py-3 font-semibold'>Order</div>
              <div className='px-2 py-3 font-semibold'>Status</div>
              <div className='px-2 py-3 font-semibold'>Action</div>
            </div>

            {filteredRows.map((row, index) => (
              <div key={row.id} className='grid grid-cols-[100px_70px_minmax(180px,1fr)_minmax(140px,1fr)_100px_100px_100px_100px] border-b bg-white'>
                <div className='px-2 py-4'>
                  <input
                    type='checkbox'
                    checked={selected.includes(row.id)}
                    onChange={() => toggleRow(row.id)}
                    className='h-4 w-4 cursor-pointer text-indigo-600'
                  />
                </div>
                <div className='px-2 py-4'>{index + 1}</div>
                <div className='px-2 py-4'>{row.name}</div>
                <div className='px-2 py-4'>{row.finish}</div>
                <div className='px-2 py-4'>{row.products}</div>
                <div className='px-2 py-4'>{row.order}</div>
                <div className={`px-2 py-4 font-semibold ${row.status === 'Active' ? 'text-green-600' : 'font-bold text-red-600'}`}>
                  {row.status}
                </div>
                <div className='px-2 py-4'>
                  <button type='button' className='text-xl text-[gold]'>
                    <FaPenToSquare />
                  </button>
                </div>
              </div>
            ))}

            {filteredRows.length === 0 && (
              <div className='bg-white px-5 py-10 text-center font-semibold text-slate-500'>
                No records found
              </div>
            )}
          </div>
        </div>
      </div>

      {notice && (
        <div className={`fixed right-5 top-5 z-50 rounded-lg px-5 py-3 text-sm font-semibold text-white shadow-xl ${
          notice.type === 'error' ? 'bg-red-600' : notice.type === 'info' ? 'bg-slate-700' : 'bg-green-600'
        }`}>
          {notice.message}
        </div>
      )}
    </section>
  )
}
