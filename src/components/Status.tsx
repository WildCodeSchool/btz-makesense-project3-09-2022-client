import React from "react";

export default function Status() {
  return (
    <div className="flex flex-col justify-between space-y-5">
      <div className="flex flex-col justify-between space-y-4 border-l-[5px] rounded border-solid border-[#F6FC80]">
        <label htmlFor="started" className="text-white ">
          <input
            type="radio"
            name="status"
            value="started"
            id="started"
            className="mr-4 ml-[-9px]"
          />
          Decision started
        </label>
        <label htmlFor="first_decision" className="text-white">
          <input
            type="radio"
            name="status"
            value="first_decision"
            className="mr-4 ml-[-9px]"
            id="first_decision"
          />
          First decision made
        </label>
        <label htmlFor="conflict" className="text-white">
          <input
            type="radio"
            name="status"
            value="conflict"
            className="mr-4 ml-[-9px]"
            id="conflict"
          />
          Conflict over the decision
        </label>
        <label htmlFor="definitive" className="text-white">
          <input
            type="radio"
            name="status"
            value=" definitive"
            className="mr-4 ml-[-9px]"
            id="definitive"
          />
          Definitive decision
        </label>
        <label htmlFor="unreached" className="text-white">
          <input
            type="radio"
            name="status"
            value="unreached"
            className="mr-4 ml-[-9px]"
            id="unreached"
          />
          Decision unreached
        </label>
        <label htmlFor="finished" className="text-white">
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
      <button
        type="button"
        className="min-w-[200px] w-full h-15 py-2  bg-[#E36164] rounded-2xl text-white"
      >
        Modify
      </button>
    </div>
  );
}
