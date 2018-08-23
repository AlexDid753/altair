@extends('layouts.web')

@section('content')
    @includeIf('blocks.breadcrumb')
    <section class="section-50 section-sm-top-80 section-md-top-100 section-lg-top-150 bg-image bg-revail-lg bg-top-right" style="background-image: url(images/bg-about-01.png);">
            <div class="row">
                <div class="col-xl-6">
                    <h1>{{ $model->name }}</h1>
                    {!! $model->text !!}
                </div>
            </div>
    </section>
@endsection
