import React from "react";
import "./reward.css";
import shop from './Rewardimg/4.png';
import earn from './Rewardimg/2.png';
import redeem from './Rewardimg/5.png';
import share from './Rewardimg/6.png';


const reward = () => {
   
    return (
        <div className="wrapper-reward">
            <div className="back-points">
                <div className="img-maker">
                    <img src={shop} alt="" className="points-img" />
                    <h3 className="points-txt">Shop</h3>
                </div>
                <p><i class="arrow"></i></p>
                <div className="img-maker">
                    <img src={earn} alt="" className="points-img" />
                    <h3 className="points-txt">Earn</h3>
                </div>
                <p><i class="arrow"></i></p>
                <div className="img-maker">
                <div className="img-maker-flip">
                    <div className="flip-box">
                        <div className="flip-front" >
                            <img src={redeem} alt="" className="points-img" />
                            <h3 className="points-txt">Redeem</h3>
                        </div>
                        <div className="flip-back">
                            <img src={share} alt="" className="points-img" />
                            <h3 className="points-txt">Share</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default reward;