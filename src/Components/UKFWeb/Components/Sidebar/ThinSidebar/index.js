import React, {useState} from "react"
import {Link} from "react-router-dom"

import "./style.css"

function ThinSidebar() {

  const [searchIcon, setSearchIcon] = useState("https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802156/UKFoodWeb/Homepage_Misc/searchIconWhite_jii0ue.png")
  const [leaveIcon, setLeaveIcon] = useState("https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802154/UKFoodWeb/Homepage_Misc/leaveIconWhite_tnfagx.svg")

  return (
    <div id="thin-sidebar">

      <Link to="/ukfw">
        <img id="thin-sidebar-logo" src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802154/UKFoodWeb/Homepage_Misc/logoSmall_avk9lj.png" alt="logo" />
      </Link>

      <Link to="/ukfw/search">
        <div
          id="thin-sidebar-search-square"
          onMouseEnter={() => setSearchIcon("https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802156/UKFoodWeb/Homepage_Misc/searchIconNavy_yxp5ju.png")}
          onMouseLeave={() => setSearchIcon("https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802156/UKFoodWeb/Homepage_Misc/searchIconWhite_jii0ue.png")}
        >
          <img id="thin-sidebar-search" src={searchIcon} alt="search" />
        </div>
      </Link>

      <Link to="/">
        <div
          id="thin-sidebar-leave-square"
          onMouseEnter={() => setLeaveIcon("https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802153/UKFoodWeb/Homepage_Misc/leaveIconNavy_ogmzvl.svg")}
          onMouseLeave={() => setLeaveIcon("https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802154/UKFoodWeb/Homepage_Misc/leaveIconWhite_tnfagx.svg")}
        >
          <img id="thin-sidebar-leave" src={leaveIcon} alt="leave" />
        </div>
      </Link>

    </div>
  )
}

export default ThinSidebar
