<div class="form-group row">
    <label class="col-md-12 col-form-label">Избранные товары</label>
    <?php  $data = isset($fieldValue['value']) ? $fieldValue['value'] : json_decode($model->$fieldName);    ?>
    <div class="col-md-12">
        <table class="table table-bordered">
            <thead>
            <tr>
                <th scope="col">Товар</th>
                <th scope="col">Количество</th>
            </tr>
            </thead>
            @foreach($data as $data_item)
                <?php $product = \App\Product::where('id', $data_item->id)->first(); ?>
                <tr>
                    <th><a href="{{$product->url}}">{{$product->title}}</a></th>
                    <th>{{$data_item->count}}</th>
                </tr>
            @endforeach
        </table>
    </div>
</div>