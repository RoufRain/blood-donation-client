import SecondBanner from "../Home/SecondBanner";
import img1 from "../../assets/homecards/national-cancer-institute-egT3xtDu9DQ-unsplash.jpg";
import img2 from "../../assets/homecards/nguy-n-hi-p-ufwC2cmbaaI-unsplash.jpg";

const Blog = () => {
  return (
    <div>
      <SecondBanner> </SecondBanner>
      <div className="mt-20 bg-slate-50 mb-10">
        <div className="grid lg:grid-cols-2 mt-4 gap-3 mb-10">
          <div className="card bg-base-100 shadow-xl" data-aos="fade-up">
            <figure className="px-8 pt-10">
              <img
                src={img1}
                alt="image not found"
                className="h-[300px] w-full rounded-xl"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title font-bold">
                Blood Donation Appoinment
              </h2>
              <p className="  text-md">
                Preparing for a blood donation appointment involves simple yet
                crucial steps to ensure a positive experience. Start by staying
                well-hydrated in the days leading up to your donation, enhancing
                blood flow. Maintain a balanced diet, focusing on iron-rich
                foods like leafy greens and proteins to optimize your blood's
                composition. On the day of donation, avoid fatty foods and get a
                good night's sleep for overall well-being. Wear comfortable
                clothing with sleeves that can be easily rolled up, and bring a
                valid ID for identification. Be honest about medications during
                the pre-donation screening, and communicate openly about your
                health. After donation, plan for some rest and recovery time,
                avoiding strenuous activities for the day. Acknowledge the
                significance of your contribution, recognizing that your
                donation has the potential to save lives. This thoughtful
                preparation ensures a smooth process, making a positive impact
                on both
              </p>
              <div>
                <button className="p-3 rounded-md  btn-outline border border-red-600 bg-red-600 text-white">
                  Reade More
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl" data-aos="fade-up">
            <figure className="px-8 pt-10">
              <img
                src={img2}
                alt="image not found"
                className="h-[300px] w-full rounded-xl"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title font-bold">Donation Reason</h2>
              <p className="  text-md">
                Preparing for a blood donation appointment involves simple yet
                crucial steps to ensure a positive experience. Start by staying
                well-hydrated in the days leading up to your donation, enhancing
                blood flow. Maintain a balanced diet, focusing on iron-rich
                foods like leafy greens and proteins to optimize your blood's
                composition. On the day of donation, avoid fatty foods and get a
                good night's sleep for overall well-being. Wear comfortable
                clothing with sleeves that can be easily rolled up, and bring a
                valid ID for identification. Be honest about medications during
                the pre-donation screening, and communicate openly about your
                health. After donation, plan for some rest and recovery time,
                avoiding strenuous activities for the day. Acknowledge the
                significance of your contribution, recognizing that your
                donation has the potential to save lives. This thoughtful
                preparation ensures a smooth process, making a positive impact
                on both
              </p>
              <div>
                <button className="p-3 rounded-md  btn-outline border border-red-600 bg-red-600 text-white">
                  Reade More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
