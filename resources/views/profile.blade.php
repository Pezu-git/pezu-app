<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="/css/app_moonbase.css">
    <title>Profile</title>
</head>
<body>
    <header>
        <div class="header_container">
            <div class="control_panel btn-group">
                <button type="button" class="btn btn-Danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Панель упраления
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/">Лента активности</a></li>
                    <li><a class="dropdown-item" href="#">Другое действие</a></li>
                    <li><a class="dropdown-item" href="#">Что-то еще здесь</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Отделенная ссылка</a></li>
                  </ul>
            </div>
            <div class="training_control btn-group">
                <button type="button" class="btn btn-Danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Тренировка
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Лента активности</a></li>
                    <li><a class="dropdown-item" href="#">Другое действие</a></li>
                    <li><a class="dropdown-item" href="#">Что-то еще здесь</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Отделенная ссылка</a></li>
                  </ul>
            </div>
            <a class="goal_control link-dark" href="#">Цели</a>
            <div class="profile_control btn-group">
                <button type="button" class="btn btn-Danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="{{ asset('/assets/img/IMG_20171020_170022.jpg')}}" width="35" height="35" class="rounded-circle" alt="user image">
                </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Мой профиль</a></li>
                    <li><a class="dropdown-item" href="#">Настройки</a></li>
                    <li><a class="dropdown-item" href="#">Что-то еще здесь</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Отделенная ссылка</a></li>
                  </ul>
            </div>
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle text-danger" viewBox="0 0 16 16" >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
              </button>   
        </div>
    </header>
    <main>
        <div class="profile_container">
            <div class="profile_user-images">
                <div class="profile_user-image">
                    <img src="{{ asset('/assets/img/IMG_20171020_170022.jpg')}}" class="rounded img" alt="user-image"> 
                </div>
                <div class="profile_user-image">
                    <img src="{{ asset('/assets/img/IMG_20171020_170022.jpg')}}" class="rounded img" alt="user-image"> 
                </div>
                <div class="profile_user-image">
                    <img src="{{ asset('/assets/img/IMG_20171020_170022.jpg')}}" class="rounded img" alt="user-image"> 
                </div>
                <div class="profile_user-image">
                    <img src="{{ asset('/assets/img/IMG_20171020_170022.jpg')}}" class="rounded img" alt="user-image"> 
                </div>
            </div>
            <div class="profile_user-card">
                <div class="profile_user-avatar-container">
                        <img src="{{ asset('/assets/img/IMG_20171020_170022.jpg')}}" class="rounded-circle profile_user-avatar" alt="user-image">
                        <p class="user_card-user-name profile_card-user-name">Артём Николаев</p>
                </div>
            </div>
            <div class="profile_month-progress">
                <div class="profile_month-progress-header">
                    <p class="last_progress-title">За последние 4 недели</p>
                    <p class="last_progress-count">4</p>
                    <p class="last_progress-foottitle">Всего тренировок</p>
                </div>
                <div class="profile_month-progress-calendar">
                    <table class="table table-borderless text-center">
                        <thead>
                            <tr>
                                <td scope="col">
                                    <div class="weekday">П</div>
                                </td>
                                <td scope="col">
                                    <div class="weekday">В</div>
                                </td>
                                <td scope="col">
                                    <div class="weekday">С</div>
                                </td>
                                <td scope="col">
                                    <div class="weekday">Ч</div>
                                </td>
                                <td scope="col">
                                    <div class="weekday">П</div>
                                </td>
                                <td scope="col">
                                    <div class="weekday">С</div>
                                </td>
                                <td scope="col">
                                    <div class="weekday">В</div>
                                </td>
                                <td scope="col">
                                    <div class="weekday"></div>
                                </td>
                                <td scope="col">
                                    <div class="weekday"></div>
                                </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="day-wraper">
                                <span class="day">1</span>
                                <span class="activity-indicator"  style="height: 10px; width: 10px"></span>
                              </td>
                              <td class="day-wraper">
                                <span class="day">2</span>
                                <span class="activity-indicator""></span>
                              </td>
                              <td class="day-wraper">
                                <span class="day">3</span>
                                <span class="activity-indicator""></span>
                              </td>
                              <td class="day-wraper">
                                <span class="day">4</span>
                                <span class="activity-indicator""></span>
                              </td>
                              <td class="day-wraper">
                                <span class="day">5</span>
                                <span class="activity-indicator" "></span>
                              </td>
                              <td class="day-wraper">
                                <span class="day">6</span>
                                <span class="activity-indicator" style="height: 10px; width: 10px"></span>
                              </td>
                              <td class="day-wraper">
                                <span class="day">7</span>
                                <span class="activity-indicator"></span>
                              </td>
                              <td class="day-wraper" colspan="2">
                                <span class="week_activity-duration">1ч.15мин.</span>
                              </td>
                            </tr>
                            <tr>
                                <td class="day-wraper">
                                  <span class="day">8</span>
                                  <span class="activity-indicator"></span>
                                </td>
                                <td class="day-wraper">
                                  <span class="day">9</span>
                                  <span class="activity-indicator" style="height: 10px; width: 10px"></span>
                                </td>
                                <td class="day-wraper">
                                  <span class="day">10</span>
                                  <span class="activity-indicator"></span>
                                </td>
                                <td class="day-wraper">
                                  <span class="day">11</span>
                                  <span class="activity-indicator"></span>
                                </td>
                                <td class="day-wraper">
                                  <span class="day">12</span>
                                  <span class="activity-indicator"></span>
                                </td>
                                <td class="day-wraper">
                                  <span class="day">13</span>
                                  <span class="activity-indicator"></span>
                                </td>
                                <td class="day-wraper">
                                  <span class="day">14</span>
                                  <span class="activity-indicator"></span>
                                </td>
                                <td class="day-wraper" colspan="2">
                                    <span class="week_activity-duration">0ч.25мин.</span>
                                  </td>
                              </tr>
                              <tr>
                                <td class="day-wraper">
                                  <span class="day">15</span>
                                  <span class="activity-indicator"></span>
                                </td>
                                <td class="day-wraper">
                                  <span class="day">16</span>
                                  <span class="activity-indicator"></span>
                                </td>
                                <td class="day-wraper">
                                  <span class="day">17</span>
                                  <span class="activity-indicator"></span>
                                </td>
                                <td class="day-wraper">
                                  <span class="day">18</span>
                                  <span class="activity-indicator"></span>
                                </td>
                                <td class="day-wraper">
                                  <span class="day">19</span>
                                  <span class="activity-indicator"></span>
                                </td>
                                <td class="day-wraper">
                                  <span class="day">20</span>
                                  <span class="activity-indicator"></span>
                                </td>
                                <td class="day-wraper">
                                  <span class="day">21</span>
                                  <span class="activity-indicator"></span>
                                </td>
                                <td class="day-wraper" colspan="2">
                                    <span class="week_activity-duration">0ч.0мин.</span>
                                </td>
                              </tr>
                              <tr>
                                <td class="day-wraper">
                                  <span class="day">22</span>
                                  <span class="activity-indicator"></span>
                                </td>
                                <td class="day-wraper">
                                  <span class="day">23</span>
                                  <span class="activity-indicator"></span>
                                </td>
                                <td class="day-wraper">
                                  <span class="day">24</span>
                                  <span class="activity-indicator"></span>
                                </td>
                                <td class="day-wraper">
                                  <span class="day">25</span>
                                  <span class="activity-indicator"></span>
                                </td>
                                <td class="day-wraper">
                                  <span class="day">26</span>
                                  <span class="activity-indicator"></span>
                                </td>
                                <td class="day-wraper">
                                  <span class="day">27</span>
                                  <span class="activity-indicator"></span>
                                </td>
                                <td class="day-wraper">
                                  <span class="day">28</span>
                                  <span class="activity-indicator" style="height: 10px; width: 10px"></span>
                                </td>
                                <td class="day-wraper" colspan="2">
                                    <span class="week_activity-duration">0ч.45мин.</span>
                                </td>
                              </tr>
                        </tbody>
                      </table>
                </div>
            </div>
        </div>
    </main>
</body>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</html>