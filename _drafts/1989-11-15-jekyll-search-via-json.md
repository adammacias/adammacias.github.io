---
layout: post
title: "Jekyll - Search via Json (Rascunho)"
categories: rascunho
---

<div class="alert alert-info">
  <b>Find theses examples in:</b> <a href="https://github.com/christian-fei/Simple-Jekyll-Search">Simple-Jekyll-Search</a>
</div>

***

### Code

Create in your site, a file `search.json`.

{% highlight html %}
{% raw %}
---
---
[
  {% for post in site.posts %}
    {
      "title"    : "{{ post.title | escape }}",
      "category" : "{{ post.category }}",
      "tags"     : "{{ post.tags | join: ', ' }}",
      "url"      : "{{ post.url | prepend: site.baseurl | prepend: site.url }}",
      "date"     : "{{ post.date }}"
    } {% unless forloop.last %},{% endunless %}
  {% endfor %}
]
{% endraw %}
{% endhighlight %}

Add in your site, preferentially in footer:

{% highlight html %}
{% raw %}
<!-- Simple-Jekyll-Search https://github.com/christian-fei/Simple-Jekyll-Search -->
<script src="{{ "assets/js/jekyll-search.js" | prepend: site.baseurl | prepend: site.url }}" type="text/javascript"></script>
<script type="text/javascript">
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '{{ "search.json" | prepend: site.baseurl | prepend: site.url }}',
    searchResultTemplate: '<a class="list-group-item" href="{url}" title="{title}">{title}</a>',
    noResultsText: '<p>No results found</p>',
    limit: 10,
    fuzzy: true,
  })
</script>
{% endraw %}
{% endhighlight %}

> TIP: ```{% raw %}{% if page.url == "/search/" %}...{% endif %}{% endraw %}``` for display only page search.

Show data in site

{% highlight html %}
{% raw %}
<div class="search">
  <input type="text" id="search-input" class="form-control input-lg" placeholder="Search...">
  <hr>
  <div id="results-container" class="list-group"></div>
</div>
{% endraw %}
{% endhighlight %}

### Preview

<div class="search">
  <input type="text" id="search-input" class="form-control input-lg" placeholder="Search...">
  <hr>
  <div id="results-container" class="list-group"></div>
</div>

<!-- Simple-Jekyll-Search https://github.com/christian-fei/Simple-Jekyll-Search -->
<script src="{{ "assets/js/jekyll-search.js" | prepend: site.baseurl | prepend: site.url }}" type="text/javascript"></script>
<script type="text/javascript">
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '{{ "search.json" | prepend: site.baseurl | prepend: site.url }}',
    searchResultTemplate: '<a class="list-group-item" href="{url}" title="{title}">{title}</a>',
    noResultsText: '<p>No results found</p>',
    limit: 10,
    fuzzy: true,
  })
</script>

### Links

- [https://github.com/christian-fei/Simple-Jekyll-Search](https://github.com/christian-fei/Simple-Jekyll-Search)
- [https://gist.github.com/anonymous/4a63ca01256942143095](https://gist.github.com/anonymous/4a63ca01256942143095)
