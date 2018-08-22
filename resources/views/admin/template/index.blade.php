@extends('layouts.admin')

@section('content')
    <div class="row">
        <div class="col-md-11">
            <table class="table table-striped">
                <tbody>

                    @foreach ($models as $model)
                        @if (!$model->parent_id)
                            <tr>
                                <td>{{ $model->name }}</td>
                                <td class="text-right">
                                    <a href="{{ route('template.edit', ['id' => $model->id]) }}" class="mr-3"><span data-feather="edit"></span></a>

                                    <a href="{{ route('template.delete', ['id' => $model->id]) }}" onclick="return confirm('Действительно удалить &quot;{{ $model->name }}&quot; ?')"><span data-feather="trash"></span></a>
                                </td>
                            </tr>
                            @if ($model->childrens)
                                @includeIf('admin.template.table_row', ['models' => $model->childrens, 'padding' => 18])
                            @endif
                        @endif
                    @endforeach

                </tbody>
            </table>
        </div>
        <div class="col-md-1">
            <div class="control-buttons">
                <a class="btn btn-outline-primary" href="{{ route('template.create') }}"><span data-feather="plus"></span> {{ __('Add') }}</a>
            </div>
        </div>
    </div>
@endsection
