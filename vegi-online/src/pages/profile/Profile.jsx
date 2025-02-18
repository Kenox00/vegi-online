import { useState } from "react";
import Footer from "../../components/defaults/footer/Footer";
import Navbar from "../../components/defaults/navbar/Navbar";
import ProfileForm from "./components/profileForm";
import { User, Wallet2, ShoppingBag, LogOut, BookText } from "lucide-react";
import MyOrders from "./components/MyOrders";

function Profile() {
  const [selectedPage, setSelectedPage] = useState("Profile");

  const links = [
    { id: 0, name: "My Profile", icon: <User className="w-6 h-6" /> },
    { id: 1, name: "Address Book", icon: <BookText className="w-6 h-6" /> },
    { id: 2, name: "My Payment Options", icon: <Wallet2 className="w-6 h-6" /> },
    { id: 3, name: "My Orders", icon: <ShoppingBag className="w-6 h-6" /> },
  ];

  const renderContent = () => {
    switch (selectedPage) {
      case "My Profile":
        return <ProfileForm />;
      case "Address Book":
        return <div>Address Book Content</div>;
      case "My Payment":
        return <div>My Payment Content</div>;
      case "My Orders":
        return <MyOrders/>;
      default:
        return <div>Default Content</div>;
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
          </select>
        </div>

        <div className="flex flex-col justify-between md:flex-row">
          {/* Sidebar for Medium Screens and Above */}
          <div className="hidden md:flex flex-col w-fit border border-gray-950/6 p-4 h-[80vh]">
            <h1 className="text-xl font-semibold mb-8">Manage My Account</h1>
            <div className="flex flex-col flex-grow gap-2">
              {links.map((link) => (
                <div
                  key={link.id}
                  className={`flex items-center gap-2 px-4 py-1 cursor-pointer text-sm max-w-[218px] h-10
                    ${selectedPage === link.name 
                      ? "text-secondary bg-primary/5" 
                      : "text-gray-400"}
                  `}
                  onClick={() => setSelectedPage(link.name)}
                >
                  {link.icon}
                  {link.name}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 px-4 py-1 cursor-pointer text-sm text-gray-400 mt-auto border-t border-gray-100">
              <LogOut className="w-6 h-6" />
              Log out
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4 mt-8 md:mt-0">
            {renderContent()}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Profile;