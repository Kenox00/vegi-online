import { useState } from 'react';
import product1 from '../../../../assets/images/allproduct/product1.png';
import product2 from '../../../../assets/images/allproduct/product2.png';
import product3 from '../../../../assets/images/allproduct/product3.png';
import product4 from '../../../../assets/images/allproduct/product4.png';
import product5 from '../../../../assets/images/allproduct/product5.png';
import product6 from '../../../../assets/images/allproduct/product6.png';
import product7 from '../../../../assets/images/allproduct/product7.png';
import product8 from '../../../../assets/images/allproduct/product8.png';
import product9 from '../../../../assets/images/allproduct/product9.png';
import product10 from '../../../../assets/images/allproduct/product10.png';

const AllProduct = () => {
  const allProducts = [
    {
      id: 1,
      name: "Juicy Glow Apples",
      category: "Fruits",
      price: "3,013,008",
      image: product1
    },
    {
      id: 2,
      name: "SweetRoot Carrots",
      category: "Vegetables",
      price: "3,013,008",
      image: product2
    },
    {
      id: 3,
      name: "TaterGold Potatoes",
      category: "Vegetables",
      price: "3,013,008",
      image: product3
    },
    {
      id: 4,
      name: "SweetRoot Carrots",
      category: "Vegetables",
      price: "3,013,008",
      image: product4
    },
    {
      id: 5,
      name: "TaterGold Potatoes",
      category: "Vegetables",
      price: "3,013,008",
      image: product5
    },
    {
      id: 6,
      name: "PureTuber Potatoes",
      category: "Vegetables",
      price: "3,013,008",
      image: product6
    },
    {
      id: 7,
      name: "SweetLeaf Bananas",
      category: "Fruits",
      price: "3,013,008",
      image: product7
    },
    {
      id: 8,
      name: "ButterGlow Spread",
      category: "Dairy&Eggs",
      price: "3,013,008",
      image: product8
    },
    {
      id: 9,
      name: "Juicy Bloom Mangoes",
      category: "Fruits",
      price: "3,013,008",
      image: product9
    },
    {
      id: 10,
      name: "SunGlow Tomatoes",
      category: "Vegetables",
      price: "3,013,008",
      image: product10
    }
  ];

  const categories = ["All Products", "Vegetables", "Fruits", "Snacks", "Dairy&Eggs"];
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [products, setProducts] = useState(allProducts);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All Products") {
      setProducts(allProducts);
    } else {
      const filteredProducts = allProducts.filter(product => product.category === category);
      setProducts(filteredProducts);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header and Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <h1 className="text-xl font-semibold text-secondary">All Products</h1>
            <span className="text-primary">{products.length}</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryFilter(category)}
                className={`px-4 py-2 rounded-md text-sm transition-colors ${
                  category === selectedCategory
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 cursor-pointer">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="space-y-2">
              <p className="text-secondary text-sm">{product.category}</p>
              <p className="font-medium text-gray-800">{product.name}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <span className="font-semibold">{product.price}</span>
                  <span className="p-1 text-sm text-black bg-gray-200 rounded-md">Rwf</span>
                </div>
                <button className="text-primary border border-primary rounded-md w-8 h-8 flex items-center justify-center hover:bg-orange-400 hover:text-white transition-colors">
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;