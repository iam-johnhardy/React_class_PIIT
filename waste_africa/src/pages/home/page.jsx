import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  memo,
} from 'react'

import { Navbar } from '../../component/nav/nav'
import { Header } from '../../component/header/header'
import { Card } from '../../component/card/card'
import { Modal } from '../../component/modal/modal'

import bgi from '../../assets/login-image.png'

import { LuSunMoon } from 'react-icons/lu'
import { GiLightningBranches } from 'react-icons/gi'

const defaultItems = [
  {
    id: '1',
    title: 'Plastic Bottles',
    subtitle: 'Clean PET bottles available for recycling',
    description:
      'Collected plastic bottles ready for sorting, washing and reuse in new packaging.',
    metadata: '12kg',
    badge: 'Plastic',
    category: 'Plastic',
    location: 'Lagos',
    createdAt: '2026-06-03T10:00:00Z',
    status: 'available',
    image:
      'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=900&q=80',
  },
]

/* =========================================
   MEMOIZED CARD LIST
========================================= */

const MemoizedCard = memo(Card)

/* =========================================
   MAIN
========================================= */

export const Home = () => {
    // THEME
  const [dark, setDark] = useState(true)

  // In a real app, this would come from an API
  const [wasteItems, setWasteItems] =
    useState(defaultItems)

    // For editing
  const [selectedWaste, setSelectedWaste] =
    useState(defaultItems[0])

    // Modal state
  const [openModal, setOpenModal] =
    useState(false)

    // Form state
  const [isEditing, setIsEditing] =
    useState(false)

    // Form data state
  const [formData, setFormData] = useState({
    title: defaultItems[0].title,
    description: defaultItems[0].description,
    image: defaultItems[0].image,
    category: defaultItems[0].category,
    location: defaultItems[0].location,
    status: defaultItems[0].status,
  })

  /* =========================================
     MEMOIZED VALUES
  ========================================= */

  const backgroundClass = useMemo(() => {
    return dark
      ? 'bg-slate-950 text-white'
      : 'bg-white text-slate-900'
  }, [dark])

  const buttonLabel = useMemo(() => {
    return dark ? (
      <LuSunMoon />
    ) : (
      <GiLightningBranches className='text-black' />
    )
  }, [dark])

  /* =========================================
     FETCH
  ========================================= */

  const fetchWastes = useCallback(async () => {
    try {
      // API CALL HERE
      console.log('fetching...')
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    fetchWastes()
  }, [fetchWastes])

  /* =========================================
     HANDLERS
  ========================================= */

  const toggleTheme = useCallback(() => {
    setDark((prev) => !prev)
  }, [])

  // When user clicks "Edit" on a card, we set the selected waste and open the modal
  const selectWaste = useCallback((item) => {
    setSelectedWaste(item)

    // Pre-fill form with selected waste data
    setFormData({
      title: item.title || '',
      description: item.description || '',
      image: item.image || '',
      category: item.category || '',
      location: item.location || '',
      status: item.status || '',
    })

    setOpenModal(true)
    setIsEditing(true)
  }, [])

  const handleChange = useCallback((event) => {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }, [])

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault()

      try {
        const updatedItem = {
          ...selectedWaste,
          ...formData,
        }

        setWasteItems((prev) =>
          prev.map((item) =>
            item.id === updatedItem.id
              ? updatedItem
              : item
          )
        )

        setSelectedWaste(updatedItem)

        setOpenModal(false)
      } catch (error) {
        console.error(error)
      }
    },
    [formData, selectedWaste]
  )

  const closeModal = useCallback(() => {
    setOpenModal(false)
    setIsEditing(false)
  }, [])

  /* =========================================
     MEMOIZED CARD LIST
  ========================================= */

  const renderedCards = useMemo(() => {
    return wasteItems.map((item) => (
      <MemoizedCard
        key={item.id}
        id={item.id}
        title={item.title}
        subtitle={item.subtitle}
        description={item.description}
        metadata={item.metadata}
        badge={item.badge}
        image={item.image}
        category={item.category}
        location={item.location}
        createdAt={item.createdAt}
        status={item.status}
        onEdit={() => selectWaste(item)}
      />
    ))
  }, [wasteItems, selectWaste])

  return (
    <main
      className={`${backgroundClass} min-h-screen transition-colors duration-500`}
    >
      <Header />
      <Navbar />

      <div className='mx-auto max-w-7xl px-4 py-8'>
        {/* HERO */}

        <div className='mb-8 flex items-center justify-between'>
          <div>
            <h1 className='text-5xl font-bold'>
              Turning Waste Into Opportunity
            </h1>
          </div>

          <button
            onClick={toggleTheme}
            className='rounded-full border border-white/15 bg-white/10 px-5 py-2'
          >
            {buttonLabel}
          </button>
        </div>

        {/* CARDS */}

        <div className='mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3'>
          {renderedCards}
        </div>

        {/* MODAL */}

        <Modal
          open={openModal}
          onClose={closeModal}
        >
          {isEditing && (
            <form
              onSubmit={handleSubmit}
              className='space-y-4 p-6'
            >
              <input
                name='title'
                value={formData.title}
                onChange={handleChange}
                placeholder='Title'
                className='w-full rounded-xl border p-4 text-black'
              />

              <textarea
                name='description'
                value={formData.description}
                onChange={handleChange}
                className='w-full rounded-xl border p-4 text-black'
              />

              <button
                type='submit'
                className='rounded-xl bg-emerald-500 px-6 py-3'
              >
                Save
              </button>
            </form>
          )}
        </Modal>
      </div>
    </main>
  )
}