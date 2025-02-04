import { Logo } from "../assets/logo";

export default function Navbar() {
  return (
    <nav className="pt-8 pb-20">
      <div className="flex border px-[100px] border-black border-y-2 justify-between items-center shadow-xl">
        <div className="flex items-center gap-3 ">
          <Logo />
          <h1 className="text-5xl font-medium">Positivus</h1>
        </div>
        <div className="flex  gap-10 items-center text-xl">
          <ul className="flex gap-10 text-xl">
            <li className="cursor-pointer">About us</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Use Cases</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Blog</li>
          </ul>
          <button className="rounded-xl border-black border-x-2 py-5 px-9 hover:bg-black/10">
            Request a quote
          </button>
        </div>
      </div>
    </nav>
  );
}
