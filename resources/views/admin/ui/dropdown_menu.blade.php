<div class="form-group row">
    @if (is_array($fieldValue) && !empty($fieldValue['label']))
        <label for="{{ $fieldName }}" class="col-md-12 col-form-label">{{ __($fieldValue['label']) }}</label>
    @else
        <label for="{{ $fieldName }}"
               class="col-md-12 col-form-label">{{ __(str_singular(ucfirst(str_replace('_', ' ', $fieldName)))) }}</label>
    @endif

    <div class="col-md-12">
        <?php $options[] = \App\Page::dropdownMenu();   ?>
        <select
                id="{{ $fieldName }}"
                class="form-control {{ $errors->has($fieldName) ? 'is-invalid' : '' }}"
                name="{{ $fieldName }}">
            @foreach ($options[0] as $option)

                @if(!empty($option) && array_key_exists('name',$option))
                    <option
                            value="{{ $option['id'] }}"
                            {{ $option['id'] == ($model->$fieldModelName ?: old($fieldName)) && ($option['type'] == $model->page_type)  ? 'selected' : '' }}
                            data-page-type="{{$option['type']}}">{{ $option['name'] }}
                    </option>
                @endif
            @endforeach
        </select>


        @if ($errors->has($fieldName))
            <span class="invalid-feedback">
                <strong>{{ $errors->first($fieldName) }}</strong>
            </span>
        @endif
    </div>
</div>