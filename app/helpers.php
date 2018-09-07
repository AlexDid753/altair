<?php

if (! function_exists('resize')) {
    function resize($imageUrl, $width = null, $height = null) {

        if ($width && $height)
            $dir = $width . 'x' .$height;
        else if ($width && !$height)
            $dir = $width . 'x';
        else if (!$width && $height)
            $dir = 'x' .$height;
        else
            throw new ErrorException('Width or height required.');

        $imagePath = preg_replace('~^storage/~', '', $imageUrl);
        $resizedPath = dirname($imagePath) . "/{$dir}/" . basename($imagePath);

        if (!Storage::disk('public')->exists($resizedPath)) {

            if (Storage::disk('public')->exists($imagePath))
                $image = Storage::disk('public')->get($imagePath);
            else if (Storage::disk('local')->exists($imagePath))
                $image = Storage::disk('local')->get($imagePath);
            else
                return $imageUrl;

            if ($width && $height)
                $resized = Image::make($image)->fit($width, $height)->encode();
            else
                $resized = Image::make($image)->resize($width, $height, function ($constraint) {
                    $constraint->aspectRatio();
                })->encode();

            Storage::disk('public')->put($resizedPath, $resized);
        }

        return 'storage/' .  $resizedPath;
    }
}


if (! function_exists('heightByWidth')) {
    function heightByWidth($imageUrl, $width, $default = null) {

        $imagePath = preg_replace('~^storage/~', '', $imageUrl);

        $height = $default ?: $width;

        if (Storage::disk('public')->exists($imagePath)) {
            $image = Storage::disk('public')->get($imagePath);
            $origWidth = Image::make($image)->width();
            $origHeight = Image::make($image)->height();
            $height = $origHeight / $origWidth * $width;
        }

        return $height;
    }
}

if (! function_exists('getParamIs')) {
    function getParamIs($param, $value) {
        return request()->get($param) == $value;
    }
}

if (! function_exists('selected')) {
    function selected($param, $value) {
        return getParamIs($param, $value) ? 'selected' : '';
    }
}

if (! function_exists('prepare_url')) {
    function prepare_url($url) {
        if (substr($url, strlen($url)-1) == "/") $url = substr($url,0,strlen($url)-1);
        return $url;
    }
}

if (! function_exists('round_up')) {
    function round_up($value, $places)
    {
        $mult = pow(10, abs($places));
        return $places < 0 ?
            ceil($value / $mult) * $mult :
            ceil($value * $mult) / $mult;
    }
}
