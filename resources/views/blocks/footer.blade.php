<!-- Page Footer-->
<footer class="page-footer page-footer-default">
    <section class="section-top-75 section-bottom-25 section-md-top-100 section-md-bottom-25">
        <div class="shell container">
            <div class="row text-sm-left">
                <div class="col-md-6 col-xl-3"><span class="small text-spacing-340 text-uppercase text-bold wow fadeUpSm" data-wow-delay=".1s">О компании</span>
                    <p class="offset-top-20 wow fadeUpSm" data-wow-delay=".3s">{{ $settings->footer_about }}</p>
                </div>
                <div class="col-md-6 col-xl-3">
                    <span class="small text-spacing-340 text-uppercase text-bold wow fadeUpSm" data-wow-delay=".1s">Последние новости</span>
                    @foreach($latestNews as $news)
                        <article class="event offset-top-20 wow fadeUpSm" data-wow-delay=".1s">
                            <p><a href="{{ $news->url }}">{{ $news->name }}</a></p>
                            <time class="small offset-top-10">{{ $news->created_at->formatLocalized('%d %B %Y') }}</time>
                        </article>
                    @endforeach
                </div>
                <div class="col-md-6 col-xl-2 col-xxl-3 offset-top-40 offset-lg-top-0"><span class="small text-spacing-340 text-uppercase text-bold wow fadeUpSm" data-wow-delay=".1s">Информация</span>
                    <ul class="list list-marked offset-top-20 list-xs" style="overflow: hidden;">
                        @foreach($footerMenu as $menuItem)
                            <li class="wow fadeUpSm" data-wow-delay=".1s"><a href="{{ $menuItem->getUrl() }}">{{ $menuItem->name }}</a></li>
                        @endforeach
                    </ul>
                </div>
                <div class="col-md-6 col-xl-4 col-xxl-3 offset-top-40 offset-lg-top-0"><span class="small text-spacing-340 text-uppercase text-bold wow fadeUpSm" data-wow-delay=".1s">Контакты</span>
                    <ul class="list offset-top-20 text-left" style="overflow: hidden;">
                        <li class="wow fadeUpSm" data-wow-delay=".5s">
                            <div class="unit unit-horizontal unit-spacing-xs">
                                <div class="unit-left"><span class="icon icon-primary fa-map-marker"> </span></div>
                                <div class="unit-body text-gray-lighter">{{ $settings->address }}</div>
                            </div>
                        </li>
                        <li class="wow fadeUpSm" data-wow-delay=".6s">
                            <div class="unit unit-horizontal unit-spacing-xs">
                                <div class="unit-left"><span class="icon icon-primary fa-phone"></span></div>
                                <div class="unit-body"><a class="text-gray-lighter" href="tel:{{ $settings->phone }}">{{ $settings->phone }}</a></div>
                            </div>
                        </li>
                        <li class="wow fadeUpSm" data-wow-delay=".7s">
                            <div class="unit unit-horizontal unit-spacing-xs">
                                <div class="unit-left"><span class="icon icon-primary fa-envelope"></span></div>
                                <div class="unit-body"><a class="text-gray-lighter" href="mailto:{{ $settings->email }}">{{ $settings->email }}</a></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</footer>