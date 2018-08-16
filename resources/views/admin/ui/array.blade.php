@foreach ($model->$fieldName as $arName => $arValue)
    @includeIf('admin.ui.' . $model->{"{$fieldName}_params"}[$arName]['type'], [
        'fieldName' => "{$fieldName}[{$arName}]",
        'fieldModelName' => $arName,
        'fieldValue' => ["value" => $arValue, "label" => ucfirst(str_replace('_', ' ', $arName))]
    ])
@endforeach