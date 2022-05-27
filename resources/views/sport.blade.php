<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="/css/app_moonbase.css">
    <title>Document</title>
</head>
<body>
    <header>
        <div class="header_container">
            <div class="control_panel btn-group">
                <button type="button" class="btn btn-Danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Панель упраления
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Лента активности</a></li>
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
                    <li><a class="dropdown-item" href="/">Лента активности</a></li>
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
                    <li><a class="dropdown-item" href="/profile">Мой профиль</a></li>
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
        <div class="sport_container">
             {{--!Левая колонка с Общей информацией--}}
        <div class="cards_container">
            <div class="user_card">
                <div class="user-image">
                    <a href="{{ asset('/assets/img/IMG_20171020_170022.jpg')}}" >
                        <img src="{{ asset('/assets/img/IMG_20171020_170022.jpg')}}" width="90" height="90" class="rounded-circle" alt="user-image">
                    </a>
                </div>
                
                <a href="/profile" class="user_card-user-name">Артём Николаев</a>
                    <div class="user_card-info">
                        <table class="table table-borderless text-center">
                            <thead>
                                <tr>
                                  <td scope="col">Тренировки</td>
                                  <td scope="col">Время</td>
                                  <td scope="col">Расстояние</td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td ><a class="user_card-info-item link-dark" href="#">554</a></td>
                                  <td><a class="user_card-info-item link-dark" href="#">250:35:14</a></td>
                                  <td><a class="user_card-info-item link-dark" href="#">5800 км</a></td>
                                </tr>
                            </tbody>
                          </table>
                          <hr>
                          <table class="table table-borderless text-start user_card-info-lastTraining">
                            <thead>
                                <tr>
                                  <td scope="col" colspan="3">Последняя тренировка</td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td colspan="3"><a class="user_card-info-item link-dark" href="#">Забег 22.05.2022</a></td>
                                </tr>
                            </tbody>
                          </table>
                          <hr>
                          <div class="training_log-container">
                              <a href="#" class="training_log-link">Журнал тренировок
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-short training_log-link-arrow" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                  </svg>
                              </a>
                          </div>
                    </div>
            </div>
            <div class="process_card">
                <div class="process_card-inset">
                    <div class="run process_card-inset-item-active">
                        <a href="#" title="running_icon icons">
                            <img src="{{ asset('/assets/img/shoes.png')}}" width="30" height="30" class="rounded" alt="user-image">
                        </a>
                    </div>
                    <div class="bike process_card-inset-item">
                        <a href="#" title="bike_icon icons">
                            <img src="{{ asset('/assets/img/bicycle.png')}}" width="30" height="30" class="rounded" alt="user-image">
                        </a>
                    </div>
                    <div class="swim process_card-inset-item">
                        <a href="#" title="swim_icon icons">
                            <img src="{{ asset('/assets/img/swimming.png')}}" width="30" height="30" class="rounded" alt="user-image">
                        </a>
                    </div>
                </div>
                <div class="week_process">
                    <p class="week_process-header">НА ЭТОЙ НЕДЕЛЕ</p>
                    <div class="week_process-data">
                        <p class="week_process-value">8,56 км</p>
                        <div class="vert_line"></div>
                        <p class="week_process-timing">00:48:56</p>
                    </div>
                    
                </div>
                <table class="table table-borderless text-start">
                    <thead>
                        <tr>
                          <td scope="col" colspan="2">Выполнение цели</td>
                          <td scope="col">Осталось</td>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <td colspan="2">
                                <div class="goal_process-container">
                                    <div class="goal_process">
                                        80%
                                    </div>
                                </div>  
                            </td>
                            <td class="goal_process-residue">20 км</td>
                        </tr>
                    </tbody>
                  </table>
                  <div class="year_process">
                    <p class="year_process-header">В ЭТОМ ГОДУ</p>
                    <p class="year_process-value">170 км</p>
                </div>
            </div>
        </div>
        {{--!Центральная колонка с Тренировками--}}
        <div class="training_list-container">
            <div class="training_list-item">
                <div class="training_list-item-header">
                    <p class="training_date">22 мая 2022 г. в 15:04 Шатура, РФ</p>
                    <div class="training_info-header">
                        <div class="training_icon">
                            <img src="{{ asset('/assets/img/shoes.png')}}" width="30" height="30" class="rounded" alt="user-image">
                        </div> 
                        <h3>Забег</h3>
                    </div>
                    <div class="training_table">
                        <table class="table table-borderless text-start">
                            <thead>
                                <tr class="training_table-item-thead">
                                  <td scope="col">Расстояние</td>
                                  <td scope="col">Темп</td>
                                  <td scope="col">Время</td>
                                </tr>
                            </thead>
                            <tbody >
                                <tr class="training_table-item-tbody">
                                    <td>9,94 км</td>
                                    <td>6:33 /км</td>
                                    <td>1ч. 5мин</td>
                                </tr>
                            </tbody>
                          </table>
                    </div>      
                </div>
                <div class="training_image"> 
                    <img src="{{ asset('/assets/img/run_default2.jpg')}}" class="rounded img" alt="user-image">
                </div>   
            </div> 
            <div class="training_list-item">
                <div class="training_list-item-header">
                    <p class="training_date">22 мая 2022 г. в 15:04 Шатура, РФ</p>
                    <div class="training_info-header">
                        <div class="training_icon">
                            <img src="{{ asset('/assets/img/shoes.png')}}" width="30" height="30" class="rounded" alt="user-image">
                        </div> 
                        <h3>Забег</h3>
                    </div>
                    <div class="training_table">
                        <table class="table table-borderless text-start">
                            <thead>
                                <tr class="training_table-item-thead">
                                  <td scope="col">Расстояние</td>
                                  <td scope="col">Темп</td>
                                  <td scope="col">Время</td>
                                </tr>
                            </thead>
                            <tbody >
                                <tr class="training_table-item-tbody">
                                    <td>9,94 км</td>
                                    <td>6:33 /км</td>
                                    <td>1ч. 5мин</td>
                                </tr>
                            </tbody>
                          </table>
                    </div>      
                </div>
                <div class="training_image"> 
                    <img src="{{ asset('/assets/img/run_default2.jpg')}}" class="rounded img" alt="user-image">
                </div>   
            </div> 
            <div class="training_list-item">
                <div class="training_list-item-header">
                    <p class="training_date">22 мая 2022 г. в 15:04 Шатура, РФ</p>
                    <div class="training_info-header">
                        <div class="training_icon">
                            <img src="{{ asset('/assets/img/shoes.png')}}" width="30" height="30" class="rounded" alt="user-image">
                        </div> 
                        <h3>Забег</h3>
                    </div>
                    <div class="training_table">
                        <table class="table table-borderless text-start">
                            <thead>
                                <tr class="training_table-item-thead">
                                  <td scope="col">Расстояние</td>
                                  <td scope="col">Темп</td>
                                  <td scope="col">Время</td>
                                </tr>
                            </thead>
                            <tbody >
                                <tr class="training_table-item-tbody">
                                    <td>9,94 км</td>
                                    <td>6:33 /км</td>
                                    <td>1ч. 5мин</td>
                                </tr>
                            </tbody>
                          </table>
                    </div>      
                </div>
                <div class="training_image"> 
                    <img src="{{ asset('/assets/img/run_default2.jpg')}}" class="rounded img" alt="user-image">
                </div>   
            </div> 
            <div class="training_list-item">
                <div class="training_list-item-header">
                    <p class="training_date">22 мая 2022 г. в 15:04 Шатура, РФ</p>
                    <div class="training_info-header">
                        <div class="training_icon">
                            <img src="{{ asset('/assets/img/shoes.png')}}" width="30" height="30" class="rounded" alt="user-image">
                        </div> 
                        <h3>Забег</h3>
                    </div>
                    <div class="training_table">
                        <table class="table table-borderless text-start">
                            <thead>
                                <tr class="training_table-item-thead">
                                  <td scope="col">Расстояние</td>
                                  <td scope="col">Темп</td>
                                  <td scope="col">Время</td>
                                </tr>
                            </thead>
                            <tbody >
                                <tr class="training_table-item-tbody">
                                    <td>9,94 км</td>
                                    <td>6:33 /км</td>
                                    <td>1ч. 5мин</td>
                                </tr>
                            </tbody>
                          </table>
                    </div>      
                </div>
                <div class="training_image"> 
                    <img src="{{ asset('/assets/img/run_default2.jpg')}}" class="rounded img" alt="user-image">
                </div>   
            </div>       
        </div>   
        {{--!Правая колонка с Соревнованиями--}}
        <div class="competition_container">
            <h4 class="competition_header-text">Соревнования</h4>
            <div class="competition_future">
                <h6>Предстоящие</h6>
                <div class="competition_future-items">
                    <div class="competition_future-item">
                        <div class="competition_future-item-image">
                            <img src="{{ asset('/assets/img/run_default3.jpg')}}" class="rounded img" alt="user-image">
                        </div>
                        <div class="competition_future-item-description">
                            <a href="#" class="competition_future-item-name">X-race WIld Trail</a>
                            <p class="competition_future-item-date">10 октября 2022 г.</p>
                            <p class="competition_future-item-distance">35 км </p>
                        </div>
                    </div>
                    <div class="competition_future-item">
                        <div class="competition_future-item-image">
                            <img src="{{ asset('/assets/img/run_default3.jpg')}}" class="rounded img" alt="user-image">
                        </div>
                        <div class="competition_future-item-description">
                            <a href="#" class="competition_future-item-name">Soshi TRI Olimpic</a>
                            <p class="competition_future-item-date">10 сентября 2022 г.</p>
                            <p class="competition_future-item-distance">52 км </p>
                        </div>
                    </div>
                    <div class="competition_future-item">
                        <div class="competition_future-item-image">
                            <img src="{{ asset('/assets/img/run_default3.jpg')}}" class="rounded img" alt="user-image">
                        </div>
                        <div class="competition_future-item-description">
                            <a href="#" class="competition_future-item-name">SportMarafonFest</a>
                            <p class="competition_future-item-date">4 июня 2022 г.</p>
                            <p class="competition_future-item-distance">66 км </p>
                        </div>
                    </div>
                    <div class="competition_future-item">
                        <div class="competition_future-item-image">
                            <img src="{{ asset('/assets/img/run_default3.jpg')}}" class="rounded img" alt="user-image">
                        </div>
                        <div class="competition_future-item-description">
                            <a href="#" class="competition_future-item-name">Ugresha-Trail</a>
                            <p class="competition_future-item-date">28 августа 2022 г.</p>
                            <p class="competition_future-item-distance">30 км </p>
                        </div>
                    </div>
                    <div class="competition_future-item">
                        <div class="competition_future-item-image">
                            <img src="{{ asset('/assets/img/run_default3.jpg')}}" class="rounded img" alt="user-image">
                        </div>
                        <div class="competition_future-item-description">
                            <a href="#" class="competition_future-item-name">Arkhiz X-run</a>
                            <p class="competition_future-item-date">3 июля 2022 г.</p>
                            <p class="competition_future-item-distance">33 км </p>
                        </div>
                    </div>
                </div>
                
            </div>
            
            <div class="competition_past">
                <h6>Прошедшие</h6>
                <a href="#" class="competition_past-items-viewAll">Показать все</a>
                <div class="competition_past-items">
                    <div class="competition_past-item">
                        <div class="competition_past-item-image">
                            <img src="{{ asset('/assets/img/run_default3.jpg')}}" class="rounded img" alt="user-image">
                        </div> 
                        <div class="competition_past-item-description">
                            <a href="#" class="competition_past-item-name">Московский полумарафон</a>
                            <p class="competition_past-item-date">3 июля 2021 г.</p>
                        </div>
                    </div>
                    <div class="competition_past-item">
                        <div class="competition_past-item-image">
                            <img src="{{ asset('/assets/img/run_default3.jpg')}}" class="rounded img" alt="user-image">
                        </div> 
                        <div class="competition_past-item-description">
                            <a href="#" class="competition_past-item-name">Arkhiz X-run</a>
                            <p class="competition_past-item-date">3 июля 2021 г.</p>
                        </div>
                    </div>
                    <div class="competition_past-item">
                        <div class="competition_past-item-image">
                            <img src="{{ asset('/assets/img/run_default3.jpg')}}" class="rounded img" alt="user-image">
                        </div> 
                        <div class="competition_past-item-description">
                            <a href="#" class="competition_past-item-name">Arkhiz X-run</a>
                            <p class="competition_past-item-date">3 июля 2021 г.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {{--!Popup Новая тренировка--}}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Новая тренировка</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="row g-3" method="POST" action="/test">
                        @csrf
                        <select class="form-select" aria-label="Default select example" name="type" required>
                            <option selected value="Забег">Забег</option>
                            <option value="Велозаезд">Велозаезд</option>
                            <option value="Заплыв">Заплыв</option>
                          </select>
                        <div class="row g-3">
                            <div class="col">
                                <label for="inputDate" class="form-label">Дата</label>
                                <input type="date" class="form-control" value='' id="inputDate" name="date" required>
                            </div>
                            <div class="col">
                                <label for="inputTime" class="form-label">Время</label>
                                <input type="time" class="form-control" value='' id="inputTime" name="time" step="1" required>
                            </div>
                            <div class="col">
                                <label for="inputLocation" class="form-label">Локация</label>
                                <input type="text" class="form-control" value='' id="inputLocation" name="location" required>
                            </div>
                        </div>
                        <div class="col-12">
                            <label for="inputDistance" class="form-label">Расстояние</label>
                            <input type="number" class="form-control" id="inputDistance" name="distance" step="any" required>
                          </div>
                          <div class="col-12">
                            <label for="inputPace" class="form-label">Темп</label>
                            <input type="time" class="form-control" id="inputPace" name="pace" step="1" required>
                          </div>
                          <div class="col-12">
                            <label for="inputDuration" class="form-label">Продолжительность</label>
                            <input type="time" class="form-control" id="inputDuration" name="duration" step="1" required>
                          </div>
                        <button type="submit" class="btn btn-danger newtraining_btn">Сохранить</button>
                      </form>
                </div>   
              </div>
            </div>
          </div>
        </div>
        
    </main>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</body>
</html>