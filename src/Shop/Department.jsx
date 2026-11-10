import { useState } from 'react'
import { ArrowRightIcon, HeartIcon } from '../components/Icons'

function Department({ products, filters, departmentNumber, departmentName, title, description, heroImage, capsule, editorialTitle, editorialDescription, editorialImage }) {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [wishlist, setWishlist] = useState([])

  const filteredProducts = activeFilter === 'ALL'
    ? products
    : products.filter((product) => product.category === activeFilter)

  const toggleWishlist = (id) => {
    setWishlist((previous) =>
      previous.includes(id) ? previous.filter((item) => item !== id) : [...previous, id]
    )
  }

  return (
    <div className="w-full bg-[#ededed] text-[#111]">
      <section
        className="flex min-h-[52vh] items-center justify-center bg-cover bg-center px-8 py-16 text-center text-white max-md:min-h-[42vh] max-md:px-6"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.65)),url('${heroImage}')`
        }}
      >
        <div className="max-w-[800px]">
          <span className="mb-4 inline-block text-[0.72rem] font-bold tracking-[2px] text-gray-300">
            DEPARTMENT {departmentNumber} / {departmentName}
          </span>
          <h1 className="mb-5 text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.1] font-black tracking-[3px] uppercase">
            {title}
          </h1>
          <p className="mx-auto max-w-[620px] text-[1.05rem] leading-relaxed text-gray-200">{description}</p>
        </div>
      </section>

      <section className="border-b border-[#dedede] bg-[#ececec] px-16 py-5 max-[1100px]:px-8 max-md:px-6">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-5">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`cursor-pointer border px-[1.1rem] py-2 text-[0.72rem] font-bold tracking-[1px] uppercase transition-all ${
                  activeFilter === filter
                    ? 'border-black bg-black text-white'
                    : 'border-[#ccc] bg-transparent text-[#222] hover:border-black hover:bg-[#f3f3f3]'
                }`}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>
          <span className="text-[0.75rem] font-bold tracking-[1.2px] text-[#666]">{filteredProducts.length} STYLES</span>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-16 py-14 max-[1100px]:px-8 max-md:px-6">
        <div className="grid grid-cols-4 gap-8 max-[1100px]:grid-cols-2 max-md:grid-cols-1">
          {filteredProducts.map((product) => {
            const isFavorite = wishlist.includes(product.id)
            return (
              <div className="group flex flex-col" key={product.id}>
                <div className="relative mb-4 aspect-[3/4] overflow-hidden bg-[#d8d8d8]">
                  <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={product.image} alt={product.name} />
                  {product.tag && (
                    <span className="absolute top-3 left-3 bg-black px-2.5 py-1 text-[0.65rem] font-extrabold tracking-[1px] text-white uppercase">
                      {product.tag}
                    </span>
                  )}
                  <button
                    className={`absolute top-3 right-3 flex h-[34px] w-[34px] items-center justify-center rounded-full border-0 bg-white/85 text-[#111] transition-all hover:scale-110 hover:bg-white ${isFavorite ? 'text-black' : ''}`}
                    onClick={() => toggleWishlist(product.id)}
                    aria-label={`${isFavorite ? 'Remove' : 'Add'} ${product.name} ${isFavorite ? 'from' : 'to'} wishlist`}
                    aria-pressed={isFavorite}
                  >
                    <HeartIcon className="h-4 w-4" size={16} filled={isFavorite} />
                  </button>
                  <button className="absolute bottom-0 left-0 w-full translate-y-full cursor-pointer border-0 bg-black/90 p-3.5 text-[0.72rem] font-bold tracking-[1.5px] text-white uppercase transition-transform duration-300 group-hover:translate-y-0">
                    QUICK ADD +
                  </button>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[0.68rem] font-bold tracking-[1.2px] text-[#888] uppercase">{product.category}</span>
                  <h3 className="text-[0.85rem] font-semibold tracking-[0.2px] text-[#1a1a1a]">{product.name}</h3>
                  <span className="mt-1 text-[0.88rem] font-bold text-black">{product.price}</span>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mt-8 bg-[#e2e2e2]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 items-center max-md:grid-cols-1">
          <div className="px-16 py-20 max-md:px-6 max-md:py-12">
            <span className="mb-4 block text-[0.75rem] font-extrabold tracking-[2px] text-[#555]">{capsule}</span>
            <h2 className="mb-5 text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.05] font-black tracking-[1px]">{editorialTitle}</h2>
            <p className="mb-8 max-w-[450px] text-base leading-relaxed text-[#4b5563]">{editorialDescription}</p>
            <button className="cursor-pointer border border-black bg-black px-9 py-4 text-[0.75rem] font-bold tracking-[1.5px] text-white uppercase transition-colors hover:bg-[#262626]">
              EXPLORE THE EDIT
            </button>
          </div>
          <div className="h-full min-h-[460px] overflow-hidden">
            <img className="block h-full w-full object-cover" src={editorialImage} alt={editorialTitle} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Department
