import React, { createContext, useState, useContext } from 'react';


const LikeContext = createContext();

export const useLikeContext = () => {
  return useContext(LikeContext);
};

const LikeProvider = ({ children }) => {
  const [blogLikes, setBlogLikes] = useState({});

  const handleLike = (blogId) => {
    setBlogLikes((prevLikes) => ({
      ...prevLikes,
      [blogId]: {
        likes: (prevLikes[blogId]?.likes || 0) + (prevLikes[blogId]?.liked ? -1 : 1),
        liked: !prevLikes[blogId]?.liked,
      },
    }));
  };

  return (
    <LikeContext.Provider value={{ blogLikes, handleLike }}>
      {children}
    </LikeContext.Provider>
  );
};

export default LikeProvider;


