import React from 'react'

function BookEve() {
  return (
    <div id="top-bar">
        <section className="px-4 py-8 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information Column */}
            <div className="space-y-6">
            <h3 className="text-4xl font-bold uppercase text-white">Contact</h3>
            <p className="text-lg font-medium text-white">Eve DELIVERS THE MESSAGES YOUR BUSINESS NEEDS TO HEAR</p>
            <div className="space-y-4">
                <p className="text-white">+254 701 234 567</p>
                <p className="text-white">+254 733 456 789</p>
                <p className="text-white">info@evesdomain.com</p>
            </div>
            <h4 className="text-xl font-bold text-white">Postal Address</h4>
            <p className="text-white">PO Box 12345, Nairobi, 00100</p>
            <h4 className="text-xl font-bold text-white">Address</h4>
            <p className="text-white">Kenya: 1234 Kenyatta Avenue, Nairobi, Kenya</p>
            <p className="text-white">Dubai: Unbox Business Center, Business Bay, Bay Square, Building 4, Level 2, P.O. Box 23304, Dubai, UAE</p>
            </div>

            {/* Contact Form Column */}
            <div>
            <form>
                <div className="mb-4">
                <label htmlFor="full-name" className="block text-white">Full Name</label>
                <input type="text" id="full-name" className="w-full mt-1 p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                <label htmlFor="email" className="block text-white">Email</label>
                <input type="email" id="email" className="w-full mt-1 p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                <label htmlFor="phone" className="block text-white">Phone Number</label>
                <input type="text" id="phone" className="w-full mt-1 p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                <label htmlFor="company" className="block text-white">Company</label>
                <input type="text" id="company" className="w-full mt-1 p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                <label htmlFor="country" className="block text-white">Country</label>
                <input type="text" id="country" className="w-full mt-1 p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                <label htmlFor="service" className="block text-white">Would you like to book Vusi for the following?</label>
                <select id="service" className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                    <option>Keynotes</option>
                    <option>Masterclasses</option>
                    <option>Mentoring</option>
                    <option>General</option>
                </select>
                </div>
                <div className="mb-4">
                <label htmlFor="message" className="block text-white">Your message (optional)</label>
                <textarea id="message" rows="4" className="w-full mt-1 p-2 border border-gray-300 rounded-md"></textarea>
                </div>
                <div className="mb-4 flex items-center">
                <input type="checkbox" id="consent" className="form-checkbox" />
                <label htmlFor="consent" className="ml-2 text-white">By submitting this message you consent to receiving emails from Eve Muchiri</label>
                </div>
                <button type="submit" className="px-4 py-2 text-gray-950 bg-white">Send Message</button>
            </form>
            </div>
        </div>
        </section>
    </div>
  )
}

export default BookEve