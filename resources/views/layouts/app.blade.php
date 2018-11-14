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
    <meta name=“cmsmagazine” content=“848ae7630557f340f5b1ca0e385dc314"/>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ $meta_title ?? $model->meta_title ?: $model->name }}</title>
    @if ((isset( $meta_description )&&!empty( $meta_description ))|| $model->meta_description )
        <meta content="{{$meta_description ?? $model->meta_description }}" name="description">
    @endif
    @if ((isset( $meta_keywords )&&!empty( $meta_keywords ))|| $model->meta_keywords )
        <meta content="{{ $meta_keywords ?? $model->meta_keywords }}" name="keywords">
    @endif
    {!! $settings->scripts !!}
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700%7cPlayfair+Display:400,700,400i,700i"
          rel="stylesheet">
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
    <link rel="shortcut icon" href="{{{ asset('images/icon/favicon.png') }}}">
    @if(isset($show_link_canonical)&&($show_link_canonical))
    <link rel="canonical" href="{{\Illuminate\Support\Facades\URL::current()}}"/>
    @endif
    <!-- <link rel="stylesheet" type="text/css" href="/css/rtl.css" media="all"/> -->
    <style>
        @if (isset($model->slider_linked_images) && count($model->slider_linked_images))
            @foreach ($model->slider_linked_images as $slider_item)
                @media (min-width: 768px) {
            .item-slider .banner-info[data-number='{{$slider_item->sort}}'] {
            {{isset($slider_item->left)&&!empty($slider_item->left) ?
            'left:'.$slider_item->left.'px;' : ""}}

            {{isset($slider_item->position_top)&&!empty($slider_item->position_top) ?
            'bottom: inherit;
            top:'.$slider_item->position_top.'px;' : ""}}

            }

            .item-slider .banner-info[data-number='{{$slider_item->sort}}'] h2 {
                font-family: {!! isset($slider_item->font_family1) ? $slider_item->font_family1 : '' !!};
                font-size: {{isset($slider_item->font_size1) ? $slider_item->font_size1."px;" : ''}};
            }

            .item-slider .banner-info[data-number='{{$slider_item->sort}}'] h3 {
                font-family: {!! isset($slider_item->font_family2) ? $slider_item->font_family2 : '' !!};
                font-size: {{isset($slider_item->font_size2) ? $slider_item->font_size2."px;" : ''}};
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
<div class="mango-callback" data-settings='{"type":"", "id": "MTAwMDk1MDc=","autoDial" : "0", "lang" : "ru-ru", "host":"widgets.mango-office.ru/", "errorMessage": "В данный момент наблюдаются технические проблемы и совершение звонка невозможно"}'>
</div>
<script>!function(t){function e(){i=document.querySelectorAll(".button-widget-open");for(var e=0;e<i.length;e++)"true"!=i[e].getAttribute("init")&&(options=JSON.parse(i[e].closest('.'+t).getAttribute("data-settings")),i[e].setAttribute("onclick","alert('"+options.errorMessage+"(0000)'); return false;"))}function o(t,e,o,n,i,r){var s=document.createElement(t);for(var a in e)s.setAttribute(a,e[a]);s.readyState?s.onreadystatechange=o:(s.onload=n,s.onerror=i),r(s)}function n(){for(var t=0;t<i.length;t++){var e=i[t];if("true"!=e.getAttribute("init")){options=JSON.parse(e.getAttribute("data-settings"));var o=new MangoWidget({host:window.location.protocol+'//'+options.host,id:options.id,elem:e,message:options.errorMessage});o.initWidget(),e.setAttribute("init","true"),i[t].setAttribute("onclick","")}}}host=window.location.protocol+"//widgets.mango-office.ru/";var i=document.getElementsByClassName(t);o("link",{rel:"stylesheet",type:"text/css",href:host+"css/widget-button.css"},function(){},function(){},e,function(t){document.documentElement.insertBefore(t,document.documentElement.firstChild)}),o("script",{type:"text/javascript",src:host+"widgets/mango-callback.js"},function(){("complete"==this.readyState||"loaded"==this.readyState)&&n()},n,e,function(t){document.documentElement.appendChild(t)})}("mango-callback");</script>
</body>
</html>