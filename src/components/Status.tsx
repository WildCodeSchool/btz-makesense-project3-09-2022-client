import React from "react";

export default function Status() {
  return (
    <div className="flex flex-col justify-between space-y-5">
      <label htmlFor="started" className="text-white">
        <input
          type="radio"
          name="status"
          value="started"
          id="started"
          className="mr-4"
        />
        Prise de décision commencée
      </label>
      <label htmlFor="first_decision" className="text-white">
        <input
          type="radio"
          name="status"
          value="first_decision"
          className="mr-4"
          id="first_decision"
        />
        Premiere décision prise
      </label>
      <label htmlFor="conflict" className="text-white">
        <input
          type="radio"
          name="status"
          value="conflict"
          className="mr-4"
          id="conflict"
        />
        Conflit sur la décision
      </label>
      <label htmlFor="definitive" className="text-white">
        <input
          type="radio"
          name="status"
          value=" definitive"
          className="mr-4"
          id="definitive"
        />
        Décision définitive
      </label>
      <label htmlFor="unreached" className="text-white">
        <input
          type="radio"
          name="status"
          value="unreached"
          className="mr-4"
          id="unreached"
        />
        Décision non-aboutie
      </label>
      <label htmlFor="finished" className="text-white">
        <input
          type="radio"
          name="status"
          value="finished"
          className="mr-4"
          id="finished"
        />
        Décision terminée
      </label>
      <button
        type="button"
        className="min-w-[200px] w-full h-15 py-2  bg-[#E36164] rounded-2xl text-white"
      >
        Modify
      </button>
    </div>
  );
}
