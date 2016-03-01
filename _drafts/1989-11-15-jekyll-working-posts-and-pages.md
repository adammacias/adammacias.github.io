---
layout: post
title: "Jekyll: Trabalhando com Posts e Pages (Rascunho)"
categories: rascunho
---

## Conteúdo

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Filters

Use `sort` with values `"path"`, `"title"`, `"date"` and otherc for order.

**Code**

{% highlight html %}
{% raw %}
{% assign posts = site.posts | sort: "path" %}

{{ page.tags | sort }}
{{ site.posts | sort: 'author' }}
{{ site.pages | sort: 'title', 'last' }}
{% endraw %}
{% endhighlight %}

> See others [filters here](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers#standard-filters) or [operators here](https://docs.shopify.com/themes/liquid-documentation/basics/operators)

***

## Pages

Listing **Pages**

**Code**

{% highlight html %}
{% raw %}
<ul>
  {% assign pages = site.pages %}
  {% for link in pages %}
    {% if link.title %}
    <li class="item-page{% if page.url contains link.url %} active{% endif %}">
      <a class="entry-link" href="{{ link.url | prepend: site.baseurl | prepend: site.url }}">{{ link.title }}</a>
    </li>
    {% endif %}
  {% endfor %}
</ul>
{% endraw %}
{% endhighlight %}

***

## Posts

Listing **Posts** with `limit` of 99 posts

**Code**

{% highlight html %}
{% raw %}
<section class="posts">
  {% assign posts = site.posts | limit: 99 %}
  {% for post in posts %}
    <article class="post">
        <h2 class="entry-title"><a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title }}</a></h2>
        <p class="entry-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}" class="entry-date">{{ post.date | date: "%b %-d, %Y" }}</time>
        </p>
    </article>
  {% endfor %}
</section>
{% endraw %}
{% endhighlight %}

Listing **Posts** with **Pagination**

**Code**

You can change how posts will show per page in `config.yml`.

{% highlight html %}
{% raw %}
paginate: 5
{% endraw %}
{% endhighlight %}

Add in `_includes` the file `pagination.html`

{% highlight html %}
{% raw %}
<!-- Pagination links -->
<nav>
  <ul class="pager">
    {% if paginator.previous_page %}
      <li class="pagination-item previous"><a href="{{ paginator.previous_page_path | prepend: site.baseurl | prepend: site.url }}"><span aria-hidden="true">&larr;</span> Newer</a></li>
    {% else %}
      <li class="pagination-item previous disabled"><a href="#"><span aria-hidden="true">&larr;</span> Newer</a></li>
    {% endif %}
    <li><span class="page_number ">Page: {{ paginator.page }} of {{ paginator.total_pages }}</span></li>
    {% if paginator.next_page %}
      <li class="pagination-item next"><a href="{{ paginator.next_page_path | prepend: site.baseurl | prepend: site.url }}">Older <span aria-hidden="true">&rarr;</span></a></li>
    {% else %}
      <li class="pagination-item next disabled"><a href="#">Older <span aria-hidden="true">&rarr;</span></a></li>
    {% endif %}
  </ul>
</nav>
{% endraw %}
{% endhighlight %}

Show in site

{% highlight html %}
{% raw %}
<section class="list-posts">
  {% assign posts = paginator.posts %}
  {% for post in posts %}
    <article class="post">
        <h2 class="entry-title"><a class="post-link" href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title }}</a></h2>
        <p class="entry-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}" class="entry-date">{{ post.date | date: "%b %-d, %Y" }}</time>
        </p>
    </article>
  {% endfor %}
</section>

{% include pagination.html %}
{% endraw %}
{% endhighlight %}

***

## Links

- [http://www.rubydoc.info/gems/liquid](http://www.rubydoc.info/gems/liquid)
- [https://github.com/Shopify/liquid/wiki/Liquid-for-Designers](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)
- [https://github.com/Shopify/liquid/wiki/Liquid-for-Programmers](https://github.com/Shopify/liquid/wiki/Liquid-for-Programmers)
- [https://gist.github.com/anonymous/5903dea08a6d6d1b1351](https://gist.github.com/anonymous/5903dea08a6d6d1b1351)
- [http://jekyllrb.com/docs/templates/](http://jekyllrb.com/docs/templates/)
- [https://docs.shopify.com/themes/liquid-documentation/basics/operators](https://docs.shopify.com/themes/liquid-documentation/basics/operators)
- [http://wolfslittlestore.be/2013/10/jekyll-includes-tip-contains/](http://wolfslittlestore.be/2013/10/jekyll-includes-tip-contains/)
