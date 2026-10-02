export default function ContactForm() {
  return (
    <form className="grid min-w-0 grid-cols-1 gap-4 rounded-3xl border border-dark/10 bg-white p-4 shadow-2xl shadow-black/10 sm:p-6 md:grid-cols-2 md:p-8">
      <label className="grid min-w-0 gap-2 text-sm text-dark">
        Name
        <input className="w-full min-w-0 rounded-2xl border border-dark/10 bg-light px-4 py-3 text-dark outline-none placeholder:text-muted focus:border-primary/50" type="text" name="name" autoComplete="name" required />
      </label>
      <label className="grid min-w-0 gap-2 text-sm text-dark">
        Email
        <input className="w-full min-w-0 rounded-2xl border border-dark/10 bg-light px-4 py-3 text-dark outline-none placeholder:text-muted focus:border-primary/50" type="email" name="email" autoComplete="email" required />
      </label>
      <label className="grid min-w-0 gap-2 text-sm text-dark md:col-span-2">
        Message
        <textarea className="w-full min-w-0 resize-y rounded-2xl border border-dark/10 bg-light px-4 py-3 text-dark outline-none placeholder:text-muted focus:border-primary/50" name="message" rows="5" required />
      </label>
      <button className="inline-flex w-full items-center justify-center rounded-full border border-primary/30 bg-primary px-4 py-3 font-medium text-dark transition duration-200 hover:-translate-y-0.5 hover:border-primary/60 md:w-fit" type="submit">
        Send message
      </button>
    </form>
  )
}
