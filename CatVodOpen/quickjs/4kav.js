rule = {
    host: 'https://4k-av.com',
    homeVod: '#recommlist li;.title&&Text;.title a&&href;img&&src;span&&Text',
    class_name: '电视剧&电影',
    class_url: 'tv&movie',
    headers: {
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
    },
    homeVod: '#recommlist li;.title&&Text;.title a&&href;img&&src;span&&Text',
    categoryVodJS: `
      let url = HOST + '/'+classId+'/';
      if (page > 1 && page <= pagecount) url = url + 'page-' + (pagecount-page+1) + '.html';
      request(url);|||
      const $ = load(html);
      pagecount = $('span.page-number').first().text().split('/')[1];
      videos = _.map($('.NTMitem'), item => {
        return {
          vod_id: $('a', item).attr('href'),
          vod_name: $('a', item).attr('title'),
          vod_pic: $('img', item).attr('src'),
          vod_remarks: $('.resyear label', item).first().text(),
          vod_year: $('.resyear label', item).last().text(),
        }
      });
    `,
    detailVodJS: `
      request(HOST + input);|||
      var $ = load(html);
      var vod = {
        vod_year: $('.videodetail a').text(),
        type_name: $('.tags a').text(),
        vod_content: $('.cnline').text(),
        vod_play_from: 'leospring',
      }
      if ($('li .screenshot').length > 0) {
        vod.vod_play_url = _.map($('li .screenshot'), item => {
            let url = input;
            if($(item).find('a').attr('href') != undefined) url = $(item).find('a').attr('href');
            return $(item).find('span').text() + '$' + url;
          }).join('#');
      } else {
        vod.vod_play_url = 'leospring开发$'+input;
      }
      
      videos.push(vod);
    `,
    lazy: `
    request(HOST + input);|||
    const $ = load(html);
    playUrl = $('source').attr('src');
    `,
    searchUrl: '/s?q=**',
    searchVod: '.NTMitem;.title a&&title;.title a&&href;img&&src;.resyear label:eq(0)&&Text',
  }