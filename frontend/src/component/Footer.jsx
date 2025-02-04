export default function Footer() {
  return (
    <footer className=" px-[100px]">
      <div className="flex gap-16 py-14 rounded-t-3xl  px-[60px] w-full flex-col bg-[#191A23]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 ">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.7573 4.95854L29.1886 0.78125L24.9778 15.0001L29.1886 29.1788L14.7573 25.0416L0.285156 29.1788L4.53687 15.0001L0.285156 0.78125L14.7573 4.95854Z"
                fill="white"
              />
            </svg>

            <h1 className="text-4xl font-medium text-white">Positivus</h1>
          </div>
          <ul className="flex gap-10 text-xl text-white">
            <li className="cursor-pointer underline-offset-8 underline">
              About us
            </li>
            <li className="cursor-pointer underline-offset-8 underline">
              Services
            </li>
            <li className="cursor-pointer underline-offset-8 underline">
              Use Cases
            </li>
            <li className="cursor-pointer underline-offset-8 underline">
              Pricing
            </li>
            <li className="cursor-pointer underline-offset-8 underline">
              Blog
            </li>
          </ul>
          <div className="flex gap-5 items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15" cy="15" r="15" fill="white" />
              <path
                d="M8.22154 22.0586H11.3056V12.0742H8.22154V22.0586Z"
                fill="black"
              />
              <path
                d="M7.94116 8.88672C7.94116 9.87109 8.73555 10.668 9.76359 10.668C10.7449 10.668 11.5393 9.87109 11.5393 8.88672C11.5393 7.90234 10.7449 7.05859 9.76359 7.05859C8.73555 7.05859 7.94116 7.90234 7.94116 8.88672Z"
                fill="black"
              />
              <path
                d="M19.8103 22.0586H22.9412V16.5742C22.9412 13.9023 22.3337 11.793 19.2028 11.793C17.7075 11.793 16.6795 12.6367 16.2589 13.4336H16.2122V12.0742H13.2683V22.0586H16.3524V17.1367C16.3524 15.8242 16.586 14.5586 18.2215 14.5586C19.8103 14.5586 19.8103 16.0586 19.8103 17.1836V22.0586Z"
                fill="black"
              />
            </svg>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 15.0913C30 6.75456 23.2863 0 15 0C6.71371 0 0 6.75456 0 15.0913C0 22.6369 5.44355 28.9047 12.6411 30V19.4726H8.83064V15.0913H12.6411V11.8053C12.6411 8.03245 14.879 5.90264 18.2661 5.90264C19.9597 5.90264 21.6532 6.2069 21.6532 6.2069V9.91886H19.7782C17.9032 9.91886 17.2984 11.0751 17.2984 12.2921V15.0913H21.4718L20.8065 19.4726H17.2984V30C24.496 28.9047 30 22.6369 30 15.0913Z"
                fill="white"
              />
            </svg>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15" cy="15" r="15" fill="white" />
              <path
                d="M21.9961 11.4915C22.6854 10.9745 23.3058 10.3541 23.7884 9.63028C23.168 9.90602 22.4442 10.1128 21.7204 10.1818C22.4786 9.73369 23.0301 9.04435 23.3058 8.18267C22.6165 8.59628 21.8238 8.90648 21.031 9.07881C20.3417 8.35501 19.4111 7.94141 18.3771 7.94141C16.378 7.94141 14.758 9.56135 14.758 11.5604C14.758 11.8362 14.7925 12.1119 14.8614 12.3876C11.8628 12.2153 9.1744 10.7677 7.38212 8.59628C7.07192 9.11328 6.89959 9.73369 6.89959 10.423C6.89959 11.6638 7.51999 12.7668 8.51953 13.4216C7.93359 13.3872 7.34766 13.2493 6.86512 12.9736V13.008C6.86512 14.7659 8.10593 16.2135 9.76034 16.5581C9.48461 16.6271 9.13994 16.696 8.82973 16.696C8.58847 16.696 8.38166 16.6615 8.1404 16.6271C8.58847 18.0747 9.93267 19.1087 11.5182 19.1432C10.2773 20.1082 8.72633 20.6942 7.03745 20.6942C6.72725 20.6942 6.45152 20.6597 6.17578 20.6252C7.76126 21.6592 9.65694 22.2452 11.725 22.2452C18.3771 22.2452 21.9961 16.7649 21.9961 11.974C21.9961 11.8017 21.9961 11.6638 21.9961 11.4915Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex flex-col items-start gap-7">
            <h1 className="bg-[#B9FF66] px-2 rounded-lg text-xl">
              Contact us:
            </h1>
            <div className="flex flex-col gap-5">
              <div className="flex items-center text-lg text-white">
                <h1>Email: </h1>
                <h2>info@positivus.com</h2>
              </div>
              <div className="flex items-center text-lg text-white">
                <h1>Phone: </h1>
                <h2>555-567-8901</h2>
              </div>
              <div className="flex items-center text-lg text-white">
                <h1>Address: </h1>
                <h2>1234 Main St Moonstone City, Stardust State 12345</h2>
              </div>
            </div>
          </div>
          <div className="flex gap-5 px-10 py-14 bg-[#292A32] rounded-2xl">
            <input
              type="email"
              placeholder="Email"
              className="border-2 border-white px-9 text-white bg-transparent py-5 rounded-xl"
            />
            <button className="bg-[#B9FF66] py-5 px-9 rounded-xl">
              Subscribe to news
            </button>
          </div>
        </div>
        <div className="border-t-2 pt-[50px] flex items-center gap-10">
          <h1 className="text-white text-xl">
            © 2023 Positivus. All Rights Reserved.
          </h1>
          <h2 className="text-white text-xl">Privacy Policy</h2>
        </div>
      </div>
    </footer>
  );
}
