import React from 'react';
import notFoundImage from '../../public/image/404.png';
import { Link} from 'react-router-dom';


const NotFound = () => (
    <div>
      <div className="image_div">
        <Link to="/">
          <button className="goToHomeBtn">Go To Home</button>
        </Link>
        <img className="image" src={notFoundImage} alt="404!" />
      </div>
    </div>
);

export default NotFound;
  