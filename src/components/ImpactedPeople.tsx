import React from "react";

export default function ImpactedPeople() {
  return (
    <div>
      <h2 className="font-bold">impactedPersons</h2>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-between items-start pr-5">
          <h3 className="font-semibold flex-row">Experts:</h3>
          <p>John Smith</p>
          <p>John</p>
          <p>John</p>
        </div>
        <div className="flex flex-col justify-between items-start pl-5">
          <h3 className="font-semibold flex-row">Non-Experts:</h3>
          <p>John Smith</p>
          <p>John</p>
          <p>John</p>
        </div>
      </div>
    </div>
  );
}
