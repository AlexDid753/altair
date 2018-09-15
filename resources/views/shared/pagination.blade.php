@if ($paginator->hasPages())
    <div class="pagi-nav text-right" role="navigation">
        {{-- Previous Page Link --}}
        @if ($paginator->onFirstPage())

        @else
            <a href="{{ $paginator->previousPageUrl() }}" class="next"><i class="fa fa-angle-left"></i></a>
        @endif

        {{-- Pagination Elements --}}
        @foreach ($elements as $element)
            {{-- "Three Dots" Separator --}}
            @if (is_string($element))
                <li class="disabled" aria-disabled="true"><span>{{ $element }}</span></li>
            @endif

            {{-- Array Of Links --}}
            @if (is_array($element))
                @foreach ($element as $page => $url)
                    @if ($page == $paginator->currentPage())
                        <a href="{{ $url }}" class="current">{{ $page }}</a>
                    @else
                        <a href="{{ $url }}">{{ $page }}</a>
                    @endif
                @endforeach
            @endif
        @endforeach

        {{-- Next Page Link --}}
        @if ($paginator->hasMorePages())
            <a href="{{ $paginator->nextPageUrl() }}" class="next"><i class="fa fa-angle-right"></i></a>
        @else

        @endif
    </div>
@endif
