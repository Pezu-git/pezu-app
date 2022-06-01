import React from 'react'

    const Sport = () => (

        <body>
            <header>
                <div className="header_container">
                    <div className="control_panel btn-group">
                        <button type="button" className="btn btn-Danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Панель упраления
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Лента активности</a></li>
                            <li><a className="dropdown-item" href="#">Другое действие</a></li>
                            <li><a className="dropdown-item" href="#">Что-то еще здесь</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Отделенная ссылка</a></li>
                        </ul>
                    </div>
                    <div className="training_control btn-group">
                        <button type="button" className="btn btn-Danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Тренировка
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/">Лента активности</a></li>
                            <li><a className="dropdown-item" href="#">Другое действие</a></li>
                            <li><a className="dropdown-item" href="#">Что-то еще здесь</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Отделенная ссылка</a></li>
                        </ul>
                    </div>
                    <a className="goal_control link-dark" href="#">Цели</a>
                    <div className="profile_control btn-group">
                        <button type="button" className="btn btn-Danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="/images/IMG_20171020_170022.jpg" width="35" height="35" className="rounded-circle" alt="user image"/>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/profile">Мой профиль</a></li>
                            <li><a className="dropdown-item" href="#">Настройки</a></li>
                            <li><a className="dropdown-item" href="#">Что-то еще здесь</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Отделенная ссылка</a></li>
                        </ul>
                    </div>
                    <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-circle text-danger" viewBox="0 0 16 16" >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg>
                    </button>   
                </div>
            </header>
            
            <main>
                <div className="sport_container">
                    {/**Левая колонка с Общей информацией */}
                <div className="cards_container">
                    <div className="user_card">
                        <div className="user-image">
                            <a href="/images/IMG_20171020_170022.jpg" >
                                <img src="/images/IMG_20171020_170022.jpg" width="90" height="90" className="rounded-circle" alt="user-image"/>
                            </a>
                        </div>
                        
                        <a href="/profile" className="user_card-user-name">Артём Николаев</a>
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
                                        <td ><a className="user_card-info-item link-dark" href="#">554</a></td>
                                        <td><a className="user_card-info-item link-dark" href="#">250:35:14</a></td>
                                        <td><a className="user_card-info-item link-dark" href="#">5800 км</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr/>
                                <table className="table table-borderless text-start user_card-info-lastTraining">
                                    <thead>
                                        <tr>
                                        <td scope="col" colSpan="3">Последняя тренировка</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td colSpan="3"><a className="user_card-info-item link-dark" href="#">Забег 22.05.2022</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr/>
                                <div className="training_log-container">
                                    <a href="#" className="training_log-link">Журнал тренировок
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right-short training_log-link-arrow" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                    </div>
                    <div className="process_card">
                        <div className="process_card-inset">
                            <div className="run process_card-inset-item-active">
                                <a href="#" title="running_icon icons">
                                    <img src="/images/shoes.png" width="30" height="30" className="rounded" alt="user-image"/>
                                </a>
                            </div>
                            <div className="bike process_card-inset-item">
                                <a href="#" title="bike_icon icons">
                                    <img src="/images/bicycle.png" width="30" height="30" className="rounded" alt="user-image"/>
                                </a>
                            </div>
                            <div className="swim process_card-inset-item">
                                <a href="#" title="swim_icon icons">
                                    <img src="/images/swimming.png" width="30" height="30" className="rounded" alt="user-image"/>
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
                                <td scope="col" colSpan="2">Выполнение цели</td>
                                <td scope="col">Осталось</td>
                                </tr>
                            </thead>
                            <tbody >
                                <tr>
                                    <td colSpan="2">
                                        <div className="goal_process-container">
                                            <div className="goal_process">
                                                80%
                                            </div>
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
                    </div>
                </div>
                {/*Центральная колонка с Тренировками*/}
                <div className="training_list-container">
                    <div className="training_list-item">
                        <div className="training_list-item-header">
                            <p className="training_date">22 мая 2022 г. в 15:04 Шатура, РФ</p>
                            <div className="training_info-header">
                                <div className="training_icon">
                                    <img src="/images/shoes.png" width="30" height="30" className="rounded" alt="user-image"/>
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
                                    <tbody >
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
                            <img src="/images/run_default2.jpg" className="rounded img" alt="user-image"/>
                        </div>   
                    </div> 
                    <div className="training_list-item">
                        <div className="training_list-item-header">
                            <p className="training_date">22 мая 2022 г. в 15:04 Шатура, РФ</p>
                            <div className="training_info-header">
                                <div className="training_icon">
                                    <img src="/images/shoes.png" width="30" height="30" className="rounded" alt="user-image"/>
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
                                    <tbody >
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
                            <img src="/images/run_default2.jpg" className="rounded img" alt="user-image"/>
                        </div>   
                    </div> 
                    <div className="training_list-item">
                        <div className="training_list-item-header">
                            <p className="training_date">22 мая 2022 г. в 15:04 Шатура, РФ</p>
                            <div className="training_info-header">
                                <div className="training_icon">
                                    <img src="/images/shoes.png" width="30" height="30" className="rounded" alt="user-image"/>
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
                                    <tbody >
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
                            <img src="/images/run_default2.jpg" className="rounded img" alt="user-image"/>
                        </div>   
                    </div> 
                    <div className="training_list-item">
                        <div className="training_list-item-header">
                            <p className="training_date">22 мая 2022 г. в 15:04 Шатура, РФ</p>
                            <div className="training_info-header">
                                <div className="training_icon">
                                    <img src="/images/shoes.png" width="30" height="30" className="rounded" alt="user-image"/>
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
                                    <tbody >
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
                            <img src="/images/run_default2.jpg" className="rounded img" alt="user-image"/>
                        </div>   
                    </div>       
                </div>   
                {/*Правая колонка с Соревнованиями*/}
                <div className="competition_container">
                    <h4 className="competition_header-text">Соревнования</h4>
                    <div className="competition_future">
                        <h6>Предстоящие</h6>
                        <div className="competition_future-items">
                            <div className="competition_future-item">
                                <div className="competition_future-item-image">
                                    <img src="/images/run_default3.jpg" className="rounded img" alt="user-image"/>
                                </div>
                                <div className="competition_future-item-description">
                                    <a href="#" className="competition_future-item-name">X-race WIld Trail</a>
                                    <p className="competition_future-item-date">10 октября 2022 г.</p>
                                    <p className="competition_future-item-distance">35 км </p>
                                </div>
                            </div>
                            <div className="competition_future-item">
                                <div className="competition_future-item-image">
                                    <img src="/images/run_default3.jpg" className="rounded img" alt="user-image"/>
                                </div>
                                <div className="competition_future-item-description">
                                    <a href="#" className="competition_future-item-name">Soshi TRI Olimpic</a>
                                    <p className="competition_future-item-date">10 сентября 2022 г.</p>
                                    <p className="competition_future-item-distance">52 км </p>
                                </div>
                            </div>
                            <div className="competition_future-item">
                                <div className="competition_future-item-image">
                                    <img src="/images/run_default3.jpg" className="rounded img" alt="user-image"/>
                                </div>
                                <div className="competition_future-item-description">
                                    <a href="#" className="competition_future-item-name">SportMarafonFest</a>
                                    <p className="competition_future-item-date">4 июня 2022 г.</p>
                                    <p className="competition_future-item-distance">66 км </p>
                                </div>
                            </div>
                            <div className="competition_future-item">
                                <div className="competition_future-item-image">
                                    <img src="/images/run_default3.jpg" className="rounded img" alt="user-image"/>
                                </div>
                                <div className="competition_future-item-description">
                                    <a href="#" className="competition_future-item-name">Ugresha-Trail</a>
                                    <p className="competition_future-item-date">28 августа 2022 г.</p>
                                    <p className="competition_future-item-distance">30 км </p>
                                </div>
                            </div>
                            <div className="competition_future-item">
                                <div className="competition_future-item-image">
                                    <img src="/images/run_default3.jpg" className="rounded img" alt="user-image"/>
                                </div>
                                <div className="competition_future-item-description">
                                    <a href="#" className="competition_future-item-name">Arkhiz X-run</a>
                                    <p className="competition_future-item-date">3 июля 2022 г.</p>
                                    <p className="competition_future-item-distance">33 км </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="competition_past">
                        <h6>Прошедшие</h6>
                        <a href="#" className="competition_past-items-viewAll">Показать все</a>
                        <div className="competition_past-items">
                            <div className="competition_past-item">
                                <div className="competition_past-item-image">
                                    <img src="/images/run_default3.jpg" className="rounded img" alt="user-image"/>
                                </div> 
                                <div className="competition_past-item-description">
                                    <a href="#" className="competition_past-item-name">Московский полумарафон</a>
                                    <p className="competition_past-item-date">3 июля 2021 г.</p>
                                </div>
                            </div>
                            <div className="competition_past-item">
                                <div className="competition_past-item-image">
                                    <img src="/images/run_default3.jpg" className="rounded img" alt="user-image"/>
                                </div> 
                                <div className="competition_past-item-description">
                                    <a href="#" className="competition_past-item-name">Arkhiz X-run</a>
                                    <p className="competition_past-item-date">3 июля 2021 г.</p>
                                </div>
                            </div>
                            <div className="competition_past-item">
                                <div className="competition_past-item-image">
                                    <img src="/images/run_default3.jpg" className="rounded img" alt="user-image"/>
                                </div> 
                                <div className="competition_past-item-description">
                                    <a href="#" className="competition_past-item-name">Arkhiz X-run</a>
                                    <p className="competition_past-item-date">3 июля 2021 г.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Popup Новая тренировка*/}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Новая тренировка</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="row g-3" method="POST" action="/test">
                                <select className="form-select" aria-label="Default select example" name="type" defaultValue="Забег" required>
                                    <option value="Забег">Забег</option>
                                    <option value="Велозаезд">Велозаезд</option>
                                    <option value="Заплыв">Заплыв</option>
                                </select>
                                <div className="row g-3">
                                    <div className="col">
                                        <label htmlFor="inputDate" className="form-label">Дата</label>
                                        <input type="date" className="form-control" defaultValue='' id="inputDate" name="date" required/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="inputTime" className="form-label">Время</label>
                                        <input type="time" className="form-control" defaultValue='' id="inputTime" name="time" step="1" required/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="inputLocation" className="form-label">Локация</label>
                                        <input type="text" className="form-control" defaultValue='' id="inputLocation" name="location" required/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputDistance" className="form-label">Расстояние</label>
                                    <input type="number" className="form-control" id="inputDistance" name="distance" step="any" required/>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputPace" className="form-label">Темп</label>
                                    <input type="time" className="form-control" id="inputPace" name="pace" step="1" required/>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputDuration" className="form-label">Продолжительность</label>
                                    <input type="time" className="form-control" id="inputDuration" name="duration" step="1" required/>
                                </div>
                                <button type="submit" className="btn btn-danger newtraining_btn">Сохранить</button>
                            </form>
                        </div>   
                    </div>
                    </div>
                </div>
                </div>
                
            </main>
        </body>
)

export default Sport