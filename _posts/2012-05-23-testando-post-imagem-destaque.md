---
layout: post
title: "Testando Post com Imagem Destacada Grande e Texto"
description: "Custom written post descriptions are the way to go... if you're not lazy."
categories: testes
image:
  feature: /media/jw.jpg
  credit: adammacias
  creditlink: http://www.adammacias.com
  background: https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/12244407_10207842574800478_7065610809533713749_o.jpg
  background_outline: true
---

## Imagem de Destaque

Para adicionar uma imagem em destaque, é simples:

{% highlight yaml %}
image:
  feature: /media/jw.jpg
  credit: adammacias
  creditlink: http://www.adammacias.com
{% endhighlight %}

Além da imagem em destaque, você pode ainda preparar seu tema para receber `background`.

### Template

{% highlight yaml %}
image:
  feature: /media/jw.jpg
  credit: adammacias
  creditlink: http://www.adammacias.com
  background: /media/jw.jpg
  background_outline: true
{% endhighlight %}

### CSS

{% highlight html linenos %}
{% raw %}
{% if page.image.background %}
<style type="text/css">
  .jumbotron {
    /**height: 100vmin;**/
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-image: url({{ page.image.background | to_urlabs }});

    background-attachment:fixed;

    {% if page.image.background_outline %}
    color: white;
    {% endif %}
  }
</style>
{% endif %}
{% endraw %}
{% endhighlight %}

Caso você queira usar em todas as páginas como padrão a mesma imagem ou fundo, use o seu arquivo `_config.yml` and BOOM --- imagem ou fundo para todas as páginas!

* * *

## Dicas

Veja algumas coisas que podem ajudar você a criar páginas com imagem destacada

* [Content center vertical and horizontal HTML - Flexbox](http://codepen.io/adammacias/pen/eNzaar) - A PEN BY Adam Macias
* [V, VMIN, REM e outras unidades CSS que você provavelmente não conhece](http://codepen.io/adammacias/pen/gpMvdp) - A PEN BY Adam Macias
* [Centred content with extended backgrounds](http://codepen.io/adammacias/pen/zGNKvb) - A PEN BY Adam Macias
* <http://www.hossainmohdfaysal.com/Notepad/theme/readability-feature-post/>
* <https://medium.com/@chrisnager/center-and-crop-images-with-a-single-line-of-css-ad140d5b4a87>
* <http://stackoverflow.com/questions/22178300/how-to-create-responsive-background-images-similar-to-medium-com>
* <https://demo.ghost.io/style-test/>
* <http://stackoverflow.com/a/20872835>
* <http://matthew.wagerfield.com/parallax/>
* <http://subtlepatterns.com>

{% if page.image.background %}
<style type="text/css">
  .jumbotron {
    /**height: 100vmin;**/
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-image: url({{ page.image.background | to_urlabs }});

    background-attachment:fixed;

    {% if page.image.background_outline %}
    color: white;
    {% endif %}
  }
</style>
{% endif %}
