<ul class="list-inline-block list-attr-label">
  @foreach (Product::excepted_sizes_dropdown() as $key => $size)
    @if (!in_array($key, $model->excepted_sizes))
      <li><span data-id="{{$model->id}}">{{number_format( (float) $size, 1, '.', '')}}</span></li>
    @endif
  @endforeach
</ul>