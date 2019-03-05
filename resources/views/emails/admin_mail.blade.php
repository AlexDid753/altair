<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="dns-prefetch" href="https://fonts.gstatic.com">
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
@php($data = json_decode($model->products))
<base href="https://serebro-altair.ru/">
<div class="container">
  <p>Здравствуйте, на сайте Альтаир-Серебро был оставлен запрос на резервирование.</p>
  <p>Вы можете просмотреть информацию в административной панели по ссылке:</p>
  <a href="{{config('app.url')}}/admin/feedback/{{$model->id}}/edit">Заказ #{{$model->id}}</a>

  <p>Выбранный тип оплаты: {{$model->pay_type}}</p>
  @include('admin.ui.products_info_table')
</div>
