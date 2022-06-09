import React from "react";

const PastEvent = () => (
    <div className="competition_past">
        <h6>Прошедшие</h6>
        <a href="#" className="competition_past-items-viewAll">
            Показать все
        </a>
        <div className="competition_past-items">
            <div className="competition_past-item">
                <div className="competition_past-item-image">
                    <img
                        src="/images/run_default3.jpg"
                        className="rounded img"
                        alt="user-image"
                    />
                </div>
                <div className="competition_past-item-description">
                    <a href="#" className="competition_past-item-name">
                        Московский полумарафон
                    </a>
                    <p className="competition_past-item-date">3 июля 2021 г.</p>
                </div>
            </div>
            <div className="competition_past-item">
                <div className="competition_past-item-image">
                    <img
                        src="/images/run_default3.jpg"
                        className="rounded img"
                        alt="user-image"
                    />
                </div>
                <div className="competition_past-item-description">
                    <a href="#" className="competition_past-item-name">
                        Arkhiz X-run
                    </a>
                    <p className="competition_past-item-date">3 июля 2021 г.</p>
                </div>
            </div>
            <div className="competition_past-item">
                <div className="competition_past-item-image">
                    <img
                        src="/images/run_default3.jpg"
                        className="rounded img"
                        alt="user-image"
                    />
                </div>
                <div className="competition_past-item-description">
                    <a href="#" className="competition_past-item-name">
                        Arkhiz X-run
                    </a>
                    <p className="competition_past-item-date">3 июля 2021 г.</p>
                </div>
            </div>
        </div>
    </div>
);

export default PastEvent;
