function _0xe5e9(_0x69d124, _0x39a8b1) {
    const _0x383fb0 = _0x383f();
    return _0xe5e9 = function(_0xe5e930, _0x19ca14) {
        _0xe5e930 = _0xe5e930 - 0x1f1;
        let _0xd457bb = _0x383fb0[_0xe5e930];
        return _0xd457bb;
    }, _0xe5e9(_0x69d124, _0x39a8b1);
}
const _0x45a978 = _0xe5e9;
(function(_0x25152a, _0x16b962) {
    const _0x2fb24c = _0xe5e9,
        _0x58caba = _0x25152a();
    while (!![]) {
        try {
            const _0x327df8 = parseInt(_0x2fb24c(0x21e)) / 0x1 * (parseInt(_0x2fb24c(0x222)) / 0x2) + -parseInt(_0x2fb24c(0x226)) / 0x3 + parseInt(_0x2fb24c(0x225)) / 0x4 + parseInt(_0x2fb24c(0x1f3)) / 0x5 * (-parseInt(_0x2fb24c(0x204)) / 0x6) + -parseInt(_0x2fb24c(0x223)) / 0x7 * (parseInt(_0x2fb24c(0x221)) / 0x8) + parseInt(_0x2fb24c(0x1fe)) / 0x9 * (parseInt(_0x2fb24c(0x206)) / 0xa) + -parseInt(_0x2fb24c(0x203)) / 0xb;
            if (_0x327df8 === _0x16b962) break;
            else _0x58caba['push'](_0x58caba['shift']());
        } catch (_0x25d234) {
            _0x58caba['push'](_0x58caba['shift']());
        }
    }
}(_0x383f, 0x57775));
import _0x15a5b5 from 'assets://js/lib/cheerio.min.js';
import 'assets://js/lib/crypto-js.js';
const config = {
    'headers': {
        'user-agent': _0x45a978(0x1ff)
    },
    'player': {},
    'filter': {
        'movie': [{
            'key': 0x1,
            'name': '类别',
            'value': [{
                'n': '热门',
                'v': '热门'
            }, {
                'n': '最新',
                'v': '最新'
            }, {
                'n': '经典',
                'v': '经典'
            }, {
                'n': '华语',
                'v': '华语'
            }, {
                'n': '欧美',
                'v': '欧美'
            }, {
                'n': '韩国',
                'v': '韩国'
            }, {
                'n': '日本',
                'v': '日本'
            }, {
                'n': '动作',
                'v': '动作'
            }, {
                'n': '喜剧',
                'v': '喜剧'
            }, {
                'n': '爱情',
                'v': '爱情'
            }, {
                'n': '科幻',
                'v': '科幻'
            }, {
                'n': '悬疑',
                'v': '悬疑'
            }, {
                'n': '恐怖',
                'v': '恐怖'
            }, {
                'n': '成长',
                'v': '成长'
            }, {
                'n': _0x45a978(0x1f2),
                'v': _0x45a978(0x1f2)
            }, {
                'n': _0x45a978(0x21f),
                'v': _0x45a978(0x21f)
            }, {
                'n': _0x45a978(0x1f8),
                'v': _0x45a978(0x1f8)
            }]
        }],
        'tv': [{
            'key': 0x1,
            'name': '类别',
            'value': [{
                'n': '热门',
                'v': '热门'
            }, {
                'n': '美剧',
                'v': '美剧'
            }, {
                'n': '英剧',
                'v': '英剧'
            }, {
                'n': '韩剧',
                'v': '韩剧'
            }, {
                'n': '日剧',
                'v': '日剧'
            }, {
                'n': _0x45a978(0x228),
                'v': _0x45a978(0x228)
            }, {
                'n': '港剧',
                'v': '港剧'
            }, {
                'n': '动画',
                'v': _0x45a978(0x218)
            }, {
                'n': '综艺',
                'v': '综艺'
            }, {
                'n': _0x45a978(0x21d),
                'v': _0x45a978(0x21d)
            }]
        }]
    }
};

function init(_0x56f251) {
    const _0x5ab1ec = _0x45a978;
    console[_0x5ab1ec(0x1fc)](_0x5ab1ec(0x211)), console[_0x5ab1ec(0x1fc)](_0x56f251);
}

function home(_0x372eb0) {
    const _0x195258 = _0x45a978;
    let _0x54c004 = [],
        _0xfbf3c7 = {};
    _0x372eb0 && (_0xfbf3c7[_0x195258(0x229)] = config[_0x195258(0x215)]);
    let _0x2cd054 = {
        '电影': 'movie',
        '剧集': 'tv'
    };
    for (let _0x3b48b2 in _0x2cd054) {
        _0x54c004[_0x195258(0x200)]({
            'type_id': _0x2cd054[_0x3b48b2],
            'type_name': _0x3b48b2
        });
    }
    return _0xfbf3c7[_0x195258(0x208)] = _0x54c004, JSON[_0x195258(0x224)](_0xfbf3c7);
}

function homeVod() {
    const _0x4cb9fe = _0x45a978;
    let _0x4fcb23 = {},
        _0x4615c4 = [],
        _0x17b5a3 = req('https://www.ikanbot.com/', {
            'headers': config['headers']
        })['content'],
        _0x1a51e4 = _0x15a5b5[_0x4cb9fe(0x20e)](_0x17b5a3),
        _0x46e212 = _0x1a51e4('.row.list-wp\x20a');
    return _0x46e212[_0x4cb9fe(0x205)](function(_0x4d6dde) {
        const _0xdebc7c = _0x4cb9fe;
        _0x4615c4[_0xdebc7c(0x200)]({
            'vod_id': _0x1a51e4(this)[_0xdebc7c(0x20c)](_0xdebc7c(0x1f7))[_0xdebc7c(0x217)](_0xdebc7c(0x213), ''),
            'vod_name': _0x1a51e4('p', this)['text'](),
            'vod_pic': _0x1a51e4(_0xdebc7c(0x210), this)[_0xdebc7c(0x20c)](_0xdebc7c(0x21c)),
            'vod_remarks': ''
        });
    }), _0x4fcb23 = {
        'list': _0x4615c4
    }, JSON[_0x4cb9fe(0x224)](_0x4fcb23);
}

function _0x383f() {
    const _0x1a8fa9 = ['h5>a', 'data', 'attr', '.html', 'load', 'list', 'img', '路飞开始调试了！！！', '-p-', '/play/', 'https://www.ikanbot.com/search?q=', 'filter', 'url', 'replace', '日本动画', 'text', 'https://www.ikanbot.com/hot/index-', '.meta.celebrity', 'src', '纪录片', '10262ghxSts', '豆瓣Top250', '&mtype=1', '24HKsutB', '50eZDTHD', '107457QmIiJw', 'stringify', '2245620aDYnZy', '454797GdEqnt', 'parse', '国产剧', 'filters', '.row.list-wp\x20a', '.media', '豆瓣高分', '1335810oJzkiR', '.media-top\x20img', 'https://www.ikanbot.com/api/getResN?videoId=', 'length', 'href', '冷门佳片', '.result-info\x20img', 'vod_play_from', 'headers', 'log', '$$$', '425673QjcmLn', 'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/113.0.0.0\x20Safari/537.36', 'push', 'join', 'content', '1504481tdOiId', '6liJMzF', 'each', '30Smezsm', 'vod_play_url', 'class', '.meta.title'];
    _0x383f = function() {
        return _0x1a8fa9;
    };
    return _0x383f();
}

function category(_0x46b832, _0x3a8c8f, _0x417837, _0x181f0c) {
    const _0x2f2138 = _0x45a978;
    let _0x59c9bb = {},
        _0x4e97f6 = [],
        _0x5703c8 = '',
        _0x3347c9 = '';
    _0x3a8c8f = parseInt(_0x3a8c8f), console[_0x2f2138(0x1fc)](typeof _0x181f0c), console[_0x2f2138(0x1fc)](_0x181f0c);
    JSON[_0x2f2138(0x224)](_0x181f0c) != '{}' ? _0x5703c8 = _0x181f0c['1'] : _0x5703c8 = '热门';
    _0x3a8c8f == 0x1 ? _0x3347c9 = '' : _0x3347c9 = _0x2f2138(0x212) + _0x3a8c8f;
    let _0x12b3e2 = _0x2f2138(0x21a) + _0x46b832 + '-' + _0x5703c8 + _0x3347c9 + _0x2f2138(0x20d),
        _0x516c56 = req(_0x12b3e2, {
            'headers': config[_0x2f2138(0x1fb)]
        })[_0x2f2138(0x202)],
        _0x4593f7 = _0x15a5b5[_0x2f2138(0x20e)](_0x516c56),
        _0x42b263 = _0x4593f7(_0x2f2138(0x22a));
    return _0x42b263[_0x2f2138(0x205)](function(_0x137918) {
        const _0xbd319 = _0x2f2138;
        _0x4e97f6[_0xbd319(0x200)]({
            'vod_id': _0x4593f7(this)[_0xbd319(0x20c)](_0xbd319(0x1f7))['replace'](_0xbd319(0x213), ''),
            'vod_name': _0x4593f7('p', this)[_0xbd319(0x219)](),
            'vod_pic': _0x4593f7('img', this)['attr']('src'),
            'vod_remarks': ''
        });
    }), _0x59c9bb = {
        'list': _0x4e97f6,
        'page': parseInt(_0x3a8c8f),
        'pagecount': 0x3e7,
        'limit': 0x14,
        'total': 0x3e7
    }, console['log'](JSON[_0x2f2138(0x224)](_0x59c9bb)), JSON[_0x2f2138(0x224)](_0x59c9bb);
}

function search(_0x277fc2, _0x436221) {
    const _0x32815c = _0x45a978;
    console[_0x32815c(0x1fc)](_0x436221);
    let _0x3574c9 = {},
        _0x651c38 = [],
        _0x2dffd5 = req(_0x32815c(0x214) + _0x277fc2, {
            'headers': config[_0x32815c(0x1fb)]
        })[_0x32815c(0x202)],
        _0x10632f = _0x15a5b5[_0x32815c(0x20e)](_0x2dffd5),
        _0x295be2 = _0x10632f(_0x32815c(0x1f1));
    return _0x295be2[_0x32815c(0x205)](function(_0xdc5112) {
        const _0xb31028 = _0x32815c;
        _0x651c38[_0xb31028(0x200)]({
            'vod_id': _0x10632f(_0xb31028(0x20a), this)['attr'](_0xb31028(0x1f7))[_0xb31028(0x217)]('/play/', ''),
            'vod_name': _0x10632f('h5>a', this)[_0xb31028(0x219)](),
            'vod_pic': _0x10632f(_0xb31028(0x1f4), this)['attr']('src'),
            'vod_remarks': ''
        });
    }), _0x3574c9 = {
        'list': _0x651c38
    }, JSON['stringify'](_0x3574c9);
}

function detail(_0x2dfb58) {
    const _0x5a71a5 = _0x45a978;
    let _0x1681ea = {},
        _0x54d6a0 = [],
        _0x2bf0d7 = [],
        _0x489600 = req('https://www.ikanbot.com/play/' + _0x2dfb58, {
            'headers': config[_0x5a71a5(0x1fb)]
        })[_0x5a71a5(0x202)],
        _0x522be6 = _0x15a5b5[_0x5a71a5(0x20e)](_0x489600),
        _0xfdccb2 = {
            'vod_id': _0x2dfb58,
            'vod_name': _0x522be6(_0x5a71a5(0x209))[_0x5a71a5(0x219)](),
            'vod_pic': _0x522be6(_0x5a71a5(0x1f9))[_0x5a71a5(0x20c)](_0x5a71a5(0x21c)),
            'type_name': '',
            'vod_year': _0x522be6('.meta.year')[_0x5a71a5(0x219)](),
            'vod_area': _0x522be6('.meta.country')[_0x5a71a5(0x219)](),
            'vod_remarks': '',
            'vod_actor': '',
            'vod_director': _0x522be6(_0x5a71a5(0x21b))[_0x5a71a5(0x219)](),
            'vod_content': '',
            'vod_play_from': '',
            'vod_play_url': ''
        };
    _0x489600 = JSON[_0x5a71a5(0x227)](req(_0x5a71a5(0x1f5) + _0x2dfb58 + _0x5a71a5(0x220), {
        'headers': config[_0x5a71a5(0x1fb)]
    })[_0x5a71a5(0x202)]);
    for (let _0x435229 = 0x0; _0x435229 < _0x489600['data']['list'][_0x5a71a5(0x1f6)]; _0x435229++) {
        _0x54d6a0['push']('线路' + _0x435229);
    }
    for (let _0x43dc89 = 0x0; _0x43dc89 < _0x489600[_0x5a71a5(0x20b)]['list'][_0x5a71a5(0x1f6)]; _0x43dc89++) {
        let _0xc41763 = [],
            _0x458b30 = JSON['parse'](_0x489600[_0x5a71a5(0x20b)][_0x5a71a5(0x20f)][_0x43dc89]['resData']);
        for (let _0x109c27 = 0x0; _0x109c27 < _0x458b30[_0x5a71a5(0x1f6)]; _0x109c27++) {
            _0xc41763['push'](_0x458b30[_0x109c27][_0x5a71a5(0x216)]);
        }
        let _0x2ff019 = '#';
        _0x2ff019 = _0xc41763[_0x5a71a5(0x201)](_0x2ff019), _0x2bf0d7[_0x5a71a5(0x200)](_0x2ff019);
    }
    let _0x20184c = _0x2bf0d7['join']('$$$'),
        _0x3715ad = _0x54d6a0[_0x5a71a5(0x201)](_0x5a71a5(0x1fd));
    return _0xfdccb2[_0x5a71a5(0x1fa)] = _0x3715ad, _0xfdccb2[_0x5a71a5(0x207)] = _0x20184c, _0x1681ea = {
        'list': [_0xfdccb2]
    }, JSON[_0x5a71a5(0x224)](_0x1681ea);
}

function play(_0x2ba56d, _0x2baa07, _0x2d820c) {
    const _0x22e6ee = _0x45a978;
    let _0x5ac67a = {};
    return _0x5ac67a = {
        'parse': '1',
        'jx': '0',
        'headers': '',
        'playUrl': '',
        'url': _0x2baa07
    }, JSON[_0x22e6ee(0x224)](_0x5ac67a);
}
__JS_SPIDER__ = {
    'init': init,
    'home': home,
    'homeVod': homeVod,
    'category': category,
    'detail': detail,
    'play': play,
    'search': search
};