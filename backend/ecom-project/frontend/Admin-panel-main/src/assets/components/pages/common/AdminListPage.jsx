import { useMemo, useState } from 'react'
import { FaFilter, FaPenToSquare, FaXmark } from 'react-icons/fa6'
import PageHeader from './PageHeader'

export default function AdminListPage({ title, columns = [], rows = [], badge = 'Active' }) {
  const [filterOpen, setFilterOpen] = useState(false)
  const [filterValue, setFilterValue] = useState('')
  const [appliedFilter, setAppliedFilter] = useState('')
  const [items, setItems] = useState(() =>
    rows.map((row, index) => ({
      id: `${index + 1}-${row.join('-')}`,
      row,
      status: index % 2 === 0 ? badge : 'Inactive'
    }))
  )
  const [selectedRows, setSelectedRows] = useState([])
  const [notice, setNotice] = useState(null)

  const displayTitle = singularViewTitle(title)
  const filterLabel = getFilterLabel(columns)

  const filteredItems = useMemo(() => {
    const term = appliedFilter.trim().toLowerCase()
    if (!term) return items

    return items.filter((item) =>
      item.row.some((cell) => String(cell).toLowerCase().includes(term))
    )
  }, [appliedFilter, items])

  const filteredIds = filteredItems.map((item) => item.id)
  const allFilteredSelected = filteredIds.length > 0 && filteredIds.every((id) => selectedRows.includes(id))
  const someFilteredSelected = filteredIds.some((id) => selectedRows.includes(id))

  const gridStyle = {
    gridTemplateColumns: `100px 70px repeat(${columns.length}, minmax(140px, 1fr)) 110px 100px`
  }

  const showNotice = (type, message) => {
    setNotice({ type, message })
    window.setTimeout(() => setNotice(null), 2200)
  }

  const handleFilterSubmit = (event) => {
    event.preventDefault()
    setAppliedFilter(filterValue)
    showNotice('success', 'Filter applied successfully!')
  }

  const handleClearFilter = () => {
    setFilterValue('')
    setAppliedFilter('')
    showNotice('info', 'All filters removed')
  }

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedRows((current) => Array.from(new Set([...current, ...filteredIds])))
      return
    }

    setSelectedRows((current) => current.filter((id) => !filteredIds.includes(id)))
  }

  const handleSelectRow = (id) => {
    setSelectedRows((current) =>
      current.includes(id) ? current.filter((itemId) => itemId !== id) : [...current, id]
    )
  }

  const handleDeleteSelected = () => {
    if (selectedRows.length === 0) {
      showNotice('error', 'Please select at least one record to delete.')
      return
    }

    setItems((current) => current.filter((item) => !selectedRows.includes(item.id)))
    setSelectedRows([])
    showNotice('success', 'Selected records have been deleted successfully.')
  }

  const handleChangeStatus = () => {
    if (selectedRows.length === 0) {
      showNotice('error', 'Please select at least one record.')
      return
    }

    setItems((current) =>
      current.map((item) =>
        selectedRows.includes(item.id)
          ? { ...item, status: item.status === 'Active' ? 'Inactive' : 'Active' }
          : item
      )
    )
    setSelectedRows([])
    showNotice('success', 'Status changed successfully')
  }

  return (
    <section className='w-full'>
      <PageHeader current={displayTitle} />

      <div className={`overflow-hidden px-4 transition-all duration-300 ease-out ${filterOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <form onSubmit={handleFilterSubmit} className='relative my-3 w-full rounded-lg border border-slate-200 bg-white px-6 py-4 shadow-sm'>
          <button
            type='button'
            onClick={() => setFilterOpen(false)}
            className='absolute right-4 top-4 cursor-pointer text-[28px] text-gray-600 hover:text-black'
            aria-label='Close filter'
          >
            <FaXmark />
          </button>
          <p className='py-2 text-[20px] font-semibold'>Filter</p>
          <div className='flex flex-col gap-4 md:flex-row md:items-end md:gap-6'>
            <div className='w-full md:max-w-sm'>
              <label className='mb-2 block font-medium text-gray-700'>{filterLabel}</label>
              <input
                type='text'
                name='name'
                autoComplete='off'
                value={filterValue}
                onChange={(event) => setFilterValue(event.target.value)}
                placeholder={`Enter ${filterLabel}`}
                className='block w-full rounded-lg border border-slate-300 px-3 py-2.5 text-[17px] focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400'
              />
            </div>
            <div className='flex items-center gap-3'>
              <button type='button' onClick={handleClearFilter} className='rounded-lg bg-slate-500 px-6 py-2.5 text-white transition-all hover:bg-slate-600'>
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
          <div className='text-[26px] font-semibold'>{displayTitle}</div>
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
              onClick={handleDeleteSelected}
              disabled={selectedRows.length === 0}
              className='rounded-lg bg-indigo-600 px-5 py-2.5 text-sm text-white shadow-sm transition-all hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-400'
            >
              Delete All
            </button>
            <button
              type='button'
              onClick={handleChangeStatus}
              disabled={selectedRows.length === 0}
              className='rounded-lg bg-indigo-600 px-5 py-2.5 text-sm text-white shadow-sm transition-all hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-400'
            >
              Change Status
            </button>
          </div>
        </div>

        <div className='overflow-x-auto rounded-b-md border border-t-0 border-slate-300 bg-white'>
          <div className='min-w-[900px] text-left text-gray-700'>
            <div className='grid border-b bg-gray-50 text-sm uppercase' style={gridStyle}>
              <div className='flex items-center px-2 py-3 font-semibold'>
                <input
                  type='checkbox'
                  checked={allFilteredSelected}
                  ref={(input) => {
                    if (input) input.indeterminate = someFilteredSelected && !allFilteredSelected
                  }}
                  onChange={(event) => handleSelectAll(event.target.checked)}
                  className='mr-2 h-4 w-4 cursor-pointer rounded border-gray-300 bg-gray-100 text-indigo-600 focus:ring-indigo-500'
                  aria-label='Select all visible rows'
                />
                Select
              </div>
              <div className='px-2 py-3 font-semibold'>S. No.</div>
              {columns.map((column) => (
                <div key={column} className='px-2 py-3 font-semibold'>{column}</div>
              ))}
              <div className='px-2 py-3 font-semibold'>Status</div>
              <div className='px-2 py-3 font-semibold'>Action</div>
            </div>

            {filteredItems.map((item, index) => (
              <div key={item.id} className='grid border-b bg-white' style={gridStyle}>
                <div className='px-2 py-4'>
                  <input
                    type='checkbox'
                    checked={selectedRows.includes(item.id)}
                    onChange={() => handleSelectRow(item.id)}
                    className='h-4 w-4 cursor-pointer text-indigo-600'
                    aria-label={`Select row ${index + 1}`}
                  />
                </div>
                <div className='px-2 py-4'>{index + 1}</div>
                {item.row.map((cell, cellIndex) => (
                  <div key={`${item.id}-${cellIndex}`} className='px-2 py-4'>{cell}</div>
                ))}
                <div className={`px-2 py-4 font-semibold ${item.status === 'Active' ? 'text-green-600' : 'font-bold text-red-600'}`}>
                  {item.status}
                </div>
                <div className='px-2 py-4'>
                  <button type='button' className='text-xl text-[gold]' aria-label={`Edit row ${index + 1}`}>
                    <FaPenToSquare />
                  </button>
                </div>
              </div>
            ))}

            {filteredItems.length === 0 && (
              <div className='px-5 py-10 text-center font-semibold text-slate-500'>
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

function singularViewTitle(title) {
  if (!title.startsWith('View ')) return title

  const name = title.replace('View ', '')

  if (name.endsWith('ies')) return `View ${name.slice(0, -3)}y`
  if (name.endsWith('s') && !name.endsWith('Us')) return `View ${name.slice(0, -1)}`
  return title
}

function getFilterLabel(columns) {
  const firstColumn = columns[0] || 'Name'
  if (firstColumn.toLowerCase().includes('name')) return firstColumn
  if (firstColumn.toLowerCase().includes('category')) return firstColumn
  return 'Name'
}
