<?php
  $settings = new \App\Settings();
  $data = json_decode($model->products);
?>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="dns-prefetch" href="https://fonts.gstatic.com">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <base href="{{config('app.url')}}">
</head>
<div class="container">
  <p>Ваш заказ №{{$model->id}} принят. Вам перезвонят в ближайшее время.</p>
  <p>Выбранный тип оплаты: {{$model->pay_type}}</p>
  <p>По любым вопросам обращайтесь по телефону: {{$settings->phone}}</p>
  @include('admin.ui.products_info_table')
</div>
