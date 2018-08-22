@extends('layouts.admin')

@section('content')
    <div class="row">
        <div class="col-md-11">
            <table class="table table-striped">
                <tbody>

                    @foreach ($pages as $page)
                        @if (!$page->parent_id)
                            <tr><!-- Строки первого уровня без родителей -->
                                <td>{{ $page->name }}</td>
                                <td class="text-right">
                                    <a href="{{ route('page.edit', ['id' => $page->id]) }}" class="mr-3"><span data-feather="edit"></span></a>

                                    <a href="{{ route('page.delete', ['id' => $page->id]) }}" onclick="return confirm('Действительно удалить &quot;{{ $page->name }}&quot; ?')"><span data-feather="trash"></span></a>
                                </td>
                            </tr>
                            @if ($page->childrens)
                                @includeIf('admin.pages.table_row', ['models' => $page->childrens, 'padding' => 18])
                            @endif
                        @endif
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
