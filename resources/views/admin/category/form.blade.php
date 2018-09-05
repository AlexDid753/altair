<div class="row">
    <div class="col-md-11">

        @foreach ($fields as $fieldName => $fieldValue)

            @includeIf('admin.ui.' . (is_array($fieldValue) ? $fieldValue['type'] : $fieldValue), [
                'fieldName' => $fieldName,
                'fieldModelName' => isset($fieldValue['fieldModelName']) ? $fieldValue['fieldModelName'] : $fieldName,
                "fieldValue" => $fieldValue,
                'attributes' => isset($fieldValue['attributes'])? $fieldValue['attributes'] : '',
                'model' => $model
            ])
        @endforeach


    </div>
    <div class="col-md-1">
        <div class="control-buttons">
            <button type="submit" class="btn btn-outline-primary"><span data-feather="save"></span> {{ __('Save') }}</button>
            <a target="_blank" href="{{ $model->url }}"><div  class="btn btn-outline-primary"><span data-feather="eye"></span> {{ __('See category') }}</div></a>
        </div>
    </div>
</div>