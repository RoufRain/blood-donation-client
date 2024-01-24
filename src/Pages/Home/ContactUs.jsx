import img from "../../assets/homecards/hush-naidoo-jade-photography-Zp7ebyti3MU-unsplash.jpg";
const ContactUs = () => {
  return (
    <div>
      <div className="bg-slate-500">
        <div className="hero min-h-screen bg-base-200">
          <div
            className="hero-content flex-col lg:flex-row"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <img
              src={img}
              className="w-[250px] md:w-[400px] rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-xl font-bold pl-10">Contact with us</h1>

              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="">Your Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="">Your Phone</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="input input-bordered"
                  />
                </div>
                <div className="space-y-2">
                  <label>Details</label> <br></br>
                  <textarea
                    className=" textarea textarea-accent h-24 w-[200px] sm:w-[250px] md:w-[400px]"
                    placeholder="Comment..."
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
