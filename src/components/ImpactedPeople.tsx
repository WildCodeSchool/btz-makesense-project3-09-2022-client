import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axiosInstance from "../../util/axiosInstances";
import { User } from "../types/main";

export interface ImpactedUser {
  user: User;
  isExpert: boolean;
}

export default function ImpactedPeople() {
  const { query } = useRouter();
  const [impactedUsers, setImpactedUsers] = useState<ImpactedUser[]>([]);

  const getImpactedUsers = async () => {
    const { data } = await axiosInstance.get(
      `/impactedusers?decisionId=${query.id}`
    );
    setImpactedUsers(data);
  };

  useEffect(() => {
    if (query.id) {
      getImpactedUsers();
    }
  }, [query]);

  return (
    <div>
      <h2 className="font-bold">impactedPersons</h2>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-between items-start pr-5">
          <h3 className="font-semibold flex-row">Experts:</h3>

          {impactedUsers
            .filter((impacted) => impacted.isExpert === true)
            .map((impacted) => (
              <p>
                {impacted.user.firstName}
                {impacted.user.lastName}
              </p>
            ))}
        </div>
        <div className="flex flex-col justify-between items-start pl-5">
          <h3 className="font-semibold flex-row">Non-Experts:</h3>
          {impactedUsers
            .filter((impacted) => impacted.isExpert === false)
            .map((impacted) => (
              <p>
                {impacted.user.firstName}
                {impacted.user.lastName}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}
