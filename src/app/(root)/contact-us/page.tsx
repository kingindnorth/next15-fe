import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with us",
};

export const revalidate = false;

export default function ContactUsPage() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6">
        We would love to hear from you! Please fill out the form below or email us at{" "}
        <a href="mailto:info@example.com" className="text-primary underline">info@example.com</a>.
      </p>
      <form className="max-w-lg space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input type="text" className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea className="w-full border rounded px-3 py-2" rows={5} required />
        </div>
        <button type="submit" className="bg-primary text-white px-6 py-2 rounded">Send</button>
      </form>
    </section>
  );
}