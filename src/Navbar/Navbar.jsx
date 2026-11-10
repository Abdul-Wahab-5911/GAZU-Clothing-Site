import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ArrowRightIcon, CartIcon, CloseIcon, HeartIcon, SearchIcon, UserIcon } from '../components/Icons'
import { kidsProducts, menProducts, womenProducts } from '../data/products'

const sitePages = [
  { title: 'Home', path: '/', keywords: 'new season collection best of gazu fashion shop' },
  { title: 'Men', path: '/men', keywords: 'menswear outerwear tees hoodies pants footwear accessories' },
  { title: 'Women', path: '/women', keywords: 'womenswear dresses tops bottoms footwear accessories' },
  { title: 'Kids', path: '/kids', keywords: 'children kidswear tops bottoms sets footwear accessories' },
  { title: 'Customer Feedback', path: '/feedback', keywords: 'feedback customer care review experience contact' }
]

const featuredProducts = [
  { name: 'Vintage Charcoal Oversized Tee', category: 'HOME FEATURED', price: 'Rs. 1,600', department: 'Men', path: '/men' },
  { name: 'Graphic Washed Streetwear Tee', category: 'HOME FEATURED', price: 'Rs. 1,700', department: 'Men', path: '/men' },
  { name: 'Heavyweight Boxy Black Tee', category: 'HOME FEATURED', price: 'Rs. 1,500', department: 'Men', path: '/men' },
  { name: 'Raw Off-White Classic Tee', category: 'HOME FEATURED', price: 'Rs. 1,500', department: 'Men', path: '/men' }
]

const searchableProducts = [
  ...menProducts.map((product) => ({ ...product, department: 'Men', path: '/men' })),
  ...womenProducts.map((product) => ({ ...product, department: 'Women', path: '/women' })),
  ...kidsProducts.map((product) => ({ ...product, department: 'Kids', path: '/kids' })),
  ...featuredProducts
]

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const closeMenu = () => setIsMobileMenuOpen(false)
  const closeSearch = () => {
    setIsSearchOpen(false)
    setSearchQuery('')
  }

  useEffect(() => {
    if (!isSearchOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeSearch()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isSearchOpen])

  const normalizedQuery = searchQuery.trim().toLowerCase()
  const matchingPages = sitePages.filter((page) =>
    `${page.title} ${page.keywords}`.toLowerCase().includes(normalizedQuery)
  )
  const matchingProducts = normalizedQuery
    ? searchableProducts.filter((product) =>
      `${product.name} ${product.category} ${product.department} ${product.price}`.toLowerCase().includes(normalizedQuery)
    )
    : []
  const searchResults = normalizedQuery
    ? [
      ...matchingProducts.map((product) => ({ ...product, type: 'product' })),
      ...matchingPages.map((page) => ({ ...page, type: 'page' }))
    ].slice(0, 12)
    : sitePages.map((page) => ({ ...page, type: 'page' }))

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f7f7f7] tracking-[0.5px]">
      <div className="bg-black px-8 py-[0.45rem] text-[0.68rem] font-medium tracking-[1px] text-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between max-[992px]:justify-center">
          <span className="opacity-95">FREE DELIVERY ON ORDERS ABOVE PKR 8,500</span>
          <div className="flex items-center gap-3 max-[992px]:hidden">
            <a className="text-white opacity-85 transition-opacity hover:opacity-100" href="#download">DOWNLOAD APP</a>
            <span className="text-[0.65rem] opacity-40">|</span>
            <a className="text-white opacity-85 transition-opacity hover:opacity-100" href="#track">TRACK ORDER</a>
            <span className="text-[0.65rem] opacity-40">|</span>
            <a className="text-white opacity-85 transition-opacity hover:opacity-100" href="#help">HELP</a>
          </div>
        </div>
      </div>

      <nav className="border-b border-[#e0e0e0] bg-[#ececec]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-[1fr_auto_1fr] items-center px-8 py-[0.85rem] max-[520px]:px-4">
          <button 
            className="hidden cursor-pointer flex-col gap-[5px] border-0 bg-transparent p-1 max-[992px]:flex"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="h-0.5 w-[22px] bg-black transition-all"></span>
            <span className="h-0.5 w-[22px] bg-black transition-all"></span>
            <span className="h-0.5 w-[22px] bg-black transition-all"></span>
          </button>

          <ul className={`m-0 flex list-none items-center gap-[1.8rem] p-0 max-[992px]:absolute max-[992px]:left-0 max-[992px]:top-full max-[992px]:w-full max-[992px]:flex-col max-[992px]:items-start max-[992px]:gap-[1.2rem] max-[992px]:border-b max-[992px]:border-[#dcdcdc] max-[992px]:bg-[#ececec] max-[992px]:px-8 max-[992px]:py-6 ${isMobileMenuOpen ? 'max-[992px]:flex' : 'max-[992px]:hidden'}`}>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => `relative pb-1 text-[0.78rem] font-bold tracking-[1.2px] text-[#111] transition-opacity hover:opacity-65 ${isActive ? 'border-b-2 border-black' : ''}`}
                onClick={closeMenu}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/men" 
                className={({ isActive }) => `relative pb-1 text-[0.78rem] font-bold tracking-[1.2px] text-[#111] transition-opacity hover:opacity-65 ${isActive ? 'border-b-2 border-black' : ''}`}
                onClick={closeMenu}
              >
                MEN
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/women" 
                className={({ isActive }) => `relative pb-1 text-[0.78rem] font-bold tracking-[1.2px] text-[#111] transition-opacity hover:opacity-65 ${isActive ? 'border-b-2 border-black' : ''}`}
                onClick={closeMenu}
              >
                WOMEN
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/kids" 
                className={({ isActive }) => `relative pb-1 text-[0.78rem] font-bold tracking-[1.2px] text-[#111] transition-opacity hover:opacity-65 ${isActive ? 'border-b-2 border-black' : ''}`}
                onClick={closeMenu}
              >
                KIDS
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/feedback" 
                className={({ isActive }) => `relative pb-1 text-[0.78rem] font-bold tracking-[1.2px] text-[#111] transition-opacity hover:opacity-65 ${isActive ? 'border-b-2 border-black' : ''}`}
                onClick={closeMenu}
              >
                FEEDBACK
              </NavLink>
            </li>
          </ul>

          <div className="flex items-center justify-center">
            <Link
              to="/"
              className="text-[2.1rem] font-black tracking-[5px] text-black no-underline uppercase max-[520px]:text-[1.5rem]"
              aria-label="GAZU home"
              onClick={() => {
                closeMenu()
                closeSearch()
              }}
            >
              GAZU
            </Link>
          </div>

          <div className="flex items-center justify-end gap-[1.4rem] max-[520px]:gap-3">
            <button
              className="inline-flex cursor-pointer items-center gap-[0.4rem] border-0 bg-transparent p-0 text-[0.74rem] font-semibold tracking-[1px] text-[#111] transition-opacity hover:opacity-60 max-[992px]:text-lg"
              aria-label="Search"
              aria-expanded={isSearchOpen}
              aria-controls="site-search"
              onClick={() => setIsSearchOpen(true)}
            >
              <SearchIcon className="h-4 w-4" size={16} />
              <span className="max-[992px]:hidden">SEARCH</span>
            </button>

            <button className="inline-flex cursor-pointer items-center gap-[0.4rem] border-0 bg-transparent p-0 text-[0.74rem] font-semibold tracking-[1px] text-[#111] transition-opacity hover:opacity-60 max-[992px]:hidden" aria-label="Login">
              <UserIcon className="h-4 w-4" size={16} />
              <span>LOGIN</span>
            </button>

            <button className="inline-flex cursor-pointer items-center gap-[0.4rem] border-0 bg-transparent p-0 text-[0.74rem] font-semibold tracking-[1px] text-[#111] transition-opacity hover:opacity-60 max-[992px]:hidden" aria-label="Wishlist">
              <HeartIcon className="h-4 w-4" size={16} />
              <span>WISHLIST</span>
            </button>

            <button className="inline-flex cursor-pointer items-center gap-[0.4rem] border-0 bg-transparent p-0 text-[0.74rem] font-semibold tracking-[1px] text-[#111] transition-opacity hover:opacity-60 max-[992px]:text-base" aria-label="Cart">
              <CartIcon className="h-4 w-4" size={16} />
              <span className="max-[992px]:hidden">CART (0)</span>
            </button>
          </div>
        </div>
      </nav>
      {isSearchOpen && (
        <div className="site-search-backdrop">
          <button className="site-search-dismiss" type="button" onClick={closeSearch} aria-label="Close search" />
          <section
            className="site-search-panel"
            id="site-search"
            role="dialog"
            aria-modal="true"
            aria-labelledby="site-search-title"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <span className="text-[0.68rem] font-bold tracking-[1.5px] text-[#666]">GAZU / SEARCH</span>
                <h2 className="mt-2 text-[clamp(1.5rem,3vw,2rem)] tracking-[-0.5px]" id="site-search-title">Find what you’re looking for.</h2>
              </div>
              <button className="flex h-9 w-9 cursor-pointer items-center justify-center border border-[#bbb] bg-transparent text-[#111] hover:bg-[#e7e7e7]" type="button" onClick={closeSearch} aria-label="Close search">
                <CloseIcon className="h-4 w-4" size={16} />
              </button>
            </div>
            <label className="flex items-center gap-3 border border-[#999] bg-white px-4">
              <SearchIcon className="h-5 w-5 text-[#555]" size={20} />
              <input
                className="w-full min-w-0 border-0 bg-transparent py-4 text-base text-[#111] outline-none"
                type="search"
                placeholder="Search products or pages"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                autoFocus
              />
            </label>
            <div className="mt-6" aria-live="polite">
              <p className="mb-2 text-[0.68rem] font-bold tracking-[1.5px] text-[#666]">
                {normalizedQuery ? `${searchResults.length} RESULTS` : 'EXPLORE THE SITE'}
              </p>
              {searchResults.length ? (
                searchResults.map((result) => (
                  <Link
                    className="site-search-result"
                    key={`${result.type}-${result.path}-${result.name || result.title}`}
                    to={result.path}
                    onClick={closeSearch}
                  >
                    <span className="min-w-0">
                      <strong className="block text-sm font-semibold">{result.name || result.title}</strong>
                      <small className="mt-1 block text-[0.68rem] tracking-[0.7px] text-[#777]">
                        {result.type === 'product'
                          ? `${result.department} / ${result.category}`
                          : 'PAGE'}
                      </small>
                    </span>
                    {result.type === 'product' && <span className="whitespace-nowrap text-[0.82rem] font-bold">{result.price}</span>}
                    <ArrowRightIcon className="h-4 w-4 text-[#555]" size={16} />
                  </Link>
                ))
              ) : (
                <p className="py-5 text-sm text-[#666]">No matches found. Try another product, category, or page.</p>
              )}
            </div>
          </section>
        </div>
      )}
    </header>
  )
}

export default Navbar
