<li class="{{ count($subMenuItem->childrens) ? 'menu-item-has-children' : ''}}">
    <a href="{{ $subMenuItem->url }}">{{ $subMenuItem->name }}</a>
  @if (count($subMenuItem->childrens))
    <ul class="sub-menu">
      @foreach($subMenuItem->childrens as $subMenuItem)
        @include('shared.sub_page_item')
      @endforeach
    </ul>
  @endif
</li>