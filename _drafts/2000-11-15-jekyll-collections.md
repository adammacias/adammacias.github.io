---
layout: post
title: "Jekyll: Introdução a Collections"
description: "Veja passo a passo como criar uma coleção de `_albums`."
categories: docs
---

## Conteúdo

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Iniciando a Collection

No arquivo `config.yml` acrescente.

{% highlight html %}
# Collections
collections:
  albums:
    output: true
    relative_directory: _albums
    permalink: /albums/:path/
{% endhighlight %}

## Listar e exibir Collection Albums

Crie o arquivo `index.html` em `/albums/` para listar todos os albums.

{% highlight html %}
{% raw %}
{% for album in site.albums %}
<article>
  <h3><a href="{{ album.url | prepend: site.url }}">{{ album.title }} </a></h3>
  <p>Performed by {{ album.artist }}{% if album.director %}, directed by {{ album.director }}{% endif %}</p>
  {% for work in album.works %}
  <h5>{{ work.title }}</h5>
  <p>Composed by {{ work.composer }}</p>
  <ul>
    {% for track in work.tracks %}
    <li>{{ track.title }} ({{ track.duration }})</li>
    {% endfor %}
  </ul>
  {% endfor %}
</article>
{% endfor %}
{% endraw %}
{% endhighlight %}

Crie o arquivo `album.html` em `/_layouts/` para mostrar detalhes de um determinado album.

{% highlight html %}
{% raw %}
---
layout: default
---
<main>
  <header>
    <h1>{{ page.title }}</h1>
    <p>Performed by {{ page.artist }}{% if page.director %}, directed by {{ page.director }}{% endif %}</p>
  </header>
  <article class="entry-content">
    {{ content }}
  </article>
  <footer>
    {% for work in page.works %}
    <h2>{{ work.title }}</h2>
    <p>Composed by {{ work.composer }}</p>
    <ul>
      {% for track in work.tracks %}
      <li>{{ track.title }} ({{ track.duration }})</li>
      {% endfor %}
    </ul>
    {% endfor %}
  </footer>
</main>
{% endraw %}
{% endhighlight %}

## Criando um novo Album

Para inserir um novo album, crie em `/_albums/` um arquivo chamado `2015-05-10-roberto-carlos.markdown`.

{% highlight html %}
---
layout: album
title: "Roberto Carlos: Cidade de Santos Ao vivo"
artist: "Roberto Carlos"
director: "Xuxa"
works:
  - title: "Cidade de Santos Ao vivo"
    composer: "Roberto Carlos"
    tracks:
      - title: "Como é grande o meu amor por você"
        duration: "2:25"
      - title: "Amigo"
        duration: "2:53"
      - title: "Nossa senhora"
        duration: "4:09"
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
{% endhighlight %}

## Exemplo

<article>
  <h2><a href="/albums/2015-05-10-roberto-carlos/">Roberto Carlos: Cidade de Santos Ao vivo </a></h2>
  <p>Performed by Roberto Carlos, directed by Xuxa</p>
  <h5>Cidade de Santos Ao vivo</h5>
  <p>Composed by Roberto Carlos</p>
  <ul>
    <li>Como é grande o meu amor por você (2:25)</li>
    <li>Amigo (2:53)</li>
    <li>Nossa senhora (4:09)</li>
  </ul>
</article>
<article>
  <h2><a href="/albums/2015-05-11-josquin/">Josquin: Missa De beata virgine and Missa Ave maris stella </a></h2>
  <p>Performed by The Tallis Scholars, directed by Peter Phillips</p>
  <h5>Missa De beata virgine</h5>
  <p>Composed by Josquin des Prez</p>
  <ul>
    <li>Kyrie (4:25)</li>
    <li>Gloria (9:53)</li>
    <li>Credo (9:09)</li>
    <li>Sanctus &amp; Benedictus (7:47)</li>
    <li>Agnus Dei I, II &amp; III (6:49)</li>
  </ul>
</article>

## Referencias

- [http://jekyllrb.com/docs/collections/](http://jekyllrb.com/docs/collections/)
