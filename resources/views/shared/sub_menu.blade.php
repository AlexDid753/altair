<li class="{{ count($subMenuItem->childrens) ? 'menu-item-has-children' : ''}}"><a href="{{ $subMenuItem->getUrl() }}">{{ $subMenuItem->name }}</a>
  @if (count($subMenuItem->childrens))
    <ul class="sub-menu">
      @foreach($subMenuItem->childrens as $subMenuItem)
        @include('shared.sub_menu')
      @endforeach
    </ul>
  @endif
</li>