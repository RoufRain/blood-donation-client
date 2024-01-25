import React from "react";
import { Link } from "react-router-dom";

const DonationRequestCard = ({ requests }) => {
  const { _id, name, location, donate_date } = requests;

  return (
    <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-up">
      <div className="card-body ">
        <h2 className="card-title font-bold">{name}</h2>
        <h2 className="card-title font-bold">{location}</h2>
        <h2 className="card-title font-bold">{donate_date}</h2>

        <Link to={`/roomDetails/${_id}`}>
          <button className="bg-[#FF3811] font-semibold w-30 rounded-md p-2">
            See Details...
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DonationRequestCard;
