import fruits from '../../../../assets/images/categories/fruits.png';
import vegetables from '../../../../assets/images/categories/vegetables.png';
import herbs from '../../../../assets/images/categories/herbs.png';
import eggs from '../../../../assets/images/categories/eggs.png';
import meat from '../../../../assets/images/categories/meat.png';
import backery from '../../../../assets/images/categories/backery.png';
import beverages from '../../../../assets/images/categories/beverages.png';
import health from '../../../../assets/images/categories/health.png';
import frozenfood from '../../../../assets/images/categories/frozenfood.png';
import snacks from '../../../../assets/images/categories/snacks.png';
import mobileApp from '../../../../assets/images/categories/mobileapp.png';

const OurCategories = () => {
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
    { name: "Snacks", image: snacks }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Mobile App Section */}
        <div className="w-full md:w-auto">
          <img src={mobileApp} alt="mobile app" className="w-full h-full md:w-72 " />
        </div>

        {/* Categories Section */}
        <div className="flex-grow">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-teal-600">Our Categories</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 ">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center group cursor-pointer">
                <div className=" flex-col w-full aspect-square border border-gray-200 bg-gray-50 flex items-center justify-center p-4 transition-all duration-300 group-hover:shadow-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-4/5 h-4/5 object-contain"
                  />
                   <p className="text-sm md:text-base text-gray-700 font-medium">{category.name}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCategories;
