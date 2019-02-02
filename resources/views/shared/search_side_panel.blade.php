<div class="sidebar sidebar-left">
  <div class="widget widget-search">
    <h2 class="widget-title title14 font-bold text-uppercase play-font">Поиск</h2>
    <form class="wg-search-form" method="get" action="/search">
      <input type="text" name="q" placeholder="Поиск.."/>
      <input type="submit" value=""/>
    </form>
  </div>
  @if($model->products)
    <div class="widget widget-attr widget-attr-stone">
      <h2 class="widget-title title14 font-bold play-font text-uppercase dark">Вставка</h2>
      <div class="widget-content">
        <ul class="list-none list-attr">
          <li><a href="javascript:void(0);" class="{{(request()->piece == 'true')?'active':''}}">Камень
              <span>
                {{ $model->products->where('piece', '!=', '')
                            ->where('piece', '!=', 'эмаль')
                            ->where('piece', '!=', 'Эмаль')->count() }}
              </span></a></li>
        </ul>
      </div>
    </div>
    <div class="widget widget-attr widget-attr-complect">
      <h2 class="widget-title title14 font-bold play-font text-uppercase dark">Комплект</h2>
      <div class="widget-content">
        <ul class="list-none list-attr">
          <li><a href="javascript:void(0);" class="{{(request()->complect == 'true')?'active':''}}">Присутствует
              <span>
                {{ $model->products->where('connected_products', '!=', '')->count() }}
              </span></a></li>
        </ul>
      </div>
    </div>
    @foreach($model->customProductFields() as $field_name => $value)
      @include('shared.side_multicheckbox')
    @endforeach
    <div class="widget widget-price">
      <h2 class="widget-title title14 font-bold play-font text-uppercase dark">Цена</h2>
      <div class="widget-content">
        <div class="range-filter">
          <div class="slider-range" id="price-filter">
            <div class="inputs d-flex">
              <input id="price_min" type="number" class="col-6" style="width: 40%">
              <input id="price_max" type="number" class="col-6" style="width: 40%">
            </div>
            <span class="min-price"></span>
            <span class="max-price"></span>
          </div>
        </div>
      </div>
    </div>
  @endif
</div>