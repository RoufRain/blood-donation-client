import bg_image from "../../assets/nguy-n-hi-p-2rNHliX6XHk-unsplash.jpg";

const SecondBanner = () => {
  return (
    <div
      className="hero "
      //   style={{ backgroundImage: { bg_image } }}
    >
      <img
        src={bg_image}
        className="w-full h-[600px] md:h-[350px] rounded-lg"
      />
      <div className="hero-overlay bg-opacity-60"></div>
      {/* <div className="hero-content text-center text-neutral-content">
          <div
            className="max-w-md"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <h1 className="mb-5 text-5xl font-bold">
              {" "}
              Donate Blood , Save Life!
            </h1>
  
            <div className="space-x-2">
              <button className="p-3 rounded-md btn-outline border text-white">
                Join as a Donor
              </button>
              <button className="p-3 rounded-md btn-outline border text-white">
                Search Donor
              </button>
            </div>
          </div>
        </div> */}
    </div>
  );
};

export default SecondBanner;
