import React from "react";

const NewTraining = () => (
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
                    <form className="row g-3" method="POST" action="/test">
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            name="type"
                            defaultValue="Забег"
                            required
                        >
                            <option value="Забег">Забег</option>
                            <option value="Велозаезд">Велозаезд</option>
                            <option value="Заплыв">Заплыв</option>
                        </select>
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
                                step="any"
                                required
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputPace" className="form-label">
                                Темп
                            </label>
                            <input
                                type="time"
                                className="form-control"
                                id="inputPace"
                                name="pace"
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
                                step="1"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-danger newtraining_btn"
                        >
                            Сохранить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default NewTraining;
