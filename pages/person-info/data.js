var iconList = [
  {
    imgUrl: '/images/person-info/card.png',
    text: '我的额度'
  },
  {
    imgUrl: '/images/person-info/manage-order.png',
    text: '我的账单'
  },
  {
    imgUrl: '/images/person-info/integral.png',
    text: '我的积分'
  }
  ,
  {
    imgUrl: '/images/person-info/template-default.png',
    text: '卡片管理'
  },
  {
    imgUrl: '/images/person-info/shuffling-banner.png',
    text: '我要办卡'
  },
  {
    imgUrl: '/images/person-info/history.png',
    text: '我要分期'
  }, 
  {
    imgUrl: '/images/person-info/personal-center.png',
    text: '我的权益'
  },
  {
    imgUrl: '/images/person-info/search.png',
    text: '进度查询'
  },
  {
    imgUrl: '/images/person-info/map.png',
    text: '附近优惠'
  }
];

var points = 3000;
var balance = 100000;
var limit = 200000;
var auth = ["消费", "取现", "分期"];
var cards = [];
var deallist = [];


module.exports = {
  iconList: iconList,
  points: points,
  balance: balance,
  limit: limit,
  auth: auth,
  cards: cards,
  deallist: deallist
}