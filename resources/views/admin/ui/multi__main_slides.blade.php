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
            @foreach ($model->$fieldModelName ?: json_decode('[{"image":"","link":"", "desc":"","title":"", "style":"", "position":"", "font_family": ""}]') as $key => $value)
                <div class="multi-item row mb-2">
                    <div class="col-md-8">
                        <p class="col-md-12 font-weight-bold">Слайд номер {{$value->sort + 1}}</p>
                        <div class="input-group">
                            <label for="" class="col-md-12 col-form-label">Путь к изображению</label>
                            <input
                                    placeholder="storage/1170x560/picture.png"
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
                        <label for="" class="col-md-12 col-form-label">Ссылка на картинке</label>
                        <input
                                placeholder="/catalog"
                                type="text"
                                autocomplete="off"
                                class="form-control multi-item-element"
                                id="{{ str_slug($fieldName . $key) }}"
                                data-key="link"
                                data-target="{{ str_slug($fieldName) }}"
                                value="{{$value->link}}">
                        <label for="" class="col-md-12 col-form-label">Заглавие слайда</label>
                        <input
                                placeholder="Заглавие слайда"
                                type="text"
                                autocomplete="off"
                                class="form-control multi-item-element"
                                id="{{ str_slug($fieldName . $key) }}"
                                data-key="title"
                                data-target="{{ str_slug($fieldName) }}"
                                value="{{$value->title}}">
                        <label for="" class="col-md-12 col-form-label">Описание слайда</label>
                        <input
                                placeholder="Описание слайда"
                                type="text"
                                autocomplete="off"
                                class="form-control multi-item-element"
                                id="{{ str_slug($fieldName . $key) }}"
                                data-key="desc"
                                data-target="{{ str_slug($fieldName) }}"
                                value="{{$value->desc}}">
                        <label for="" class="col-md-12 col-form-label">Отступ от левого края в пикселях(допустимы
                            отрицательные значения)</label>
                        <input
                                placeholder="(0..1000)"
                                type="text"
                                autocomplete="off"
                                class="form-control multi-item-element"
                                id="{{ str_slug($fieldName . $key) }}"
                                data-key="left"
                                data-target="{{ str_slug($fieldName) }}"
                                value="{{isset($value->left) ? $value->left : ""}}">
                        <label for="" class="col-md-12 col-form-label">Отступ от верхнего края в пикселях</label>
                        <input
                                placeholder="(-1000..1000)"
                                type="number"
                                autocomplete="off"
                                class="form-control multi-item-element"
                                id="{{ str_slug($fieldName . $key) }}"
                                data-key="position_top"
                                data-target="{{ str_slug($fieldName) }}"
                                value="{{isset($value->position_top) ? $value->position_top : ""}}">
                        <label for="">Большая надпись (<a target="_blank"
                                                          href="https://www.w3schools.com/cssref/css_websafe_fonts.asp">Примеры
                                шрифтов</a>)</label>

                        <div class="input-group">
                            <label for="" class="col-md-12 col-form-label">Семейство шрифтов для большой надписи</label>
                            <input
                                    placeholder="'Comic Sans MS', cursive, sans-serif"
                                    type="text"
                                    autocomplete="off"
                                    class="form-control multi-item-element"
                                    id="{{ str_slug($fieldName . $key) }}"
                                    data-key="font_family1"
                                    data-target="{{ str_slug($fieldName) }}"
                                    value="{{isset($value->font_family1) ? $value->font_family1 : ""}}">
                            <label for="" class="col-md-12 col-form-label">Размер шрифта в пикселях</label>
                            <input
                                    placeholder="(8..40)"
                                    type="number"
                                    autocomplete="off"
                                    class="form-control multi-item-element"
                                    id="{{ str_slug($fieldName . $key) }}"
                                    data-key="font_size1"
                                    data-target="{{ str_slug($fieldName) }}"
                                    value="{{isset($value->font_size1) ? $value->font_size1 : ""}}">
                        </div>

                        <label for="">Описание слайда (<a target="_blank"
                                                          href="https://www.w3schools.com/cssref/css_websafe_fonts.asp">Примеры
                                шрифтов</a>)</label>

                        <div class="input-group">
                            <label for="" class="col-md-12 col-form-label">Семейство шрифтов для описания</label>
                            <input
                                    placeholder="'Lucida Console', Monaco, monospace"
                                    type="text"
                                    autocomplete="off"
                                    class="form-control multi-item-element"
                                    id="{{ str_slug($fieldName . $key) }}"
                                    data-key="font_family2"
                                    data-target="{{ str_slug($fieldName) }}"
                                    value="{{isset($value->font_family2) ? $value->font_family2 : ""}}">
                            <label for="" class="col-md-12 col-form-label">Размер шрифта в пикселях </label>
                            <input
                                    placeholder="(8..40)"
                                    type="number"
                                    autocomplete="off"
                                    class="form-control multi-item-element"
                                    id="{{ str_slug($fieldName . $key) }}"
                                    data-key="font_size2"
                                    data-target="{{ str_slug($fieldName) }}"
                                    value="{{isset($value->font_size2) ? $value->font_size2 : ""}}">
                        </div>


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