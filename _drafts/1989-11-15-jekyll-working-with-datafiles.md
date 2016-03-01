---
layout: post
title: "Jekyll - Working with Datafiles (.YAML, .JSON, .CSV and more) (Rascunho)"
---

## Conteúdo

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

<div class="alert alert-info">
  <b>Find theses examples in:</b> <a href="http://jekyllrb.com/docs/datafiles/">Docs Data Files</a>
</div>

Jekyll supports loading data from [YAML](http://yaml.org/), [JSON](http://www.json.org/),
and [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) files located in the `_data` directory.

Note that CSV files **must** contain a header row.

***

## From `.YML` - Datafile Accessing a specific author

Pages and posts can also access a specific data item. The example below shows how to access a specific item:

### Code

Create in `_data`a file `adam.yml`.

{% highlight html %}
{% raw %}
adammacias:
    name: Adam Macias
    twitter: adammacias
{% endraw %}
{% endhighlight %}

Show data in site

{% highlight html %}
{% raw %}
{% assign author = site.data.people["adammacias"] %}
<a rel="author" href="http://twitter.com/{{ author.twitter }}" title="{{ author.name }}"> {{ author.name }} </a>
{% endraw %}
{% endhighlight %}

> TIP: ```{% raw %}{% assign author = site.data.people[page.author] %}{% endraw %}```

### Preview

<p><a rel="author" href="http://twitter.com/adammacias" title="Adam Macias"> Adam Macias </a></p>

***

## From `.YML` - Datafile members

### Code

Create in `_data`a file `members.yml`.

{% highlight html %}
{% raw %}
- name: Tom Preston-Werner
  github: mojombo

- name: Parker Moore
  github: parkr

- name: Liu Fengyun
  github: liufengyun
{% endraw %}
{% endhighlight %}

Show data in site

{% highlight html %}
{% raw %}
<ul>
{% for member in site.data.members %}
  <li><a href="https://github.com/{{ member.github }}"> {{ member.name }} </a></li>
{% endfor %}
</ul>
{% endraw %}
{% endhighlight %}

### Preview

<ul>
  <li><a href="https://github.com/mojombo"> Tom Preston-Werner </a></li>
  <li><a href="https://github.com/parkr"> Parker Moore </a></li>
  <li><a href="https://github.com/liufengyun"> Liu Fengyun </a></li>
</ul>

***

## From `.csv` - Datafile teams

### Code

Create in `_data`a file `teams.csv`.

{% highlight html %}
{% raw %}
name,country
Santos FC, Brazil
Barcelona FC, Spain
{% endraw %}
{% endhighlight %}

Show data in site

{% highlight html %}
{% raw %}
<ul>
{% for team in site.data.teams %}
  <li><b>{{ team.name }}</b> {{ team.country }}</li>
{% endfor %}
</ul>
{% endraw %}
{% endhighlight %}

### Preview

<ul>
  <li><b>Santos FC</b>  Brazil</li>
  <li><b>Barcelona FC</b>  Spain</li>
</ul>

***

## From `.yml` - Datafile **multiple** events

Data files can also be placed in sub-folders of the `_data` folder.
Each folder level will be added to a variable’s namespace.
The example below shows how GitHub organizations could be defined separately in a file under the `events` folder:


### Code

Create in `_data/events/`a file `wordcamp-2014.yml`.

{% highlight html %}
{% raw %}
name: WordCamp Sampa
year: 2014
speakers:
  - name: Adam Macias
    github: adammacias

  - name: John Doe
    github: jdoe
{% endraw %}
{% endhighlight %}

Create in `_data/events/`a file `wordcamp-2015.yml`.

{% highlight html %}
{% raw %}
name: WordCamp Carioca
year: 2015
speakers:
  - name: Romário
    github: romario

  - name: Ronaldo
    github: ronaldo
{% endraw %}
{% endhighlight %}

Show data in site

{% highlight html %}
{% raw %}
<ul>
{% for event_hash in site.data.events %}
{% assign event = event_hash[1] %}
  <li><b>{{ event.name }}</b> ({{ event.speakers | size }} speakers)</li>
{% endfor %}
</ul>
{% endraw %}
{% endhighlight %}

### Preview

<ul>
  <li><b>WordCamp Sampa</b> (2 speakers)</li>
  <li><b>WordCamp Carioca</b> (2 speakers)</li>
</ul>
