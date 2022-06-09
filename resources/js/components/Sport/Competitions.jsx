import React from "react";
import PastEvent from "./PastEvent";
import FutureEvent from "./FutureEvent";

const Competitions = () => (
    <section className="competition_container">
        <h4 className="competition_header-text">Соревнования</h4>
        <FutureEvent />
        <PastEvent />
    </section>
);

export default Competitions;
