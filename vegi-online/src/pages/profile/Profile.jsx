import { useState } from "react";
import Footer from "../../components/defaults/footer/Footer";
import Navbar from "../../components/defaults/navbar/Navbar";

function Profile() {
  const [selectedPage, setSelectedPage] = useState("Profile");

  const links = [
    { id: 0, name: "Profile" },
    { id: 1, name: "Address Book" },
    { id: 2, name: "My Payment" },
  ];

  const renderContent = () => {
    switch (selectedPage) {
      case "Profile":
        return <div>Profile Content</div>;
      case "Address Book":
        return <div>Address Book Content</div>;
      case "My Payment":
        return <div>My Payment Content</div>;
      default:
        return <div>Default Content</div>;
    }
  };

  return (
    <>
    <Navbar/>
      <div className="flex w-full justify-between items-center py-12" >
        <div className="flex flex-col">
          <p className="font-bold">Manage account</p>
          <ul>
            {links.map((link) => (
              <li
                key={link.id}
                className={`cursor-pointer p-2 ${
                  selectedPage === link.name
                    ? "text-blue-500 border-l-4 border-blue-500 font-semibold"
                    : "text-gray-700"
                }`}
                onClick={() => setSelectedPage(link.name)}
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>
        <div>{renderContent()}</div>
      </div>
      <Footer/>
    </>
  );
}

export default Profile;
