'use strict';

const domain = 'http://139.199.192.48:8888';

export default { 
    imgDomain : "http://ofv795nmp.bkt.clouddn.com/",
    domain,
    swipeUrl: domain + '/api/getlunbo',
    newsListUrl: domain + '/api/getnewslist',
    newsDetailsUrl: domain + '/api/getnew/',
    commentPut: domain + '/api/postcomment/',
    commentGet: domain + '/api/getcomments/',
    photoCatagory: domain + '/api/getimgcategory',   //图片分类数据
    photoImages: domain + '/api/getimages/',        //图片列表数据
    imagesInfo: domain + '/api/getimageInfo/',        //图片列表数据
    thumsimages:domain + '/api/getthumimages/'      //图片缩略图
}