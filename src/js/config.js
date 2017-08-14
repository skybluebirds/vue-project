'use strict';

const domain = 'http://139.199.192.48:8888';
export default {
    domain,
    swipeUrl: domain + '/api/getlunbo',
    newsListUrl: domain + '/api/getnewslist',
    newsDetailsUrl: domain + '/api/getnew/',
    commentPut: domain + '/api/postcomment/',
    commentGet: domain +'/api/getcomments/',
}