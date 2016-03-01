---
layout: post
title: "Bootstrap Navbar with datafile Jekyll (Rascunho)"
categories: rascunho
navbar-main:
  - title: "Home"
    href: "/index.html"

  - title: "Dropdown"
    href: "/dropdown/"
    subcategories:
      - subtitle: "Hello World"
        subhref: "/hello-world/"
      - divider: true
      - header: "Dropdown header"
      - subtitle: "Bye World"
        subhref: "/bye-world/"
---

### Code

Create in `_data`a file `navbar-main.yml`.

{% highlight html %}
{% raw %}
- title: "Home"
  href: "/index.html"

- title: "Dropdown"
  href: "/dropdown/"
  subcategories:
    - subtitle: "Hello World"
      subhref: "/hello-world/"
    - divider: true
    - header: "Dropdown header"
    - subtitle: "Bye World"
      subhref: "/bye-world/"
{% endraw %}
{% endhighlight %}

Create in `_includes`a file `navbar-main.html`.

{% highlight html %}
{% raw %}
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <!-- Links Datafile _data/navbar-main.yml -->
        {% for link in site.data.navbar-main %}
        {% if link.subcategories != null %}
        <li class="dropdown{% if page.url contains link.href %} active{% endif %}">
          <a href="{{ link.url | prepend: site.baseurl | prepend: site.url }}" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">{{ link.title }} <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            {% for subcategory in link.subcategories %}
              {% if subcategory.divider %}
              <li class="divider"></li>
              {% elsif subcategory.header %}
              <li role="presentation" class="dropdown-header">{{ subcategory.header }}</li>
              {% else %}
              <li><a href="{{ subcategory.subhref | prepend: site.baseurl | prepend: site.url }}">{{ subcategory.subtitle }}</a></li>
              {% endif %}
            {% endfor %}
          </ul>
        </li>
        {% else %}
        <li{% if page.url contains link.href %} class="active" {% endif %}>
          <a href="{{ link.url | prepend: site.baseurl | prepend: site.url }}">{{ link.title }}</a>
        </li>
        {% endif %}
        {% endfor %}
        <!-- Links All Pages -->
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">All Pages <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            {% assign pagesSortTitle = site.pages | sort: "title" %}
            {% for linkpage in pagesSortTitle %}
              {% if linkpage.title %}
                <li{% if page.url contains linkpage.url %} class="active" {% endif %}>
                  <a class="page-link" href="{{ linkpage.url | prepend: site.baseurl | prepend: site.url }}">{{ linkpage.title }}</a>
                </li>
              {% endif %}
            {% endfor %}
          </ul>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <!-- Links All Pages -->
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">All Pages <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            {% assign pagesSortTitle = site.pages | sort: "title" %}
            {% for linkpage in pagesSortTitle %}
              {% if linkpage.title %}
                <li{% if page.url contains linkpage.url %} class="active" {% endif %}>
                  <a class="page-link" href="{{ linkpage.url | prepend: site.baseurl | prepend: site.url }}">{{ linkpage.title }}</a>
                </li>
              {% endif %}
            {% endfor %}
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container -->
</nav>
{% endraw %}
{% endhighlight %}

### Preview

{% capture htmlnav %}
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <!-- Links Datafile _data/navbar-main.yml -->
        {% for link in page.navbar-main %}
        {% if link.subcategories != null %}
        <li class="dropdown{% if page.url contains link.href %} active{% endif %}">
          <a href="{{ link.url | prepend: site.baseurl | prepend: site.url }}" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">{{ link.title }} <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            {% for subcategory in link.subcategories %}
              {% if subcategory.divider %}
              <li class="divider"></li>
              {% elsif subcategory.header %}
              <li role="presentation" class="dropdown-header">{{ subcategory.header }}</li>
              {% else %}
              <li><a href="{{ subcategory.subhref | prepend: site.baseurl | prepend: site.url }}">{{ subcategory.subtitle }}</a></li>
              {% endif %}
            {% endfor %}
          </ul>
        </li>
        {% else %}
        <li{% if page.url contains link.href %} class="active" {% endif %}>
          <a href="{{ link.url | prepend: site.baseurl | prepend: site.url }}">{{ link.title }}</a>
        </li>
        {% endif %}
        {% endfor %}
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <!-- Links All Pages -->
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">All Pages <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            {% assign pagesSortTitle = site.pages | sort: "title" %}
            {% for linkpage in pagesSortTitle %}
              {% if linkpage.title %}
                <li{% if page.url contains linkpage.url %} class="active" {% endif %}>
                  <a class="page-link" href="{{ linkpage.url | prepend: site.baseurl | prepend: site.url }}">{{ linkpage.title }}</a>
                </li>
              {% endif %}
            {% endfor %}
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container -->
</nav>
{% endcapture %}{{ htmlnav | strip_newlines | replace:'//','/' }}

### Links

- [http://www.jordanthornquest.com/blog/building-dynamic-navbars-with-jekyll/](http://www.jordanthornquest.com/blog/building-dynamic-navbars-with-jekyll/)
- [https://gist.github.com/adammacias/bf3e13a14028514b7b8f](https://gist.github.com/adammacias/bf3e13a14028514b7b8f)
- [https://gist.github.com/kasperisager/9416313#file-navigation-html](https://gist.github.com/kasperisager/9416313#file-navigation-html) - Nested Jekyll page navigation without plugins
