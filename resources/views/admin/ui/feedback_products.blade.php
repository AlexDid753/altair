<?php  $data = isset($fieldValue['value']) ? $fieldValue['value'] : json_decode($model->$fieldName);   ?>
@if (!empty($data))
<div class="form-group row">

    <label class="col-md-12 col-form-label">Избранные товары</label>

    <div class="col-md-12">
        <table class="table table-bordered">
            <thead>
            <tr>
                <th scope="col">Товар</th>
            </tr>
            </thead>
            @foreach($data as $data_item)
                <?php $product = \App\Product::find($data_item->id); ?>
                <tr>
                    <th><a href="{{$product->url}}">{{$product->title}}</a></th>
                </tr>
            @endforeach
        </table>
    </div>
</div>
@endif