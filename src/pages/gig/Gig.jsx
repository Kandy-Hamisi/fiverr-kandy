import { Slider } from 'infinite-react-carousel/lib';
import React from 'react'
import "./Gig.scss";

const Gig = () => {
  return (
    <div className='gig'>
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">FIVERR  Graphics & Design</span>
          <h1>I will create AI generated art for you.</h1>
          <div className="user">
            <img className='pp' src="/img/man.png" alt="" />
            <span>John Doe</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slideToshow={1} className="slider">

            <img src="/tomato.jpg" alt="" />
            <img src="/tomato.jpg" alt="" />
            <img src="/tomato.jpg" alt="" />
            <img src="/tomato.jpg" alt="" />
            
          </Slider>
          <h2>About This Gig</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatum tenetur illo delectus, ex soluta ratione voluptatibus velit quas explicabo aspernatur, sint odio labore sapiente nobis provident. Voluptatum quaerat ad natus sunt illum perspiciatis illo officia nostrum, praesentium iure voluptas animi, itaque explicabo? Quia repellat explicabo dolore ducimus dolorum aliquid odio reiciendis, nemo aut quis laboriosam illum iste exercitationem maiores autem ad soluta dolor, magni et consequuntur atque quam recusandae commodi nulla! Libero eum at beatae tenetur consequatur ratione, fugit soluta? Temporibus, ex ratione. Accusantium, quo aspernatur quae, cupiditate voluptatum exercitationem aperiam quia vero beatae maiores cum rem corporis velit animi repudiandae fugit ducimus eaque sint dolor ea quidem ipsum quos doloremque praesentium. Perspiciatis quos consequuntur repellendus ab magnam in?
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img src="/img/man.png" alt="" />
              <div className="info">
                <span>John Doe</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur expedita in dolorem animi quasi, magni dignissimos, enim maxime optio non dolor porro libero sequi deleniti ullam, corrupti iure id quaerat?</p>
            </div>
          </div>

          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img className='pp' src="/img/man.png" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt quod. Laudantium, ipsam. Harum fugit odio dolore, obcaecati impedit aut. Quas amet voluptate recusandae aut molestias officiis quisquam hic magnam?</p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img className='pp' src="/img/man.png" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt quod. Laudantium, ipsam. Harum fugit odio dolore, obcaecati impedit aut. Quas amet voluptate recusandae aut molestias officiis quisquam hic magnam?</p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img className='pp' src="/img/man.png" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt quod. Laudantium, ipsam. Harum fugit odio dolore, obcaecati impedit aut. Quas amet voluptate recusandae aut molestias officiis quisquam hic magnam?</p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
          </div>
        </div>

        <div className="right">
          <div className="price">
            <h3>1 Ai generated image</h3>
            <h2>$ 59.90</h2>
          </div>
          <p>I will create a unique high quality AI generated image based on the description that you give me</p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 Days Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>2 Days Delivery</span>
            </div>
          </div>
          <button></button>
        </div>
      </div>
    </div>
  )
}

export default Gig