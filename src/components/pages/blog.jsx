import React from "react";
import { connect } from "react-redux";
import Contacts from "../elements/contacts";

const BlogArticlePreview = (props) => {
  return (
    <div className={ `blog-posts__item--${props.pos}`}>
      <h2 className={"blog-post__header"}>
        <a href={"#article"} className={"link"}>
          {props.post.name}
        </a>
      </h2>
      <p>{props.post.description}</p>
      <ul className={"blog-info__list"}>
        <li className={"blog-info__item  blog-info__item--created"}>{props.post.created}</li>
        <li className={"blog-info__item  blog-info__item--reading-time"}>{props.post.readingTime}</li>
      </ul>
    </div>
  );
};

const BlogPage = (props) => {
  return (
    <div>
      <ul className={"blog-posts"}>
        {props.posts.map((post, index) => {
          const pos = index % 2 === 0 ? "left" : "right";
          return (
            <li
              className={`recent-block recent-block--${pos} blog-posts__item `}
              key={post.description}
            >
              <BlogArticlePreview post={post} pos={pos}/>
            </li>
          );
        })}
      </ul>
      <Contacts />
    </div>
  );
};

export default connect((state) => ({
  posts: state.content.blogPageContent,
}))(BlogPage);
