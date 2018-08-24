<!DOCTYPE html>
<html class="wide wow-animation" lang="{{ app()->getLocale() }}">
<head>
    <!-- Site Title-->
    <title>{{ $model->meta_title ?: $model->name }}</title>
    @if ($model->meta_description)
        <meta content="{{ $model->meta_description }}" name="description">
    @endif
    @if ($model->meta_keywords)
        <meta content="{{ $model->meta_keywords }}" name="keywords">
    @endif
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8">

    <base href="/">

    <link rel="icon" href="images/favicon.png" type="image/x-icon">
    <!-- Stylesheets-->
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Poppins:400,500,700%7CQuattrocento+Sans:400,700">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/style.css">
    <!--[if lt IE 10]>
    <div style="background: #212121; padding: 10px 0; box-shadow: 3px 3px 5px 0 rgba(0,0,0,.3); clear: both; text-align:center; position: relative; z-index:1;"><a href="http://windows.microsoft.com/en-US/internet-explorer/"><img src="images/ie8-panel/warning_bar_0000_us.jpg" border="0" height="42" width="820" alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."></a></div>
    <script src="js/html5shiv.min.js"></script>
    <![endif]-->
</head>
<body>
<!-- Page-->
<div class="page text-center text-md-left">
    <div class="page-loader">
        <div>
            <div class="page-loader-body">
                <div class="cssload-loader">
                    <div class="cssload-inner cssload-one"></div>
                    <div class="cssload-inner cssload-two"></div>
                    <div class="cssload-inner cssload-three"></div>
                </div>
            </div>
        </div>
    </div>

    @includeIf('blocks.header')

    <!-- Page Content-->
    <main class="page-content">

        @yield('content')

    </main>

    {{--@includeIf('blocks.footer')--}}

</div>

@includeIf('blocks.plugins')

<!-- Java script-->
<script src="js/core.min.js"></script>
<script src="js/jquery.mask.min.js"></script>
<script src="js/script.js"></script>
</body>
</html>