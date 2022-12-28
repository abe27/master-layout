import { Avatar } from "@chakra-ui/react";
import Link from "next/link";

const userMessage = [
  { id: 1, name: "Jean", last: "Marc", position: "Developer", on: "6.00 AM" },
  { id: 2, name: "John", last: "Snow", position: "Designer", on: "9.30 PM" },
  { id: 3, name: "Charlie", last: "Moi", position: "CTO", on: "10.00 PM" },
  { id: 4, name: "Boby", last: "Park", position: "CEO", on: "10.10 PM" },
];

const Notification = () => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="badge badge-sm indicator-item badge-secondary">
            8
          </span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="w-auto mt-3 shadow card card-compact dropdown-content bg-base-100"
      >
        <div className="card-body">
          <div className="container flex flex-col items-center justify-center w-full mx-auto">
            <ul className="flex flex-col divide-y divide w-72">
              {userMessage.map((i) => (
                <li className="flex flex-row" key={i.id}>
                  <Link href={`/messages/${i.id}`}>
                    <div className="flex items-center flex-1 p-4 cursor-pointer select-none">
                      <div className="flex flex-col items-center justify-center mr-4">
                        <Avatar
                          name={`${i.name} ${i.last}`}
                          src={`https://placeimg.com/80/80/${i.name}`}
                        />
                      </div>
                      <div className="flex-1 pl-1 mr-16">
                        <div className="font-medium dark:text-white">
                          {`${i.name} ${i.last}`}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-200">
                          {i.position}
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-200">
                        {i.on}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
