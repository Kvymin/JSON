rule = {
    host: 'http://dsakf23665.com/api.php',
    homeJS: `
      let reqUrl = HOST + '/v1.home/types';
      request(reqUrl);|||
      let json = JSON.parse(html).data.types;
      json.forEach(item => {
        classes.push({
          type_id: item.type_id,
          type_name: item.type_name,
        });
      });
    `,
    homeVodJS: `
      let json = JSON.parse(html).data.types;
      json.forEach(item => {
        videos = videos.concat(item.data.banners);
      });
    `,
    categoryVodJS: `
      request(HOST + '/v1.classify/content', {type_id: classId, page: page, limit: 20}, '', 'post');|||
      videos = JSON.parse(html).data.video_list;
    `,
    detailVodJS: `
      request(HOST + '/v1.player/details?vod_id=' + input);|||
      let detail = JSON.parse(html).data.detail;
      let playFrom = [];
      let playUrl = [];
      detail.play_url_list.forEach(item => {
       playFrom.push(item.show);
       flagParse[item.show] = item.parse;
       playUrl.push(
          _.map(item.urls, v => {
            return v.name + '$' + v.url;
          }).join('#')
        );
      });
      videos.push({
        vod_id: detail.vod_id,
        vod_name: detail.vod_name,
        vod_pic: detail.vod_pic,
        vod_remarks: detail.vod_remarks,
        vod_actor: detail.vod_actor,
        vod_director: detail.vod_director,
        vod_area: detail.vod_area,
        vod_year: detail.vod_year,
        vod_play_from: playFrom.join('$$$'),
        vod_play_url: playUrl.join('$$$'),
        vod_content: detail.vod_content,
      });
    `,
    lazy: `
      playUrl = flagParse[playFlag] + input;
      request(playUrl);|||
      if(flagParse[playFlag].length > 0) {
        let json = JSON.parse(html);
        playUrl = json.url;
      }
    `,
    searchVodJS: `
      request(HOST + '/v1.search/data?wd=' + input);|||
      let json = JSON.parse(html).data.search_data;
      json.forEach(item => {
        videos.push({
          vod_id: item.vod_id,
          vod_name: item.vod_name,
          vod_pic: item.vod_pic,
        });
      });`
  }