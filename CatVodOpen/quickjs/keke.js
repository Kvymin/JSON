rule = {
    host: 'https://www.keke13.com',
    class_name: '电影&电视剧&动漫&综艺&短剧',
    class_url: '1&2&3&4&6',
    homeVod: 'a.v-item;img&&title;&&href;img&&src;.v-item-bottom span&&Text',
    url: '/show/fyclass-----3-fypage.html',
    categoryVod: 'a.v-item;img&&title;&&href;img&&src;.v-item-bottom span&&Text',
    detailVod: {
      type_name: '.detail-tags-item&&Text',
      content: 'div.detail-desc p&&Text',
      director: '.detail-info-row:has(div:contains(导演)) .detail-info-row-main&&Text',
      actor: '.detail-info-row:has(div:contains(演员)) .detail-info-row-main a&&Text',
      playFrom: 'span.source-item-label&&Text',
      playUrl: '.episode-list;a;&&Text;&&href',
    },
    lazy: `
      request(HOST + input);|||
      playUrl = html.split('src: "')[1].split('",')[0];
      `,
    searchUrl: '/search?k=**&page=fypage',
    searchVod: 'a.search-result-item;img&&title;&&href;img&&src;.search-result-item-header&&Text'
  }