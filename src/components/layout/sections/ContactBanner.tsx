import Link from "next/link";

export default function ContactBanner() {
  return (
    <section className="w-full py-10 bg-white flex justify-center">
      <div
        className="w-[90%] max-w-6xl rounded-[30px] text-white text-center py-8 px-6"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, #7a3cff 0%, transparent 40%), radial-gradient(circle at 80% 10%, #ff2e88 0%, transparent 40%), linear-gradient(180deg, #0b1c48 0%, #2a1e5c 100%)",
        }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Contact Us
        </h2>

        <p className="text-lg text-white opacity-90 mb-8">
          Be always in front line, get in touch today.
        </p>

        <Link
        
  href="/contact"
  className="inline-block border border-white px-8 py-3 rounded-[60px_60px_10px_60px] hover:bg-white hover:text-purple-700 transition"
>
  Contact Us
</Link>
          
      </div>
    </section>
  );
}