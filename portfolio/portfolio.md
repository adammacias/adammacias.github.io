---
layout: page
title: Trabalhos
permalink: /portfolio/
redirect_from:
  - /trabalhos/
  - /cases/
group: pages
description: "Cozinhados com 99.1% de pureza e muito café."
image:
  feature: /media/jw.jpg
  credit: adammacias
  creditlink: http://www.adammacias.com
  background: /media/bg-breakingbad-002.png
  background_outline: true
---

{% assign portfolios = site.data.portfolio | sort: 'order' %}
{% for p in portfolios %}
{% if p.hidden != true %}
<article id="portfolio-{{ p.id }}" class="portfolio row">
  <div class="portfolio-description col-lg-4 text-xs-center text-lg-left">
    <h2>{{ p.name }} <span class="text-muted small">{{ p.date | date: '%Y' }}</span></h2>
    {% if p.description %}<p>{{ p.description }}</p>{% endif %}
    <div class="hidden-md-down">
      <h3 class="h5">Serviços</h3>
      <ul class="list-unstyled">
        {% for tag in p.tags %}
          <li><i class="fa fa-diamond fa-fw"></i>&nbsp; {{ tag }}</li>
        {% endfor %}
      </ul>
      {% if p.team %}
      <h3 class="h5">Equipe de Laboratório</h3>
      <ul class="list-unstyled">
        {% for person in p.team %}
          <li><i class="fa fa-user-secret-off fa-coffee fa-fw"></i>&nbsp; <b>{{ person.role }}</b> <a href="{{ person.url }}" target="_blank" rel="nofollow">{{ person.name }}</a></li>
        {% endfor %}
      </ul>
      {% endif %}
      <h3 class="h5">URL</h3>
      <p><a class="btn btn-primary" href="{{ p.url }}" target="_blank" rel="nofollow">Visitar projeto</a></p>
    </div>
  </div>
  <div class="portfolio-image col-lg-8">
    <div class="card">
      <div class="card-block">
        <p class="card-subtitle text-muted m-a-0">
          {% if p.offline %}
          <span class="text-muted">{{ p.url }}</span>
          {% else %}
          <a class="text-muted" href="{{ p.url }}" target="_blank" rel="nofollow">{{ p.url }}</a>
          {% endif %}
        </p>
      </div>
      <img class="img-fluid gifplayer" src="{{ site.url }}/media/portfolio/{{ p.id }}.png" alt="Imagem {{ p.name }}">
    </div>
  </div>
</article>
<hr>
{% endif %}
{% endfor %}
