import React, { useEffect, useState } from "react";
import DonationRequestCard from "./DonationRequestCard";

const DonationRequest = () => {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5003/donationRequest")
      .then((res) => res.json())
      .then((data) => setRequests(data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {requests.map((requests) => (
          <DonationRequestCard key={requests._id} requests={requests}>
            {" "}
          </DonationRequestCard>
        ))}
      </div>
    </div>
  );
};

export default DonationRequest;
