---
layout: post
title: "Post com Imagens"
description: "Exemplos e códigos como mostrar imagens em suas páginas."
categories: artigos
image:
  feature: http://blogs-images.forbes.com/insertcoin/files/2015/06/snow1-e1434299165356-1940x1093.jpg
  credit: got
  creditlink: http://www.got.com
---

Aqui é possível notar exemplos com uso uma simples figura ou até mesmo uma a galeria com lightbox.

* * *

## Conteúdo

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

* * *

## Figuras (para imagens ou videos)

Use o elemento `<figure>` para mostrar imagens, o elemento `<figcaption>` e `<a>` são opcionais.

Outra coisa legal, é usar classes que são nativas do Bootstrap, veja mais detalhes na página de [imagens](http://v4-alpha.getbootstrap.com/content/images/) ou [figuras](http://v4-alpha.getbootstrap.com/content/figures/) do Bootstrap.

### Simples

<figure class="figure">
	<a href="{{ "/media/jw.jpg" | to_absurl }}">
    <img class="figure-img img-fluid img-rounded" src="{{ "/media/jw.jpg" | to_absurl }}" alt="">
  </a>
	<figcaption class="figure-caption">
    <a href="#" title="Jurassic Word Movie">Jurassic Word Movie</a>.
  </figcaption>
</figure>

### Multiplas

Veja como mostrar mais de uma imagem na mesma "figura". Ainda fazendo o uso do `grids` do Bootstrap.

{% highlight html %}
<figure class="figure">
  <div class="row">
    <div class="col-md-6">
      <img class="figure-img img-fluid img-rounded" src="{{ "/media/cat.jpg" | to_absurl }}" alt="">
    </div>
    <div class="col-md-6">
      <img class="figure-img img-fluid img-rounded" src="{{ "/media/shark.jpg" | to_absurl }}" alt="">
    </div>
  </div>
  <figcaption class="figure-caption">Descrição das duas figuras.</figcaption>
</figure>
{% endhighlight %}

Você vai ter algo parecido com isso:

<figure class="figure">
  <div class="row">
    <div class="col-md-6">
      <img class="figure-img img-fluid img-rounded" src="{{ "/media/cat.jpg" | to_absurl }}" alt="">
    </div>
    <div class="col-md-6">
      <img class="figure-img img-fluid img-rounded" src="{{ "/media/shark.jpg" | to_absurl }}" alt="">
    </div>
  </div>
  <figcaption class="figure-caption">Descrição das duas figuras.</figcaption>
</figure>

* * *

## Galeria com LightGallery

Alternativamente, você pode criar galerias usando isso:

{% highlight jinja %}
{% raw %}
{% assign gallery = site.data.gallery-sample %}
{% include gallery.html gallery=gallery cols=4 captions=true description="Simples galeria de imagens usando o plugin LightGallery." %}
{% endraw %}
{% endhighlight %}

Você terá algo assim:

{% assign gallery = site.data.gallery-sample %}
{% include gallery.html gallery=gallery cols=4 captions=true description="Simples galeria de imagens usando o plugin LightGallery." %}

Este método usa os dados `/_data/gallery-sample.html`, o include `/_includes/gallery.html` e o plugin [LightGallery](http://sachinchoolur.github.io/lightGallery/).

Paramentros:

- `cols`: Mostra quantas colunas você quer `1 (padrão), 2, 3, 4 ou 6`;
- `captions`: Legenda para imagem `true (padrão) ou false`.
- `description`: Legenda para galeria `false (padrão) ou qualquer texto`.

* * *

## Bootstrap Carousel

Crie tambem galerias com o componente Carousel do Bootstrap.


{% highlight jinja %}
{% raw %}
{% assign gallery = site.data.gallery-sample %}
{% include bootstrap-carousel.html gallery=gallery indicators=true controls=true captions=true interval=3000 %}
{% endraw %}
{% endhighlight %}

Exemplo:

{% include bootstrap-carousel.html gallery=gallery indicators=true controls=true captions=true interval=3000 %}

<p></p>

Paramentros:

- `indicators`: Mostrar indicadores (bullets) `true (padrão) ou false`;
- `controls`: Mostrar controles (setas) `true (padrão) ou false`;
- `captions`: Mostrar Legenda para slide `true (padrão) ou false`;
- `interval`: Tempo de intervalo slides `5000 (padrão) ou número inteiro`.


