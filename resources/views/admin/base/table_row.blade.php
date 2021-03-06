@foreach ($models as $model)
    <tr>
        @if ($padding)
            <td style="padding-left: {{ $padding }}px"><span data-feather="corner-down-right"></span> {{ $model->name }}
            </td>
        @else
            <td>{{ $model->name }}</td>
        @endif
        <td class="text-right">
            <a href="{{ route($name . '.edit', ['id' => $model->id]) }}" class="mr-3"><span data-feather="edit"></span></a>
            <a href="{{ route($name . '.delete', ['id' => $model->id]) }}"
               onclick="return confirm('Действительно удалить &quot;{{ $model->name }}&quot; ?')"><span
                        data-feather="trash"></span></a>
        </td>
    </tr>

    @if ($model->childrens->sortBy('sort'))
        @include('admin.base.table_row', ['models' => $model->childrens->sortBy('sort'), 'padding' => $padding + 18])
    @endif
@endforeach
