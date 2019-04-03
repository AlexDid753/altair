<?php
namespace App\Http\Controllers;

use App\Page;
use App\Product;
use App\Category;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Watson\Sitemap\Facades\Sitemap;

class SitemapController extends BaseController
{
    public function xml()
    {
        $products = Product::published();
        $categories = Category::published();
        $pages = Page::where(['published' => 1])->get();
        $all_pages = collect([]);

        $all_pages = $all_pages->merge($pages)->merge($products)->merge($categories);
        foreach ($all_pages as $page) {
            $tag = Sitemap::addTag(route('page.show', $page->url), $page->updated_at, 'daily', '0.8');
        }

        return Sitemap::render();
    }

    public function html()
    {
        $pages = Page::sitemapHtmlPublished()->get();
        $categories = Category::where('published', 1)
            ->where('parent_id',null)
            ->with('childrens')
            ->get();

        $model = Page::find(15);

        return view('sitemap', [
            'model' => $model,
            'pages' => $pages,
            'categories' => $categories
        ]);
    }
}