@php
    $position = 2;
    $objs = collect([]);
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
                    <meta itemprop="position" content="1"/>
                </span>

                @if(($parent = $model->parent))
                    @php($objs->push($parent))
                @endif

                @while ($parent && ($parent = $parent->parent))
                    @php($objs->push($parent))
                @endwhile

                @php($objs = $objs->reverse())

                @foreach($objs as $obj)
                    <span itemprop="itemListElement" itemscope
                          itemtype="http://schema.org/ListItem">
                        <a href="{{ $obj->url }}"
                           itemprop="item">
                            <span itemprop="name">{{ $obj->name }}</span>
                        </a>
                        <meta itemprop="position" content="<?php echo $position; $position += 1; ?>"/>
                    </span>
                @endforeach

                <span itemprop="itemListElement" itemscope
                      itemtype="http://schema.org/ListItem">
                    <a href="{{ $model->url }}"
                       itemprop="item" class="hidden"></a>
                        <span itemprop="item">
                            <span itemprop="name">{{ $model->name }}</span>
                        </span>
                        <meta itemprop="position" content="<?php echo $position; ?>"/>
                </span>


            </div>
        </div>
    </div>
</section>
