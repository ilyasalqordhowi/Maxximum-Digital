import Img3 from "../assets/img3.svg";

export default function ContactUs() {
  return (
    <div className="px-[100px] flex flex-col gap-[80px] mb-[140px]">
      <div className="flex items-center gap-10 ">
        <h1 className="text-[40px] font-medium rounded-md bg-[#B9FF66] px-2">
          Contact Us
        </h1>
        <p className="text-lg w-[323px]">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      <div className="flex justify-between w-full bg-[#F3F3F3] rounded-[50px] items-center pl-[100px] pt-[60px] pb-[80px]">
        <form className="flex flex-col gap-[25px] w-full">
          <div className="flex items-center space-x-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="option"
                value="say-hi"
                className="accent-[#B9FF66] scale-100 w-6 h-6"
              />
              <span className="text-lg">Say Hi</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="option"
                value="get-quote"
                className="accent-[#B9FF66] scale-100 w-6 h-6"
              />
              <span className="text-lg">Get a Quote</span>
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-2 border text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="block text-gray-700">Email*</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 border text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="block text-gray-700">Message*</label>
            <textarea
              name="message"
              placeholder="Message"
              className="w-full p-2 border text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>
        <img src={Img3} alt="img3" />
      </div>
    </div>
  );
}
