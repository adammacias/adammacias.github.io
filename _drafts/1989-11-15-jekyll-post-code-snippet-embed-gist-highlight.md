---
layout: post
title:  "Post - Code Snippet and Embed Gist (highlight) (Rascunho)"
categories: rascunho
---

Jekyll also offers powerful support for code snippets:

{% highlight html %}
{% raw %}
{% raw %\}
{% highlight ruby %}
...code here
{% endhighlight %}
{% endraw %\}
{% endraw %}
{% endhighlight %}

**Result**

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll's GitHub repo][jekyll-gh].

### Line numbers

{% highlight html %}
{% raw %}
{% highlight java linenos %}
...code here
{% endhighlight %}
{% endraw %}
{% endhighlight %}

**Result**

{% highlight java linenos %}
package LinuxDOS;

public class DOSLinuxAdapter implements LinuxTarget {
	private DOS dos;

	public DOSLinuxAdapter(DOS dos){
		// setcomando()
		this.dos = dos;
	}

	@Override
	public void CallLinux() {
		dos.CallDOS();
	}

}
{% endhighlight %}

[jekyll-gh]: https://github.com/mojombo/jekyll
[jekyll]:    http://jekyllrb.com

<div class="clearfix"></div>

<h2 class="page-header">GIST</h2>

<p class="lead">Use the gist tag to easily embed a GitHub Gist onto your site. This works with public or secret gists:</p>

{% highlight html %}
{% raw %}
{% gist parkr/931c1c8d465a04042403 %}
{% endraw %}
{% endhighlight %}

You may also optionally specify the filename in the gist to display:

{% highlight html %}
{% raw %}
{ gist parkr/931c1c8d465a04042403 jekyll-private-gist.markdown }
{% endraw %}
{% endhighlight %}

{ gist parkr/931c1c8d465a04042403 }
