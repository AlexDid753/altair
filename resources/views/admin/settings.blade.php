@extends('layouts.admin')

@section('content')
    <form method="POST" action="/admin/settings">
        @csrf

        <div class="row">
            <div class="col-md-9">
                @foreach ($groups as $models)
                    @foreach ($models as $model)
                        @if ($loop->first)
                            <h3>{{ __(ucfirst($model->group)) }}</h3>
                        @endif
                        @includeIf('admin.ui.' . $model->type, ['fieldName' => $model->name, 'fieldValue' => $model->value])
                    @endforeach
                @endforeach
            </div>
            <div class="col-md-1">
                <div class="control-buttons">
                    <button type="submit" class="btn btn-outline-primary"><span data-feather="save"></span> {{ __('Сохранить') }}</button>
                </div>
            </div>
        </div>

    </form>
@endsection
