import React, { useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import IconButton from "@mui/material/IconButton";
export default function BookmarkComponent() {
  const [bookmark, setBookmark] = useState(false);
  const handleBookmark = () => {
    setBookmark(!bookmark);
  };
  return (
    // <IconButton
    //   aria-label="bookmark"
    //   style={{ color: "#7A1CA7" }}
    //   onClick={handleBookmark}
    //   className="bg-white"
    // >
    <div className="text-primary pointer p-1" onClick={handleBookmark}>
      {bookmark ? <BookmarkIcon /> : <BookmarkAddOutlinedIcon />}
      </div>
    //  </IconButton> 
  )
}
