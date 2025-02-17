import { useState } from "react";
import Footer from "../../components/defaults/footer/Footer";
import Navbar from "../../components/defaults/navbar/Navbar";
import ProfileForm from "./components/profileForm";
import profileIcon from "../../assets/images/Profile/profileIcon.png";
import addressIcon from "../../assets/images/Profile/adressIcon.png";
import paymentIcon from "../../assets/images/Profile/paymentIcon.png";
import orders from "../../assets/images/Profile/orders.png";

function Profile() {
  const [selectedPage, setSelectedPage] = useState("My Profile");

  const links = [
    { id: 0, name: "My Profile", icon: profileIcon },
    { id: 1, name: "Address Book", icon: addressIcon },
    { id: 2, name: "My Payment Options", icon: paymentIcon },
  ];
  const links_2 = [
    { id: 0, name: "My Delivered", icon: orders },
    { id: 1, name: "Cancelled Orders", icon: orders },
  ];

  const renderContent = () => {
    switch (selectedPage) {
      case "My Profile":
        return <ProfileForm />;
      case "Address Book":
        return <div>Address Book Content</div>;
      case "My Payment Options":
        return <div>My Payment Content</div>;
      case "My Delivered":
        return <div>My Delivered Content</div>;
      case "Cancelled Orders":
        return <div>Cancelled Orders Content</div>;
      default:
        return <ProfileForm />;
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full py-12 px-5 md:px-10">
        {/* Select Dropdown for Small Screens */}
        <div className="block md:hidden mb-4">
          <select
            className="w-full p-2 border border-gray-300 rounded"
            value={selectedPage}
            onChange={(e) => setSelectedPage(e.target.value)}
          >
            <optgroup label="Manage account">
              {links.map((link) => (
                <option key={link.id} value={link.name}>
                  {link.name}
                </option>
              ))}
            </optgroup>
            <optgroup label="My Orders">
              {links_2.map((link) => (
                <option key={link.id} value={link.name}>
                  {link.name}
                </option>
              ))}
            </optgroup>
          </select>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Sidebar for Medium Screens and Above */}
          <div className="hidden md:flex flex-col px-3 gap-5 w-1/4">
            <p className="font-semibold">Manage account</p>
            <ul className="flex flex-col gap-2">
              {links.map((link) => (
                <li
                  key={link.id}
                  className={`cursor-pointer px-5 py-1 flex text-sm items-center ${
                    selectedPage === link.name
                      ? "text-secondary border-l-3 border-secondary font-medium"
                      : "text-gray-700"
                  }`}
                  onClick={() => setSelectedPage(link.name)}
                >
                  <img src={link.icon} alt={link.name} className="w-4 h-4 mr-2" />
                  {link.name}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-5">
              <p className="font-semibold">My Orders</p>
              <ul className="flex flex-col gap-2">
                {links_2.map((link) => (
                  <li
                    key={link.id}
                    className={`cursor-pointer px-5 py-1 flex text-sm items-center ${
                      selectedPage === link.name
                        ? "text-secondary border-l-3 border-secondary font-medium"
                        : "text-gray-700"
                    }`}
                    onClick={() => setSelectedPage(link.name)}
                  >
                    <img src={link.icon} alt={link.name} className="w-4 h-4 mr-2" />
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Main Content */}
          <div className="w-full md:w-3/4 mt-8 md:mt-0">
            {renderContent()}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
