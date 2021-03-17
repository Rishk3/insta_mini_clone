import React, { useState, useEffect } from "react";
import PostImg from "./PostImg";
import Avatar from "@material-ui/core/Avatar";
import RateReviewIcon from "@material-ui/icons/RateReview";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import WebIcon from "@material-ui/icons/Web";
import GetAppIcon from "@material-ui/icons/GetApp";
import { NavLink } from "react-router-dom";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import WrapTextIcon from "@material-ui/icons/WrapText";
import ImageUpload from "./ImageUpload";

import { storageRef } from "../firebase/firebase";
import { useDataLayerValue } from "../context_api/DataLayer";

export default function Posts() {
  const [{ allPostCount }, dispatch] = useDataLayerValue();
  const [totalPosts, settotalPosts] = useState([]);

  useEffect(() => {
    var listRef = storageRef.child("images");

    // Find all the prefixes and items.
    listRef
      .listAll()
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          console.log("prefix", folderRef);
        });
        res.items.forEach((itemRef) => {
          itemRef.getDownloadURL().then((url) => {
            // console.log(url);
            settotalPosts((totalPosts) => [...totalPosts, url]);
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(totalPosts);

  useEffect(() => {
    dispatch({
      type: "SET_ALLPOST",
      allPostCount: totalPosts.length,
    });
  }, [totalPosts]);
  const length = totalPosts.length;
  return (
    <div className="posts">
      <div className="categories">
        <div className="category">
          <div className="circle_menu">
            <RateReviewIcon style={{ fontSize: "2.3rem" }} />
          </div>
          <p>Reviews</p>
        </div>
        <div className="category">
          <div className="circle_menu">
            <AccessibilityIcon style={{ fontSize: "2.3rem" }} />
          </div>
          <p>Campus</p>
        </div>
        <div className="category">
          <div className="circle_menu">
            <WebIcon style={{ fontSize: "2.3rem" }} />
          </div>
          <p>Reviews</p>
        </div>
        <div className="category">
          <div className="circle_menu">
            <GetAppIcon style={{ fontSize: "2.3rem" }} />
          </div>
          <p>Reviews</p>
        </div>
        <div className="category">
          <ImageUpload />
          <h3>Upload</h3>
        </div>
      </div>
      {/* //navbar post */}
      <div className="navtypes">
        <div className="nav_link">
          <NavLink to="/posts" activeClassName="active">
            <AllInboxIcon /> POSTS
          </NavLink>
        </div>
        <div className="nav_link">
          <NavLink to="/reels" activeClassName="active">
            <WrapTextIcon /> REELS
          </NavLink>
        </div>
        <div className="nav_link">
          <NavLink to="/igtv" activeClassName="active">
            <LiveTvIcon /> IGTV
          </NavLink>
        </div>
        <div className="nav_link">
          <NavLink to="/saved" activeClassName="active">
            <BookmarkIcon /> SAVED
          </NavLink>
        </div>
        <div className="nav_link">
          <NavLink to="/tagged" activeClassName="active">
            <LocalOfferIcon /> TAGGED
          </NavLink>
        </div>
      </div>
      <main>
        <div className="container">
          <div></div>
          <div className="gallery">
            {totalPosts?.map((url) => {
              return <PostImg key={url} imgUrl={url} />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
