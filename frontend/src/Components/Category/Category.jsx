import React from "react"
import "./Category.css"

export default function Category(){
    return(
        <div className="grey-background mt-5 mb-5">
<div className="container">
  <div className="row">
    <div className="col my-3">
      <h3>Featured categories</h3>
      <p>Our hot drops, selected with love and passion.</p>
    </div>
  </div>
  <div className="row">
    <div className="col-sm-3">
      <div className="article-box">
        <a href="/category/facewash">
          <div className="image"><img src="/category/c1.png" alt="" /></div>
          <div className="description">
            <div className="name">Face Wash</div>
            <div className="text-more">See more</div>
          </div>
        </a>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="article-box">
        <a href="/category/babycare">
          <div className="image"><img src="/category/c2.png"alt=""/></div>
          <div className="description">
            <div className="name">Baby Care</div>
            <div className="text-more">See more</div>
          </div>
        </a>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="article-box">
        <a href="/category/lipstick">
          <div className="image"><img src="/category/c3.png"alt=""/></div>
          <div className="description">
            <div className="name">Lipstick's</div>
            <div className="text-more">See more</div>
          </div>
        </a>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="article-box">
        <a href="/category/shaving">
          <div className="image"><img src="/category/c4.png" alt=""/></div>
          <div className="description">
            <div className="name">Shaving Foam</div>
            <div className="text-more">See more</div>
          </div>
        </a>
      </div>
    </div> 
    
  </div>
</div>
</div>
    )
}