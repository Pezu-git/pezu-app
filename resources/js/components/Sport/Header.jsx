import React from "react";

const Header = () => (
    <header>
        <div className="header_container">
            <div className="control_panel btn-group">
                <button
                    type="button"
                    className="btn btn-Danger dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Панель упраления
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a className="dropdown-item" href="#">
                            Лента активности
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Другое действие
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Что-то еще здесь
                        </a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Отделенная ссылка
                        </a>
                    </li>
                </ul>
            </div>
            <div className="training_control btn-group">
                <button
                    type="button"
                    className="btn btn-Danger dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Тренировка
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a className="dropdown-item" href="/">
                            Лента активности
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Другое действие
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Что-то еще здесь
                        </a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Отделенная ссылка
                        </a>
                    </li>
                </ul>
            </div>
            <a className="goal_control link-dark" href="#">
                Цели
            </a>
            <div className="profile_control btn-group">
                <button
                    type="button"
                    className="btn btn-Danger dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <img
                        src="/images/IMG_20171020_170022.jpg"
                        width="35"
                        height="35"
                        className="rounded-circle"
                        alt="user image"
                    />
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a className="dropdown-item" href="/profile">
                            Мой профиль
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Настройки
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Что-то еще здесь
                        </a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Отделенная ссылка
                        </a>
                    </li>
                </ul>
            </div>
            <button
                type="button"
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-plus-circle text-danger"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
            </button>
        </div>
    </header>
);

export default Header;
