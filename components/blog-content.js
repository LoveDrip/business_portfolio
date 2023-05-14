import React from "react";
import blogDetailsImage1 from "@images/blog/blog-d-1.jpg";
import blogDetailsImage2 from "@images/blog/blog-d-2.jpg";
import footerGallery1 from "@images/resources/footer-g-1-1.jpg";
import footerGallery2 from "@images/resources/footer-g-1-2.jpg";
import footerGallery3 from "@images/resources/footer-g-1-3.jpg";
const BlogContent = () => {
  return (
    <section className="blog-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-one__single">
              <div className="blog-one__image">
                <img src={blogDetailsImage1} alt="" />
                <span>Technology</span>
              </div>

              <div className="blog-one__content">
                <ul className="list-unstyled blog-one__meta">
                  <li>
                    <a href="#">
                      <i className="fa fa-user"></i>Endith Smith
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-comment"></i>Aug 1, 2020
                    </a>
                  </li>
                </ul>

                <h3>
                  <a href="#">She security risks of owne is change package</a>
                </h3>
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                </p>
                <p>
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, going forward, a
                  new normal that has evolved from generation X is on the runway
                  heading towards a streamlined cloud solution. User generated
                  content in real-time will have multiple touchpoints for
                  offshoring.
                </p>
                <p>
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs from DevOps. Nanotechnology immersion
                  along the information highway will close the loop on focusing
                  solely on the bottom line.
                </p>
                <div className="row mt-4 mb-3">
                  <div className="col-md-5">
                    <img src={blogDetailsImage2} className="img-fluid" alt="" />
                  </div>
                  <div className="col-md-7">
                    <p>
                      Podcasting operational change management inside of
                      workflows to establish a framework. Taking seamless key
                      performance indicators offline to maximise the long tail.
                      Keeping your eye on the ball while performing a deep dive
                      on the start-up mentality to derive convergence on
                      cross-platform integration.
                    </p>
                  </div>
                </div>
                <p>
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate B2C users
                  after installed base benefits. Dramatically visualize customer
                  directed convergence without revolutionary ROI.
                </p>
                <p>
                  Efficiently unleash cross-media information without
                  cross-media value. Quickly maximize timely deliverables for
                  real-time schemas. Dramatically maintain clicks-and-mortar
                  solutions without functional solutions.
                </p>
              </div>
            </div>
            <div className="blog-one__share">
              <div className="blog-one__tags">
                <span>Tags:</span>
                <a href="#">Business,</a>
                <a href="#">Service,</a>
                <a href="#">Corporate</a>
              </div>
              <div className="blog-one__social">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <hr className="blog-one__hr" />
            <div className="blog-one__post-paginations">
              <a href="#">
                <span>Prev Post: </span>She security risks of owne is change
                package
              </a>
              <a href="#">
                <span>Next Post: </span>Leverage agile frameworks to provide a
                robust
              </a>
            </div>
            <div className="comment-one">
              <div className="block-title text-left">
                <h3>2 Comments</h3>
              </div>

              <div className="comment-one__single">
                <i className="fa fa-user"></i>
                <div className="comment-one__content">
                  <h3>Hilda Hughes</h3>
                  <span>17 Nov. 2020</span>
                  <hr />
                  <p>
                    Leverage agile frameworks to provide a robust synopsis for
                    high level overviews. Iterative approaches to corporate
                    strategy foster collaborative thinking to further the
                    overall value proposition. Organically grow the holistic
                    world view of disruptive innovation via workplace diversity
                    and empowerment.
                  </p>
                  <a href="#" className="thm-btn">
                    Reply
                  </a>
                </div>
              </div>
              <div className="comment-one__single">
                <i className="fa fa-user"></i>
                <div className="comment-one__content">
                  <h3>Grace Christensen</h3>
                  <span>22 Nov. 2020</span>
                  <hr />
                  <p>
                    Leverage agile frameworks to provide a robust synopsis for
                    high level overviews. Iterative approaches to corporate
                    strategy foster collaborative thinking to further the
                    overall value proposition. Organically grow the holistic
                    world view of disruptive innovation via workplace diversity
                    and empowerment.
                  </p>
                  <a href="#" className="thm-btn">
                    Reply
                  </a>
                </div>
              </div>
            </div>
            <div className="comment-form">
              <div className="block-title text-left">
                <h3>Leave a Comment</h3>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="Your Email" />
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="Website" />
                </div>
                <div className="col-md-12">
                  <textarea placeholder="Comment Message"></textarea>
                </div>
                <div className="col-md-12">
                  <button type="submit" className="thm-btn">
                    Submit Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-sidebar">
              <div className="blog-sidebar__single blog-sidebar__search">
                <form action="#">
                  <input type="text" placeholder="Search Here..." />
                  <button type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="blog-sidebar__single blog-sidebar__categories">
                <h3>Categories</h3>
                <ul className="list-unstyled blog-sidebar__categories-list">
                  <li>
                    <a href="#">Business</a>
                  </li>
                  <li>
                    <a href="#">Corporate</a>
                  </li>
                  <li>
                    <a href="#">Trading</a>
                  </li>
                  <li>
                    <a href="#">Analysis</a>
                  </li>
                  <li>
                    <a href="#">Statics</a>
                  </li>
                </ul>
              </div>
              <div className="blog-sidebar__single blog-sidebar__posts">
                <h3>Recent Posts</h3>
                <ul className="list-unstyled blog-sidebar__posts-list">
                  <li>
                    <img src={footerGallery1} alt="" />
                    <div className="blog-sidebar__posts-content">
                      <h4>
                        <a href="#">
                          She security risks of owne is change package
                        </a>
                      </h4>
                      <span>Aug 1, 2020</span>
                    </div>
                  </li>
                  <li>
                    <img src={footerGallery2} alt="" />
                    <div className="blog-sidebar__posts-content">
                      <h4>
                        <a href="#">
                          Leverage agile frameworks to provide a robust
                        </a>
                      </h4>
                      <span>Aug 1, 2020</span>
                    </div>
                  </li>
                  <li>
                    <img src={footerGallery3} alt="" />
                    <div className="blog-sidebar__posts-content">
                      <h4>
                        <a href="#">
                          Bring to the table win-win survival strategies to
                          ensure.
                        </a>
                      </h4>
                      <span>Aug 1, 2020</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="blog-sidebar__single blog-sidebar__tags">
                <h3>Tags</h3>
                <ul className="list-unstyled blog-sidebar__tags-list">
                  <li>
                    <a href="#">Business,</a>
                  </li>
                  <li>
                    <a href="#">Corporate,</a>
                  </li>
                  <li>
                    <a href="#">Trading,</a>
                  </li>
                  <li>
                    <a href="#">Analysis,</a>
                  </li>
                  <li>
                    <a href="#">framework,</a>
                  </li>
                  <li>
                    <a href="#">WordPress,</a>
                  </li>
                  <li>
                    <a href="#">Statics</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
