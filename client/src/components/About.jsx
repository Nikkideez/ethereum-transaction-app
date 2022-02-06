import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="p-10 flex flex-col items-center text-center">
        <h1>ABOUT</h1>
        <p>
          This application was built for the purpose of building a simple
          blockchain application. It's main function is to transfer Ethereum
          from one wallet to another. Javascript Mastery's{" "}
          <a
            className="text-green-2 hover:text-pink-2"
            href="https://www.youtube.com/watch?v=Wn_Kb3MR_cU&t=7707s"
          >
            tutorial
          </a>{" "}
          on how to develop a blockchain application was referenced to
          understand the core fundamentals for building a smart contract. The
          Ropsten Test Network is used to host the smart contract, and therefore
          requires Ethereum from the Ropsten Test Network.
        </p>
      </div>
    </section>
  );
};

export default About;
