import { useState } from 'react'

function Feedback() {
  const [rating, setRating] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const eyebrowClass = 'text-[0.7rem] font-bold tracking-[1.8px] text-[#666]'
  const fieldClass = 'min-h-[45px] w-full border border-[#c9c9c9] bg-white px-3 py-3 text-[0.9rem] text-[#111] focus:border-[#111] focus:outline focus:outline-1 focus:outline-[#111]'
  const labelClass = 'mb-2.5 text-[0.82rem] font-bold'

  return (
    <main className="min-h-full bg-[#ededed] px-8 pt-[4.5rem] pb-24 text-[#111] max-[760px]:px-5 max-[760px]:pt-12 max-[760px]:pb-16">
      <section className="mx-auto mb-14 max-w-[760px] text-center max-[760px]:mb-10">
        <p className={eyebrowClass}>GAZU / CUSTOMER CARE</p>
        <h1 className="my-4 text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] font-extrabold tracking-[-1.5px]">We’d like to hear from you.</h1>
        <p className="mx-auto max-w-[600px] text-base leading-[1.7] text-[#555]">
          Your experience helps us make better clothes and better service. Tell us what went well or what we can improve.
        </p>
      </section>

      <section className="mx-auto grid max-w-[1100px] grid-cols-[minmax(240px,0.8fr)_minmax(0,1.5fr)] border border-[#d8d8d8] bg-[#f7f7f7] max-[760px]:grid-cols-1" aria-labelledby="feedback-form-title">
        <div className="flex flex-col items-start border-r border-[#d8d8d8] bg-[#e4e4e4] p-12 max-[760px]:border-r-0 max-[760px]:border-b max-[760px]:p-8">
          <span className={eyebrowClass}>01 — YOUR EXPERIENCE</span>
          <h2 className="mt-6 mb-4 text-[clamp(1.7rem,3vw,2.3rem)] leading-[1.12] font-extrabold tracking-[-0.8px]">Every detail<br />makes a difference.</h2>
          <p className="text-[0.92rem] leading-[1.7] text-[#555]">
            Whether it’s about a recent order, a product, or our website, we appreciate you taking a moment to let us know.
          </p>
          <div className="mt-auto w-full pt-8 max-[760px]:mt-7 max-[760px]:pt-0">
            <span className="text-[0.68rem] font-bold tracking-[1.5px]">NEED A HAND?</span>
            <p className="my-2 text-[0.92rem] leading-[1.7] text-[#555]">For help with an order, visit our customer care team.</p>
            <a className="text-[0.9rem] font-bold text-[#111] underline decoration-1 underline-offset-[3px]" href="mailto:hello@gazu.example">hello@gazu.example</a>
          </div>
        </div>

        <div className="p-12 max-[760px]:p-8">
          <h2 className="text-[1.65rem] font-bold tracking-[-0.5px]" id="feedback-form-title">Share your feedback</h2>
          <p className="mt-1 text-[0.8rem] text-[#777]">Fields marked with * are required.</p>

          {submitted ? (
            <div className="mt-8 border border-[#d8d8d8] bg-[#ededed] p-8" role="status">
              <span className={eyebrowClass}>THANK YOU</span>
              <h3 className="mt-4 mb-2 text-[1.35rem] font-bold">We appreciate you taking the time.</h3>
              <p className="text-[0.9rem] leading-relaxed text-[#555]">This demo form doesn’t send responses yet, but your feedback matters to us.</p>
              <button
                className="mt-6 cursor-pointer border-0 border-b border-[#111] bg-transparent px-0 pb-1 text-[0.72rem] font-bold tracking-[1px] text-[#111]"
                type="button"
                onClick={() => setSubmitted(false)}
              >
                SEND ANOTHER RESPONSE
              </button>
            </div>
          ) : (
            <form className="mt-8 flex flex-col gap-6" onSubmit={handleSubmit}>
              <fieldset className="min-w-0 border-0 p-0">
                <legend className={`${labelClass} mb-2.5`}>How was your experience? <span className="text-[#777]">*</span></legend>
                <div className="flex border border-[#ccc]">
                  {[
                    ['1', 'Poor'],
                    ['2', 'Fair'],
                    ['3', 'Good'],
                    ['4', 'Very good'],
                    ['5', 'Excellent']
                  ].map(([value, label], index) => (
                    <label
                      className={`relative flex min-w-0 flex-1 cursor-pointer flex-col items-center gap-1 border-l border-[#ccc] px-1 py-3 text-center first:border-l-0 focus-within:z-10 focus-within:outline-2 focus-within:outline-offset-[-2px] focus-within:outline-[#111] ${rating === value ? 'bg-[#e5e5e5]' : ''}`}
                      key={value}
                    >
                      <input
                        className="absolute h-px w-px opacity-0"
                        type="radio"
                        name="rating"
                        value={value}
                        checked={rating === value}
                        onChange={(event) => setRating(event.target.value)}
                        required={index === 0}
                      />
                      <span className="whitespace-nowrap text-[0.9rem] tracking-[1px] text-[#111]" aria-hidden="true">{'★'.repeat(Number(value))}</span>
                      <span className="text-[0.66rem] text-[#666] max-[440px]:text-[0.58rem]">{label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="flex min-w-0 flex-col">
                <span className={labelClass}>What is your feedback about? <span className="text-[#777]">*</span></span>
                <select className={fieldClass} name="topic" defaultValue="" required>
                  <option value="" disabled>Select a topic</option>
                  <option value="order">An order or delivery</option>
                  <option value="product">A product</option>
                  <option value="website">The website</option>
                  <option value="other">Something else</option>
                </select>
              </label>

              <label className="flex min-w-0 flex-col">
                <span className={labelClass}>Your comments <span className="text-[#777]">*</span></span>
                <textarea className={`${fieldClass} min-h-[125px] resize-y`} name="comments" rows="5" placeholder="Tell us a little more..." required />
              </label>

              <div className="grid grid-cols-2 gap-4 max-[440px]:grid-cols-1">
                <label className="flex min-w-0 flex-col">
                  <span className={labelClass}>Your name</span>
                  <input className={fieldClass} type="text" name="name" autoComplete="name" placeholder="Name" />
                </label>
                <label className="flex min-w-0 flex-col">
                  <span className={labelClass}>Email address</span>
                  <input className={fieldClass} type="email" name="email" autoComplete="email" placeholder="you@example.com" />
                </label>
              </div>

              <p className="-mt-3 text-[0.76rem] text-[#777]">Your details are only used to follow up on your feedback.</p>
              <button className="flex w-fit min-w-[190px] cursor-pointer items-center justify-between gap-8 border border-[#111] bg-[#111] px-5 py-4 text-[0.72rem] font-bold tracking-[1.2px] text-white transition-colors hover:bg-[#f7f7f7] hover:text-[#111]" type="submit">
                SEND FEEDBACK <span aria-hidden="true">→</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}

export default Feedback
