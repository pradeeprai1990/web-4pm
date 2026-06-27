import { useState } from 'react'
import { NavLink } from 'react-router'
import {
  FaBoxOpen,
  FaBoxesStacked,
  FaChevronDown,
  FaGaugeHigh,
  FaGrip,
  FaLayerGroup,
  FaList,
  FaPalette,
  FaPlus,
  FaQuoteLeft,
  FaShieldHalved,
  FaShapes
} from 'react-icons/fa6'
import { useLocation } from 'react-router'

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: FaGaugeHigh, to: '/dashboard' },
  {
    id: 'testimonial',
    label: 'Testimonial',
    icon: FaQuoteLeft,
    children: [
      { label: 'Add Testimonial', to: '/testimonial/add' },
      { label: 'View Testimonials', to: '/testimonial/view' }
    ]
  },
  {
    id: 'why-choose-us',
    label: 'Why Choose Us',
    icon: FaShieldHalved,
    children: [
      { label: 'Add Reason', to: '/why-choose-us/add' },
      { label: 'View Reasons', to: '/why-choose-us/view' }
    ]
  },
  {
    id: 'color',
    label: 'Color',
    icon: FaPalette,
    children: [
      { label: 'Add Color', to: '/color/add' },
      { label: 'View Colors', to: '/color/view' }
    ]
  },
  {
    id: 'material',
    label: 'Material',
    icon: FaBoxesStacked,
    children: [
      { label: 'Add Material', to: '/material/add' },
      { label: 'View Materials', to: '/material/view' }
    ]
  },
  {
    id: 'category',
    label: 'Category',
    icon: FaShapes,
    children: [
      { label: 'Add Category', to: '/category/add' },
      { label: 'View Categories', to: '/category/view' }
    ]
  },
  {
    id: 'sub-category',
    label: 'Sub Category',
    icon: FaGrip,
    children: [
      { label: 'Add Sub Category', to: '/sub-category/add' },
      { label: 'View Sub Categories', to: '/sub-category/view' }
    ]
  },
  {
    id: 'sub-sub-category',
    label: 'Sub Sub Category',
    icon: FaLayerGroup,
    children: [
      { label: 'Add Sub Sub Category', to: '/sub-sub-category/add' },
      { label: 'View Sub Sub Categories', to: '/sub-sub-category/view' }
    ]
  },
  {
    id: 'product',
    label: 'Product',
    icon: FaBoxOpen,
    children: [
      { label: 'Add Product', to: '/product/add' },
      { label: 'View Products', to: '/product/view' }
    ]
  }
]

export default function Sidebar() {
  const location = useLocation()
  const activeParentId = menuItems.find((item) =>
    item.children?.some((child) => child.to === location.pathname)
  )?.id
  const [manualOpenId, setManualOpenId] = useState()
  const openId = manualOpenId === undefined ? activeParentId : manualOpenId

  return (
    <aside className='sticky top-0 hidden h-screen w-full overflow-y-auto bg-[#0f172a] px-5 py-6 text-white lg:block'>
      <h1 className='text-3xl font-extrabold tracking-wide'>Admin Panel</h1>
      <div className='my-5 h-px bg-white/20' />

      <nav className='space-y-3 pb-8'>
        {menuItems.map((item) => {
          const Icon = item.icon
          const isOpen = openId === item.id
          const hasActiveChild = item.children?.some((child) => child.to === location.pathname)

          if (!item.children) {
            return (
              <NavLink
                key={item.id}
                to={item.to}
                onClick={() => setManualOpenId(null)}
                className={({ isActive }) =>
                  `flex w-full items-center gap-3 rounded-lg px-3 py-3 text-lg font-bold transition ${
                    isActive ? 'bg-[#5637f5] text-white shadow-lg shadow-indigo-950/30' : 'text-white/90 hover:bg-white/10'
                  }`
                }
              >
                <Icon className='text-xl' />
                {item.label}
              </NavLink>
            )
          }

          return (
            <div key={item.id} className='w-full'>
              <button
                type='button'
                onClick={() => setManualOpenId(isOpen ? null : item.id)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-lg font-bold transition ${
                  isOpen || hasActiveChild ? 'bg-[#5637f5] text-white shadow-lg shadow-indigo-950/30' : 'text-white/90 hover:bg-white/10'
                }`}
              >
                <Icon className='text-xl' />
                <span className='flex-1'>{item.label}</span>
                <FaChevronDown className={`text-sm transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOpen && (
                <div className='ml-8 mt-2 space-y-1 border-l border-white/15 pl-4'>
                  {item.children.map((child, index) => {
                    const ChildIcon = index === 0 ? FaPlus : FaList
                    return (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        onClick={() => setManualOpenId(item.id)}
                        className={({ isActive }) =>
                          `flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition ${
                            isActive ? 'bg-white/15 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'
                          }`
                        }
                      >
                        <ChildIcon className='text-sm' />
                        {child.label}
                      </NavLink>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}
