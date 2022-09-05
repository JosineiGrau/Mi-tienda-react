import "./Error404.css";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Error 404 Page not Found</h1>
        <Link to="/">
          come home<i className="fa-solid fa-shop"></i>
        </Link>
      </div>
    </section>
  );
};
export default Error404;
