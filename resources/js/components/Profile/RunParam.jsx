import React from "react";

const RunParam = () => (
    <table>
        <thead>
            <tr>
                <th>За последние 4 недели</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Дистанция/нед. (средн.)</td>
                <td>26,9 км</td>
            </tr>
            <tr>
                <td>Время/нед. (средн.)</td>
                <td>2ч. 36мин.</td>
            </tr>
            <tr>
                <td>Забегов/нед. (средн.)</td>
                <td>3</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <th>
                    <span>ЛР за все время</span>
                </th>
                <th>
                    <button>Добавить ЛР</button>
                </th>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <th>
                    <span>Лучшее время (в среднем)</span>
                </th>
            </tr>
            <tr>
                <td>1 км</td>
                <td>
                    <a href="#">3:27</a>
                </td>
            </tr>
            <tr>
                <td>5 км</td>
                <td>
                    <a href="#">22:23</a>
                </td>
            </tr>
            <tr>
                <td>10 км</td>
                <td>
                    <a href="#">48:00</a>
                </td>
            </tr>
            <tr>
                <td>Полумарафон</td>
                <td>
                    <a href="#">1:45:34</a>
                </td>
            </tr>
            <tr>
                <td>Марафон</td>
                <td>
                    <a href="#">4:03:09</a>
                </td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <th>
                    <div className="control_panel btn-group">
                        <button
                            type="button"
                            className="btn btn-Danger dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            2022
                        </button>
                        <ul className="dropdown-menu">
                            <li className="dropdown-item">2022</li>
                            <li className="dropdown-item">2021</li>
                            <li className="dropdown-item">2020</li>
                            <li className="dropdown-item">2019</li>
                            <li className="dropdown-item">2018</li>
                        </ul>
                    </div>
                </th>
                <th></th>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>Дистанция</td>
                <td>274,2 км</td>
            </tr>
            <tr>
                <td>Время</td>
                <td>29ч. 17мин.</td>
            </tr>
            <tr>
                <td>Набор высоты</td>
                <td>2511 м</td>
            </tr>
            <tr>
                <td>Забеги</td>
                <td>33</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <th>За все время</th>
                <th></th>
            </tr>
            <tr>
                <td>Дистанция</td>
                <td>1 891,9 км</td>
            </tr>
            <tr>
                <td>Забеги</td>
                <td>201</td>
            </tr>
        </tbody>
    </table>
);

export default RunParam;
