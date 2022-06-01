import React from 'react'

    const Profile = () => (
    <div>
      <header>
      <div className="header_container">
          <div className="control_panel btn-group">
              <button type="button" className="btn btn-Danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Панель упраления
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Лента активности</a></li>
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
                  <li><a className="dropdown-item" href="#">Лента активности</a></li>
                  <li><a className="dropdown-item" href="#">Другое действие</a></li>
                  <li><a className="dropdown-item" href="#">Что-то еще здесь</a></li>
                  
                </ul>
          </div>
          <a className="goal_control link-dark" href="#">Цели</a>
          <div className="profile_control btn-group">
              <button type="button" className="btn btn-Danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="/images/IMG_20171020_170022.jpg" width="35" height="35" className="rounded-circle" alt="user image"/>
              </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Мой профиль</a></li>
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
        <div className="profile_container">
            <div className="profile_user-images">
                <div className="profile_user-image">
                    <img src="/images/IMG_20171020_170022.jpg" className="rounded img" alt="user-image"/> 
                </div>
                <div className="profile_user-image">
                    <img src="/images/IMG_20171020_170022.jpg" className="rounded img" alt="user-image"/> 
                </div>
                <div className="profile_user-image">
                    <img src="/images/IMG_20171020_170022.jpg" className="rounded img" alt="user-image"/> 
                </div>
                <div className="profile_user-image">
                    <img src="/images/IMG_20171020_170022.jpg" className="rounded img" alt="user-image"/> 
                </div>
            </div>
            <div className="profile_user-card">
                <div className="profile_user-avatar-container">
                        <img src="/images/IMG_20171020_170022.jpg" className="rounded-circle profile_user-avatar" alt="user-image"/>
                        <p className="user_card-user-name profile_card-user-name">Артём Николаев</p>
                </div>
            </div>
            <div className="profile_month-progress">
                <div className="profile_month-progress-header">
                    <p className="last_progress-title">За последние 4 недели</p>
                    <p className="last_progress-count">4</p>
                    <p className="last_progress-foottitle">Всего тренировок</p>
                </div>
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
                                <span className="activity-indicator"  style={{height: '10px', width: "10px"}}></span>
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
                                <span className="activity-indicator" ></span>
                              </td>
                              <td className="day-wraper">
                                <span className="day">6</span>
                                <span className="activity-indicator" style={{height: '10px', width: '10px'}}></span>
                              </td>
                              <td className="day-wraper">
                                <span className="day">7</span>
                                <span className="activity-indicator"></span>
                              </td>
                              <td className="day-wraper" colSpan="2">
                                <span className="week_activity-duration">1ч.15мин.</span>
                              </td>
                            </tr>
                            <tr>
                                <td className="day-wraper">
                                  <span className="day">8</span>
                                  <span className="activity-indicator"></span>
                                </td>
                                <td className="day-wraper">
                                  <span className="day">9</span>
                                  <span className="activity-indicator" style={{height: '10px', width: '10px'}}></span>
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
                                    <span className="week_activity-duration">0ч.25мин.</span>
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
                                    <span className="week_activity-duration">0ч.0мин.</span>
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
                                  <span className="activity-indicator" style={{height: "10px", width: '10px'}}></span>
                                </td>
                                <td className="day-wraper" colSpan="2">
                                    <span className="week_activity-duration">0ч.45мин.</span>
                                </td>
                              </tr>
                        </tbody>
                      </table>
                </div>
            </div>
        </div>
    </main>
    </div>
    
  
    )

    export default Profile