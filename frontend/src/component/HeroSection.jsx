import Img1 from "../assets/img1.svg";
import partner1 from "../assets/partner1.svg";
import partner2 from "../assets/partner2.svg";
import partner3 from "../assets/partner3.svg";
import partner4 from "../assets/partner4.svg";
import partner5 from "../assets/partner5.svg";
import partner6 from "../assets/partner6.svg";

export default function HeroSection() {
  return (
    <div className="border-b-2 border-black mb-[168px]">
      <div className=" flex flex-col px-[100px] gap-[70px]">
        <div className="flex items-start">
          <div className="flex flex-col gap-[68px] items-start">
            <h1 className="text-6xl font-medium w-2/5">
              Navigating the digital landscape for success
            </h1>
            <button className="text-xl bg-[#191A23] text-white py-5 px-9 rounded-2xl ">
              Book a consultation
            </button>
          </div>
          <img src={Img1} alt="img1" />
        </div>
        <div className="flex gap-[95px] items-center justify-center ">
          <img src={partner1} alt="partner1" />
          <img src={partner2} alt="partner2" />
          <img src={partner3} alt="partner3" />
          <img src={partner4} alt="partner4" />
          <img src={partner5} alt="partner5" />
          <img src={partner6} alt="partner6" />
        </div>
      </div>
    </div>
  );
}
