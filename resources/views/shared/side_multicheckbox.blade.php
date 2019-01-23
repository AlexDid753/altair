<div class="widget widget-attr widget-attr-{{$field_name}}">
  <h2 class="widget-title title14 font-bold play-font text-uppercase dark">{{$value['rus_label']}}</h2>
  <div class="widget-content">
    <ul class="list-none list-attr">
      @foreach(call_user_func_array(array($model, $value['method']), array()) as $key => $val)
        @if($val)
          <li data-key="{{$key}}">
            <a href="javascript:void(0);"
               class="{{(strpos(request()->{$field_name},strval($key)) !== false)?'active':''}}">
              {{$val}}
              <span>
                  {{ $model->products->where($field_name, $key)->count()}}
              </span>
            </a>
          </li>
        @endif
      @endforeach
    </ul>
  </div>
</div>