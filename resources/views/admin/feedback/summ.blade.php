@if($model->summ() > 0)
  <p style="font-weight: bold">Сумма заказа: {{$model->summ()}}&#8381;</p>
@endif