import React from "react";

const Calendar = () => (
    <div className="profile_month-progress-calendar">
    <table className="table table-borderless text-center">
        <thead>
            <tr>
                <td scope="col">
                    <div className="weekday">П</div>
                </td>
                <td scope="col">
                    <div className="weekday">В</div>
                </td>
                <td scope="col">
                    <div className="weekday">С</div>
                </td>
                <td scope="col">
                    <div className="weekday">Ч</div>
                </td>
                <td scope="col">
                    <div className="weekday">П</div>
                </td>
                <td scope="col">
                    <div className="weekday">С</div>
                </td>
                <td scope="col">
                    <div className="weekday">В</div>
                </td>
                <td scope="col">
                    <div className="weekday"></div>
                </td>
                <td scope="col">
                    <div className="weekday"></div>
                </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="day-wraper">
                    <span className="day">1</span>
                    <span
                        className="activity-indicator"
                        style={{
                            height: "10px",
                            width: "10px",
                        }}
                    ></span>
                </td>
                <td className="day-wraper">
                    <span className="day">2</span>
                    <span className="activity-indicator"></span>
                </td>
                <td className="day-wraper">
                    <span className="day">3</span>
                    <span className="activity-indicator"></span>
                </td>
                <td className="day-wraper">
                    <span className="day">4</span>
                    <span className="activity-indicator"></span>
                </td>
                <td className="day-wraper">
                    <span className="day">5</span>
                    <span className="activity-indicator"></span>
                </td>
                <td className="day-wraper">
                    <span className="day">6</span>
                    <span
                        className="activity-indicator"
                        style={{
                            height: "10px",
                            width: "10px",
                        }}
                    ></span>
                </td>
                <td className="day-wraper">
                    <span className="day">7</span>
                    <span className="activity-indicator"></span>
                </td>
                <td className="day-wraper" colSpan="2">
                    <span className="week_activity-duration">
                        1ч.15мин.
                    </span>
                </td>
            </tr>
            <tr>
                <td className="day-wraper">
                    <span className="day">8</span>
                    <span className="activity-indicator"></span>
                </td>
                <td className="day-wraper">
                    <span className="day">9</span>
                    <span
                        className="activity-indicator"
                        style={{
                            height: "10px",
                            width: "10px",
                        }}
                    ></span>
                </td>
                <td className="day-wraper">
                    <span className="day">10</span>
                    <span className="activity-indicator"></span>
                </td>
                <td className="day-wraper">
                    <span className="day">11</span>
                    <span className="activity-indicator"></span>
                </td>
                <td className="day-wraper">
                    <span className="day">12</span>
                    <span className="activity-indicator"></span>
                </td>
                <td className="day-wraper">
                    <span className="day">13</span>
                    <span className="activity-indicator"></span>
                </td>
                <td className="day-wraper">
                    <span className="day">14</span>
                    <span className="activity-indicator"></span>
                </td>
                <td className="day-wraper" colSpan="2">
                    <span className="week_activity-duration">
                        0ч.25мин.
                    </span>
                </td>
            </tr>
            <tr>
                <td className="day-wraper">
                    <span className="day">15</span>
                    <span className="activity-indicator"></span>
                </td>
                <td className="day-wraper">
                    <span className="day">16</span>
                    <span className="activity-indicator"></span>
                </td>
                <td className="day-wraper">
                    <span className="day">17</span>
                    <span className="activity-indicator"></span>
                </td>
                <td className="day-wraper">
                    <span className="day">18</span>
                    <span className="activity-indicator"></span>
                </td>
                <td className="day-wraper">
                    <span className="day">19</span>
                    <span className="activity-indicator"></span>
                </td>
                <td className="day-wraper">
                    <span className="day">20</span>
                    <span className="activity-indicator"></span>
                </td>
                <td className="day-wraper">
                    <span className="day">21</span>
                    <span className="activity-indicator"></span>
                </td>
                <td className="day-wraper" colSpan="2">
                    <span className="week_activity-duration">
                        0ч.0мин.
                    </span>
                </td>
            </tr>
            <tr>
                <td className="day-wraper">
                    <span className="day">22</span>
                    <span className="activity-indicator"></span>
                </td>
                <td className="day-wraper">
                    <span className="day">23</span>
                    <span className="activity-indicator"></span>
                </td>
                <td className="day-wraper">
                    <span className="day">24</span>
                    <span className="activity-indicator"></span>
                </td>
                <td className="day-wraper">
                    <span className="day">25</span>
                    <span className="activity-indicator"></span>
                </td>
                <td className="day-wraper">
                    <span className="day">26</span>
                    <span className="activity-indicator"></span>
                </td>
                <td className="day-wraper">
                    <span className="day">27</span>
                    <span className="activity-indicator"></span>
                </td>
                <td className="day-wraper">
                    <span className="day">28</span>
                    <span
                        className="activity-indicator"
                        style={{
                            height: "10px",
                            width: "10px",
                        }}
                    ></span>
                </td>
                <td className="day-wraper" colSpan="2">
                    <span className="week_activity-duration">
                        0ч.45мин.
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
</div>
)

export default Calendar;