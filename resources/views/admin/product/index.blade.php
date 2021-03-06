@extends('layouts.admin')
@section('content')
    <div class="row">
        <div class="col-md-10">
            <form method="get" action="/admin/search">
                <div class="input-group">
                    <input type="text" name="q" class="form-control"
                           value="{{request()->q}}"
                           placeholder="Поиск по продуктам (Название, категория или артикул)">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="submit">
                            <span data-feather="search"></span>
                        </button>
                    </div>
                </div>
            </form>
            @include('shared.admin_pagination')
            <table class="table table-striped">
                <thead>
                <tr>
                    <td>ID</td>
                    <td>Артикул</td>
                    <td>Наименование</td>
                    <td>Категория</td>
                    <td class="text-right">
                    </td>
                </tr>
                </thead>
                <tbody>
                @foreach ($models as $model)
                    <tr>
                        <td>{{ $model->id }}</td>
                        <td>{{ $model->code }}</td>
                        <td>{{ $model->title }}</td>
                        <td>{{ $model->parent->title or '—' }}</td>
                        <td class="text-right">
                            <a href="{{ route($name.'.edit', ['id' => $model->id]) }}" class="mr-3"><span
                                        data-feather="edit"></span></a>

                            <a href="{{ route($name.'.delete', ['id' => $model->id]) }}"
                               onclick="return confirm('Действительно удалить &quot;{{ $model->name }}&quot; ?')"><span
                                        data-feather="trash"></span></a>
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
            @include('shared.admin_pagination')
        </div>
        <div class="col-md-1">
            <div class="control-buttons">
                <a class="btn btn-outline-primary" href="{{ route($name.'.create') }}"><span
                            data-feather="plus"></span> {{ __('Добавить') }}</a>
            </div>
        </div>
    </div>
@endsection
