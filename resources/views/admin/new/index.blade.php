@extends('layouts.admin')

@section('content')
    <div class="row">
        <div class="col-md-11">
            <table class="table table-striped">
                <tbody>

                @foreach ($news as $new)
                    <tr>
                        <td>{{ $new->name }}</td>
                        <td>{{ $new->email }}</td>
                        <td class="text-right">
                            <a href="{{ route('new.edit', ['id' => $new->id]) }}" class="mr-3"><span data-feather="edit"></span></a>

                            <a href="{{ route('new.delete', ['id' => $new->id]) }}" onclick="return confirm('Действительно удалить &quot;{{ $new->name }}&quot; ?')"><span data-feather="trash"></span></a>
                        </td>
                    </tr>
                @endforeach

                </tbody>
            </table>
        </div>
    </div>
@endsection
