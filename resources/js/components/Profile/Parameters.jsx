import React from "react";
import RunParam from "./RunParam";

const Parameters = () => (
    <div className="my_parameters">
        <div className="process_card-inset param-card_items">
            <div className="run process_card-inset-item param-card active-card" >
                <a href="#" title="running_icon icons">
                    <img
                        src="/images/shoes.png"
                        width="30"
                        height="30"
                        className="rounded"
                        alt="user-image"
                    />
                </a>
            </div>
            <div className="bike process_card-inset-item param-card">
                <a href="#" title="bike_icon icons">
                    <img
                        src="/images/bicycle.png"
                        width="30"
                        height="30"
                        className="rounded"
                        alt="user-image"
                    />
                </a>
            </div>
            <div className="swim process_card-inset-item param-card">
                <a href="#" title="swim_icon icons">
                    <img
                        src="/images/swimming.png"
                        width="30"
                        height="30"
                        className="rounded"
                        alt="user-image"
                    />
                </a>
            </div>
        </div>
        <RunParam />
    </div>
);

export default Parameters;
