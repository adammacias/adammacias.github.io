---
layout: branding
title: Testes de Estilos
description: Cabeçalhos, paragrafos, citações, tabelas, bloco de códigos, e mais. Apenas tudo o que você vai precisar para estilizar seu tema...
sitemap: false
group: branding
css: /branding/branding.css
---

Nota: Este estilo foi baseado no **Oficial Roon style test** em Ghost.org <http://roon.ghost.io/style-test/>. Arquivo [capturado no GitHub](https://github.com/search?l=markdown&q=Roon+style-test&ref=searchresults&type=Code&utf8=%E2%9C%93).

* * *

## Conteúdo

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

* * *

## Cabeçalhos

<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>

* * *

## Texto

Lorem ipsum dolor sit amet, [test link]() adipiscing elit. **This is strong.** Nullam dignissim convallis est. Quisque aliquam. _This is emphasized._ Donec faucibus. Nunc iaculis suscipit dui. 5<sup>3</sup> = 125. Water is H<sub>2</sub>O. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. <cite>The New York Times</cite> (That’s a citation). <span style="text-decoration:underline;">Underline</span>. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.

HTML and CSS are our tools. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. To copy a file type `COPY filename`. <del>Dinner’s at 5:00.</del> <span style="text-decoration:underline;">Let’s make that 7</span>. This <del>text</del> has been struck.

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
{: .lead}

<div class="row show-cols">
  <div class="col-md-4">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  <div class="col-md-4">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  <div class="col-md-4">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
</div>

* * *

## Mídia

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.

### Imagem grande

![Test Image]({{ site.url }}/media/shark.jpg)

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

### Imagem pequena

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.

![Small Test Image]({{ site.url }}/media/shark-xs.jpg)

Labore et dolore.

* * *

## Listas

### Lista de definição

Definition List Title
: This is a definition list division.

Definition
: An exact statement or description of the nature, scope, or meaning of something: _our definition of what constitutes poetry._

### Lista ordenada

  1. List Item 1
  2. List Item 2
     1. Nested list item A
     2. Nested list item B
  3. List Item 3

### Lista não ordenada

  * List Item 1
  * List Item 2
    * Nested list item A
    * Nested list item B
  * List Item 3

* * *

## Tabelas

|---
| Table Header 1 | Table Header 2 | Table Header 3
|:-:|:-:|:-:
| Division 1 | Division 2 | Division 3
| Division 1 | Division 2 | Division 3
| Division 1 | Division 2 | Division 3
|---
{: .oi}


* * *

## Formação de Texto

Typographically, preformatted text is not the same thing as code. Sometimes, a faithful execution of the text requires preformatted text that may not have anything to do with code. Most browsers use Courier and that’s a good default — with one slight adjustment, Courier 10 Pitch over regular Courier for Linux users.

### Código

Syntax highlighting is a feature that displays source code, in different colors and fonts according to the category of terms. This feature facilitates writing in a structured language such as a programming language or a markup language as both structures and syntax errors are visually distinct. Highlighting does not affect the meaning of the text itself; it is intended only for human readers.[^1]

[^1]: <http://en.wikipedia.org/wiki/Syntax_highlighting>

Code can be presented inline, like `<?php bloginfo('stylesheet_url'); ?>`, or using [jekyll's highlight
filter](http://jekyllrb.com/docs/templates/#code-snippet-highlighting) to
highlight a block of code. Because we have more specific typographic needs for code, we’ll specify Consolas and Monaco ahead of the browser-defined monospace font.

{% highlight css %}
#container {
  float: left;
  margin: 0 -240px 0 0;
  width: 100%;
}
{% endhighlight %}

{% highlight html %}
{% raw %}
<nav class="pagination" role="navigation">
    {% if page.previous %}
        <a href="{{ site.url }}{{ page.previous.url }}" class="btn" title="{{ page.previous.title }}">Previous article</a>
    {% endif %}
    {% if page.next %}
        <a href="{{ site.url }}{{ page.next.url }}" class="btn" title="{{ page.next.title }}">Next article</a>
    {% endif %}
</nav><!-- /.pagination -->
{% endraw %}
{% endhighlight %}

**Standard Code Block**

    {% raw %}
    <nav class="pagination" role="navigation">
        {% if page.previous %}
            <a href="{{ site.url }}{{ page.previous.url }}" class="btn" title="{{ page.previous.title }}">Previous article</a>
        {% endif %}
        {% if page.next %}
            <a href="{{ site.url }}{{ page.next.url }}" class="btn" title="{{ page.next.title }}">Next article</a>
        {% endif %}
    </nav><!-- /.pagination -->
    {% endraw %}

**Fenced Code Blocks**

To modify styling and highlight colors edit `/_sass/_coderay.scss`. Line numbers and a few other things can be modified in `_config.yml`. Consult [Jekyll's documentation](http://jekyllrb.com/docs/configuration/) for more information.

~~~ ruby
module Jekyll
  class TagIndex < Page
    def initialize(site, base, dir, tag)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'
      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'tag_index.html')
      self.data['tag'] = tag
      tag_title_prefix = site.config['tag_title_prefix'] || 'Tagged: '
      tag_title_suffix = site.config['tag_title_suffix'] || '&#8211;'
      self.data['title'] = "#{tag_title_prefix}#{tag}"
      self.data['description'] = "An archive of posts tagged #{tag}."
    end
  end
end
~~~

* * *

## Citação

Let’s keep it simple. Italics are good to help set it off from the body text. Be sure to style the citation.

> Good afternoon, gentlemen. I am a HAL 9000 computer. I became operational at the H.A.L. plant in Urbana, Illinois on the 12th of January 1992. My instructor was Mr. Langley, and he taught me to sing a song. If you’d like to hear it I can sing it for you. — [HAL 9000](http://en.wikipedia.org/wiki/HAL_9000)

And here’s a bit of trailing text.

* * *

## Texto HTML semântico

HTML elements
<p>The <a href="#">a element</a> example <br>
The <abbr>abbr element</abbr> and <abbr title="Title text">abbr element with title</abbr> examples <br>
The <b>b element</b> example <br>
The <cite>cite element</cite> example <br>
The <code>code element</code> example <br>
The <del>del element</del> example <br>
The <dfn>dfn element</dfn> and <dfn title="Title text">dfn element with title</dfn> examples <br>
The <em>em element</em> example <br>
The <i>i element</i> example <br>
The <ins>ins element</ins> example <br>
The <kbd>kbd element</kbd> example <br>
The <mark>mark element</mark> example <br>
The <q>q element <q>inside</q> a q element</q> example <br>
The <s>s element</s> example <br>
The <samp>samp element</samp> example <br>
The <small>small element</small> example <br>
The <span>span element</span> example <br>
The <strong>strong element</strong> example <br>
The <sub>sub element</sub> example <br>
The <sup>sup element</sup> example <br>
The <var>var element</var> example <br>
The <u>u element</u> example</p>

* * *

## Embeds

Sometimes all you want to do is embed a little love from another location and set your post alive.

### Video

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Culpa qui officia deserunt mollit anim id est laborum.

<div class="entry-content">
  <iframe src="https://player.vimeo.com/video/149640932?color=fff700&byline=0&portrait=0&badge=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  <p><a href="https://vimeo.com/149640932">The Christmas Light Killer</a> from <a href="https://vimeo.com/jamespgannon">James P. Gannon</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
</div>

### Slides

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

<script async class="speakerdeck-embed" data-id="585245d01ee1013238737e42b879906f" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

Culpa qui officia deserunt mollit anim id est laborum.

### Audio

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/52891122&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>

Culpa qui officia deserunt mollit anim id est laborum.

### Código

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.

<p data-height="268" data-theme-id="0" data-slug-hash="bcqhe" data-default-tab="result" data-user="rglazebrook" class='codepen'>See the Pen <a href='http://codepen.io/rglazebrook/pen/bcqhe/'>Simple Rotating Spinner</a> by Rob Glazebrook (<a href='http://codepen.io/rglazebrook'>@rglazebrook</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

**GitHub Gist Embed**

An example of a Gist embed below.

<script src="https://gist.github.com/adammacias/3eb592475d306ccbf8a6.js"></script>

* * *

Isn't it beautiful.

*[HTML]: Hyper Text Markup Language
*[CSS]: Cascading Style Sheets

* * *

## Referencias

- <https://gist.github.com/adammacias/3eb592475d306ccbf8a6>
- <https://trello.com/b/vJuLNMjU/projeto-jekyll-minion>
- <http://v4-alpha.getbootstrap.com/>
- <http://roon.ghost.io/style-test/> — [Busca GitHub](https://github.com/search?l=markdown&q=Roon+style-test&ref=searchresults&type=Code&utf8=%E2%9C%93)
- <https://github.com/poole/hyde/> — [Demo](http://hyde.getpoole.com/)
- <https://github.com/poole/lanyon/> — [Demo](http://lanyon.getpoole.com/)
- <https://github.com/johnotander/pixyll/> — [Demo](http://pixyll.com/jekyll/pixyll/)
- <https://github.com/hmfaysal/hmfaysal-omega-theme/> — [Demo](http://hmfaysal.github.io/hmfaysal-omega-theme/)
- <https://github.com/mmistakes/skinny-bones-jekyll> — [Demo](https://mmistakes.github.io/skinny-bones-jekyll/)
- <https://github.com/rosario/kasper> — [Demo](https://demo.ghost.io/style-test/)
- <https://github.com/hmfaysal/Notepad> — [Demo](http://www.hossainmohdfaysal.com/Notepad/theme/documentation/)
- <https://github.com/mmistakes/hpstr-jekyll-theme> — [Demo](https://mmistakes.github.io/hpstr-jekyll-theme/sample-post-images/)
- <http://www.initializr.com/>
- <http://foundation.zurb.com/sites.html>
- [Foundation ZURB: Stencils For Foundation 4 Are here!](http://zurb.com/playground/foundation4-stencil-sets)
- [Foundation ZURB: Building Blocks](http://zurb.com/building-blocks)
- <http://demo.uberfacil.com/>
- <https://github.com/rmm5t/jquery-timeago>
- <http://sachinchoolur.github.io/lightGallery/demos/hash.html>
- [Bootstrap JavaScript Examples](http://codepen.io/adammacias/pen/LVxVRL) - A PEN BY Adam Macias
- <http://jhaurawachsman.com/2013/jekyll-url-helper-filter-plugin/> or on [GIST](https://gist.github.com/anonymous/f17fe49f5e53498c869d)
- <https://github.com/jekyll/jekyll-redirect-from>
- <http://jekyll.github.io/jekyll-assets/>
- <https://github.com/jekyll/jekyll-feed>
- <https://github.com/vwochnik/jekyll-language-plugin>
