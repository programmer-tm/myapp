import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { err, getNews, loader } from "../redux/redusers/newsReducer/newsSelector";
import { loadNews } from "../redux/redusers/newsReducer/newsReducer";

function Home() {
  const News = useSelector(getNews);
  const dispatch = useDispatch();
  const loading = useSelector(loader);
  const errors = useSelector(err);

  useEffect(()=>{
    dispatch(loadNews())
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return (
      <div>Loading...</div>
    )
  }

  if (errors) {
    return (
      <div>{errors}</div>
    )
  } else {
    return (
      <div>
        {News.map((now) => (
          <div key={now.id}>
            <h2>{now.title}</h2>
            <p>{now.body}</p>
          </div>
        ))}
      </div>
    );
  }
  }
    
  
  export default Home;