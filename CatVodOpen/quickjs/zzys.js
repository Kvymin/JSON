rule = {
    name: '子子影视',
    host: 'https://www.ziziys.com',
    class_name: '国产剧&美剧&日韩剧&动作片&剧情片&喜剧片&爱情片&惊悚片&奇幻片&悬疑片&动漫',
    class_url: '13&14&15&6&7&8&9&10&11&12&3',
    homeVod: 'div.module-item;div.module-item-pic a&&title;div.module-item-pic a&&href;img&&data-src;div.module-item-text&&Text',
    url: '/list/fyclass-fypage.html',
    categoryVod: 'div.module-item;div.module-item-pic a&&title;div.module-item-pic a&&href;img&&data-src;div.module-item-text&&Text',
    detailVod: {
      content: 'div.vod_content span&&Text',
      director: 'div.video-info-items:has(span:contains(导演)) a&&Text',
      actor: 'div.video-info-items:has(span:contains(主演)) a&&Text',
      playFrom: 'div.module-tab-item.tab-item&&Text',
      playUrl: 'div.module-blocklist div.scroll-content;a;&&Text;&&href',
    },
    lazy: `
      let url = HOST + input;
      request(url);|||
      let url = HOST + html.split('player_if" src="')[1].split('"')[0];
      request(url);|||
      playUrl = html.split('},"url":"')[1].split('"')[0];
    `,
    searchUrl: '/vsearch/--.html?wd=**',
    searchVod: 'div.module-item-pic;a&&title;a&&href;img&&data-src;',
  }