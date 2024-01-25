import React from "react";

const Registration = () => {
  return (
    <div className="bg-third mb-16 w-full">
      <div className="flex-col max-w-6xl bg-white p-24  mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-poppins font-bold">
            Create a Donation Request
          </h1>
        </div>
        <div className="flex-shrink-0 w-full">
          <form>
            <div className="flex gap-6">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Requester Email*</span>
                </label>
                <input
                  disabled
                  type="text"
                  name="requester-email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Requester Name*</span>
                </label>
                <input
                  disabled
                  type="text"
                  name="requester-name"
                  className="input input-bordered"
                />
              </div>
            </div>

            <div className="flex gap-6">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Recipient Name</span>
                </label>
                <input
                  type="text"
                  name="recipient-name"
                  placeholder="Recipient Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Blood Group Needed*</span>
                </label>

                <label>
                  <select
                    name="group"
                    className="select select-bordered w-full"
                    defaultValue=""
                  >
                    <option disabled value="">
                      Blood Group Needed
                    </option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Recipient District*</span>
                </label>
                <select
                  name="district"
                  className="select select-bordered w-full"
                  defaultValue=""
                >
                  <option disabled value="">
                    Select District
                  </option>
                </select>
              </div>

              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Recipient Upazila*</span>
                </label>
                <select
                  className="input input-bordered"
                  required
                  name="upazila"
                  defaultValue=""
                >
                  <option disabled value="">
                    {" "}
                    Upazila
                  </option>
                </select>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Places Name</span>
                </label>
                <input
                  type="text"
                  name="hospitalName"
                  placeholder="Hospital Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Full Address</span>
                </label>
                <input
                  type="text"
                  name="fullAddress"
                  placeholder="Full Address"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Donation Date</span>
                </label>
                <input
                  type="date"
                  name="donationDate"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Donation Time*</span>
                </label>
                <input
                  type="time"
                  name="donationTime"
                  className="input input-bordered"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Request Message</span>
              </label>
              <textarea
                name="requestMessage"
                placeholder="Enter your request message"
                className="textarea textarea-bordered h-24"
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn text-white hover:text-gray-800 btn-block bg-main"
              >
                Add Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
