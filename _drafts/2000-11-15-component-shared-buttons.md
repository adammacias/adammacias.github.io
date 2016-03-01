---
layout: post
title: "Componente: Botões Sociais (Social-Likes)"
description: "Mostrar botões para compartilhar página no Facebook, Twitter ou Gplus utilizando o plugin social-likes."
categories: docs
---

## Conteúdo

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Iniciando configurações

Defina em `config.yml` seus perfis sociais.

{% highlight html %}
social:
  twitter: adammacias
  facebook: adam.requena.macias
  gplus: adam.requena.macias
{% endhighlight %}

## Layout Social-Likes

Crie em `_includes` o arquivo `shared.html`.

{% highlight html %}
{% raw %}
<div class="social-likes" data-counters="no">
  <div class="facebook" title="Compartilhar no Facebook">Facebook</div>
  <div class="twitter" data-via="{{ site.social.twitter }}" title="Compartilhar no Twitter">Twitter</div>
  <div class="plusone" title="Compartilhar no Google+">Google+</div>
</div>
{% endraw %}
{% endhighlight %}

Para mostrar em seu site.

{% highlight html %}
{% raw %}
{% include shared.html %}
{% endraw %}
{% endhighlight %}

\- or -

{% highlight html %}
{% raw %}
---
Title: "Ola mundo"
shared: true
---

{% if page.shared %}
  {% include shared.html %}
{% endif %}
{% endraw %}
{% endhighlight %}

## Dependencias

É necessário incluir no seu template o CSS e JS do plugin [social-likes](http://sapegin.github.io/social-likes/).

{% highlight html %}
{% raw %}
<!-- NEED JQUERY -->
{% if page.shared %}
<link rel="stylesheet" href="{{ "/assets/plugins/social-likes/social-likes_birman.css" | to_urlabs }}">
{% endif %}
{% if page.shared %}
<script src="{{ "/assets/plugins/social-likes/social-likes.min.js" | to_urlabs }}"></script>
{% endif %}
{% endraw %}
{% endhighlight %}

## Exemplo

[Veja aqui](http://sapegin.github.io/social-likes/)

## Links

- <http://sapegin.github.io/social-likes/>
- [https://dev.twitter.com/web/tweet-button](https://dev.twitter.com/web/tweet-button)
- [https://developers.facebook.com/docs/plugins/like-button](https://developers.facebook.com/docs/plugins/like-button)
- [http://jekyllrb.com/docs/templates/#tags](http://jekyllrb.com/docs/templates/#tags)
