@extends('layouts.app')

@section('content')
    <section id="content">
    <div class="content-page">
        <div class="container">
            <div class="content-about">
                <h2 class="title30 play-font text-uppercase dark font-bold">{{$model->name}}</h2>
                <p class="desc">{!! $model->text !!}</p>
                <p class="blockquote">
                    {!! $model->phrase !!}
                </p>
                <div class="about-why-choise">
                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <h2 class="title18 play-font text-uppercase dark  font-bold">Why choose us</h2>
                            <div class="about-accordion toggle-tab">
                                <div class="item-toggle-tab active">
                                    <div class="toggle-tab-title"><span class="bg-color"><i class="fa fa-gift"></i></span><h2 class="dark">Deals & Promotions</h2></div>
                                    <p class="desc toggle-tab-content">Western Australia since 1997. Having established a solid reputation built on honesty and integrity, designFARM offer their customers a genuine experience. We believe in good, authentic design, in order to do what we do best – create meaningful spaces. You won’t find any replica’s here</p>
                                </div>
                                <div class="item-toggle-tab">
                                    <div class="toggle-tab-title"><span class="bg-color"><i class="fa fa-diamond"></i></span><h2 class="dark">Transaction Service Agreement</h2></div>
                                    <p class="desc toggle-tab-content">Western Australia since 1997. Having established a solid reputation built on honesty and integrity, designFARM offer their customers a genuine experience. We believe in good, authentic design, in order to do what we do best – create meaningful spaces. You won’t find any replica’s here</p>
                                </div>
                                <div class="item-toggle-tab">
                                    <div class="toggle-tab-title"><span class="bg-color"><i class="fa fa-get-pocket"></i></span><h2 class="dark">Organization & Technical Support</h2></div>
                                    <p class="desc toggle-tab-content">Western Australia since 1997. Having established a solid reputation built on honesty and integrity, designFARM offer their customers a genuine experience. We believe in good, authentic design, in order to do what we do best – create meaningful spaces. You won’t find any replica’s here</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="banner-adv overlay-image zoom-image">
                                <a href="#" class="adv-thumb-link"><img src="images/page/img-about.jpg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Choise -->
                <div class="about-client">
                    <h2 class="title18 play-font text-uppercase dark  font-bold">What people are saying</h2>
                    <div class="about-client-slider">
                        <div class="wrap-item" data-autoplay="true" data-pagination="false" data-itemscustom="[[0,1],[560,2],[990,3]]">
                            <div class="item-about-client">
                                <div class="client-thumb"><a href="#"><img src="images/page/av1.jpg" alt="" /></a></div>
                                <div class="client-info">
                                    <p class="desc">Lorem enim et luctus hendrelibero mole stie ante, ut fringilla purus eros quisent ipsum. Aliquam bidum. Thank you!</p>
                                    <h3 class="title14 text-uppercase play-font"><a href="#" class="dark">Vincent Vanilla</a></h3>
                                    <span class="silver">happy customer</span>
                                </div>
                            </div>
                            <div class="item-about-client">
                                <div class="client-thumb"><a href="#"><img src="images/page/av2.jpg" alt="" /></a></div>
                                <div class="client-info">
                                    <p class="desc">Lorem enim et luctus hendrelibero mole stie ante, ut fringilla purus eros quisent ipsum. Aliquam bidum. Thank you!</p>
                                    <h3 class="title14 text-uppercase play-font"><a href="#" class="dark">Gregor Red</a></h3>
                                    <span class="silver">loyal customer</span>
                                </div>
                            </div>
                            <div class="item-about-client">
                                <div class="client-thumb"><a href="#"><img src="images/page/av3.jpg" alt="" /></a></div>
                                <div class="client-info">
                                    <p class="desc">Lorem enim et luctus hendrelibero mole stie ante, ut fringilla purus eros quisent ipsum. Aliquam bidum. Thank you!</p>
                                    <h3 class="title14 text-uppercase play-font"><a href="#" class="dark">Alexander Green</a></h3>
                                    <span class="silver">happy customer</span>
                                </div>
                            </div>
                            <div class="item-about-client">
                                <div class="client-thumb"><a href="#"><img src="images/page/av4.jpg" alt="" /></a></div>
                                <div class="client-info">
                                    <p class="desc">Lorem enim et luctus hendrelibero mole stie ante, ut fringilla purus eros quisent ipsum. Aliquam bidum. Thank you!</p>
                                    <h3 class="title14 text-uppercase play-font"><a href="#" class="dark">Vincent Vanilla</a></h3>
                                    <span class="silver">happy customer</span>
                                </div>
                            </div>
                            <div class="item-about-client">
                                <div class="client-thumb"><a href="#"><img src="images/page/av5.jpg" alt="" /></a></div>
                                <div class="client-info">
                                    <p class="desc">Lorem enim et luctus hendrelibero mole stie ante, ut fringilla purus eros quisent ipsum. Aliquam bidum. Thank you!</p>
                                    <h3 class="title14 text-uppercase play-font"><a href="#" class="dark">Gregor Red</a></h3>
                                    <span class="silver">loyal customer</span>
                                </div>
                            </div>
                            <div class="item-about-client">
                                <div class="client-thumb"><a href="#"><img src="images/page/av6.jpg" alt="" /></a></div>
                                <div class="client-info">
                                    <p class="desc">Lorem enim et luctus hendrelibero mole stie ante, ut fringilla purus eros quisent ipsum. Aliquam bidum. Thank you!</p>
                                    <h3 class="title14 text-uppercase play-font"><a href="#" class="dark">Alexander Green</a></h3>
                                    <span class="silver">happy customer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Client -->
                <div class="about-service">
                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="item-about-service text-center white" style="background:#f4ca49">
                                <a href="#" class="wobble-horizontal"><i class="fa fa-gift"></i></a>
                                <h2 class="title30">Gift Card</h2>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="item-about-service text-center white" style="background:#ff607c">
                                <a href="#" class="wobble-horizontal"><i class="fa fa-home"></i></a>
                                <h2 class="title30">Store</h2>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="item-about-service text-center white" style="background:#37436d">
                                <a href="#" class="wobble-horizontal"><i class="fa fa-life-bouy"></i></a>
                                <h2 class="title30">Full Support</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection