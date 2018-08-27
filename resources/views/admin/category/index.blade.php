@extends('layouts.admin')
@section('content')
    <div class="row">
        <div class="col-md-11">
            <table class="table table-striped">
                <tbody>
                    @foreach ($models as $model)
                        @if (!$model->parent_id)
                            <tr>
                                <td>{{ $model->title }}</td>
                                <td class="text-right">
                                    <a href="{{ route($name.'.edit', ['id' => $model->id]) }}" class="mr-3"><span data-feather="edit"></span></a>

                                    <a href="{{ route($name.'.delete', ['id' => $model->id]) }}" onclick="return confirm('Действительно удалить &quot;{{ $model->name }}&quot; ?')"><span data-feather="trash"></span></a>
                                </td>
                            </tr>
                            @if ($model->childrens)
                                @includeIf('admin.'.$name.'.table_row', ['models' => $model->childrens, 'padding' => 18])
                            @endif
                        @endif
                    @endforeach
                </tbody>
            </table>
        </div>
        <div class="col-md-1">
            <div class="control-buttons">
                <a class="btn btn-outline-primary" href="{{ route($name.'.create') }}"><span data-feather="plus"></span> {{ __('Add') }}</a>
            </div>
        </div>
    </div>
@endsection
