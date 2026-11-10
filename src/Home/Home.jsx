import { Link } from 'react-router-dom'
import { ArrowRightIcon, CheckIcon, HeartIcon, RotateLeftIcon, ShieldIcon, TruckIcon } from '../components/Icons'
import heroModel from './bg.png'
import Poster from './men-poster.jpg'
import Poster2 from './female-poster.jpg'
import Poster3 from './kids-poster.jpg'
import Drip from './my-drip.jpeg'
import VintageCharcoalTee from './Vintage Charcoal Oversized Tee.jpg'
import GraphicWashedTee from './Graphic Washed Streetwear Tee.jpg'
import HeavyweightBlackTee from './Heavyweight Boxy Black Tee.jpg'
import RawOffWhiteTee from './Raw Off-White Classic Tee.jpg'

const categories = [
  { title: 'MEN', description: 'Elevated everyday essentials.', link: '/men', image: Poster },
  { title: 'WOMEN', description: 'Effortless style for every you.', link: '/women', image: Poster2 },
  { title: 'KIDS', description: 'Comfort meets cool everyday.', link: '/kids', image: Poster3 }
]

const featuredProducts = [
  { name: 'Vintage Charcoal Oversized Tee', price: 'Rs. 1,600', image: VintageCharcoalTee },
  { name: 'Graphic Washed Streetwear Tee', price: 'Rs. 1,700', image: GraphicWashedTee },
  { name: 'Heavyweight Boxy Black Tee', price: 'Rs. 1,500', image: HeavyweightBlackTee },
  { name: 'Raw Off-White Classic Tee', price: 'Rs. 1,500', image: RawOffWhiteTee }
]

function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-[#ededed] text-[#111]">
      <section className="relative flex min-h-[85vh] flex-col justify-between overflow-hidden bg-[#e5e5e5] px-16 pt-12 pb-10 max-[1100px]:p-10 max-md:min-h-[70vh] max-md:px-6 max-md:py-8">
        <div className="z-[5] text-[0.85rem] font-bold uppercase leading-[1.45] tracking-[2px]">
          <p>FASHION</p>
          <p>THAT MOVES</p>
          <p>WITH YOU.</p>
        </div>

        <div className="pointer-events-none absolute top-1/2 left-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <h1 className="absolute z-[1] select-none text-center text-[clamp(8rem,25vw,26rem)] leading-[0.9] font-black tracking-[-2px] text-[#111] opacity-95">GAZU</h1>
          <div className="relative z-[2] flex h-[90%] items-end justify-center bg-transparent">
            <img
              src={heroModel}
              alt="GAZU Fashion Model"
              className="block max-h-[78vh] w-auto object-contain [filter:contrast(105%)_grayscale(100%)_brightness(0.96)]"
            />
          </div>
        </div>

        <div className="z-[5] flex w-full items-end justify-between max-md:flex-col max-md:items-start max-md:gap-6">
          <div className="flex items-center gap-7">
            <Link to="/men" className="inline-block border border-black bg-black px-10 py-4 text-[0.78rem] font-bold tracking-[1.5px] text-white no-underline uppercase transition-colors hover:border-[#262626] hover:bg-[#262626]">
              SHOP NOW
            </Link>
            <Link to="/women" className="text-[0.78rem] font-bold tracking-[1.5px] text-black underline decoration-1 underline-offset-4 uppercase transition-opacity hover:opacity-60">
              EXPLORE NEW IN
            </Link>
          </div>
          <div className="text-left text-[0.75rem] font-bold tracking-[1.8px] text-[#111]">
            <p>NEW</p>
            <p>COLLECTION</p>
            <p>2026</p>
            <span className="mt-1.5 block h-px w-10 bg-black" />
          </div>
        </div>
      </section>

      <section className="bg-black px-16 py-[2.2rem] text-white max-md:px-6 max-md:py-8">
        <div className="mx-auto grid max-w-[1400px] grid-cols-3 gap-12 max-[1100px]:grid-cols-1 max-[1100px]:gap-6">
          {categories.map((category) => (
            <div className="group flex items-center gap-6" key={category.title}>
              <div className="h-[98px] w-[82px] shrink-0 overflow-hidden bg-[#1a1a1a]">
                <img className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.08]" src={category.image} alt={category.title} />
              </div>
              <div>
                <h3 className="mb-1 text-[1.05rem] font-extrabold tracking-[1.5px] text-white">{category.title}</h3>
                <p className="mb-2.5 text-[0.78rem] leading-[1.4] text-[#999]">{category.description}</p>
                <Link className="inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[1.2px] text-white underline underline-offset-[3px] transition-opacity hover:opacity-70" to={category.link}>
                  <span>SHOP {category.title}</span>
                  <ArrowRightIcon className="h-3.5 w-3.5" size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#ededed] px-16 py-[4.5rem] max-md:px-6 max-md:py-12">
        <div className="mx-auto grid max-w-[1400px] grid-cols-[1fr_1.2fr] items-center gap-16 max-md:grid-cols-1 max-md:gap-8">
          <div>
            <span className="mb-4 block text-[0.78rem] font-bold tracking-[2px] text-[#333]">NEW SEASON</span>
            <h2 className="mb-6 text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] font-black tracking-[-1px] text-black">NEW<br />VIBES</h2>
            <p className="mb-9 max-w-80 text-base text-[#555]">Discover everything new and now.</p>
            <Link to="/men" className="inline-block border border-black bg-black px-10 py-4 text-[0.78rem] font-bold tracking-[1.5px] text-white no-underline uppercase transition-colors hover:border-[#262626] hover:bg-[#262626]">
              EXPLORE COLLECTION
            </Link>
          </div>
          <div className="ml-56 max-h-[520px] w-[70%] overflow-hidden bg-[#d8d8d8] max-md:ml-2">
            <img className="block h-full w-full object-cover" src={Drip} alt="New Vibes Season" />
          </div>
        </div>
      </section>

      <section className="border-y border-[#dedede] bg-[#ededed] px-16 py-[2.2rem] max-md:px-6 max-md:py-8">
        <div className="mx-auto grid max-w-[1400px] grid-cols-4 gap-8 max-[1100px]:grid-cols-2 max-[1100px]:gap-6 max-md:grid-cols-1">
          {[
            [<TruckIcon key="truck" className="h-5 w-5" />, 'FAST DELIVERY', 'Quick & safe delivery'],
            [<RotateLeftIcon key="returns" className="h-5 w-5" />, 'EASY RETURNS', 'Within 15 days'],
            [<CheckIcon key="quality" className="h-5 w-5" />, 'QUALITY ASSURED', 'Best fashion, best quality'],
            [<ShieldIcon key="secure" className="h-5 w-5" />, 'SECURE PAYMENT', '100% secure checkout']
          ].map(([icon, title, description]) => (
            <div className="flex items-center gap-4" key={title}>
              <div className="flex shrink-0 items-center justify-center text-[#111]">{icon}</div>
              <div>
                <h4 className="mb-0.5 text-[0.76rem] font-extrabold tracking-[1px] text-[#111]">{title}</h4>
                <p className="text-[0.72rem] text-[#666]">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-16 py-[4.5rem] max-md:px-6 max-md:py-12">
        <div className="mb-10 flex items-baseline justify-between">
          <h2 className="text-[1.3rem] font-extrabold tracking-[2px] text-black">BEST OF GAZU</h2>
          <Link className="text-[0.76rem] font-bold tracking-[1.5px] text-black underline underline-offset-[3px] transition-opacity hover:opacity-60" to="/men">VIEW ALL</Link>
        </div>
        <div className="grid grid-cols-4 gap-7 max-[1100px]:grid-cols-2 max-md:gap-4">
          {featuredProducts.map((product) => (
            <div className="group flex flex-col" key={product.name}>
              <div className="relative mb-3 aspect-[3/4] overflow-hidden bg-[#dcdcdc]">
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={product.image} alt={product.name} />
                <button className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border-0 bg-white/85 text-[#111] transition-all hover:scale-110 hover:bg-white hover:text-rose-600" aria-label="Add to wishlist">
                  <HeartIcon className="h-4 w-4" size={16} />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-[0.82rem] font-semibold tracking-[0.4px] text-[#222]">{product.name}</h4>
                <p className="text-[0.82rem] font-bold text-black">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
