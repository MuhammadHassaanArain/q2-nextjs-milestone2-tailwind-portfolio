import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className=" bg-bgdark flex justify-center py-10">
      <main className="w-10/12">
        <section>
          <h2 className="text-2xl text-accentOrange font-bold text-center p-6">
            Contact Details
          </h2>
        </section>
        <div className="md:flex  md:justify-center">
          <section className="flex justify-center md:w-4/12">
            <form className="flex flex-col bg-backgroundDark w-5/6 p-4 rounded-md ">
              <label className="text-textLight font-bold pt-2">Name:</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="p-2 rounded bg-bgdark focus:outline-none hover:border border-accentOrange"
              />
              <label className="text-textLight font-bold pt-3">Email :</label>
              <input
                type="text"
                placeholder="Enter Your Email"
                className="p-2 rounded bg-bgdark  focus:outline-none hover:border border-accentOrange"
              />
              <label className="text-textLight font-bold pt-3">Message:</label>
              <textarea
                rows={3}
                placeholder="Type Your Message here!"
                className="p-2 rounded bg-bgdark  focus:outline-none hover:border border-accentOrange"
              ></textarea>
              <button className="text-textLight bg-accentOrange p-2 mt-4 font-bold hover:bg-orange-400">
                Submit
              </button>
            </form>
          </section>

          <section className="  space-y-4 py-10">
            <div className="flex">
              <FaPhoneAlt className="w-16 h-12 bg-backgroundDark p-2 rounded-md mx-4" />
              <p className="flex flex-col">
                <span className="text-accentOrange font-bold font-mono">
                  Phone No
                </span>
                03273789477
              </p>
            </div>
            <div className="flex">
              <HiOutlineMailOpen className="w-16 h-12 bg-backgroundDark p-2 rounded-md mx-4" />
              <p className="flex flex-col">
                <span className="text-accentOrange font-bold font-mono">
                  Email{" "}
                </span>
                username@gmail.com
              </p>
            </div>

            <div className="flex">
              <FaLocationDot className="w-16 h-12 bg-backgroundDark p-2 rounded-md mx-4" />
              <p className="flex flex-col">
                <span className="text-accentOrange font-bold font-mono">
                  Location
                </span>
                Hyderabad Sindh, Pakistan{" "}
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
