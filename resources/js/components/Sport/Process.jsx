import React from "react";

const Process = () => (
    <section className="process_card">
        <div className="process_card-inset">
            <div className="run process_card-inset-item-active">
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
            <div className="bike process_card-inset-item">
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
            <div className="swim process_card-inset-item">
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
        <div className="week_process">
            <p className="week_process-header">НА ЭТОЙ НЕДЕЛЕ</p>
            <div className="week_process-data">
                <p className="week_process-value">8,56 км</p>
                <div className="vert_line"></div>
                <p className="week_process-timing">00:48:56</p>
            </div>
        </div>
        <table className="table table-borderless text-start">
            <thead>
                <tr>
                    <td scope="col" colSpan="2">
                        Выполнение цели
                    </td>
                    <td scope="col">Осталось</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan="2">
                        <div className="goal_process-container">
                            <div className="goal_process">80%</div>
                        </div>
                    </td>
                    <td className="goal_process-residue">20 км</td>
                </tr>
            </tbody>
        </table>
        <div className="year_process">
            <p className="year_process-header">В ЭТОМ ГОДУ</p>
            <p className="year_process-value">170 км</p>
        </div>
    </section>
);

export default Process;
