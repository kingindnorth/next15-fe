import Image from "next/image";

export default function AboutUsPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          We are passionate educators and technologists, building a platform to make learning fun, accessible, and effective for everyone.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-700 dark:text-gray-300">
          To empower learners worldwide with high-quality, engaging, and accessible educational content.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Meet the Team</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="flex flex-col items-center">
            <Image
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="Ajay Kumar"
              width={80}
              height={80}
              className="rounded-full border-2 border-primary mb-2"
              priority
            />
            <div className="font-bold">Ajay Kumar</div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">Founder & Educator</div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="https://randomuser.me/api/portraits/women/46.jpg"
              alt="Neha Singh"
              width={80}
              height={80}
              className="rounded-full border-2 border-primary mb-2"
            />
            <div className="font-bold">Neha Singh</div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">Tech Lead</div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">What Our Learners Say</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <figure className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow max-w-xs text-center">
            <Image
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Priya Sharma"
              width={64}
              height={64}
              className="rounded-full mx-auto mb-4 border-2 border-primary"
            />
            <blockquote className="italic mb-2">"Edu Bits helped me learn complex topics in minutes. The stories are so engaging!"</blockquote>
            <figcaption className="font-semibold text-primary">Priya Sharma</figcaption>
          </figure>
          <figure className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow max-w-xs text-center">
            <Image
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Rahul Verma"
              width={64}
              height={64}
              className="rounded-full mx-auto mb-4 border-2 border-primary"
            />
            <blockquote className="italic mb-2">"The full-length videos are detailed and easy to follow. Highly recommended!"</blockquote>
            <figcaption className="font-semibold text-primary">Rahul Verma</figcaption>
          </figure>
        </div>
      </section>

      {/* SEO: Organization structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Edu Bits",
            "description": "A platform for high-quality, engaging, and accessible educational content.",
            "url": "https://yourdomain.com/about-us",
            "sameAs": [
              "https://twitter.com/yourprofile",
              "https://linkedin.com/company/yourcompany"
            ]
          }),
        }}
      />
    </main>
  );
}