<!DOCTYPE HTML>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <base href="http://altair.test/">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <meta name="robots" content="" />
    <title>{{ config('app.name') }}</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700%7cPlayfair+Display:400,700,400i,700i" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="/css/libs/font-awesome.min.css"/>
    <link rel="stylesheet" type="text/css" href="/css/libs/ionicons.min.css"/>
    <link rel="stylesheet" type="text/css" href="/css/libs/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="/css/libs/bootstrap-theme.min.css"/>
    <link rel="stylesheet" type="text/css" href="/css/libs/jquery.fancybox.min.css"/>
    <link rel="stylesheet" type="text/css" href="/css/libs/jquery-ui.min.css"/>
    <link rel="stylesheet" type="text/css" href="/css/libs/owl.carousel.min.css"/>
    <link rel="stylesheet" type="text/css" href="/css/libs/owl.transitions.min.css"/>
    <link rel="stylesheet" type="text/css" href="/css/libs/jquery.mCustomScrollbar.min.css"/>
    <link rel="stylesheet" type="text/css" href="/css/libs/owl.theme.min.css"/>
    <link rel="stylesheet" type="text/css" href="/css/libs/animate.min.css"/>
    <link rel="stylesheet" type="text/css" href="/css/libs/hover.min.css"/>
    <link rel="stylesheet" type="text/css" href="/css/theme.css" media="all"/>
    <link rel="stylesheet" type="text/css" href="/css/responsive.css" media="all"/>
    <link rel="stylesheet" type="text/css" href="/css/browser.css" media="all"/>
    <!-- <link rel="stylesheet" type="text/css" href="/css/rtl.css" media="all"/> -->
</head>
<body class="preload" style="background:#f4f4f4">
<div class="wrap">
@include('blocks.header')
<!-- End Header -->
<div class="white-space"></div>
@yield('content')
<!-- End Content -->
@include('blocks.footer')
<!-- End Footer -->
    <div class="wishlist-mask">
        <div class="wishlist-popup">
            <span class="popup-icon"><i class="fa fa-bullhorn" aria-hidden="true"></i></span>
            <p class="wishlist-alert">"BW Store Product" was added to wishlist</p>
            <div class="wishlist-button">
                <a href="#">Continue Shopping (<span class="wishlist-countdown">5</span>)</a>
                <a href="#">Go To Shopping Cart</a>
            </div>
        </div>
    </div>
    <!-- End Wishlist Mask -->
    <div id="loading">
        <div id="loading-center">
            <div id="loading-center-absolute">
                <div class="object" id="object_four"></div>
                <div class="object" id="object_three"></div>
                <div class="object" id="object_two"></div>
                <div class="object" id="object_one"></div>
            </div>
        </div>
    </div>
    <!-- End Preload -->
    <a href="#" class="scroll-top dark"><i class="fa fa-angle-up"></i></a>
</div>
<script src="/js/libs/jquery-3.2.1.min.js"></script>
<script src="/js/libs/bootstrap.min.js"></script>
<script src="/js/libs/jquery.fancybox.min.js"></script>
<script src="/js/libs/jquery-ui.min.js"></script>
<script src="/js/libs/owl.carousel.min.js"></script>
<script src="/js/libs/jquery.jcarousellite.min.js"></script>
<script src="/js/libs/jquery.mCustomScrollbar.min.js"></script>
<script src="/js/libs/jquery.elevatezoom.min.js"></script>
<script src="/js/libs/popup.min.js"></script>
<script src="/js/libs/timecircles.min.js"></script>
<script src="/js/libs/wow.min.js"></script>
<script src="/js/theme.js"></script>
</body>
</html>