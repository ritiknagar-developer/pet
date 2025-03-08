import React from "react";
import "./Blog.css";
import img19 from "../../Assets/img19.png";
import img20 from "../../Assets/img20.png";
import img21 from "../../Assets/img21.png";
import img22 from "../../Assets/img22.png";
import img23 from "../../Assets/img23.png";
import img30 from "../../Assets/img30.png";


const Blog = () => {
  const articlePage = [
    {
      imageUrl: img21,
      itemText: "5 Signs Your Pet Needs Immediate Vet Attention",
      symbol: "read more..",
    },
    {
      imageUrl: img22,
      itemText: "How to Train Your Puppy: A Step-by-Step Guide",
      symbol: "read more..",
    },
    {
      imageUrl: img23,
      itemText: "Best Nutrition for Your Cat’s Healthy Coat",
      symbol: "read more..",
    },
  ];

  // const previewImg = [
  //   {
  //     paraUrl:'Nutrition & Diet' ,
  //     itemPara:'Best foods for different breeds and ages',
  //   },

  //   {
  //     paraUrl:'Grooming & Hygiene' ,
  //     itemPara:'DIY grooming guides, products, and tips',
  //   },
  //   {
  //     paraUrl:'Pet Parenting Tips' ,
  //     itemPara:'DIY grooming guides, products, and tips',
  //   }
  // ]
  return (
    <div className="blog-container">
      <div className="blog-hero">
        <h1>Pet Care Resources: Your Go-To Guide for Happy, Healthy Pets</h1>
        <div className="blog-img">
          <img src={img19} alt="" />
        </div>
      </div>

      <div className="blog-hero2">
        <div className="hero2-left">
          <h2>Expert Tips and Advice for Every Pet Owner</h2>
          <p>
            Explore our comprehensive library of articles, guides, and videos to
            keep your pets happy, healthy, and thriving.
          </p>
          <button>Start Browsing</button>
          <button className="blog-button">Browse Articles</button>
        </div>

        <div className="blog-right">
          <img src={img20} alt="" />
        </div>
      </div>

      <div className="articles">
        <div className="articles-heading">
          <h3>Featured Articles</h3>
          <p>Stay informed on pet care, training, health, and more.</p>
        </div>
        <div className="article-page-container">
          {articlePage.map((page) => (
            <div className="article-pages">
              <div className="article-img">
                <img src={page.imageUrl} alt="" />
              </div>
              <p className="article-para">{page.itemText}</p>
              <p className="read-more">{page.symbol}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="articles-preview">
        <div className="left-preview">
          <h3>Health & Wellness</h3>
          <div className="preview-para">
            <p>
              {" "}
              <img src={img30} alt="" />
              Vacations
            </p>
            <p>
              <img src={img30} alt="" />
              Preventive care
            </p>
            <p>
              <img src={img30} alt="" />
              common Diseases
            </p>
          </div>
        </div>

        <div className="left-preview">
          <h3>Training & Behavior</h3>
          <div className="preview-para">
            <p>
              <img src={img30} alt="" />
              Tips for obedience{" "}
            </p>
            <p>
              <img src={img30} alt="" />
              Tricks, and resolving behavioral issues
            </p>
            <p>
              <img src={img30} alt="" /> Resolving behavioral issues
            </p>
          </div>
        </div>
      </div>
      <div className="preview2-para">
        <div className="preview2-sec ">
          <h4>Nutrition & Diet</h4>
          <p>Best foods for different breeds and ages</p>
        </div>
        <div className="preview2-sec preview2-bg2">
          <h4>Grooming & Hygiene</h4>
          <p>DIY grooming guides, products, and tips</p>
        </div>
        <div className="preview2-sec preview2-bg3">
          <h4>Pet Parenting Tips</h4>
          <p>First-time owner guides, bonding tips</p>
        </div>
      </div>
      <div className="blog-sec-4">
        {/* <img src={img31} alt="" /> */}
        <h1>Pets Care Resourses</h1>
      </div>
      <div className="blog-last">
        <p>
          Join our growing community of pet enthusiasts and discover the
          ultimate online hub for pets and pet care today!
        </p>
      </div>
    </div>
  );
};

export default Blog;
