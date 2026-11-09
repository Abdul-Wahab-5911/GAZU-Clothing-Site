import { Link } from 'react-router-dom'

function Footer() {
  const linkClass = 'text-[0.88rem] text-[#b8b8b8] no-underline transition-colors hover:text-white'

  return (
    <footer className="mt-auto bg-[#111] pt-14 text-[#b8b8b8] max-[520px]:pt-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[1.35fr_1fr_1fr_1.35fr] gap-10 px-8 pb-12 max-[900px]:grid-cols-2 max-[900px]:gap-x-8 max-[900px]:gap-y-10 max-[520px]:grid-cols-1 max-[520px]:gap-8 max-[520px]:px-5 max-[520px]:pb-10">
        <div>
          <h3 className="mb-4 text-[1.7rem] font-black tracking-[4px] text-white">GAZU</h3>
          <p className="max-w-[310px] text-[0.9rem] leading-[1.7]">Considered everyday style for Men, Women, and Kids.</p>
        </div>
        <div>
          <h4 className="mb-5 text-[0.78rem] font-bold tracking-[1.2px] text-white uppercase">Quick Links</h4>
          <ul className="m-0 list-none space-y-3 p-0">
            <li><Link className={linkClass} to="/">Home</Link></li>
            <li><Link className={linkClass} to="/men">Men&apos;s Apparel</Link></li>
            <li><Link className={linkClass} to="/women">Women&apos;s Apparel</Link></li>
            <li><Link className={linkClass} to="/kids">Kids Collection</Link></li>
            <li><Link className={linkClass} to="/feedback">Customer Feedback</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-5 text-[0.78rem] font-bold tracking-[1.2px] text-white uppercase">Customer Care</h4>
          <ul className="m-0 list-none space-y-3 p-0">
            <li><a className={linkClass} href="#shipping">Shipping &amp; Returns</a></li>
            <li><a className={linkClass} href="#track">Track Order</a></li>
            <li><a className={linkClass} href="#faq">FAQs</a></li>
            <li><a className={linkClass} href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-5 text-[0.78rem] font-bold tracking-[1.2px] text-white uppercase">Newsletter</h4>
          <p className="max-w-[310px] text-[0.9rem] leading-[1.7]">Subscribe for early access to discounts and new arrivals.</p>
          <form className="mt-4 flex">
            <input
              className="min-w-0 flex-1 border border-[#555] bg-transparent px-3 py-3 text-[0.85rem] text-white placeholder:text-[#999] focus:border-white focus:outline focus:outline-1 focus:outline-white"
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
            />
            <button className="cursor-pointer border border-white bg-white px-4 py-3 text-[0.75rem] font-bold tracking-[0.6px] text-[#111] transition-colors hover:bg-transparent hover:text-white" type="button">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-[#333] px-8 py-5 text-center text-[0.78rem] text-[#888] max-[520px]:px-5">
        <p>&copy; {new Date().getFullYear()} GAZU. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
