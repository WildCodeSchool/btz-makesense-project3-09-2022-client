export default function Card() {
  return (
    <div className=" mx-4 min-w-[250px] h-[200px]  rounded-[10px] p-1 border-2 border-x-gray-400 bg-white">
      <div>
        <div>
          <button
            type="button"
            className="border-[#267a50] w-20 h-6 rounded-lg m-2 border-solid border-2 bg-[#70AF90] opacity-80"
          >
            status
          </button>
        </div>
        <h1 className="font-bold">Moving to Paris in spring for 6 months</h1>
        <div className="flex flex-row">
          <p> par Username</p>
        </div>
      </div>
    </div>
  );
}
