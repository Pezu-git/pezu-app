import React from "react";
import LeftCards from "./LeftCards";
import Training from "./Training";
import Competitions from "./Competitions";
import NewTraining from "./NewTraining";

const Main = () => (
    <main>
        <div className="sport_container">
            <LeftCards />
            <Training />
            <Competitions />
            <NewTraining />
        </div>
    </main>
);

export default Main;
