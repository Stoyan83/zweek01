'use client'
import React, { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

interface PostContextType {
  posts: never[];
  setPosts: Dispatch<SetStateAction<never[]>>;
}

const PostContext = createContext<PostContextType>({
  posts: [],
  setPosts: () => {}
});

export const PostProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<never[]>([]);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;
