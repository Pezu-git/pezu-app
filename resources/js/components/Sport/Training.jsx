import React, { useState, useEffect } from "react";
import { useLayoutEffect, useRef } from "react";
import apiClient from "../../request/apiClient";

export default function Training() {
    const [state, setState] = useState([]);
    const [trainingState, setTrainigState] = useState([]);
    const [loadState, setLoadState] = useState({load: 5})

    useEffect(() => {
        apiClient
            .post("http://127.0.0.1:8000/training/data", loadState)
            .then((response) => {
                if (response.status === 200) {
                    setTrainigState(response.data);
                }

            });
    }, [loadState]);
    
    const onScroll = () => {
        const scrollY = window.pageYOffset + document.documentElement.clientHeight //Don't get confused by what's scrolling - It's not the window
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
          );
          if(scrollY === scrollHeight) {
            setLoadState((prevState) => ({
                load: prevState.load + 5,
            }));
          }
          if(window.pageYOffset === 0)
          setLoadState(() => ({
            load: 5,
        }));
      }
      useEffect(() => {
        window.addEventListener('scroll', onScroll)
      }, []);
      
      
    

    return (
        <div className="training_list-container">
            {trainingState.map((item) => (
                <div className="training_list-item" key={item.id}>
                    <div className="training_list-item-header">
                        <p className="training_date">
                            {item.date} в {item.time}, {item.location}
                        </p>
                        <div className="training_info-header">
                            <div className="training_icon">
                                <img
                                    src="/images/shoes.png"
                                    width="30"
                                    height="30"
                                    className="rounded"
                                    alt="user-image"
                                />
                            </div>
                            <h3>{item.description}</h3>
                        </div>
                        <div className="training_table">
                            <table className="table table-borderless text-start">
                                <thead>
                                    <tr className="training_table-item-thead">
                                        <td scope="col">Расстояние</td>
                                        <td scope="col">Темп</td>
                                        <td scope="col">Время</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="training_table-item-tbody">
                                        <td>{item.distance} км</td>
                                        <td>{item.pace} /км</td>
                                        <td>{item.duration}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="training_image">
                        <img
                            src="/images/run_default2.jpg"
                            className="rounded img"
                            alt="user-image"
                        />
                    </div>
                </div>
            ))}
            {/* <div className="training_list-item">
                <div className="training_list-item-header">
                    <p className="training_date">
                       
                        22 мая 2022 г. в 15:04 Шатура, РФ
                    </p>
                    <div className="training_info-header">
                        <div className="training_icon">
                            <img
                                src="/images/shoes.png"
                                width="30"
                                height="30"
                                className="rounded"
                                alt="user-image"
                            />
                        </div>
                        <h3>Забег</h3>
                    </div>
                    <div className="training_table">
                        <table className="table table-borderless text-start">
                            <thead>
                                <tr className="training_table-item-thead">
                                    <td scope="col">Расстояние</td>
                                    <td scope="col">Темп</td>
                                    <td scope="col">Время</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="training_table-item-tbody">
                                    <td>9,94 км</td>
                                    <td>6:33 /км</td>
                                    <td>1ч. 5мин</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="training_image">
                    <img
                        src="/images/run_default2.jpg"
                        className="rounded img"
                        alt="user-image"
                    />
                </div>
            </div>
            <div className="training_list-item">
                <div className="training_list-item-header">
                    <p className="training_date">
                        22 мая 2022 г. в 15:04 Шатура, РФ
                    </p>
                    <div className="training_info-header">
                        <div className="training_icon">
                            <img
                                src="/images/shoes.png"
                                width="30"
                                height="30"
                                className="rounded"
                                alt="user-image"
                            />
                        </div>
                        <h3>Забег</h3>
                    </div>
                    <div className="training_table">
                        <table className="table table-borderless text-start">
                            <thead>
                                <tr className="training_table-item-thead">
                                    <td scope="col">Расстояние</td>
                                    <td scope="col">Темп</td>
                                    <td scope="col">Время</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="training_table-item-tbody">
                                    <td>9,94 км</td>
                                    <td>6:33 /км</td>
                                    <td>1ч. 5мин</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="training_image">
                    <img
                        src="/images/run_default2.jpg"
                        className="rounded img"
                        alt="user-image"
                    />
                </div>
            </div>
            <div className="training_list-item">
                <div className="training_list-item-header">
                    <p className="training_date">
                        22 мая 2022 г. в 15:04 Шатура, РФ
                    </p>
                    <div className="training_info-header">
                        <div className="training_icon">
                            <img
                                src="/images/shoes.png"
                                width="30"
                                height="30"
                                className="rounded"
                                alt="user-image"
                            />
                        </div>
                        <h3>Забег</h3>
                    </div>
                    <div className="training_table">
                        <table className="table table-borderless text-start">
                            <thead>
                                <tr className="training_table-item-thead">
                                    <td scope="col">Расстояние</td>
                                    <td scope="col">Темп</td>
                                    <td scope="col">Время</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="training_table-item-tbody">
                                    <td>9,94 км</td>
                                    <td>6:33 /км</td>
                                    <td>1ч. 5мин</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="training_image">
                    <img
                        src="/images/run_default2.jpg"
                        className="rounded img"
                        alt="user-image"
                    />
                </div>
            </div>
            <div className="training_list-item">
                <div className="training_list-item-header">
                    <p className="training_date">
                        22 мая 2022 г. в 15:04 Шатура, РФ
                    </p>
                    <div className="training_info-header">
                        <div className="training_icon">
                            <img
                                src="/images/shoes.png"
                                width="30"
                                height="30"
                                className="rounded"
                                alt="user-image"
                            />
                        </div>
                        <h3>Забег</h3>
                    </div>
                    <div className="training_table">
                        <table className="table table-borderless text-start">
                            <thead>
                                <tr className="training_table-item-thead">
                                    <td scope="col">Расстояние</td>
                                    <td scope="col">Темп</td>
                                    <td scope="col">Время</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="training_table-item-tbody">
                                    <td>9,94 км</td>
                                    <td>6:33 /км</td>
                                    <td>1ч. 5мин</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="training_image">
                    <img
                        src="/images/run_default2.jpg"
                        className="rounded img"
                        alt="user-image"
                    />
                </div>
            </div> */}
        </div>
    );
}
