import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

export default function notifications() {
  return (
    <div className=" flex-col justify-between">
      <Navbar />
      <h1 className="w-screen h-screen text-white pt-5 font-bold text-2xl text-center md:pb-6 bg-[#24673A]">
        My Notifications
      </h1>

      <Footer />
    </div>
  );
}
