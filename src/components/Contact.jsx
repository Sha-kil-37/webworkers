import ContactForm from "./ContactForm";
//
export default function Contact() {
  return (
    <section className="py-15 bg-gradient-to-b from-slate-800 via-slate-800 to-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
         <h1 className="my-5 font-bold text-2xl text-red-500 text-center">
        Working On Process
      </h1>
      <p className="my-5 font-bold text-xl text-green-500 text-center">
        Please wait for last update
      </p>
        <ContactForm />
      </div>
    </section>
  );
}
