<?php namespace App\Traits;
use Illuminate\Database\Eloquent\SoftDeletes;
trait ResourcePageMethods
{
    use SoftDeletes;

    public static function validatorRules()
    {
        return [
            'title' => 'required|string|max:255',
            'images' => 'array'
        ];
    }

    public function setSlugAttribute($value)
    {
        if ($value != '/')
            $value = str_slug($value) ?: str_slug($this->attributes['title']);

        while (self::where([['id', '<>', $this->id], ['parent_id', '=', $this->parent_id], ['slug', '=', $value]])->count()) {
            if (!preg_match('~^(.+-)(\d+)$~', $value))
                $value = $value . '-1';
            else
                $value = preg_replace_callback('~^(.+-)(\d+)$~', function ($data) {
                    return $data[1] . ($data[2] + 1);
                }, $value);
        }

        $this->attributes['slug'] = $value;
    }

    public function parent()
    {
        return $this->belongsTo('App\Page');
    }

    public static function getUrl($id)
    {
        $model = self::firstOrNew(['id' => $id]);
        return $model->url ?: '#notFound';
    }

    public static function dropdown($not = null, $parentId = null, $parentName = null)
    {
        $in = [1];
        if ($not)
            $in[] = $not;

        if ($parentId)
            $out = [];
        else
            $out = ['' => ''];

        $models = self::where(['parent_id' => $parentId])->get();
        if ($models)
            foreach ($models as $model) {
                $out[$model->id] = $parentName ? $parentName . $model->title : $model->title;
                if (!$model->isContainer() && count($model->childrens))
                    $out += self::dropdown(null, $model->id, $parentName . $model->title . ' > ');
            }

        return $out;
    }

    public function scopePublished($query)
    {
        return $query->where('published','=', 1)->get();
    }

    public function fullUrl()
    {
        $url = '/' . trim($this->slug, '/');
        $parent = $this->parent;
        while ($parent) {
            $url = '/' . $parent->slug . $url;
            $parent = $parent->parent;
        }

        return $url;
    }
}