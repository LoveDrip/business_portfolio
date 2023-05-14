import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "@components/blog-card";
import { BLOG_PAGE_DATA } from "@data/index";
const BlogPage = () => {
  return (
    <section className="blog-one blog-one__blog-page">
      <Container>
        <Row>
          {BLOG_PAGE_DATA.map((blog, index) => (
            <Col lg={4} md={6} sm={12} key={`blog-card-key-${index}`}>
              <BlogCard data={blog} />
            </Col>
          ))}
        </Row>
        <div className="text-center load-more__box">
          <Link href="/blog">
            <a className="thm-btn">
              Load More <i className="fa fa-arrow-circle-right"></i>
            </a>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default BlogPage;
