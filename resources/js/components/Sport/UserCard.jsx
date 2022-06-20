import React, { useState, useEffect } from "react";
import apiClient from "../../request/apiClient";

export default function UserCard() {
const [state, setState] = useState([])

    useEffect(() => {
        apiClient
            .get("http://127.0.0.1:8000/user/data")
            .then((response) => {
                if (response.status === 200) {
                    setState(response.data);
                }
            });
    }, [1]);

    return (
        <section className="user_card">
            <div className="user-image">
                <a href="/images/IMG_20171020_170022.jpg">
                    <img
                        src="/images/IMG_20171020_170022.jpg"
                        width="90"
                        height="90"
                        className="rounded-circle"
                        alt="user-image"
                    />
                </a>
            </div>

            <a href="/profile" className="user_card-user-name">
                Артём Николаев
            </a>
            <div className="user_card-info">
                <table className="table table-borderless text-center">
                    <thead>
                        <tr>
                            <td scope="col">Тренировки</td>
                            <td scope="col">Время</td>
                            <td scope="col">Расстояние</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <a
                                    className="user_card-info-item link-dark"
                                    href="#"
                                >
                                    {state['trainings']}
                                </a>
                            </td>
                            <td>
                                <a
                                    className="user_card-info-item link-dark"
                                    href="#"
                                >
                                    {state['duration']}
                                </a>
                            </td>
                            <td>
                                <a
                                    className="user_card-info-item link-dark"
                                    href="#"
                                >
                                    {state['distance']} км
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                <table className="table table-borderless text-start user_card-info-lastTraining">
                    <thead>
                        <tr>
                            <td scope="col" colSpan="3">
                                Последняя тренировка
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="3">
                                <a
                                    className="user_card-info-item link-dark"
                                    href="#"
                                >
                                    {state['name']} {state['date']}
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                <div className="training_log-container">
                    <a href="#" className="training_log-link">
                        Журнал тренировок
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            className="bi bi-arrow-right-short training_log-link-arrow"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
