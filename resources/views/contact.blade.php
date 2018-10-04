@extends('layouts.app')

@section('content')
    <section id="content">
        <div class="content-page">
            <div class="container">
                <div class="content-about content-contact-page">
                    <h2 class="title30 play-font dark font-bold text-uppercase">{{$model->title}}</h2>
                    <div class="contact-google-map bg-white border">
                        <div id="map" class="map-custom"></div>
                        <script>
                            function initMap() {
                                var myLatLng = {lat: 59.917494, lng: 30.377044};

                                var map = new google.maps.Map(document.getElementById('map'), {
                                    zoom: 15,
                                    center: myLatLng
                                });

                                var marker = new google.maps.Marker({
                                    position: myLatLng,
                                    map: map,
                                });
                            }
                        </script>
                        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCEkQ6AW_lnHAzPiXPdSNy1GKXiI1I9AGg&callback=initMap"
                                async defer></script>
                    </div>
                    <!-- End Google Map -->
                    <div class="contact-page-info blockquote">
                        <div class="row">
                            <div class="col-md-5 col-sm-12 col-xs-12">
                                <div class="contact-box contact-address-box">
                                    <span class="dark"><i class="fa fa-home"></i></span>
                                    <label class="title16 dark">Адрес:</label>
                                    <p class="desc">{{$settings->address}}</p>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-7 col-xs-12">
                                <div class="contact-box">
                                    <span class="dark"><i class="fa fa-phone"></i></span>
                                    <ul class="list-inline-block">
                                        <li>
                                            <label class="title16 dark">Телефон:</label>
                                        </li>
                                    </ul>
                                    <p class="desc">
                                        <span class=""><a href="tel:{{$settings->phone}}">{{$settings->phone}}</a></span>
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-5 col-xs-12">
                                <div class="contact-box contact-email-box">
                                    <span class="dark"><i class="fa fa-envelope"></i></span>
                                    <label class="title16 dark">e-mail:</label>
                                    <p class="desc"><a href="mailto:{{$settings->email}}" class="">{{$settings->email}}</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Contact Info -->
                    <div class="contact-form-faq">
                        <div class="row">
                            <div class="col-md-6 col-sm-6 col-xs-12">
                                <div class="contact-form-page thanks">
                                    <h2 class="title18 dark font-bold text-uppercase play-font">Благодарим за обратную связь.</h2>
                                </div>
                                @include('shared.contact_form', ['contact_type' => 'contacts'])
                            </div>
                            <div class="col-md-6 col-sm-6 col-xs-12">
                                @include('shared.faqs',['faqs' => $model->faqs])
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection