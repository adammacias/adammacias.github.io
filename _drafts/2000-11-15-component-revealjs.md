---
layout: post
title: "Componente: Apresentação de Slides com Reveal.JS"
description: "Como criar apresentações de slides com Reveal.JS e Jekyll utilizando collection."
categories: docs
---

## Conteúdo

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Iniciando a Collection

Arquivo `config.yml`.

{% highlight html %}
# Collections
collections:
  slides:
    output: true
    relative_directory: _slides
    permalink: /slides/:path/
{% endhighlight %}

## Layout RevealJS

Create a new layout `revealjs.html` in `/_layouts/`

{% highlight html %}
{% raw %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>{{ page.title | default: site.title }}</title>
  <!-- Stylesheet -->
  <link rel="stylesheet" href="{{ "/assets/plugins/revealjs/css/reveal.css" | to_urlabs }}" id="revealjs-core">
  <link rel="stylesheet" href="{{ page.reveal_theme | default: "/assets/plugins/revealjs/css/theme/black.css" | to_urlabs }}" id="revealjs-theme">
  <!-- For syntax highlighting -->
  <link rel="stylesheet" href="{{ "/assets/plugins/revealjs/lib/css/zenburn.css" | to_urlabs }}">
  <!-- If the query includes 'print-pdf', use the PDF print sheet -->
  <script>
  document.write( '<link rel="stylesheet" href="{{ "/assets/plugins/revealjs/css/print/" | to_urlabs }}' + ( window.location.search.match( /print-pdf/gi ) ? 'pdf' : 'paper' ) + '.css" type="text/css" media="print">' );
  </script>
  <!--[if lt IE 9]>
  <script src="{{ "/assets/plugins/revealjs/lib/js/html5shiv.js" | to_urlabs }}"></script>
  <![endif]-->
</head>
<body>
  <div class="reveal">
    <div class="slides">
      {{ content }}
    </div>
  </div>
  <script src="{{ "/assets/plugins/revealjs/lib/js/head.min.js" | to_urlabs }}"></script>
  <script src="{{ "/assets/plugins/revealjs/js/reveal.js" | to_urlabs }}"></script>
  <script>
  // Full list of configuration options available here:
  // https://github.com/hakimel/reveal.js#configuration
  Reveal.initialize({
  {% if page.reveal_options %}
    {{ page.reveal_options | replace: "baseurl_content/", site.baseurl_content }}
  {% endif %}
  theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
  // Optional libraries used to extend on reveal.js
  dependencies: [
  { src: '{{ "/assets/plugins/revealjs/lib/js/classList.js" | to_urlabs }}', condition: function() { return !document.body.classList; } },
  { src: '{{ "/assets/plugins/revealjs/plugin/markdown/marked.js" | to_urlabs }}', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
  { src: '{{ "/assets/plugins/revealjs/plugin/markdown/markdown.js" | to_urlabs }}', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
  { src: '{{ "/assets/plugins/revealjs/plugin/highlight/highlight.js" | to_urlabs }}', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
  { src: '{{ "/assets/plugins/revealjs/plugin/zoom-js/zoom.js" | to_urlabs }}', async: true, condition: function() { return !!document.body.classList; } },
  {% if page.reveal_notes_server %}
    { src: '{{ "/assets/plugins/revealjs/socket.io/socket.io.js" | to_urlabs }}', async: true },
    { src: '{{ "/assets/plugins/revealjs/plugin/notes-server/client.js" | to_urlabs }}', async: true }
  {% else %}
    { src: '{{ "/assets/plugins/revealjs/plugin/notes/notes.js" | to_urlabs }}', async: true, condition: function() { return !!document.body.classList; } }
  {% endif %}
  {% if page.reveal_dependencies %}
    , {{ page.reveal_dependencies }}
  {% endif %}
  ]
  });
  console.log(Reveal.getQueryHash().theme);
  </script>
</body>
</html>
{% endraw %}
{% endhighlight %}

## Listando Apresentações de Slides

{% highlight html %}
{% raw %}
<ul>
  {% for slide in site.slides %}
    <li><a href="{{ slide.url | prepend: site.baseurl }}">{{ slide.title }}</a></li>
  {% endfor %}
</ul>
{% endraw %}
{% endhighlight %}

## Nova Apresentação Slides

Crie em `/_slides/` um arquivo chamado `1-1-1-0-revealjs.md` com o front matter assim:

{% highlight html %}
---
layout: revealjs
title: Dicas para a escolha de um bom domínio
reveal_theme: /assets/plugins/revealjs/css/theme/bootstrap.css
reveal_options: > # transition: "default",
                    parallaxBackgroundImage: "/media/bg_paralax.jpg",
                    parallaxBackgroundSize: "7002px 1813px",
reveal_dependencies:
---
{% endhighlight %}

Faça o conteúdo do arquivo [algo assim](https://gist.github.com/adammacias/19c3ba58239619c32880).

## Exemplo

<div id="banner-revealjs" class="container-fluid-disable">
  <div class="embed-responsive embed-responsive-16by9">
      <iframe src="http://lab.hakim.se/reveal-js/" class="embed-responsive-item" allowfullscreen></iframe>
  </div>
</div>

<p></p>

## Referencias

- [http://lab.hakim.se/reveal-js/#/](http://lab.hakim.se/reveal-js/#/)
- [https://github.com/hakimel/reveal.js](https://github.com/hakimel/reveal.js)
- [http://jekyllrb.com/docs/collections/](http://jekyllrb.com/docs/collections/)

