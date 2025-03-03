import { useNavigate } from 'react-router-dom';
import fruits from '/images/categories/fruits.png'
import vegetables from '/images/categories/vegetables.png';
import herbs from '/images/categories/herbs.png';
import eggs from '/images/categories/eggs.png';
import meat from '/images/categories/meat.png';
import backery from '/images/categories/backery.png';
import beverages from '/images/categories/beverages.png';
import health from '/images/categories/health.png';
import frozenfood from '/images/categories/frozenfood.png';
import snacks from '/images/categories/snacks.png';
import appsBg from '/images/categories/appsBg.png';
import appleIcon from '/images/categories/appleIcon.png';
import playstoreIcon from '/images/categories/playStoreIcon.png';



const OurCategories = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Fruits", image: fruits },
    { name: "Vegetables", image: vegetables },
    { name: "Herbs & Greens", image: herbs },
    { name: "Dairy & Eggs", image: eggs },
    { name: "Meat & Seafood", image: meat },
    { name: "Bakery", image: backery },
    { name: "Beverages", image: beverages },
    { name: "Health & Wellness", image: health },
    { name: "Frozen Foods", image: frozenfood },
    { name: "Snacks", image: snacks },
  ];

  const handleCategoryClick = (categoryName) => {
    navigate(`/products?category=${categoryName}`);
  };

  return (
    <section className="div-container sm:py-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 lg:justify-between">
        {/* Mobile App Section */}
        <div
          className="w-full lg:w-[40%] min-h-[320px] flex justify-start flex-col gap-10 items-center bg-[#298392] px-6 sm:px-8 py-20"
          style={{
            backgroundImage: `url(${appsBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="text-sm bg-white/20 py-1 px-3 text-white rounded">
            MOBILE APP
          </span>
          <h2 className="text-xl sm:text-2xl text-center text-white font-semibold max-w-[90%]">
            Buy a Prepared Meal with Our Mobile app
          </h2>
          <div className="flex flex-col xl:flex-row gap-3 w-full max-w-[280px] xl:max-w-none">
            <button className="flex bg-white h-14 gap-3 items-center justify-center cursor-pointer xl:justify-between px-4 py-2 rounded w-full hover:bg-gray-50 transition-colors duration-300">
              <img src={appleIcon} alt="Apple Store" className="w-6 h-6" />
              <p className="font-semibold leading-tight text-xs">
                Download on <br />
                <span className="text-base">App Store</span>
              </p>
            </button>
            <button className="flex bg-white h-14 gap-3 items-center cursor-pointer justify-center xl:justify-between px-4 py-2 rounded w-full hover:bg-gray-50 transition-colors duration-300">
              <img src={playstoreIcon} alt="Google Play Store" className="w-6 h-6" />
              <p className="font-semibold leading-tight text-xs text-start">
                Download on <br />
                <span className="text-base">Google Play</span>
              </p>
            </button>
          </div>
        </div>

        {/* Categories Section */}
        <div className="flex-grow lg:max-w-[55%]">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-secondary">
              Our Categories
            </h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center group cursor-pointer" onClick={()=>handleCategoryClick(category.name)}>
                <div className=" flex-col w-full aspect-square border border-gray-200 bg-gray-50  flex items-center justify-center p-4 transition-all duration-300 group-hover:shadow-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-4/5 h-4/5 object-contain mix-blend-darken"
                  />
                   <p className="text-sm md:text-base text-gray-700 font-medium">{category.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCategories;