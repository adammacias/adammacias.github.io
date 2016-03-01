---
layout: page
title: Arquivo
permalink: /arquivo/
group: pages
description: null
sidebar: null
sitemap: false
---

## Conteúdo

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

* * *

## Páginas

<ul>
  {% for page in site.pages %}
  {% if page.title %}
  <li>
    <a href="{{ site.url }}{{ page.url }}">{{ page.title }}</a>
  </li>
  {% endif %}
  {% endfor %}
</ul>

* * *

## Posts (Ordem por Data)

<ul>
  {% for post in site.posts %}
  <li>
    <a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a>
    <small><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time></small>
  </li>
  {% endfor %}
</ul>

* * *

## Categorias

<ul>
  {% for category in site.categories %}
  <li>
    <a href="#ref-{{ category | first }}">{{ category | first }}</a>
  </li>
  {% endfor %}
</ul>

* * *

## Posts (Ordem por Categorias)

{% for category in site.categories %}
<h3 id="ref-{{ category | first }}">{{ category | first }}</h3>
<ul>
  {% for posts in category %}
  {% for post in posts %}
  {% if post.title %}
  <li>
    <a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a>
  </li>
  {% endif %}
  {% endfor %}
  {% endfor %}
</ul>
{% endfor %}

* * *

## Posts (Ordem por Anos)

{% for post in site.posts  %}
{% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
{% capture next_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %}
{% if forloop.first %}
<h3 id="{{ this_year }}-ref">{{this_year}}</h3>
<ul>
{% endif %}
<li>
<a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a>
</li>
{% if forloop.last %}
</ul>
{% else %}
{% if this_year != next_year %}
</ul>
<h3 id="{{ next_year }}-ref">{{next_year}}</h3>
<ul>
{% endif %}
{% endif %}
{% endfor %}

* * *

## Posts (Ordem por Anos e Meses)

{% for post in site.posts  %}
{% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
{% capture this_month %}{{ post.date | date: "%B" }}{% endcapture %}
{% capture next_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %}
{% capture next_month %}{{ post.previous.date | date: "%B" }}{% endcapture %}
{% if forloop.first %}
<h3 id="{{ this_year }}-ref">{{this_year}}</h3>
<h5 id="{{ this_year }}-{{ this_month }}-ref">{{ this_month }}</h5>
<ul>
{% endif %}
<li>
  <a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a>
</li>
{% if forloop.last %}
</ul>
{% else %}
{% if this_year != next_year %}
</ul>
<h3 id="{{ next_year }}-ref">{{next_year}}</h3>
<h5 id="{{ next_year }}-{{ next_month }}-ref">{{ next_month }}</h5>
<ul>
{% else %}
{% if this_month != next_month %}
</ul>
<h5 id="{{ this_year }}-{{ next_month }}-ref">{{ next_month }}</h5>
<ul>
{% endif %}
{% endif %}
{% endif %}
{% endfor %}

* * *

## Favoritos

**Portfolios**

{% for url in site.data.bookmarks.portfolios  %}
- <{{ url }}> {% endfor %}

**Agencias**

{% for url in site.data.bookmarks.agencias  %}
- <{{ url }}> {% endfor %}
