<section class="breadcrumbs">
    <div class="wrap-bread-crumb">
        <div class="container">
            <div class="bread-crumb">
                <a href="/">Главная</a>

                @if(($parent = $model->parent))
                    @prepend('crumbs')
                    <a href="{{ $parent->url }}">{{ $parent->name }}</a>
                    @endprepend
                @endif

                @while ($parent && ($parent = $parent->parent))
                    @prepend('crumbs')
                    <a href="{{ $parent->url }}">{{ $parent->name }}</a>
                    @endprepend
                @endwhile

                @push('crumbs')
                    {{ $model->name }}
                @endpush

                @stack('crumbs')
            </div>
        </div>
    </div>
</section>
