@if($model->template)
    @foreach (json_decode($model->template->fields) as $key => $value)
        @includeIf('admin.ui.' . $value->type, [
            'fieldName' => "fields[{$value->name}]",
            'fieldModelName' => $value->name,
            'fieldValue' => ["value" => $model->{$value->name}, "label" => ucfirst(str_replace('_', ' ', $value->name))]
        ])
    @endforeach
@endif