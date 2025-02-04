import Card1 from "../assets/card1.svg";
import Card2 from "../assets/card2.svg";
import Card3 from "../assets/card3.svg";
import Card4 from "../assets/card4.svg";
import Card5 from "../assets/card5.svg";
import Card6 from "../assets/card6.svg";

export default function ServiceCard() {
  return (
    <div className="flex flex-col gap-[80px] mb-[100px]">
      <div className="flex items-center gap-10 px-[100px] ">
        <h1 className="text-[40px] font-medium rounded-md bg-[#B9FF66] px-2">
          Services
        </h1>
        <p className="text-lg w-2/6">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="px-[100px] bg-[#F3F3F3] grid grid-cols-2 gap-10 shadow-xl">
        <div className="flex justify-between bg-[#F3F3F3] border border-black rounded-[50px] border-b-8   p-[50px]">
          <div className="flex flex-col gap-[93px]">
            <div className="flex items-start flex-col">
              <h1 className="bg-[#B9FF66] px-1 rounded-md text-3xl font-medium">
                Search engine
              </h1>
              <h2 className="bg-[#B9FF66] px-1 rounded-md text-3xl font-medium">
                optimization
              </h2>
            </div>
            <button className="flex gap-4 items-center">
              <svg
                width="50"
                height="50"
                viewBox="0 0 25 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="bg-black rounded-full  p-2"
              >
                <path
                  d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z"
                  fill="#B9FF66"
                />
              </svg>
              <h1 className="text-xl">Learn more</h1>
            </button>
          </div>
          <img src={Card1} alt="card1" />
        </div>
        <div className="flex justify-between border bg-[#B9FF66] border-black rounded-[50px] border-b-8  p-[50px]">
          <div className="flex flex-col gap-[93px]">
            <div className="flex items-start flex-col">
              <h1 className="bg-white px-1 rounded-md text-3xl font-medium">
                Pay-per-click
              </h1>
              <h2 className="bg-white px-1 rounded-md text-3xl font-medium">
                advertising
              </h2>
            </div>
            <button className="flex gap-4 items-center">
              <svg
                width="50"
                height="50"
                viewBox="0 0 25 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="bg-black rounded-full  p-2"
              >
                <path
                  d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z"
                  fill="#B9FF66"
                />
              </svg>
              <h1 className="text-xl">Learn more</h1>
            </button>
          </div>
          <img src={Card2} alt="card2" />
        </div>
        <div className="flex justify-between border bg-[#191A23] border-black rounded-[50px] border-b-8  p-[50px]">
          <div className="flex flex-col gap-[93px]">
            <div className="flex items-start flex-col">
              <h1 className="bg-white px-1 rounded-md text-3xl font-medium">
                Social Media
              </h1>
              <h2 className="bg-white px-1 rounded-md text-3xl font-medium">
                Marketing
              </h2>
            </div>
            <button className="flex gap-4 items-center">
              <svg
                width="50"
                height="50"
                viewBox="0 0 25 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="bg-white rounded-full  p-2"
              >
                <path
                  d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z"
                  fill="black"
                />
              </svg>
              <h1 className="text-xl text-white">Learn more</h1>
            </button>
          </div>
          <img src={Card3} alt="card3" />
        </div>
        <div className="flex justify-between bg-[#F3F3F3] border border-black rounded-[50px] border-b-8   p-[50px]">
          <div className="flex flex-col gap-[93px]">
            <div className="flex items-start flex-col">
              <h1 className="bg-[#B9FF66] px-1 rounded-md text-3xl font-medium">
                Email
              </h1>
              <h2 className="bg-[#B9FF66] px-1 rounded-md text-3xl font-medium">
                Marketing
              </h2>
            </div>
            <button className="flex gap-4 items-center">
              <svg
                width="50"
                height="50"
                viewBox="0 0 25 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="bg-black rounded-full  p-2"
              >
                <path
                  d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z"
                  fill="#B9FF66"
                />
              </svg>
              <h1 className="text-xl">Learn more</h1>
            </button>
          </div>
          <img src={Card4} alt="card4" />
        </div>
        <div className="flex justify-between border bg-[#B9FF66] border-black rounded-[50px] border-b-8  p-[50px]">
          <div className="flex flex-col gap-[93px]">
            <div className="flex items-start flex-col">
              <h1 className="bg-white px-1 rounded-md text-3xl font-medium">
                Content
              </h1>
              <h2 className="bg-white px-1 rounded-md text-3xl font-medium">
                Creation
              </h2>
            </div>
            <button className="flex gap-4 items-center">
              <svg
                width="50"
                height="50"
                viewBox="0 0 25 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="bg-black rounded-full  p-2"
              >
                <path
                  d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z"
                  fill="#B9FF66"
                />
              </svg>
              <h1 className="text-xl">Learn more</h1>
            </button>
          </div>
          <img src={Card5} alt="card5" />
        </div>
        <div className="flex justify-between border bg-[#191A23] border-black rounded-[50px] border-b-8  p-[50px]">
          <div className="flex flex-col gap-[93px]">
            <div className="flex items-start flex-col">
              <h1 className="bg-[#B9FF66] px-1 rounded-md text-3xl font-medium">
                Analytics and
              </h1>
              <h2 className="bg-[#B9FF66] px-1 rounded-md text-3xl font-medium">
                Tracking
              </h2>
            </div>
            <button className="flex gap-4 items-center">
              <svg
                width="50"
                height="50"
                viewBox="0 0 25 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="bg-white rounded-full  p-2"
              >
                <path
                  d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z"
                  fill="black"
                />
              </svg>
              <h1 className="text-xl text-white">Learn more</h1>
            </button>
          </div>
          <img src={Card6} alt="card6" />
        </div>
      </div>
    </div>
  );
}
