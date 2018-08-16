<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <base href="/">

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="//fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="/packages/colorbox/colorbox.css" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <div class="container-fluid">
            <div class="row">
                <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                    <div class="sidebar-sticky">

                        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            <span>Контент</span>
                        </h6>
                        <ul class="nav flex-column mb-2">
                            <li class="nav-item">
                                <a class="nav-link" href="/admin/page">
                                    <span data-feather="book-open"></span>
                                    Страницы
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/admin/news">
                                    <span data-feather="align-left"></span>
                                    Новости
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/admin/portfolio">
                                    <span data-feather="shopping-cart"></span>
                                    Портфолио
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/admin/catalog_stone">
                                    <span data-feather="shopping-cart"></span>
                                    Товары каталога камня
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/admin/catalog_product">
                                    <span data-feather="shopping-cart"></span>
                                    Товары каталога изделий
                                </a>
                            </li>
                        </ul>

                        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            <span>Администрирование</span>
                        </h6>
                        <ul class="nav flex-column mb-2">
                            <li class="nav-item">
                                <a class="nav-link" href="/admin/menu">
                                    <span data-feather="menu"></span>
                                    Меню
                                </a>
                                <a class="nav-link" href="/admin/user">
                                    <span data-feather="users"></span>
                                    Пользователи
                                </a>
                                <a class="nav-link" href="/admin/template">
                                    <span data-feather="sidebar"></span>
                                    Шаблоны
                                </a>
                                <a class="nav-link" href="/admin/log">
                                    <span data-feather="eye"></span>
                                    Лог изменений
                                </a>
                                <a class="nav-link" href="{{-- route('settings', [], false) --}}">
                                    <span data-feather="settings"></span>
                                    Настройки
                                </a>
                            </li>
                        </ul>

                        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            <span>{{ Auth::user()->name }}</span>
                        </h6>
                        <ul class="nav flex-column mb-2">
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                    <span data-feather="log-out"></span>
                                    Выйти</a>
                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    @csrf
                                </form>
                            </li>
                        </ul>


                    </div>
                </nav>
                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                    <div class="container align-items-center pb-2 mb-3">
                        @if(Session::has('message'))
                            <p class="alert {{ Session::get('alert-class', 'alert-info') }}">{{ Session::get('message') }}</p>
                        @endif

                            @if ($errors->any())
                                <div class="alert alert-danger">
                                    <ul>
                                        @foreach ($errors->all() as $error)
                                            <li>{{ $error }}</li>
                                        @endforeach
                                    </ul>
                                </div>
                            @endif

                        @yield('content')
                    </div>
                </main>
            </div>
        </div>

    </div>

    <!-- Scripts -->
    <script>
        var appConfig = {
            elfinderRoute: '<? /*route('elfinder.tinymce4')*/ ?>'
        };
    </script>

    <script src="{{ asset('js/app.js') }}"></script>

    <script src='/packages/tinymce/tinymce.min.js'></script>
    <script src='/packages/colorbox/jquery.colorbox-min.js'></script>
    <script src="//unpkg.com/feather-icons/dist/feather.min.js"></script>
    <script src="{{ asset('js/admin.js') }}"></script>

</body>
</html>
