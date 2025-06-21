import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-16 bg-white dark:bg-black text-gray-800 dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-3xl text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-500">
          Get in Touch 💬
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Whether you have a question, want to work together, or just want to say hi — my inbox is open!
        </p>

        <form
          action="https://formspree.io/f/xdkzlyrj" // ✅ Replace with your actual Formspree ID
          method="POST"
          className="grid gap-6 text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
