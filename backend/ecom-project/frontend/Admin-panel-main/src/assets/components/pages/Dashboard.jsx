import PageHeader from './common/PageHeader'

const stats = [
  { value: '26', label: 'Users', color: 'bg-[#5a54d6]' },
  { value: '$6,200', label: 'Product', color: 'bg-[#2d9bf0]' },
  { value: '2.49', label: 'Category', color: 'bg-[#ffb31a]' },
  { value: '44', label: 'Orders', color: 'bg-[#ee4d50]' }
]

export default function Dashboard() {
  return (
    <>
      <PageHeader current='Dashboard' />
      <div className='w-full px-4 py-8 sm:px-6 lg:px-4'>
        <h2 className='mb-9 text-3xl font-extrabold text-slate-900'>Dashboard Overview</h2>

        <div className='grid w-full gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`${stat.color} min-h-[240px] w-full rounded-md p-7 text-white shadow-xl shadow-slate-300/60`}
            >
              <p className='text-3xl font-extrabold'>{stat.value}</p>
              <p className='mt-3 text-2xl font-bold'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
