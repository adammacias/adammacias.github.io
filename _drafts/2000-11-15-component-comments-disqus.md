---
layout: post
title: "Componente: Comentários do Disqus"
description: "Como mostrar comentários do Disqus."
categories: docs
---

## Conteúdo

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Iniciando configurações

Defina em `config.yml` seu **disqus_shortname**.

{% highlight html %}
social:
  disqus: adamblog # disqus_shortname
{% endhighlight %}

## Layout Disqus

Crie em `_includes` o arquivo `comments.html`.

{% highlight html %}
{% raw %}
<!-- Comments Include -->
<section class="entry-comments">
  <h2>Comentários</h2>
  <button class="btn btn-default btn-block btn-lg" type="button" data-toggle="collapse" data-target="#collapseComments" aria-expanded="false" aria-controls="collapseComments" id="btn-comments">Mostrar comentários</button>
  <div class="collapse" id="collapseComments">
    <div id="disqus_thread"></div>
    <script>
    /*
     * config disqus
     */
    var dsq_load_element       = document.getElementById('btn-comments');
    var dsq_shortname          = '{{ site.social.disqus }}';
    var dsq_text_show_comments = 'Mostrar comentários';
    var dsq_text_hide_comments = 'Ocultar comentários';

    /*
     * load disqus
     */
     function dqs_load() {
      var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
      dsq.src = 'http://' + dsq_shortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
      dqs_load = function() {}; // remove event
    }

    /*
     * click button, call functions
     */
    dsq_load_element.onclick = function () {
      this.innerHTML = ( this.innerHTML == dsq_text_show_comments ) ? dsq_text_hide_comments : dsq_text_show_comments;
      dqs_load();
    };
    </script>
    <noscript>Ative seu JavaScript para ver os <a href="http://disqus.com/?ref_noscript">comentários.</a></noscript>
  </div>
</section>
{% endraw %}
{% endhighlight %}

Exiba no seu tema.

{% highlight html %}
{% raw %}
{% include comments.html %}
{% endraw %}
{% endhighlight %}

\- or -

{% highlight html %}
{% raw %}
---
Title: "Ola mundo"
comments: true
---

{% if page.comments %}
  {% include comments.html %}
{% endif %}
{% endraw %}
{% endhighlight %}

## Exemplo

<!-- Comments Include -->
<section class="page-comments">
  <h4 class="page-header">comentários</h4>
  <button class="btn btn-default btn-block btn-lg" type="button" data-toggle="collapse" data-target="#collapseComments" aria-expanded="false" aria-controls="collapseComments" id="btn-comments">Mostrar comentários</button>
  <div class="collapse" id="collapseComments">
    <div id="disqus_thread"></div>
    <script>
    /*
     * config disqus
     */
    var dsq_load_element       = document.getElementById('btn-comments');
    var dsq_shortname          = 'adamblog'; // {{ site.disqus }}
    var dsq_text_show_comments = 'Mostrar comentários';
    var dsq_text_hide_comments = 'Ocultar comentários';

    /*
     * load disqus
     */
     function dqs_load() {
      var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
      dsq.src = 'http://' + dsq_shortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
      dqs_load = function() {}; // remove event
    }

    /*
     * click button, call functions
     */
    dsq_load_element.onclick = function () {
      this.innerHTML = ( this.innerHTML == dsq_text_show_comments ) ? dsq_text_hide_comments : dsq_text_show_comments;
      dqs_load();
    };
    </script>
    <noscript>Ative seu JavaScript para ver os <a href="http://disqus.com/?ref_noscript">comentários.</a></noscript>
  </div>
</section>

## Referências

- [https://disqus.com/](https://disqus.com/)
- [http://jekyllrb.com/docs/templates/#tags](http://jekyllrb.com/docs/templates/#tags)
- [http://franklinjavier.com/posts/carregando-o-disqus-ao-chegar-no-fim-da-p-gina/](http://franklinjavier.com/posts/carregando-o-disqus-ao-chegar-no-fim-da-p-gina/)
