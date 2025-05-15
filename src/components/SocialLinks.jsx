import { FaGithub ,FaReddit} from "react-icons/fa";
import { FaXTwitter,FaLinkedin } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div className="mt-4 flex gap-4 lg:gap-8 justify-center items-center text-white text-xl lg:text-4xl">

      <a
        href="https://github.com/DebarimaBasu"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-700 hover:text-pink-500 transition duration-300"
      >
        <FaGithub />
      </a>
      <a
        href="https://x.com/debarima_basu"
        target="_blank"
        rel="noopener noreferrer"
       className="text-purple-700 hover:text-pink-500 transition duration-300"
      >
        <FaXTwitter />
      </a>
      <a
        href="https://www.linkedin.com/in/debarimabasu"
        target="_blank"
        rel="noopener noreferrer"
       className="text-purple-700 hover:text-pink-500 transition duration-300"
      >
        < FaLinkedin />
      </a>
       <a
        href="https://www.reddit.com/user/debarimabasu"
        target="_blank"
        rel="noopener noreferrer"
       className="text-purple-700 hover:text-pink-500 transition duration-300"
      >
        < FaReddit />
      </a>
     
    </div>
  );
};

export default SocialLinks;
