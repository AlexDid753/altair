@extends('layouts.admin')

@section('content')
    <div class="row">
        <div class="col-md-10">
            <table class="table table-striped">
                <tbody>
                    @foreach ($models as $model)
                        @if (!$model->parent_id)
                            <tr><!-- Строки первого уровня без родителей -->
                                <td>{{ $model->name }}</td>
                                <td class="text-right">
                                    @if (!$model->protected)
                                    <a href="{{ route($name.'.edit', ['id' => $model->id]) }}" class="mr-3"><span data-feather="edit"></span></a>
                                    <a href="{{ route($name.'.delete', ['id' => $model->id]) }}" onclick="return confirm('Действительно удалить &quot;{{ $model->name }}&quot; ?')"><span data-feather="trash"></span></a>
                                    @endif
                                </td>
                            </tr>
                            @if ($model->childrens)
                                @includeIf('admin.base.table_row', ['models' => $model->childrens, 'padding' => 18])
                            @endif
                        @endif
                    @endforeach
                </tbody>
            </table>
            {{$models->links()}}
        </div>
        <div class="col-md-1">
            <div class="control-buttons">
                <a class="btn btn-outline-primary" href="{{ route($name.'.create') }}"><span data-feather="plus"></span> {{ __('Добавить') }}</a>
            </div>
        </div>
    </div>
@endsection
