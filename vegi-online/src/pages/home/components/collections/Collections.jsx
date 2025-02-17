import wine1 from "../../../../assets/images/Collections/wines1.png";
import heineken from "../../../../assets/images/Collections/heineken.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Collections() {
  const collections = [
    {
      id: 1,
      title: "Shop New Wine Collection",
      image: wine1,
      description: "Discover our new red wine collections",
      bg: "bg-[#298392]",
    },
    {
      id: 2,
      title: "Heineken & Co. Wine Collection",
      image: heineken,
      description: "Discover our Heineken & Co. wine collection",
      bg: "bg-[#FE8E3C]",
      label: "text-white",
    },
    {
      id: 3,
      title: "Exclusive Wine Selection",
      image: wine1,
      description: "Try our premium wine selection",
      bg: "bg-[#5A3E36]",
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
    <div className="w-full px-4">
      {/* Desktop View */}
      <div className="hidden md:flex justify-center gap-4">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className={`px-16 flex flex-col justify-between text-center items-center gap-2 max-w-96 ${collection.bg} py-0 shadow-lg`}
          >
            <div className="py-8 flex flex-col gap-6">
              <p className={`text-sm ${collection.label || "text-orange-400"}`}>
                NEW
              </p>
              <h2 className="text-3xl font-bold text-white">
                {collection.title}
              </h2>
              <p className="text-sm text-white">{collection.description}</p>
            </div>
            <img src={collection.image} alt={collection.title} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>

      {/* Mobile View - Carousel */}
      <div className="md:hidden">
        <Slider {...settings}>
          {collections.map((collection) => (
            <div key={collection.id} className="flex justify-center">
              <div
                className={`px-8 flex flex-col justify-between text-center items-center gap-2 w-full max-w-80 ${collection.bg} py-4  shadow-lg`}
              >
                <div className="py-6 flex flex-col gap-4">
                  <p className={`text-sm ${collection.label || "text-orange-400"}`}>
                    NEW
                  </p>
                  <h2 className="text-2xl font-bold text-white">
                    {collection.title}
                  </h2>
                  <p className="text-sm text-white">{collection.description}</p>
                </div>
                <img src={collection.image} alt={collection.title} className="w-full h-auto object-cover" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Collections;
