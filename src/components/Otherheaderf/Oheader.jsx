import classes from "./Oheader.module.css";
import { Link } from "react-router-dom";
import logo from "../../UI/images/Logo2.png";

const Oheader = ({
  listimg,
  listone,
  listtwo,
  listthree,
  listfour,
  listfive,
  rightlist,
  rightlistbtn,
}) => {
  // const [modalResponse, setmodalResponse] = useState(false);

  // function openmodal() {
  //   setmodalResponse(true);
  // }

  // function closemodal() {
  //   setmodalResponse(false);
  // }

  return (
    <nav className={classes.nav}>
      <div className={classes["resume__heading__sub"]}>
        <img src={logo} alt="logo" />
      </div>

      <ul className={classes["nav__ul"]}>
        <Link
          to="/"
          className={`${classes["nav__link--active"]} ${classes["nav__li"]}`}
        >
          Home
        </Link>

        <Link className={classes["nav__li"]} to="/Campaigns">
          Campaigns
        </Link>

        <Link className={classes["nav__li"]} to="/Aboutus">
          About us
        </Link>
        <Link className={classes["nav__li"]} to="/Faq">
          FAQ's
        </Link>
        <Link className={classes["nav__li"]} to="/Blog">
          Blog
        </Link>
      </ul>

      <div className={classes["nav__actions"]}>
        <Link to="">
          <button className={`${classes.btn} ${classes["btn__stroke"]}`}>
            Register your NGO
          </button>
        </Link>

        <Link to="/Donate">
          <button className={`${classes.btn} ${classes["btn__full"]}`}>
            Donate Now
          </button>
        </Link>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classes.menu}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        // onClick={props.onClick}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h8m-8 6h16"
        />
      </svg>
    </nav>

    // <nav className="header">
    //   <div className="flex justify-center items-center">
    //     <div>Logo</div>
    //     <div className=" font-medium">betterhope</div>
    //   </div>
    //   <div className="list">
    //     {/* <li>Home</li> */}
    //     <Link to="/">
    //       <li>{listone}</li>
    //     </Link>
    //     {/* <li>Campaigns</li> */}
    //     <Link to="/Campaigns">
    //       <li>{listtwo}</li>
    //     </Link>
    //     <Link to="/About Us">
    //       <li>{listthree}</li>
    //     </Link>
    //     <Link to="/Faq">
    //       <li>{listfour}</li>
    //     </Link>
    //     <Link to="/Blog">
    //       <li>{listfive}</li>
    //     </Link>
    //   </div>

    //   <div className="rightheader">
    //     <h4>{rightlist}</h4>
    //     <Link to="/Donate">
    //       <button className="hbutton">{rightlistbtn}</button>
    //     </Link>
    //     <div onClick={openmodal} className="menu">
    //       <AiOutlineMenu />
    //     </div>
    //   </div>

    //   {modalResponse ? <Modal /> : null}
    //   {modalResponse ? <Modal onClick={closemodal} /> : null}
    // </nav>
  );
};

export default Oheader;
