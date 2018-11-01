@php
    $position = 2;
    $revert_position = null;
@endphp
<section class="breadcrumbs">
    <div class="wrap-bread-crumb">
        <div class="container">
            <div class="bread-crumb" itemscope itemtype="http://schema.org/BreadcrumbList">
                <span itemprop="itemListElement" itemscope
                      itemtype="http://schema.org/ListItem">
                    <a href="/" itemprop="item">
                        <span itemprop="name">Главная</span>
                    </a>
                </span>

                @if(($parent = $model->parent))
                    @prepend('crumbs')
                    <span itemprop="itemListElement" itemscope
                          itemtype="http://schema.org/ListItem">
                        <a href="{{ $parent->url }}"
                           itemprop="item">
                            <span itemprop="name">{{ $parent->name }}</span>
                        </a>
                    </span>
                    @endprepend
                @endif

                @while ($parent && ($parent = $parent->parent))
                    @prepend('crumbs')

                    <span itemprop="itemListElement" itemscope
                          itemtype="http://schema.org/ListItem">
                        <a href="{{ $parent->url }}"
                           itemprop="item">
                            <span itemprop="name">{{ $parent->name }}</span>
                        </a>
                    </span>
                    @endprepend
                @endwhile

                @push('crumbs')
                    <span itemprop="itemListElement" itemscope
                          itemtype="http://schema.org/ListItem">
                        <span itemprop="item">
                            <span itemprop="name">{{ $model->name }}</span>
                        </span>
                    </span>
                @endpush

                @stack('crumbs')
            </div>
        </div>
    </div>
</section>
