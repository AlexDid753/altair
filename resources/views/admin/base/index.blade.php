@extends('layouts.admin')

@section('content')

    <div class="row">
        <div class="col-md-10">
            <table class="table table-striped">
                <tbody>

                    @foreach ($models as $model)
                        <tr>
                            <td>{{ $model->name }}</td>
                            <td class="text-right">
                                <a href="{{ route($name . '.edit', ['id' => $model->id]) }}" class="mr-3"><span data-feather="edit"></span></a>
                                <a href="{{ route($name . '.delete', ['id' => $model->id]) }}" onclick="return confirm('Действительно удалить &quot;{{ $model->name }}&quot; ?')"><span data-feather="trash"></span></a>
                            </td>
                        </tr>
                    @endforeach

                </tbody>
            </table>

            <div class="row">
                <div class="col-md-12 d-flex justify-content-end">
                    {{ $models->links() }}
                </div>
            </div>
        </div>
        <div class="col-md-1">
            <div class="control-buttons">
                <a class="btn btn-outline-primary" href="{{ route($name . '.create') }}"><span data-feather="plus"></span> {{ __('Добавить') }}</a>
            </div>
        </div>
    </div>

@endsection
