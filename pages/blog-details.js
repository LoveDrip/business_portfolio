import React from "react";
import Layout from "@components/layout";
import HeaderTwo from "@components/header-two";
import BlogContent from "@components/blog-content";
import PageHeader from "@components/page-header";
import Brand from "@components/brand";
import Footer from "@components/footer";
import MobileNav from "@components/mobile-nav";

const BlogDetails = () => {
  return (
    <Layout pageTitle="Blog Details || Besit React || Corporate One page React Template">
      <HeaderTwo />
      <MobileNav />
      <PageHeader title={`Blog Details`} />
      <BlogContent />
      <Brand />
      <Footer />
    </Layout>
  );
};

export default BlogDetails;
