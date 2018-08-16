@extends('layouts.admin')

@section('content')
    <div class="row">
        <div class="col-md-11">
            <table class="table table-striped">
                <tbody>

                @foreach ($pages as $page)
                    <tr>
                        <td>{{ $page->name }}</td>
                        <td class="text-right">
                            <a href="{{ route('page.edit', ['id' => $page->id]) }}" class="mr-3"><span data-feather="edit"></span></a>

                            <a href="{{ route('page.destroy', ['id' => $page->id]) }}" onclick="return confirm('Действительно удалить &quot;{{ $page->name }}&quot; ?')"><span data-feather="trash"></span></a>
                        </td>
                    </tr>
                @endforeach

                </tbody>
            </table>
        </div>
        <div class="col-md-1">
            <div class="control-buttons">
                <a class="btn btn-outline-primary" href="{{ route('page.create') }}"><span data-feather="plus"></span> {{ __('Add') }}</a>
            </div>
        </div>
    </div>
@endsection
