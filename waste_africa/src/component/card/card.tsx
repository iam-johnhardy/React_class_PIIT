import React from 'react'

interface CardProps {
  id: string
  image: string
  title: string
  subtitle: string
  description: string
  metadata: number | string
  badge?: string
  category?: string
  location?: string
  createdAt?: string
  status?: string
  onEdit?: () => void
}

export const Card = ({
  image,
  title,
  subtitle,
  description,
  metadata,
  badge,
  category,
  location,
  createdAt,
  status,
  onEdit,
}: CardProps) => {
  return (
    <article className='group overflow-hidden rounded-4xl border border-white/10 bg-slate-900/90 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/25 hover:shadow-emerald-500/20'>
      <div className='relative h-72 overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='h-full w-full object-cover transition duration-500 group-hover:scale-105'
        />
        {badge && (
          <span className='absolute left-4 top-4 rounded-full bg-emerald-500/95 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950'>
            {badge}
          </span>
        )}
      </div>

      <div className='space-y-4 p-6'>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
          <div>
            <h3 className='text-xl font-semibold text-white'>{title}</h3>
            <p className='mt-2 text-sm text-slate-400'>{subtitle}</p>
          </div>
          <span className='rounded-full bg-slate-800/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300'>
            {metadata}
          </span>
        </div>

        <p className='text-sm leading-6 text-slate-300'>{description}</p>

        <div className='grid gap-3 rounded-3xl border border-white/10 bg-slate-950/70 p-4 text-sm text-slate-300 sm:grid-cols-2'>
          <div>
            <p className='text-xs uppercase tracking-[0.18em] text-slate-500'>Category</p>
            <p className='mt-1 font-medium text-white'>{category || 'Unknown'}</p>
          </div>
          <div>
            <p className='text-xs uppercase tracking-[0.18em] text-slate-500'>Location</p>
            <p className='mt-1 font-medium text-white'>{location || 'Unknown'}</p>
          </div>
          <div>
            <p className='text-xs uppercase tracking-[0.18em] text-slate-500'>Status</p>
            <p className='mt-1 font-medium text-white'>{status || 'Pending'}</p>
          </div>
          <div>
            <p className='text-xs uppercase tracking-[0.18em] text-slate-500'>Created</p>
            <p className='mt-1 font-medium text-white'>{createdAt ? new Date(createdAt).toLocaleDateString() : 'N/A'}</p>
          </div>
        </div>

        <button
          type='button'
          onClick={onEdit}
          className='w-full rounded-3xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400'
        >
          Edit item
        </button>
      </div>
    </article>
  )
}
