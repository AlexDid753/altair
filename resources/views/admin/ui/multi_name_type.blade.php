<div class="form-group row">
    @if (is_array($fieldValue) && !empty($fieldValue['label']))
        <label for="{{ $fieldName }}" class="col-md-12 col-form-label">{{ __($fieldValue['label']) }}</label>
    @else
        <label for="{{ $fieldName }}" class="col-md-12 col-form-label">{{ __(str_singular(ucfirst(str_replace('_', ' ', $fieldName)))) }}</label>
    @endif

    <div class="col-md-12">
        <div class="multi-item-container">
            @foreach (json_decode($model->$fieldName) as $value)
                <div class="multi-item row mb-2">
                    <div class="col-md-4">
                        <input
                                type="text"
                                autocomplete="off"
                                class="form-control multi-item-element"
                                data-key="name"
                                data-target="{{ str_slug($fieldName) }}"
                                value="{{ $value->name }}">
                    </div>
                    <div class="col-md-4">
                        @php($types = Illuminate\Support\Facades\Storage::disk('views')->files('admin/ui'))
                        @php($types = collect($types)->map(function($item) { return str_replace('.blade.php', '', str_replace('admin/ui/', '', $item)); }))
                        <select class="form-control multi-item-element" data-key="type" data-target="{{ str_slug($fieldName) }}">
                            @foreach($types as $type)
                                <option value="{{ $type }}" {{ $value->type == $type ? 'selected' : '' }}>{{ $type }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="col-md-4 text-right">
                        <a href="#" class="btn btn-outline-primary up"><span data-feather="arrow-up"></span></a>
                        <a href="#" class="btn btn-outline-primary down"><span data-feather="arrow-down"></span></a>
                        <a href="#" class="btn btn-outline-primary minus"><span data-feather="minus"></span></a>
                        <a href="#" class="btn btn-outline-primary plus"><span data-feather="plus"></span></a>
                    </div>
                </div>
            @endforeach
        </div>

        <textarea id="{{ str_slug($fieldName) }}" name="{{ $fieldName }}" style="display: none">{!! $model->$fieldName !!}</textarea>
    </div>

</div>