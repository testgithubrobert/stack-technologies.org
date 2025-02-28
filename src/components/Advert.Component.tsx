import React from "react";

const AdvertComponent: React.FC = () => {
  return (
    <>
      <article className="advert-component">
        <div className="advert-component-content">
          <aside>
            <h1>Lets Build Your First Great Site!</h1>
            <p>
              Do you need a unique software solution for your company? We know
              how to help you!
            </p>
            <article>
              <a href="/#organization-legal-information">
                <button type="button">Get In Touch</button>
              </a>
              <button type="button">Learn More</button>
            </article>
          </aside>
        </div>
      </article>
      <br />
    </>
  );
};

export default AdvertComponent;
