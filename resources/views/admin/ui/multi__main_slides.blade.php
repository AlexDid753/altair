<div class="form-group row">
    @if (is_array($fieldValue) && !empty($fieldValue['label']))
        <label for="{{ $fieldName }}" class="col-md-12 col-form-label">{{ __($fieldValue['label']) }}</label>
    @else
        <label for="{{ $fieldName }}"
               class="col-md-12 col-form-label">{{ __(str_singular(ucfirst(str_replace('_', ' ', $fieldName)))) }}</label>
    @endif

    @php($values = isset($fieldValue['value']) ? $fieldValue['value'] : ($model->$fieldName ?: old($fieldName)))
    @php($values = is_array($values) ? json_encode($values) : $values)

    <div class="col-md-12">
        <div class="multi-item-container">
            @foreach ($model->$fieldModelName ?: json_decode('[{"image":"","link":"", "desc":"","title":"", "style":"", "position":""}]') as $key => $value)
                <div class="multi-item row mb-2">
                    <div class="col-md-8">
                        <div class="input-group">
                            <input
                                    placeholder="Путь к изображению"
                                    type="text"
                                    autocomplete="off"
                                    class="form-control multi-item-element img-field"
                                    id="{{ str_slug($fieldName . $key) }}"
                                    data-key="image"
                                    data-target="{{ str_slug($fieldName) }}"
                                    value="{{ $value->image }}">
                            <div class="input-group-append">
                                <a href="#" class="popup_selector btn btn-outline-secondary"
                                   data-inputid="{{ str_slug($fieldName . $key) }}"><span
                                            data-feather="download"></span></a>
                            </div>
                        </div>
                        <input
                                placeholder="Ссылка на картинке"
                                type="text"
                                autocomplete="off"
                                class="form-control multi-item-element"
                                id="{{ str_slug($fieldName . $key) }}"
                                data-key="link"
                                data-target="{{ str_slug($fieldName) }}"
                                value="{{$value->link}}">
                        <input
                                placeholder="Заглавие слайда"
                                type="text"
                                autocomplete="off"
                                class="form-control multi-item-element"
                                id="{{ str_slug($fieldName . $key) }}"
                                data-key="title"
                                data-target="{{ str_slug($fieldName) }}"
                                value="{{$value->title}}">
                        <input
                                placeholder="Краткое описание"
                                type="text"
                                autocomplete="off"
                                class="form-control multi-item-element"
                                id="{{ str_slug($fieldName . $key) }}"
                                data-key="desc"
                                data-target="{{ str_slug($fieldName) }}"
                                value="{{$value->desc}}">
                        <input
                                placeholder="Позиция надписи(right,left или center)"
                                type="text"
                                autocomplete="off"
                                class="form-control multi-item-element"
                                id="{{ str_slug($fieldName . $key) }}"
                                data-key="position"
                                data-target="{{ str_slug($fieldName) }}"
                                value="{{isset($value->position) ? $value->position : ""}}">
                        <input
                                placeholder="Отступ от верхнего края в пикселях"
                                type="number"
                                autocomplete="off"
                                class="form-control multi-item-element"
                                id="{{ str_slug($fieldName . $key) }}"
                                data-key="position_top"
                                data-target="{{ str_slug($fieldName) }}"
                                value="{{isset($value->position_top) ? $value->position_top : ""}}">
                        <input
                                placeholder="Font-weight(100-800)"
                                type="number"
                                autocomplete="off"
                                class="form-control multi-item-element"
                                id="{{ str_slug($fieldName . $key) }}"
                                data-key="font_weight"
                                data-target="{{ str_slug($fieldName) }}"
                                value="{{isset($value->font_weight) ? $value->font_weight : ""}}">


                    </div>
                    <div class="col-md-1 img-preview" data-preview-id="{{ str_slug($fieldName . $key) }}"></div>
                    <div class="col-md-3 text-right">
                        <a href="#" class="btn btn-outline-primary up"><span data-feather="arrow-up"></span></a>
                        <a href="#" class="btn btn-outline-primary down"><span data-feather="arrow-down"></span></a>
                        <a href="#" class="btn btn-outline-primary minus"><span data-feather="minus"></span></a>
                        <a href="#" class="btn btn-outline-primary plus"><span data-feather="plus"></span></a>
                    </div>
                </div>
            @endforeach
        </div>

        <textarea id="{{ str_slug($fieldName) }}" name="{{ $fieldName }}" style="display: none">{{ $values }}</textarea>
    </div>

</div>