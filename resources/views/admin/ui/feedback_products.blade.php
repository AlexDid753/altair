<?php  $data = isset($fieldValue['value']) ? $fieldValue['value'] : json_decode($model->$fieldName);   ?>
@if (!empty($data))
  <div class="form-group row">
    <label class="col-md-12 col-form-label">Выбранные товары</label>
    <div class="col-md-12">
      <table class="table table-bordered">
        <thead>
        <tr>
          <th scope="col">Товар</th><th scope="col">Информация</th>
        </tr>
        </thead>
        @foreach($data as $data_item)
              <?php $product = \App\Product::withTrashed()->find($data_item->id); ?>
          <tr>
            <th>
              <a href="{{$product->url}}">{{$product->title}}</a>
                <?php if ($product->trashed()) {
                    echo ' (Продукт удален)';
                } ?>
            </th>
            <th>
              @if(!empty($data_item->size))
                {{'Размер: '.$data_item->size}}
              @endif
            </th>
          </tr>
        @endforeach
      </table>
    </div>
  </div>
@endif