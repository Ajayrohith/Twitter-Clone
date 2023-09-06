
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Sidebaroptions from './Sidebaroptions';
import {Button}  from "@mui/material";

function Sidebar(){
  return(
    <div className="sidebar">
    <TwitterIcon className="twitter-icon"/>
    <Sidebaroptions Icon={HomeIcon} text="Home"/>
    <Sidebaroptions Icon={SearchIcon} text="Explore"/>
    <Sidebaroptions Icon={NotificationsIcon} text="Notification"/>
    <Sidebaroptions Icon={MailOutlineIcon}  text="Messages"/>
    <Sidebaroptions Icon={BookmarksIcon}  text="Bookmarks"/>
    <Sidebaroptions Icon={ListAltIcon}  text="Lists"/>
    <Sidebaroptions Icon={PersonOutlineIcon}  text="Profile"/>
    <Sidebaroptions Icon={MoreHorizIcon}  text="More"/>

    <Button variant="outlined"  className="sidebar-tweet" fullWidth>Tweet Here</Button>
    </div>
  );
}

export default Sidebar;