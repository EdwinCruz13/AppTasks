import { React } from "react";
import { Link } from "react-router-dom";


//import components
import { Aside } from "../../components/aside/Aside";
import { Navbar } from "../../components/navbar/Navbar";

export const Profile = () => {
  return (
    <>
      <section className="container">
        <Aside />
        <div className="section-body">
          <Navbar />
          <div className="wrap-elemntary">
            i am the profile
          </div>
        </div>
      </section>
    </>
  );
};
