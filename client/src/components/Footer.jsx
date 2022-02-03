import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="text-center p-10">
      <h1>
        Built with reference to Javascript Mastery's{" "}
        <a
          className="text-green-2"
          href="https://www.youtube.com/watch?v=Wn_Kb3MR_cU&t=7707s"
        >
          tutorial
        </a>{" "}
        on how to develop a blockchain application.
      </h1>
      <p className="flex sm:flex-row flex-col justify-center items-center content-center p-2" >
        <BsFillPersonFill className="display: inline-block" />
        <span className="sm:pl-0.5 sm:pr-6">Nikhil Deo</span>{" "}
        <AiOutlineMail className="display: inline-block" />{" "}
        <span className="sm:pl-0.5">n.deo@hotmail.co.uk</span>
      </p>
    </div>
  );
};

export default Footer;
