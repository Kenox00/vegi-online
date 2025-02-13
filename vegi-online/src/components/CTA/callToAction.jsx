import truckImg from '../../assets/images/cta/truck.png';
import phoneImg from '../../assets/images/cta/phone.png';
import paymentImg from '../../assets/images/cta/payment.png';

const CallToAction = () => {
  const features = [
    {
      icon: truckImg,
      title: "Free Shipping",
      description: "Free Shipping On All Order"
    },
    {
      icon: phoneImg,
      title: "Support 24/7",
      description: "Support Online 24 Hours A Day"
    },
    {
      icon: paymentImg,
      title: "Payments",
      description: "100% Payment Security"
    },
    {
      icon: paymentImg,
      title: "Payments",
      description: "100% Payment Security"
    }
  ];
  return (
    <div className="bg-gray-100 max-w-7xl mx-auto px-4 py-8 sm:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex items-center gap-4 p-4"
          >
            <div className="flex-shrink-0 w-8 h-8">
              <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain" />
            </div>
            <div>
            <h2 className="text-[var(--color--secondary)] font-medium text-lg">{feature.title}</h2>
              <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CallToAction;
