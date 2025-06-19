import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our company",
};

export const revalidate = false;

export default function AboutUsPage() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        Welcome to our website! We are passionate about building great products and delivering value to our users.
      </p>
      <p>
        Our team is dedicated to providing the best experience possible. If you have any questions, feel free to <a href="/contact-us" className="text-primary underline">contact us</a>.
      </p>
    </section>
  );
}