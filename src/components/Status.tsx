export default function Status() {
  return (
    <div className=" mr-10 space-y-5  w-[45%] md:w-[35%] lg:w-[25%] ">
      <h1 className="font-semibold">Status</h1>
      <div className="flex flex-col justify-between space-y-5 border-l-[5px] rounded border-solid border-[rgb(181,230,60)]">
        <label htmlFor="started" className="text-black bg-white w-44 rounded">
          <input
            type="radio"
            name="status"
            value="started"
            id="started"
            className="mr-4 ml-[-9px]"
          />
          Decision started
        </label>
        <label
          htmlFor="first_decision"
          className=" bg-white text-gray-500 w-44 rounded"
        >
          <input
            type="radio"
            name="status"
            value="first_decision"
            className="mr-4 ml-[-9px]"
            id="first_decision"
          />
          First decision made
        </label>
        <label
          htmlFor="conflict"
          className="text-gray-500 bg-white w-44 rounded"
        >
          <input
            type="radio"
            name="status"
            value="conflict"
            className="mr-4 ml-[-9px]"
            id="conflict"
          />
          Conflict over the decision
        </label>
        <label
          htmlFor="definitive"
          className="text-gray-500 bg-white w-44 rounded"
        >
          <input
            type="radio"
            name="status"
            value=" definitive"
            className="mr-4 ml-[-9px]"
            id="definitive"
          />
          Definitive decision
        </label>
        <label
          htmlFor="unreached"
          className="text-gray-500 bg-white w-44 rounded"
        >
          <input
            type="radio"
            name="status"
            value="unreached"
            className="mr-4 ml-[-9px]"
            id="unreached"
          />
          Decision unreached
        </label>
        <label
          htmlFor="finished"
          className="text-gray-500 bg-white w-48 rounded"
        >
          <input
            type="radio"
            name="status"
            value="finished"
            className="mr-4 ml-[-9px]"
            id="finished"
          />
          Decision finished
        </label>
      </div>
    </div>
  );
}
