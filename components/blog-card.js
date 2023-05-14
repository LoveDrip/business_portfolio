import React from "react";
import Link from "next/link";
const BlogCard = ({ data }) => {
  const { image, category, author, date, title, text, link } = data;
  return (
    <div className="blog-one__single">
      <div className="blog-one__image">
        <img src={image} alt={title} />
        <span>{category}</span>
      </div>
      <div className="blog-one__content">
        <ul className="list-unstyled blog-one__meta">
          <li>
            <Link href={link}>
              <a>
                <i className="fa fa-user"></i>
                {author}
              </a>
            </Link>
          </li>
          <li>
            <Link href={link}>
              <a>
                <i className="fa fa-comment"></i>
                {date}
              </a>
            </Link>
          </li>
        </ul>
        <h3>
          <a href={link}>{title}</a>
        </h3>
        <p>{text}</p>
        <Link href={link}>
          <a className="blog-one__more">
            Read More <i className="fa fa-long-arrow-alt-right"></i>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
