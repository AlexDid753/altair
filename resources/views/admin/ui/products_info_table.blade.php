<div class="form-group row">
  <label class="col-md-12 col-form-label">Выбранные товары</label>
  <div class="col-md-12">
    <table class="table table-bordered">
      <thead>
      <tr>
        <th scope="col">#</th><th scope="col">Товар</th><th scope="col">Информация</th>
      </tr>
      </thead>
      @foreach($data as $data_item)
            <?php $product = Product::withTrashed()->find($data_item->id); ?>
        <tr>
          <th>
            <a href="{{$product->url}}">
              <img src="{{resize($product->preview_image(), 100, 100)}}" alt=""/>
            </a>
          </th>
          <th>
            <a href="{{$product->url}}">{{$product->title}}</a>
            {{($product->trashed())?' (Продукт удален)' : ''}}
          </th>
          <th>
            <p>Цена: {{$product->price}}</p>
            <p>Артикул: {{$product->code}}</p>
            <p>{{($data_item->size)?'Размер: '.$data_item->size : ''}}</p>
          </th>
        </tr>
      @endforeach
    </table>
  </div>
</div>