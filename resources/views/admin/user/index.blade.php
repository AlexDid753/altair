@extends('layouts.admin')

@section('content')
    <div class="row">
        <div class="col-md-10">
            <table class="table table-striped">
                <tbody>

                @foreach ($models as $model)
                    <tr>
                        <td>{{ $model->name }}</td>
                        <td>{{ $model->email }}</td>
                        <td class="text-right">
                            <a href="{{ route('user.edit', ['id' => $model->id]) }}" class="mr-3"><span data-feather="edit"></span></a>
                            <a href="{{ route('user.delete', ['id' => $model->id]) }}" onclick="return confirm('Действительно удалить &quot;{{ $model->name }}&quot; ?')"><span data-feather="trash"></span></a>
                        </td>
                    </tr>
                @endforeach

                </tbody>
            </table>
        </div>
    </div>
@endsection
