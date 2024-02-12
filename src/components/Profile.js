import { useEffect, useState } from "react";
import Shimmer from "./ShimmerUi";
import { API_URL } from "../utils/constants";

const Profile = () => {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    setUserData(json.results[0]);
  };

  if (userData === null) {
    return <Shimmer />
  };

  const { picture: { large: userImage } = {},
    name: { first: userFirstName, last: userLastName } = {},
    gender: userGender,
    phone: userPhone,
    email: userEmail
  } = userData || {};

  return (
    <div className="profile p-12 m-36 ml-72 w-[700px] flex justify-evenly bg-gray-200  items-center">
      <div className="border-4 border-gray-200 w-44 h-44">
        <img src={userImage} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="p-2 m-2 ml-8 font-serif text-xl md:text-left text-gray-700">
        <p className="mb-2">Name: {userFirstName} {userLastName}</p>
        <p className="mb-2">Gender: {userGender}</p>
        <p className="mb-2">Phone Number: {userPhone}</p>
        <p>Email Id: {userEmail}</p>
      </div>

    </div>
  )
}

export default Profile;