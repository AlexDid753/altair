<ul class="list-inline-block list-attr-label">
  @for ($i = 14; $i <= 23; $i+=0.5)
    <li><span data-id="{{$model->id}}">{{number_format( (float) $i, 1, '.', '')}}</span></li>
  @endfor
</ul>