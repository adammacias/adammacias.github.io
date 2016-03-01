---
layout: page
title: Pesquisar
permalink: /pesquisar/
group: pages
description: null
sidebar: null
sitemap: false
---

<div class="search">
  <input type="text" id="search-input" class="form-control input-lg" placeholder="Pesquisar...">
  <br>
  <div id="results-container" class="list-group"></div>
</div>

{% if page.url == "/search/" %}
<!-- Simple-Jekyll-Search https://github.com/christian-fei/Simple-Jekyll-Search -->
<script src="{{ site.url }}/assets/js/vendor/jekyll-search.js"></script>
<script type="text/javascript">
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '{{ site.url }}/search.json',
    searchResultTemplate: '<a class="list-group-item" href="{url}" title="{title}">{title}</a>',
    noResultsText: '<p>Nenhum resultado encontrado</p>',
    limit: 10,
    fuzzy: true,
  })
</script>
{% endif %}
