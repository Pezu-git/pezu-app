import React from "react";
import UserImages from "./UserImages";
import UserCard from "./UserCard";
import MonthProgressHeader from "./MonthProgressHeader";
import Calendar from "./Calendar";
import Parameters from "./Parameters";

const Main = () => (
    <main>
        <div className="profile_container">
            <UserImages />
            <UserCard />

            <div className="profile_container-progress-info">
                <div className="profile_month-progress">
                    <MonthProgressHeader />
                    <Calendar />
                    <Parameters />
                </div>   
            </div>
        </div>
    </main>
);

export default Main;
