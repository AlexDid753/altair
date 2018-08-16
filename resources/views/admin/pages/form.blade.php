{{ Form::open(array('action' => 'Admin\PageController@store', 'method' => 'post')) }}


<div class="row">
    <div class="col-md-11">

        @foreach ($fields as $fieldName => $fieldValue)

            @includeIf('admin.ui.' . (is_array($fieldValue) ? $fieldValue['type'] : $fieldValue), [
                'fieldName' => $fieldName,
                'fieldModelName' => isset($fieldValue['fieldModelName']) ? $fieldValue['fieldModelName'] : $fieldName,
                "fieldValue" => $fieldValue,
                'model' => $model
            ])
        @endforeach


    </div>
    <div class="col-md-1">
        <div class="control-buttons">
            <button type="submit" class="btn btn-outline-primary"><span data-feather="save"></span> {{ __('Save') }}</button>
        </div>
    </div>
</div>
{{ Form::close() }}