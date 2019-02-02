<div class="contact-faq">
    <h2 class="title18 dark font-bold text-uppercase play-font">Часто задаваемые вопросы</h2>
    @if(isset($faqs) && count($faqs))
        <div class="contact-accordion dark toggle-tab">
            @foreach($faqs as $faq)
                <div class="item-toggle-tab {{($loop->iteration == 1)? 'active' : ''}}">
                    <h2 class="toggle-tab-title dark">{{$faq->title}}</h2>
                    <p class="desc toggle-tab-content dark opaci">{{$faq->text}} </p>
                </div>
            @endforeach
        </div>
    @endif
</div>