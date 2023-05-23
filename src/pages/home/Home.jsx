import React from 'react'
import CatCard from '../../components/catCard/CatCard'
import Featured from '../../components/featured/Featured'
import ProjectCard from '../../components/projectCard/ProjectCard'
import Slide from '../../components/Slide/Slide'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import { cards, projects } from '../../data'
import "./Home.scss"

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {
          cards.map(card => (
            <CatCard key={card.id} item={card} />
          ))
        }
      </Slide>

      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates, 
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates, 
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates, 
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>fiverr business</h1>
            <h1>A business solution designed for teams</h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to business
            </p>
            <div className='title'>
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className='title'>
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className='title'>
              <img src="./img/check.png" alt="" />
              Manager teamwork and boost productivity
            </div>

            <button>Explore Fiverr Business</button>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>

      <Slide slidesToShow={4} arrowsScroll={4}>
        {
          projects.map(card => (
            <ProjectCard key={card.id} item={card} />
          ))
        }
      </Slide>

    </div>
  )
}

export default Home