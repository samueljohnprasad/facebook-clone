import "./sidebar.css";
import { RssFeed, School, Event, WorkOutline } from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">feed</span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriends">
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/2.jpeg" />
            <span className="sidebarFriendName">Sam john</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/2.jpeg" />
            <span className="sidebarFriendName">Sam john</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/2.jpeg" />
            <span className="sidebarFriendName">Sam john</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/2.jpeg" />
            <span className="sidebarFriendName">Sam john</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/2.jpeg" />
            <span className="sidebarFriendName">Sam john</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/2.jpeg" />
            <span className="sidebarFriendName">Sam john</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/2.jpeg" />
            <span className="sidebarFriendName">Sam john</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/2.jpeg" />
            <span className="sidebarFriendName">Sam john</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/2.jpeg" />
            <span className="sidebarFriendName">Sam john</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/2.jpeg" />
            <span className="sidebarFriendName">Sam john</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/2.jpeg" />
            <span className="sidebarFriendName">Sam john</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
