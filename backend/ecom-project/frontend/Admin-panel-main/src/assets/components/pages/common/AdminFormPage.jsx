import { useMemo, useState } from 'react'
import { FaImage } from 'react-icons/fa6'
import PageHeader from './PageHeader'

export default function AdminFormPage({ title, fields = [], accent = 'indigo' }) {
  const initialValues = useMemo(() => {
    return fields.reduce((values, field) => ({ ...values, [field.name]: '', [`${field.name}File`]: null }), {})
  }, [fields])

  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [previews, setPreviews] = useState({})
  const [successPopup, setSuccessPopup] = useState(false)

  const imageFieldNames = ['image', 'photo']
  const numberFieldNames = ['price', 'stock', 'rating', 'order', 'items', 'products']

  const isImageField = (field) => imageFieldNames.some((name) => field.name.toLowerCase().includes(name))
  const isNumberField = (field) => field.type === 'number' || numberFieldNames.includes(field.name.toLowerCase())
  const isNameField = (field) => field.name.toLowerCase().includes('name')
  const isRatingField = (field) => field.name.toLowerCase() === 'rating'
  const imageField = fields.find(isImageField)
  const regularFields = imageField ? fields.filter((field) => field.name !== imageField.name) : fields
  const addTitle = title.startsWith('Add New') ? title : title.replace(/^Add\b/, 'Add New')

  const updateValue = (field, value) => {
    setValues((current) => ({ ...current, [field.name]: value }))
    setErrors((current) => ({ ...current, [field.name]: undefined }))
  }

  const updateFile = (field, file) => {
    setValues((current) => ({ ...current, [`${field.name}File`]: file }))
    setErrors((current) => ({ ...current, [field.name]: undefined }))

    if (previews[field.name]) URL.revokeObjectURL(previews[field.name])
    setPreviews((current) => ({
      ...current,
      [field.name]: file ? URL.createObjectURL(file) : undefined
    }))
  }

  const validate = () => {
    const nextErrors = {}

    fields.forEach((field) => {
      const value = values[field.name]?.trim() || ''
      const file = values[`${field.name}File`]

      if (!value && !file) {
        nextErrors[field.name] = `${field.label} required hai`
        return
      }

      if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        nextErrors[field.name] = 'Invalid email'
        return
      }

      if (isNameField(field) && /\d/.test(value)) {
        nextErrors[field.name] = 'Name me numeric value nahi aani chahiye'
        return
      }

      if (isNumberField(field) && value && !/^\d+(\.\d+)?$/.test(value)) {
        nextErrors[field.name] = 'Number field me string nahi aani chahiye'
        return
      }

      if (isRatingField(field) && (Number(value) < 1 || Number(value) > 5)) {
        nextErrors[field.name] = 'Rating minimum 1 aur maximum 5 honi chahiye'
      }
    })

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    const submittedData = fields.reduce((data, field) => {
      const file = values[`${field.name}File`]
      data[field.name] = values[field.name]

      if (file) {
        data[`${field.name}File`] = {
          name: file.name,
          size: file.size,
          type: file.type
        }
      }

      return data
    }, {})

    console.log(`${title} submitted`, submittedData)
    setValues(initialValues)
    setErrors({})
    Object.values(previews).forEach((preview) => {
      if (preview) URL.revokeObjectURL(preview)
    })
    setPreviews({})
    setSuccessPopup(true)
  }

  const inputClass = (field) => `text-[17px] border text-gray-900 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 block w-full py-2.5 px-3 outline-none ${
    errors[field.name] ? 'border-red-500 bg-red-50' : 'border-slate-300'
  }`

  const renderField = (field) => (
    <div key={field.name} className='mb-6'>
      <label className='block mb-2 text-md font-medium text-gray-700'>{field.label}</label>
      {field.type === 'textarea' ? (
        <textarea
          rows='5'
          value={values[field.name]}
          onChange={(event) => updateValue(field, event.target.value)}
          placeholder={field.placeholder}
          className={`${inputClass(field)} min-h-[140px] resize-y`}
        />
      ) : field.type === 'select' ? (
        <select
          value={values[field.name]}
          onChange={(event) => updateValue(field, event.target.value)}
          className={`${inputClass(field)} cursor-pointer`}
        >
          <option value=''>{field.placeholder || `Select ${field.label}`}</option>
          {(field.options || []).map((option) => (
            <option key={option.value || option} value={option.value || option}>
              {option.label || option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={isNumberField(field) ? 'number' : field.type || 'text'}
          min={isRatingField(field) ? 1 : field.name.toLowerCase() === 'order' ? 1 : undefined}
          max={isRatingField(field) ? 5 : undefined}
          step={isRatingField(field) ? 1 : undefined}
          value={values[field.name]}
          onChange={(event) => updateValue(field, event.target.value)}
          placeholder={field.placeholder}
          autoComplete='off'
          className={inputClass(field)}
        />
      )}
      {errors[field.name] && (
        <p className='mt-1 text-sm font-medium text-red-600'>{errors[field.name]}</p>
      )}
    </div>
  )

  const renderImageUploader = (field) => (
    <div className='flex flex-col'>
      <label className='block mb-2 text-md font-medium text-gray-700'>Image</label>
      <div className='relative h-60 w-60 overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow'>
        {previews[field.name] || values[field.name] ? (
          <img src={previews[field.name] || values[field.name]} alt='Selected' className='h-full w-full object-cover' />
        ) : (
          <div className='relative z-0 flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-slate-200'>
            <div className='absolute inset-0 animate-pulse bg-slate-300' />
            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_1.8s_linear_infinite]' />
            <div className='relative z-10 flex flex-col items-center gap-3'>
              <FaImage className='text-slate-600' size={55} />
              <div className='h-3 w-28 rounded-full bg-slate-400' />
              <div className='h-3 w-20 rounded-full bg-slate-400' />
            </div>
          </div>
        )}
        <input
          type='file'
          accept='image/*'
          onChange={(event) => updateFile(field, event.target.files?.[0] || null)}
          className='absolute inset-0 z-10 cursor-pointer opacity-0'
        />
      </div>
      <input
        type='url'
        value={values[field.name]}
        onChange={(event) => updateValue(field, event.target.value)}
        placeholder={field.placeholder}
        className='mt-3 hidden'
        tabIndex={-1}
      />
      {errors[field.name] && (
        <p className='mt-1 text-sm font-medium text-red-600'>{errors[field.name]}</p>
      )}
    </div>
  )

  return (
    <>
      <PageHeader current={title} />
      <div className='min-h-[680px] w-full bg-slate-50 px-4 py-10 sm:px-5'>
        <div className='mx-auto w-full'>
          <h3 className={`rounded-t-lg border py-3 px-5 text-[24px] font-semibold text-white ${
            accent === 'orange' ? 'border-amber-500 bg-gradient-to-r from-amber-500 to-orange-500' : 'border-indigo-500 bg-gradient-to-r from-indigo-600 to-indigo-500'
          }`}>
            {addTitle}
          </h3>
          <form
            noValidate
            onSubmit={handleSubmit}
            className={`rounded-b-lg border border-t-0 border-slate-200 bg-white p-6 shadow-sm ${
              imageField ? 'flex flex-col gap-6 lg:flex-row' : ''
            }`}
          >
            {imageField && renderImageUploader(imageField)}
            <div className={imageField ? 'w-full basis-full' : ''}>
              <div className={!imageField && regularFields.length > 3 ? 'grid gap-x-3 md:grid-cols-2 xl:grid-cols-3' : ''}>
                {regularFields.map(renderField)}
              </div>
              <div className='flex justify-end'>
                <button
                  type='submit'
                  className={`mt-3 cursor-pointer rounded-lg px-6 py-2.5 text-md font-medium text-white shadow-sm transition-all focus:ring-4 ${
                    accent === 'orange'
                      ? 'bg-amber-500 hover:bg-amber-600 focus:ring-amber-300'
                      : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-300'
                  }`}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {successPopup && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4'>
          <div className='w-full max-w-sm rounded-md border border-emerald-200 bg-white p-6 text-center shadow-2xl shadow-slate-900/20'>
            <div className='mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-3xl font-extrabold text-emerald-700'>
              ✓
            </div>
            <h3 className='text-xl font-extrabold text-slate-900'>Saved Successfully</h3>
            <p className='mt-2 text-sm font-semibold text-slate-500'>
              {title} ka data console me save/show ho gaya hai.
            </p>
            <button
              type='button'
              onClick={() => setSuccessPopup(false)}
              className={`mt-5 w-full rounded-md px-5 py-3 font-bold text-white transition ${
                accent === 'orange' ? 'bg-amber-500 hover:bg-amber-600' : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  )
}
