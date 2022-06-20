import React, { useState, useEffect } from "react";
import apiClient from "../../request/apiClient";

export default function NewTraining() {
    const [state, setState] = useState({ type: "Забег" });
    const btn = document.getElementById('exampleModal');
    
    const handleInputChange = (event) => {
        let v = event.target.value;
        let n = event.target.name;
        setState((prevState) => ({
            ...prevState,
            [n]: v,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        apiClient
            .post("http://127.0.0.1:8000/training/add", state)
            .then((response) => {
                if (response.status === 200) {
                    console.log("ok");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Новая тренировка
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form className="row g-3" onSubmit={handleSubmit}>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                name="type"
                                defaultValue="Забег"
                                onChange={(e) => handleInputChange(e)}
                            >
                                <option value="Забег">Забег</option>
                                <option value="Велозаезд">Велозаезд</option>
                                <option value="Заплыв">Заплыв</option>
                            </select>
                            <div className="col-12">
                                <label
                                    htmlFor="inputDistance"
                                    className="form-label"
                                >
                                    Описание
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputDistance"
                                    name="description"
                                    onChange={(e) => handleInputChange(e)}
                                />
                            </div>
                            <div className="row g-3">
                                <div className="col">
                                    <label
                                        htmlFor="inputDate"
                                        className="form-label"
                                    >
                                        Дата
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        defaultValue=""
                                        id="inputDate"
                                        name="date"
                                        onChange={(e) => handleInputChange(e)}
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <label
                                        htmlFor="inputTime"
                                        className="form-label"
                                    >
                                        Время
                                    </label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        defaultValue=""
                                        id="inputTime"
                                        name="time"
                                        onChange={(e) => handleInputChange(e)}
                                        step="1"
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <label
                                        htmlFor="inputLocation"
                                        className="form-label"
                                    >
                                        Локация
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue=""
                                        id="inputLocation"
                                        name="location"
                                        onChange={(e) => handleInputChange(e)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-12">
                                <label
                                    htmlFor="inputDistance"
                                    className="form-label"
                                >
                                    Расстояние
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="inputDistance"
                                    name="distance"
                                    onChange={(e) => handleInputChange(e)}
                                    step="any"
                                    required
                                />
                            </div>
                            <div className="col-12">
                                <label
                                    htmlFor="inputPace"
                                    className="form-label"
                                >
                                    Темп
                                </label>
                                <input
                                    type="time"
                                    className="form-control"
                                    id="inputPace"
                                    name="pace"
                                    onChange={(e) => handleInputChange(e)}
                                    step="1"
                                    required
                                />
                            </div>
                            <div className="col-12">
                                <label
                                    htmlFor="inputDuration"
                                    className="form-label"
                                >
                                    Продолжительность
                                </label>
                                <input
                                    type="time"
                                    className="form-control"
                                    id="inputDuration"
                                    name="duration"
                                    onChange={(e) => handleInputChange(e)}
                                    step="1"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-danger newtraining_btn"
                                data-bs-dismiss="modal"
                            >
                                Сохранить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
