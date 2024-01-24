import img1 from "../../assets/homecards/national-cancer-institute-egT3xtDu9DQ-unsplash.jpg";
import img2 from "../../assets/homecards/hush-naidoo-jade-photography-Zp7ebyti3MU-unsplash.jpg";
import img3 from "../../assets/homecards/nguy-n-hi-p-ufwC2cmbaaI-unsplash.jpg";

const HomeCard = () => {
  return (
    <div className="grid cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-[80px]">
      {/* div 1 */}
      <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img1} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <div className="card-actions">
            <button className="btn bg-[#ea062b] text-white border-none hover:bg-black hover:text-white mr-2">
              Read More
            </button>
          </div>
        </div>
      </div>
      {/* div 2 */}
      <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img2} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <div className="card-actions">
            <button className="btn bg-[#ea062b] text-white border-none hover:bg-black hover:text-white mr-2">
              Read More
            </button>
          </div>
        </div>
      </div>
      {/* div 3 */}
      <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img3} className="h-[220px] w-[370px] rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <div className="card-actions">
            <button className="btn bg-[#ea062b] text-white border-none hover:bg-black hover:text-white mr-2">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
