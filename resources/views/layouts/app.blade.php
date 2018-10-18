<!DOCTYPE HTML>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<?php
if (!isset($model)) {
    $model = new \App\Page();
    $model->name = config('app.name');
}
?>
<head>
    <base href="/">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="description" content=""/>
    <meta name="keywords" content=""/>
    <meta name="robots" content=""/>
    <meta name="yandex-verification" content="c4d052ac7add82f5"/>
    <meta name="google-site-verification" content="2TyHFP-Ix37YtnO3yNrS550AJY95TSk8Os49fXPeON4"/>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ $model->meta_title ?: $model->name }}</title>
    @if ($model->meta_description)
        <meta content="{{ $model->meta_description }}" name="description">
    @endif
    @if ($model->meta_keywords)
        <meta content="{{ $model->meta_keywords }}" name="keywords">
    @endif
    {!! $settings->scripts !!}
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
    <style>
        @if (isset($model->slider_linked_images) && count($model->slider_linked_images))
            @foreach ($model->slider_linked_images as $slider_item)
                @media (min-width: 768px) {
                    .item-slider .banner-info[data-number='{{$slider_item->sort}}'] {
                        @switch($slider_item->position)
                            @case('right')
                                @break

                            @case('left')
                                left: auto;
                                @break

                            @case('center')
                                right:0;
                                @break

                            @default
                        @endswitch
                        {{isset($slider_item->position_top)&&!empty($slider_item->position_top) ?
                        'bottom: inherit;
                        top:'.$slider_item->position_top.'px;' : ""}}
                    }

                    .item-slider .banner-info[data-number='{{$slider_item->sort}}'] h2 {
                        font-weight: {{isset($slider_item->font_weight) ? $slider_item->font_weight : ''}};
                    }
                }
            @endforeach
        @endif

    </style>
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
<script src="/js/libs/jquery.maskedinput.js"></script>
<script src="/js/libs/wow.min.js"></script>
<script src="/js/theme.js"></script>
</body>
</html>