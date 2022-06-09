// Medium RSS
	// https://medium.jasonmdesign.com/display-medium-articles-on-your-site-d772b3b05779

  $(function () {
    var $content = $('#prita-medium-content');
    var data = {
      rss_url: 'https://medium.com/feed/@pritabread'
    };
    $.get('https://api.rss2json.com/v1/api.json', data, function (response) {
      if (response.status == 'ok') {
        var output = '';
          $.each(response.items, function (k, item) {
            output += '<div class="medium-blog-post" onclick="window.open(\'' + item.guid + '\',\'mywindow\');">'
            output += '<div class="medium-blog-title"><h2>' + item.title + '</h2></div>';            
            output += '<div class="medium-blog-date">' + $.format.date(item.pubDate, "MMM dd, yyyy") + '</div>';
            output += '</div>';
            
            return k < 3;
          });
        $content.html(output).hide();
        $content.fadeIn('slow');
      }
    });
  });