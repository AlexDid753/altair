@if(count($images))
  <div class="mid product-thumb">
    <img src="{{empty($images)? : resize($images[0]->image, 700, 700)}}"
         alt="Изображение: {{$model->title}}"
         title="{{$model->title}} из серебра, Альтаир"
    />
  </div>
  <div class="gallery-control">
    <a href="#" class="prev"><i class="fa fa-angle-left"></i></a>
    <div class="carousel" data-visible="6" data-vertical="true" >
      <ul class="list-none">
        @foreach($images as $key => $image)
          <li>
            <a href="#" {{ $key==0? 'class=active' : '' }}>
              <img id="img_01"
                   src="{{resize($image->image, 700, 700)}}"
                   alt=""
                   data-zoom-image="{{$image->image}}"/>
            </a>
          </li>
        @endforeach
      </ul>
    </div>
    <a href="#" class="next"><i class="fa fa-angle-right"></i></a>
  </div>
@endif