import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const AboutOrganizationComponent: React.FC = () => {
  return (
    <>
      <article className="about-organization-component" id="about-organization">
        <div className="about-organization-component-content-container">
          <h1>Who we are!</h1>
          <p>
            We are a team of developers who are passionate about creating
            software solutions that are tailored to meet the needs of our
            clients. We have a team of developers who are experienced in
            developing software solutions that are tailored to meet the needs of
            our clients. We have a team of developers who are experienced in
            developing software solutions that are tailored to meet the needs of
            our clients. We have a team of developers who are experienced in
            developing software solutions that are tailored to meet the needs of
            our clients.
          </p>
          <ul className="socials">
            <li>
              <FaInstagramSquare />
            </li>
            <li>
              <FaFacebookSquare />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaYoutube />
            </li>
          </ul>
        </div>
        <div className="about-organization-component-photo-container">
          <img src="/photos/people-office-work-day_23-2150690143.avif" alt="" />
        </div>
      </article>
      <br />
    </>
  );
};

export default AboutOrganizationComponent;
