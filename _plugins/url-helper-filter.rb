# Convert input to url absolute or relative, conform the input
#
# Example: {{ "/media/foto.jpg" | to_absurl }}  => http://www.site.com/media/foto.jpg
# Example: {% assign logo = "/media/nikelogo.jpg" %}
#          {{ logo | to_absurl }}  => http://www.site.com/media/nikelogo.jpg
# Example: {{ "http://www.g1.com/logo.png" | to_absurl }}  => http://www.g1.com/logo.png
#
# Ref: https://github.com/jhauraw/jekyll-url-helper-filter-plugin/blob/master/url-helper-filter.rb
# Ref: http://jhaurawachsman.com/2013/jekyll-url-helper-filter-plugin/
# Ref: https://gist.github.com/anonymous/f17fe49f5e53498c869d

module Jekyll
  module UrlHelperFilter
    # Internal: Get the 'baseurl' variable value from _config.yml.
    def get_site_url
      site_url = @context.registers[:site].config['url']
    end

    def to_absurl(input)
      if input.include? "http"
        "#{input}"
      else
        "#{get_site_url}#{input}"
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::UrlHelperFilter)
