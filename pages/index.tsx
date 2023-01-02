
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="h-screen w-screen">

      <Navbar />

      <h1 className="font-bold ml-2">Decisions started</h1>
      <div className="bg-[#196C84]">
        <div className="flex flex-row overflow-x-scroll  pt-2 pb-20">
          <Card /> <Card /> <Card />
          <Card />
          <Card />
        </div>
        <h1 className="font-bold text-white ml-2">First decisions made</h1>
        <div className="flex flex-row overflow-x-scroll pt-2 pb-20">
          <Card /> <Card /> <Card />
          <Card />
          <Card />
        </div>
      </div>
      <h1 className="font-bold text-black ml-2">Final decisions made</h1>
      <div className="flex flex-row overflow-x-scroll pt-2 pb-20">
        <Card /> <Card /> <Card />
        <Card />
        <Card />
      </div>

      <Footer />

    </div>
  );
}
