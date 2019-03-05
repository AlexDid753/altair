<?php
  $settings = new \App\Settings();
  $data = json_decode($model->products);
?>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="dns-prefetch" href="https://fonts.gstatic.com">
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">
  <base href="https://serebro-altair.ru/">
</head>
<base href="https://serebro-altair.ru/">
<div class="container">
  <p>Ваш заказ №{{$model->id}} принят. Вам перезвонят в ближайшее время.</p>
  <p>Выбранный тип оплаты: {{$model->pay_type}}</p>
  <p>По любым вопросам обращайтесь по телефону: {{$settings->phone}}</p>
  @include('admin.ui.products_info_table')
</div>
