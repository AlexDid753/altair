<!-- Page Header-->
<header class="page-head">
    <ul>
        @foreach($topMenu as $menuItem)
            <li {!! starts_with('/' . request()->path(), $menuItem->getUrl()) ? 'class="active"' : '' !!}>
                <a href="{{ $menuItem->getUrl() }}">{{ $menuItem->name }}</a>
                @if (count($menuItem->childrens))
                    <ul>
                        @foreach($menuItem->childrens as $subMenuItem)
                            <li {!! starts_with('/' . request()->path(), $subMenuItem->getUrl()) ? 'class="active"' : '' !!}><a href="{{ $subMenuItem->getUrl() }}">{{ $subMenuItem->name }}</a></li>
                        @endforeach
                    </ul>
                @endif
            </li>
        @endforeach
    </ul>
</header>