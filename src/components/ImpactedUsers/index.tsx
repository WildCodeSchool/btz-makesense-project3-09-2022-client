import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import axiosInstance from "../../../util/axiosInstances";
import { User } from "../../types/main";

interface ImpactedUser extends User {
  isExpert: boolean;
}

type Props = {
  impactedUsers: ImpactedUser[];
  setImpactedUsers: Dispatch<SetStateAction<ImpactedUser[]>>;
};

export default function ImpactedUsers({
  impactedUsers,
  setImpactedUsers,
}: Props) {
  const [users, setUsers] = useState<User[]>([]);
  const [input, setInput] = useState("");

  const getUsers = async () => {
    const { data } = await axiosInstance.get("/users");
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleAddUser = (user: User) => {
    setImpactedUsers((prevUsers) => [
      ...prevUsers,
      {
        ...user,
        isExpert: false,
      },
    ]);
  };

  const handleRemoveUser = (user: ImpactedUser) => {
    const userIndex = impactedUsers.findIndex((u) => u.id === user.id);
    const impactedUsersCopy = [...impactedUsers];
    impactedUsersCopy.splice(userIndex, 1);
    setImpactedUsers(impactedUsersCopy);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleCheckBox = (user: ImpactedUser) => {
    const userToChange = impactedUsers.find((u) => u.id === user.id);
    const userToChangeIndex = impactedUsers.findIndex((u) => u.id === user.id);
    const impactedUsersCopy = [...impactedUsers];

    if (userToChange) {
      const newUser: ImpactedUser = {
        ...userToChange,
        isExpert: !userToChange.isExpert,
      };
      impactedUsersCopy.splice(userToChangeIndex, 1, newUser);
      setImpactedUsers(impactedUsersCopy);
    }
  };

  return (
    <div className="flex flex-col">
      {impactedUsers.map((user) => (
        <div className="flex w-full bg-[#063944]  justify-center">
          <div className="text-white ">{user.firstName} : Expert ? </div>
          <input
            className="mx-2"
            onChange={() => handleCheckBox(user)}
            checked={user.isExpert}
            type="checkbox"
          />
          <button
            type="button"
            onClick={() => handleRemoveUser(user)}
            className="w-16 h-5 bg-red-500 my-1 text-white rounded-md"
          >
            Remove
          </button>
        </div>
      ))}
      <div>
        <label htmlFor="impactedUsers" className="flex flex-col text-white">
          {" "}
          Impacted Users:
          <input
            id="impactedUsers"
            value={input}
            onChange={handleChange}
            type="text"
            placeholder="Enter an email ..."
            className="text-black rounded -md p-1"
          />
        </label>
      </div>
      {input
        ? users
            .filter((user) => user.email.includes(input))
            .filter((user) => {
              return impactedUsers.findIndex((u) => u.id === user.id) === -1;
            })
            .map((user) => (
              <button
                className="text-black  hover:bg-gray-500  bg-white"
                type="button"
                onClick={() => handleAddUser(user)}
              >
                <p>{user.email}</p>
              </button>
            ))
        : null}
    </div>
  );
}
