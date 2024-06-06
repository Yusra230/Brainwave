import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return <div class="footer">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
      <div class="col-md-4 d-flex align-items-center">
        <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
          <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
        </a>
        <span class="mb-3 mb-md-0 color fs-6">© 2024. All rights reserved.</span>
      </div>
  
      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
  
       <a href="https://www.linkedin.com/in/yusra-tariq-6868b7262" target="_blank"  rel="noopener noreferrer"> <button className="btn footer-icons"><FaLinkedin className="fs-5"/></button></a>
        <a href="https://github.com/Yusra230" target="_blank"  rel="noopener noreferrer"><button className="btn footer-icons"><FaGithub className="fs-5"/></button></a>
        <button className="btn footer-icons"><BsInstagram  className="fs-5"/></button>
        <button className="btn footer-icons"><FaFacebook  className="fs-5"/></button>

      </ul>
    </footer>
  </div>
}

export default Footer;