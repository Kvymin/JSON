rule = {
    host: 'https://www.ddkk.tv',
    class_name: '电影&电视剧&动漫&综艺&短剧',
    class_url: '1&2&3&4&21',
    homeVod: 'a.myui-vodlist__thumb;&&title;&&href;&&data-original;span.text-right&&Text',
    url: '/channel/fyclass-fypage.html',
    categoryVod: 'a.myui-vodlist__thumb;&&title;&&href;&&data-original;span.text-right&&Text',
    detailVod: {
      content: '.desc&&Text',
      director: 'p.data:has(span:contains(导演)) a&&Text',
      actor: 'p.data:has(span:contains(演员)) a&&Text',
      playFrom: '.nav.nav-tabs li a&&Text',
      playUrl: '.tab-content div.tab-pane;li a;&&title;&&href',
    },
    lazy: `
      request(HOST + input);|||
      const json = getPlay4aJson(html);
      let enUrl = unescape(base64Decode(JSON.parse(json).url));
      request('https://jx.tudo.fun/index.php?url=' + enUrl,'',{});|||
      const url = html.split('"url": "')[1].split('",')[0];
      const $ = load(html);
      const textStr = $('meta[name="viewport"]').attr('id').replace('now_', '');
      const idStr = $('meta[charset="UTF-8"]').attr('id').replace('now_', '');
      let keyList = [];
      let sortedList = [];
      let keyStr = '';
      for (let index = 0; index < idStr.length; index++) {
          keyList.push({
              'id': idStr[index],
              'text': textStr[index]
          });
      }
      sortedList = keyList.sort((a, b)=> a.id - b.id);
      for (const item of sortedList) {
          keyStr += item.text;
      }
      const md5Key =md5(keyStr + '343985268');
      playUrl = aesDecode(url, md5Key.substring(16), md5Key.substring(0, 16));
    `
  }