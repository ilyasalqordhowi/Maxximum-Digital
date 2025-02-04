import Img2 from "../assets/img2.svg";

export default function CallToAction() {
  return (
    <div className="px-[100px] py-[23.5px] mb-[140px]">
      <div className="flex justify-between px-[60px] items-center bg-[#F3F3F3] rounded-[50px]">
        <div className="flex flex-col items-start w-3/12 gap-7">
          <h1 className="text-3xl font-medium">Let’s make things happen</h1>
          <p className=" text-lg">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="px-9 py-5 bg-[#191A23] text-white rounded-2xl">
            Get your free proposal
          </button>
        </div>
        <img src={Img2} alt="img2" />
      </div>
    </div>
  );
}
