@extends('layouts.admin')

@section('content')
    <div class="row">
        <div class="col-md-11">
            <table class="table table-striped">
                <tbody>

                @foreach ($users as $user)
                    <tr>
                        <td>{{ $user->name }}</td>
                        <td>{{ $user->email }}</td>
                        <td class="text-right">
                            <a href="{{ route('user.edit', ['id' => $user->id]) }}" class="mr-3"><span data-feather="edit"></span></a>
                            <a href="{{ route('user.destroy', ['id' => $user->id]) }}" onclick="return confirm('Действительно удалить &quot;{{ $user->name }}&quot; ?')"><span data-feather="trash"></span></a>
                        </td>
                    </tr>
                @endforeach

                </tbody>
            </table>
        </div>
    </div>
@endsection
