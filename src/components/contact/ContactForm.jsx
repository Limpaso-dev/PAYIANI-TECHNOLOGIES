export default function ContactForm() {
  return (
    <form className="grid gap-4 rounded-3xl border border-dark/10 bg-white p-6 shadow-2xl shadow-black/10 md:p-8">
      <label className="grid gap-2 text-sm text-dark">
        Name
        <input className="rounded-2xl border border-dark/10 bg-light px-4 py-3 text-dark outline-none placeholder:text-muted focus:border-primary/50" type="text" name="name" />
      </label>
      <label className="grid gap-2 text-sm text-dark">
        Email
        <input className="rounded-2xl border border-dark/10 bg-light px-4 py-3 text-dark outline-none placeholder:text-muted focus:border-primary/50" type="email" name="email" />
      </label>
      <label className="grid gap-2 text-sm text-dark">
        Message
        <textarea className="rounded-2xl border border-dark/10 bg-light px-4 py-3 text-dark outline-none placeholder:text-muted focus:border-primary/50" name="message" rows="5" />
      </label>
      <button className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary px-4 py-2 font-medium text-dark transition duration-200 hover:-translate-y-0.5 hover:border-primary/60" type="submit">
        Send message
      </button>
    </form>
  )
}