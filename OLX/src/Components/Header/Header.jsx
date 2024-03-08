import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase/config';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../../Store/FirebaseContext';
import { useNavigate } from 'react-router-dom';
function Header() {

  const {user} = useContext(AuthContext)
  const navigate = useNavigate()


  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>

        <div className="loginPage">
         <span>{user ? (
            <span>{user.displayName}</span>
          ) : (
            <Link to="/login">Login</Link>
          )}</span>
          <hr />
        </div>

      

{user && <span style={{cursor:'pointer'}} onClick={()=>{
          signOut(auth).then(()=>{
            navigate('/login')
          })
        }}>Logout </span>}

        <div onClick={()=>navigate('/create')} className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span >SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
