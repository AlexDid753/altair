<div class="row">
    <div class="col-md-10">
        @foreach ($fields as $fieldName => $fieldValue)
            @includeIf('admin.ui.' . (is_array($fieldValue) ? $fieldValue['type'] : $fieldValue), [
                'fieldName' => $fieldName,
                'fieldModelName' => isset($fieldValue['fieldModelName']) ? $fieldValue['fieldModelName'] : $fieldName,
                "fieldValue" => $fieldValue,
                "attributes" => isset($fieldValue['attributes'])? $fieldValue['attributes'] : '',
                'model' => $model
            ])
        @endforeach
    </div>
</div>

@if($model->summ() > 0)
    <p style="font-weight: bold">Сумма заказа: {{$model->summ()}}</p>
@endif