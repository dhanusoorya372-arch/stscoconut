import ContactForm from '../components/ContactForm';

const ContactPage = () => (
  <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
    <div className="mb-10 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-coconut-green">Contact</p>
      <h1 className="mt-3 text-4xl font-bold text-coconut-green-dark md:text-5xl">Let’s talk about your coconut requirements.</h1>
    </div>

    <ContactForm />
  </div>
);

export default ContactPage;
