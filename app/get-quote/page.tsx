import RFQForm from "../../components/forms/RFQForm";

export const metadata = { title: "Request a Quote - RFQ" };

export default function GetQuote() {
  return (
    <section className="container py-16">
      <h1 className="section-heading">Get a Quote</h1>
      <p className="muted max-w-3xl">
        Provide some details and our production team will contact you with an
        estimate and next steps.
      </p>
      <div className="mt-8">
        <RFQForm />
      </div>
    </section>
  );
}
