var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.config.js
var index_config_exports = {};
__export(index_config_exports, {
  default: () => index_config_default
});
module.exports = __toCommonJS(index_config_exports);
var index_config_default = {
  kunyu77: {
    testcfg: {
      bbbb: "aaaaa"
    }
  },
  live: {
    contents: "",
    // https://gitee.com/galnt/cctv/raw/master/contents.txt,供参考,可以不添加
    url: [
      {
        name: "自有 ",
        url: "https://mirror.ghproxy.com/raw.githubusercontent.com/ssili126/tv/main/itvlist.m3u",
        index: "true"
      },
      {
        name: "优质源 ",
        url: "https://raw.gitmirror.com/wwb521/live/main/tv.txt",
        index: "false"
      }
    ]
  },
  ffm3u8: {
    url: "https://cj.ffzyapi.com/api.php/provide/vod/",
    categories: ["国产剧", "香港剧", "韩国剧", "欧美剧", "台湾剧", "日本剧", "海外剧", "泰国剧", "短剧", "动作片", "喜剧片", "爱情片", "科幻片", "恐怖片", "剧情片", "战争片", "动漫片", "大陆综艺", "港台综艺", "日韩综艺", "欧美综艺", "国产动漫", "日韩动漫", "欧美动漫", "港台动漫", "海外动漫", "记录片"]
  },
  yiso: {
    url: "https://yiso.fun",
    cookie: "satoken=e22c282a-5d98-47e7-a2b9-ab3af26004ca; cf_clearance=3vDgsYCxJVJgqSUSt9gsonvCsMyg_7T5rHhJpzwsaZA-1711673938-1.0.1.1-QVyroEPi7QbZleTfA7zQLcM4lkfdFdFPeX10r_6.IjAsJkmCtOTZh7XJhYHcs1z0Bm41Off5BBJHKIZ7eqyI8g; __vtins__JkIGvjjs25ETn0wz=%7B%22sid%22%3A%20%226820fd1f-4811-50df-8fb2-9914a044a0e6%22%2C%20%22vd%22%3A%203%2C%20%22stt%22%3A%2031208%2C%20%22dr%22%3A%209755%2C%20%22expires%22%3A%201711675727874%2C%20%22ct%22%3A%201711673927874%7D; __51vuft__JkIGvjjs25ETn0wz=1711673896672; __51vcke__JkIGvjjs25ETn0wz=0fc552c7-b63d-5ca0-b721-34cbb8886769; __51uvsct__JkIGvjjs25ETn0wz=1 ;JSESSIONID=2651393E7E8764D5156D3F755FFC438B"
  },
  wnlg: {
    url: "https://tv.yydsys.top"
  },
  ikanbot: {
    url: "https://www.imoviebot.com/"
  },
  czzy: {
    url: "https://cz01.vip"
  },
  libvio: {
    url: "https://libvio.app"
  },
  ttkx: {
    url: "http://www.ttkx.live:3328"
  },
  ysche: {
    url: "https://www.weixine.link/"
  },
  wogg: {
    url: "https://www.wogg.xyz"
  },
  wobg: {
    url: "https://wobge.run.goorm.io"
  },
  tudou: {
    url: "https://tudou.lvdoui.top"
  },
  xxpan: {
    url: "https://xpanpan.site"
  },
  pikaso: {
    //name: '皮卡资源',
    url: "https://www.pikaso.top"
  },
  appys: {
    bro: [
      {
        name: "零刻",
        url: "https://ys.51bro.cn/mogai_api.php/v1.vod",
        search: true
        //搜索开关 true开 false关
      }
    ],
    futv: [
      {
        name: "腐宅",
        url: "http://app.zhaifutvapp.com/ruifenglb_api.php/v1.vod",
        search: true
      }
    ],
    mjlnl: [
      {
        name: "聚焦",
        url: "https://www.mjlnl.cn/api.php/v1.vod",
        search: true
      }
    ],
    netflixdog: [
      {
        name: "飞狗",
        url: "https://netflixdog.club/api.php/app/",
        search: true
      }
    ],
    yingszj: [
      {
        name: "鑫鑫",
        url: "http://yingszj.xn--654a.cc/api.php/app/",
        search: true
      }
    ],
    ttmja: [
      {
        name: "天天",
        url: "https://www.ttmja.com/api.php/app/",
        search: true
      }
    ],
    netfly: [
      {
        name: "奈飞",
        url: "https://www.netfly.tv/api.php/app/",
        search: true
      }
    ]
  },
  bili: {
    categories: "经典无损音乐合集#帕梅拉#太极拳#健身#舞蹈#音乐#歌曲#MV4K#演唱会4K#白噪音4K#知名UP主#说案#解说#演讲#时事#探索发现超清#纪录片超清#沙雕动画#沙雕穿越#沙雕#平面设计教学#软件教程#实用教程#旅游#风景4K#食谱#美食超清#搞笑#球星#动物世界超清#相声小品#戏曲#儿童#小姐姐4K#热门#旅行探险",
    cookie: "buvid3=9886CA0B-AE64-32E4-666C-20794FE81A1468431infoc; bmg_af_switch=1; bmg_src_def_domain=i1.hdslb.com; buvid4=2C4320EB-492C-0D62-D3E8-B4BD015BF09470372-124011203-8JCnvIOF1fjkunIJHyAYKQ%2B8ZCFZAbf3jRD2zFYr%2Fmz%2B%2BRgODui9m%2FfZAtFaI1ig; b_lsid=64F181F6_18CFBC3EEA6; _uuid=C7A125C6-CF69-F8B6-1D62-ABAD2E3B72F671068infoc; b_nut=100; buvid_fp=d1ed6cce1c9fa70c0cd7fe52d853ec23; SESSDATA=d25aab69%2C1720583012%2Cb9d9b%2A11CjBxXG36TKbR8UoflU2QC7PZ7nG3FIipmiKJhoy78zwYDIj9ICD10Cq5X3baq8q4HccSVnp0TE5IcWg1bzdJYkRTaWNqdTJkeVF0bTdYTkFXQjBpckg5aHBSR3hQbTNaZzJXT2czc0J6RUxramZiMXRDZE9BZGxwMURnT0JEM1I2a2xHTkJLcXZRIIEC; bili_jct=b2acff73ee2ae535253913d41927a51d; DedeUserID=1434816991; DedeUserID__ckMd5=1e33fe08c3f018cd; sid=8i2kamd6"
  },
  m3u8cj: {
    lzm3u8: [
      {
        name: "量子",
        url: "https://cj.lziapi.com/api.php/provide/vod/from/lzm3u8/",
        categories: ["动作片", "爱情片", "喜剧片", "科幻片", "恐怖片", "剧情片", "战争片", "短剧", "国产剧", "欧美剧", "香港剧", "韩国剧", "日本剧", "台湾剧", "海外剧", "泰国剧", "国产动漫", "日韩动漫", "欧美动漫", "港台动漫", "海外动漫", "大陆综艺", "港台综艺", "日韩综艺", "欧美综艺", "记录片", "足球", "篮球", "网球", "斯诺克"],
        search: true
        //搜索开关 true开 false关
      }
    ],
    kczyapi: [
      {
        name: "快车",
        url: "https://caiji.kczyapi.com/api.php/provide/vod/",
        categories: ["国产剧", "战争片", "动作片", "香港剧"],
        search: true
      }
    ],
    collect: [
      {
        name: "卧龙",
        url: "https://collect.wolongzyw.com/api.php/provide/vod/",
        categories: ["国产剧", "香港剧", "恐怖片", "动作片"],
        search: true
      }
    ],
    guangsu: [
      {
        name: "光速",
        url: "https://api.guangsuapi.com/api.php/provide/vod/",
        categories: ["大陆剧", "港澳剧", "综艺", "动漫"],
        search: true
      }
    ],
    sdzy: [
      {
        name: "闪电",
        url: "http://sdzyapi.com/api.php/provide/vod/",
        categories: ["短剧", "电影", "电视剧", "综艺", "综艺", "动漫", "动作片", "喜剧片", "爱情片", "科幻片", "恐怖片", "剧情片", "战争片", "国产剧", "欧美剧", "韩剧", "日剧", "港剧", "台剧", "泰剧", "记录片", "悬疑片", "犯罪片", "海外剧", "大陆综艺", "日韩综艺", "港台综艺", "欧美综艺", "国产动漫", "日韩动漫", "欧美动漫", "冒险片", "动画片", "惊悚片", "奇幻片", "港台动漫", "海外动漫", "演唱会", "体育赛事"],
        search: true
      }
    ],
    ysand: [
      {
        name: "业余",
        url: "http://ys.540734621.xyz/api.php/provide/vod/",
        categories: ["短剧", "电影", "电视剧", "动漫", "综艺", "记录片", "体育"],
        search: true
      }
    ],
    zyw: [
      {
        name: "治愈",
        url: "https://49zyw.com/api.php/provide/vod/",
        categories: ["国产剧", "短剧", "欧美剧", "香港剧", "动作片", "爱情片", "科幻片", "恐怖片", "剧情片", "战争片", "喜剧片", "动画片", "犯罪片", "奇幻片", "灾难片", "悬疑片", "其他片", "韩国剧", "台湾剧", "泰国剧", "日剧", "大陆综艺", "港台综艺", "日韩综艺", "欧美综艺", "国产动漫", "日本动漫", "欧美动漫", "海外动漫", "电影解说", "体育赛事", "海外剧", "纪录片"],
        search: true
      }
    ],
    bfm3u8: [
      {
        name: "暴风",
        url: "https://bfzyapi.com/api.php/provide/vod/",
        categories: ["国产剧", "韩国剧", "欧美剧", "日本剧", "香港剧", "台湾剧", "海外剧", "泰国剧", "纪录片", "动画片", "动漫片", "国产动漫", "日韩动漫", "欧美动漫", "港台动漫", "海外动漫", "动作片", "喜剧片", "恐怖片", "科幻片", "爱情片", "剧情片", "战争片", "大陆综艺", "港台综艺", "日韩综艺", "欧美综艺"],
        search: true
      }
    ],
    xlm3u8: [
      {
        name: "新浪",
        url: "https://api.xinlangapi.com/xinlangapi.php/provide/vod/from/xlm3u8/",
        categories: ["动作片", "爱情片", "喜剧片", "科幻片", "恐怖片", "剧情片", "战争片", "动漫电影", "短剧", "大陆剧", "欧美剧", "港澳剧", "韩剧", "日剧", "台湾剧", "泰剧", "动漫", "综艺", "纪录片", "体育"],
        search: true
      }
    ],
    zykum3u8: [
      {
        name: "1080",
        url: "https://api.1080zyku.com/inc/api_mac10.php",
        categories: ["短剧", "音乐", "搞笑", "国产剧", "香港剧", "韩国剧", "欧美剧", "台湾剧", "日本剧", "海外剧", "泰国剧", "动作片", "喜剧片", "爱情片", "科幻片", "恐怖片", "剧情片", "战争片", "动画片", "大陆综艺", "港台综艺", "日韩综艺", "欧美综艺", "国产动漫", "日韩动漫", "欧美动漫", "港台动漫", "海外动漫", "记录片"],
        search: true
      }
    ],
    baidu: [
      {
        name: "百度",
        url: "https://api.apibdzy.com/api.php/provide/vod/from/dbm3u8/",
        categories: ["动作片", "喜剧片", "爱情片", "科幻片", "恐怖片", "剧情片", "战争片", "国产剧", "欧美剧", "韩剧", "日剧", "港剧", "台剧", "泰剧", "海外剧", "纪录片", "大陆综艺", "日韩综艺", "港台综艺", "欧美综艺", "国产动漫", "日韩动漫", "欧美动漫", "动画片", "港台动漫", "海外动漫", "悬疑片", "邵氏电影", "电影资讯", "明星资讯", "预告片"],
        search: true
      }
    ],
    hhm3u8: [
      {
        name: "火狐",
        url: "https://hhzyapi.com/api.php/provide/vod/from/hhm3u8/",
        categories: ["动作片", "爱情片", "喜剧片", "科幻片", "恐怖片", "剧情片", "战争片", "灾难片", "悬疑片", "犯罪片", "奇幻片", "短剧", "内地剧", "欧美剧", "香港剧", "韩剧", "日剧", "马泰剧", "中国动漫", "日本动漫", "欧美动漫", "欧美动漫", "大陆综艺", "港台综艺", "日韩综艺", "欧美综艺", "记录片"],
        search: true
      }
    ],
    hnm3u8: [
      {
        name: "红牛",
        url: "https://www.hongniuzy2.com/api.php/provide/vod/from/hnm3u8/",
        categories: ["动作片", "爱情片", "喜剧片", "科幻片", "恐怖片", "剧情片", "战争片", "动漫电影", "短剧", "国产剧", "欧美剧", "港澳剧", "韩剧", "日剧", "台湾剧", "泰剧", "动漫", "综艺", "纪录片", "体育赛事"],
        search: true
      }
    ],
    kuaikan: [
      {
        name: "快看",
        url: "https://kuaikan-api.com/api.php/provide/vod/from/kuaikan/",
        categories: ["网络电影", "惊悚片", "犯罪片", "灾难片", "悬疑片", "爱情片", "喜剧片", "奇幻片", "恐怖片", "剧情片", "战争片", "动作片", "冒险片", "动画电影", "热门短剧", "国产剧", "欧美剧", "港台剧", "韩国剧", "日本剧", "台剧", "泰剧", "国产动漫", "日本动漫", "欧美动漫", "港台动漫", "韩国动漫", "国产综艺", "日本综艺", "港台综艺", "欧美综艺", "韩国综艺", "纪录片", "电影解说"],
        search: true
      }
    ],
    snm3u8: [
      {
        name: "索尼",
        url: "https://suoniapi.com/api.php/provide/vod/from/snm3u8/",
        categories: ["动作片", "喜剧片", "爱情片", "科幻片", "恐怖片", "剧情片", "战争片", "国产剧", "欧美剧", "韩剧", "日剧", "港剧", "台剧", "泰剧", "纪录片", "海外剧", "大陆综艺", "日韩综艺", "港台综艺", "欧美综艺", "国产动漫", "日韩动漫", "欧美动漫", "动画片", "港台动漫", "海外动漫", "演唱会", "体育赛事", "篮球", "足球", "预告片", "斯诺克", "影视解说", "爽文短剧", "伦理", "港台三级", "韩国伦理", "西方伦理", "日本伦理", "两性课堂", "写真热舞", "4K电影"],
        search: true
      }
    ],
    wjm3u8: [
      {
        name: "无尽",
        url: "https://api.wujinapi.me/api.php/provide/vod/from/wjm3u8/",
        categories: ["动作片", "爱情片", "喜剧片", "科幻片", "恐怖片", "剧情片", "战争片", "悬疑片", "动画片", "犯罪片", "奇幻片", "邵氏电影", "短剧", "国产剧", "美国剧", "香港剧", "韩国剧", "日本剧", "台湾剧", "泰剧", "海外剧", "国产动漫", "日韩动漫", "欧美动漫", "大陆综艺", "日韩综艺", "港台综艺", "欧美综艺", "体育赛事", "影视解说"],
        search: true
      }
    ]
  },
  ali: {
    token: "415b071e0e2b4409bcee51c43edab6b5",
    token280: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI1MWZlZGZmN2NhOTY0ZGE4YTUzOTg1YWNlNzExNWQzNSIsImF1ZCI6IjczZTYxMTgzMWE3YzRkODdhYzQ5Yzg0ODFiZjlmMmM0IiwiZXhwIjoxNzIwMjM0Mjg5LCJpYXQiOjE3MTI0NTgyODksImp0aSI6ImE5OWFlZDk4OWY1ZDQ5MDA5ZTdhZjgzMmUyNTZiMDZhIn0.eHU8O8y_69Yo_SNeszqFyH_TwDAhzACGil9sERUPbuV53wFUvy2dsIOAlfgKXe7Hf4keaqxyhmgUf4AFzjuQ8A"
  },
  quark: {
    cookie: "ctoken=LYEi7Q38pritAe1-eP4Bvbd5; grey-id=37b646e3-770e-2e46-573f-7daef5acf74b; grey-id.sig=G78F4wrga87dPNC8KsPmhKB3CZ3qQhOOgFCJ8TrZSC4; isQuark=true; isQuark.sig=hUgqObykqFom5Y09bll94T1sS9abT1X-4Df_lzgl8nM; b-user-id=161f86ef-6f37-a3e6-e6b8-b2de1b4a4897; __wpkreporterwid_=9eed96ea-9865-4497-b908-32913c107415; __uid=AASpGHivUa9W8ZxsNnqEIbmi; __puus=a077527802282c0a39ad89d1ce7f493aAAThGiDjNF+736WFi6CAEFPUT4gpkirMEOwq+uOHNDYTiDP+ZqN/iKQG8NN+ydRSjK4oCthIG+YTRe8P0LMggoMdm4B0wOeDuLmCZx1TY9clqN8WzBGTanNMma0poPrz1puyt3D1aCZFmS/g0+7PgEv87SW2n9dy1cPAgihM6N4Aes1RvJGTrhGedLQeV8E7Z44sUHysAmCXuEIuf7KeVSFt; __pus=371fa853fda477bcf9a58b56ad2b566bAAS64dEUZuxHaXy9JnL3DO2PHW7IJEQuo392qzPBhifFp467kncdQrIy5pLcmdH63bJvK+pwfkQ5qO5dz+1FF5KD; __ktd=3vIciIgI3jK3zyKkQu8OqA==; __kps=AASpGHivUa9W8ZxsNnqEIbmi; __kp=9a5edcf0-e1c1-11ee-bcf8-6953db77feb5; __itrace_wid=3418e2f1-657d-40cf-9acf-5155b928dd17; _UP_TS_=sg148adf1aa8ee439d3a4e863585a906fe9; _UP_TG_=st9636201bcz1ko3rzvd28p8cs3jdykt; _UP_F7E_8D_=%2BayopBMZQEdqpbViOQXZ8pWwAsSGsVzdGUOU%2BWEa1%2FCQ9pt%2Flxcgspx%2F7jdZxm88%2BDZR%2F3OCavVVlSrlA%2FHE35guhUiWeFXSFrpiz7iQup7LB%2BL83Dn0lIDh36hnRcflW%2FQJYV4NNTsN3RU4rAGaIWVGGDJBj1fWLbPeoOdhK0F%2B4CVxwd%2BA5kyclW53hcuTOm0qJXeruCvAParmPDSUuJ8DXfCIiS7blk%2FjdrdOvWliOFV6pvxddIInCxl1g1C0s1YxLzJs52lWdoIk19nvWfytP81cJKxfv1GfwBTrR0bS%2FBGt91fGhZMwyZvOKbU%2F8ZkbgrGvmwxqzivluzXqQHrmHUwax9fVlczEGdRq2nJkSi56LgyDrXpsyYdGYA0F4Cj%2Fntr80vkUTca5E0LqLcBEt4UN6jDY; _UP_E37_B7_=sg148adf1aa8ee439d3a4e863585a906fe9; _UP_D_=pc; _UP_A4A_11_=wb963166fdb0441ba8a78ea221c15962; _UP_335_2B_=1; _UP_30C_6A_=st9636201bcz1ko3rzvd28p8cs3jdykt;"
  },
  alist: [
    {
      name: "🐉神族九帝",
      server: "https://alist.shenzjd.com"
    },
    {
      name: "💢repl",
      server: "https://ali.liucn.repl.co"
    },
    {
      name: "🦆鸭鸭",
      server: "http: //shicheng.wang:555/"
    },
    {
      name: "小新",
      server: "https://pan.cdnxin.top/"
    }
  ],
  color: [
    {
      light: {
        bg: "https://i2.100024.xyz/2024/03/29/fsqaxo.webp",
        bgMask: "0x50ffffff",
        primary: "0xff446732",
        onPrimary: "0xffffffff",
        primaryContainer: "0xffc5efab",
        onPrimaryContainer: "0xff072100",
        secondary: "0xff55624c",
        onSecondary: "0xffffffff",
        secondaryContainer: "0xffd9e7cb",
        onSecondaryContainer: "0xff131f0d",
        tertiary: "0xff386666",
        onTertiary: "0xffffffff",
        tertiaryContainer: "0xffbbebec",
        onTertiaryContainer: "0xff002020",
        error: "0xffba1a1a",
        onError: "0xffffffff",
        errorContainer: "0xffffdad6",
        onErrorContainer: "0xff410002",
        background: "0xfff8faf0",
        onBackground: "0xff191d16",
        surface: "0xfff8faf0",
        onSurface: "0xff191d16",
        surfaceVariant: "0xffe0e4d6",
        onSurfaceVariant: "0xff191d16",
        inverseSurface: "0xff2e312b",
        inverseOnSurface: "0xfff0f2e7",
        outline: "0xff74796d",
        outlineVariant: "0xffc3c8bb",
        shadow: "0xff000000",
        scrim: "0xff000000",
        inversePrimary: "0xffaad291",
        surfaceTint: "0xff446732"
      },
      dark: {
        bg: "https://i2.100024.xyz/2024/03/29/fsqax8.webp",
        bgMask: "0x50000000",
        primary: "0xffaad291",
        onPrimary: "0xff173807",
        primaryContainer: "0xff2d4f1c",
        onPrimaryContainer: "0xffc5efab",
        secondary: "0xffbdcbb0",
        onSecondary: "0xff283420",
        secondaryContainer: "0xff3e4a35",
        onSecondaryContainer: "0xffd9e7cb",
        tertiary: "0xffa0cfcf",
        onTertiary: "0xff003738",
        tertiaryContainer: "0xff1e4e4e",
        onTertiaryContainer: "0xffbbebec",
        error: "0xffffb4ab",
        onError: "0xff690005",
        errorContainer: "0xff93000a",
        onErrorContainer: "0xffffdad6",
        background: "0xff11140e",
        onBackground: "0xffe1e4d9",
        surface: "0xff11140e",
        onSurface: "0xffe1e4d9",
        surfaceVariant: "0xff43483e",
        onSurfaceVariant: "0xffe1e4d9",
        inverseSurface: "0xffe1e4d9",
        inverseOnSurface: "0xff2e312b",
        outline: "0xff8d9286",
        outlineVariant: "0xff43483e",
        shadow: "0xff000000",
        scrim: "0xff000000",
        inversePrimary: "0xff446732",
        surfaceTint: "0xffaad291"
      }
    },
    {
      light: {
        bg: "https://i2.100024.xyz/2024/03/29/fsqax8.webp",
        bgMask: "0x50ffffff",
        primary: "0xff666014",
        onPrimary: "0xffffffff",
        primaryContainer: "0xffeee58c",
        onPrimaryContainer: "0xff1f1c00",
        secondary: "0xff625f42",
        onSecondary: "0xffffffff",
        secondaryContainer: "0xffe9e4be",
        onSecondaryContainer: "0xff1e1c05",
        tertiary: "0xff3f6654",
        onTertiary: "0xffffffff",
        tertiaryContainer: "0xffc1ecd5",
        onTertiaryContainer: "0xff002114",
        error: "0xffba1a1a",
        onError: "0xffffffff",
        errorContainer: "0xffffdad6",
        onErrorContainer: "0xff410002",
        background: "0xfffef9eb",
        onBackground: "0xff1d1c14",
        surface: "0xfffef9eb",
        onSurface: "0xff1d1c14",
        surfaceVariant: "0xffe7e3d0",
        onSurfaceVariant: "0xff1d1c14",
        inverseSurface: "0xff323128",
        inverseOnSurface: "0xfff5f1e3",
        outline: "0xff7a7768",
        outlineVariant: "0xffcbc7b5",
        shadow: "0xff000000",
        scrim: "0xff000000",
        inversePrimary: "0xffd1c973",
        surfaceTint: "0xff666014"
      },
      dark: {
        bg: "https://i2.100024.xyz/2024/03/29/fsqaxo.webp",
        bgMask: "0x50000000",
        primary: "0xffd1c973",
        onPrimary: "0xff353100",
        primaryContainer: "0xff4d4800",
        onPrimaryContainer: "0xffeee58c",
        secondary: "0xffcdc8a3",
        onSecondary: "0xff333117",
        secondaryContainer: "0xff4a482c",
        onSecondaryContainer: "0xffe9e4be",
        tertiary: "0xffa6d0b9",
        onTertiary: "0xff0e3727",
        tertiaryContainer: "0xff274e3d",
        onTertiaryContainer: "0xffc1ecd5",
        error: "0xffffb4ab",
        onError: "0xff690005",
        errorContainer: "0xff93000a",
        onErrorContainer: "0xffffdad6",
        background: "0xff14140c",
        onBackground: "0xffe7e2d5",
        surface: "0xff14140c",
        onSurface: "0xffe7e2d5",
        surfaceVariant: "0xff49473a",
        onSurfaceVariant: "0xffe7e2d5",
        inverseSurface: "0xffe7e2d5",
        inverseOnSurface: "0xff323128",
        outline: "0xff949181",
        outlineVariant: "0xff49473a",
        shadow: "0xff000000",
        scrim: "0xff000000",
        inversePrimary: "0xff666014",
        surfaceTint: "0xffd1c973"
      }
    },
    {
      light: {
        bg: "https://i2.100024.xyz/2024/01/13/qrnuwt.webp",
        bgMask: "0x50ffffff",
        primary: "0xFF2B6C00",
        onPrimary: "0xFFFFFFFF",
        primaryContainer: "0xFFA6F779",
        onPrimaryContainer: "0xFF082100",
        secondary: "0xFF55624C",
        onSecondary: "0xFFFFFFFF",
        secondaryContainer: "0xFFD9E7CA",
        onSecondaryContainer: "0xFF131F0D",
        tertiary: "0xFF386666",
        onTertiary: "0xFFFFFFFF",
        tertiaryContainer: "0xFFBBEBEB",
        onTertiaryContainer: "0xFF002020",
        error: "0xFFBA1A1A",
        onError: "0xFFFFFFFF",
        errorContainer: "0xFFFFDAD6",
        onErrorContainer: "0xFF410002",
        background: "0xFFFDFDF5",
        onBackground: "0xFF1A1C18",
        surface: "0xFFFDFDF5",
        onSurface: "0xFF1A1C18",
        surfaceVariant: "0xFFE0E4D6",
        onSurfaceVariant: "0xFF1A1C18",
        inverseSurface: "0xFF2F312C",
        onInverseSurface: "0xFFF1F1EA",
        outline: "0xFF74796D",
        outlineVariant: "0xFFC3C8BB",
        shadow: "0xFF000000",
        scrim: "0xFF000000",
        inversePrimary: "0xFF8CDA60",
        surfaceTint: "0xFF2B6C00"
      },
      dark: {
        bg: "https://i2.100024.xyz/2024/01/13/qrc37o.webp",
        bgMask: "0x50000000",
        primary: "0xFF8CDA60",
        onPrimary: "0xFF133800",
        primaryContainer: "0xFF1F5100",
        onPrimaryContainer: "0xFFA6F779",
        secondary: "0xFFBDCBAF",
        onSecondary: "0xFF283420",
        secondaryContainer: "0xFF3E4A35",
        onSecondaryContainer: "0xFFD9E7CA",
        tertiary: "0xFFA0CFCF",
        onTertiary: "0xFF003737",
        tertiaryContainer: "0xFF1E4E4E",
        onTertiaryContainer: "0xFFBBEBEB",
        error: "0xFFFFB4AB",
        errorContainer: "0xFF93000A",
        onError: "0xFF690005",
        onErrorContainer: "0xFFFFDAD6",
        background: "0xFF1A1C18",
        onBackground: "0xFFE3E3DC",
        outline: "0xFF8D9286",
        onInverseSurface: "0xFF1A1C18",
        inverseSurface: "0xFFE3E3DC",
        inversePrimary: "0xFF2B6C00",
        shadow: "0xFF000000",
        surfaceTint: "0xFF8CDA60",
        outlineVariant: "0xFF43483E",
        scrim: "0xFF000000",
        surface: "0xFF1A1C18",
        onSurface: "0xFFC7C7C0",
        surfaceVariant: "0xFF43483E",
        onSurfaceVariant: "0xFFC7C7C0"
      }
    }
  ]
};
