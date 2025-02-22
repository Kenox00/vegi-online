import { useProducts } from "../../../../hooks/useProducts";
import promotion_1bg from "../../../../assets/images/Hero/bg.png";
import banner1 from '../../../../assets/images/Hero/banner1.png';
import banner2 from '../../../../assets/images/Hero/banner2.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const { products } = useProducts();
  const discount = 0.8;

  const parsePrice = (price) => parseInt(price?.toString().replace(/,/g, ""), 10);

  const product = products[0];

  const promotions = [
    {
      id: 1,
      title: "SHOPPING",
      subtitle: "HOT DROP OFF",
      currentPrice: parsePrice(product?.price),
      discuntedPrice: parsePrice(product?.price * discount),
      bgColor: "bg-secondary",
      image: banner1,
      callToAction: "Shop now",
      isMain: true,
    },
    {
      id: 2,
      title: "Washed & Peeled",
      subtitle: "Irish potato",
      currentPrice: parsePrice(product?.price),
      discuntedPrice: parsePrice(product?.price * discount),
      bgColor: "bg-primary",
      image: banner2,
      callToAction: "Shop now",
      isMain: false,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="px-4 sm:px-6 lg:px-16 py-4 sm:py-6 lg:py-8">
      {/* Desktop & Tablet View */}
      <div className="hidden md:flex flex-col lg:flex-row gap-4 lg:gap-5">
        {promotions.map((promo) => (
          <div
            key={promo.id}
            className={`relative overflow-hidden ${promo.bgColor} h-[280px] sm:h-[320px]
              ${promo.isMain ? "lg:w-2/3" : "lg:w-1/3"} `}
            style={{
              backgroundImage: `url(${promotion_1bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",
            }}
          >
            <div
              className={`absolute inset-0 p-4 sm:p-6 lg:p-8 xl:px-16 flex 
                ${promo.isMain ? "lg:flex-row" : "flex-col text-center"} 
                justify-between items-center`}
              style={{
                background: "hsla(195, 96%, 9%, 1)"
              }}
            >
              <div className={`space-y-2 ${!promo.isMain && "w-full"}`}>
                {promo.isMain && (
                  <span className="inline-block text-white px-4 py-1 mb-2 sm:mb-4 text-xs sm:text-sm bg-white/10">
                    Discount
                  </span>
                )}
                <h2 className={`text-white font-bold 
                  ${promo.isMain ? "text-3xl sm:text-4xl lg:text-[44.8px]" : "text-2xl sm:text-3xl"} 
                  leading-tight`}
                >
                  {promo.title}
                </h2>
                <h3 className={`text-white 
                  ${promo.isMain ? "text-3xl sm:text-4xl lg:text-[44.8px]" : "text-2xl sm:text-3xl"} 
                  leading-tight`}
                >
                  {promo.subtitle}
                </h3>
                <p className="text-white text-sm sm:text-base">
                  From: <del>{promo.currentPrice} Rwf</del> to: {promo.discuntedPrice} Rwf
                </p>
                <button className="bg-white text-black px-4 sm:px-6 py-2 mt-2 text-sm sm:text-base 
                  hover:bg-opacity-90 transition-colors duration-300">
                  {promo.callToAction}
                </button>
              </div>

              <div className={`${!promo.isMain && "mt-4 sm:mt-6"}`}>
                <img
                  src={promo.image}
                  alt={promo.title}
                  className={`object-contain ${promo.isMain ? "max-h-[240px] sm:max-h-[300px]" : "max-h-[160px] sm:max-h-[200px]"}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View - Carousel */}
      <div className="md:hidden">
        <Slider {...settings}>
          {promotions.map((promo) => (
            <div key={promo.id} className="flex justify-center">
              <div
                className={`relative overflow-hidden ${promo.bgColor} h-[280px] sm:h-[320px] w-full`}
                style={{
                  backgroundImage: `url(${promotion_1bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "overlay",
                }}
              >
                <div
                  className="absolute inset-0 p-4 sm:p-6 flex flex-col text-center justify-between items-center"
                  style={{
                    background: "linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.3))",
                  }}
                >
                  <div className="space-y-2 w-full">
                    <span className="inline-block text-white px-4 py-1 mb-2 sm:mb-4 text-xs sm:text-sm bg-white/10">
                      Discount
                    </span>
                    <h2 className="text-white font-bold text-2xl sm:text-3xl leading-tight">
                      {promo.title}
                    </h2>
                    <h3 className="text-white text-2xl sm:text-3xl leading-tight">
                      {promo.subtitle}
                    </h3>
                    <p className="text-white text-sm sm:text-base">
                      From: <del>{promo.currentPrice} Rwf</del> to: {promo.discuntedPrice} Rwf
                    </p>
                    <button className="bg-white text-black px-4 sm:px-6 py-2 mt-2 text-sm sm:text-base 
                      hover:bg-opacity-90 transition-colors duration-300">
                      {promo.callToAction}
                    </button>
                  </div>
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="object-contain max-h-[200px] sm:max-h-[250px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
