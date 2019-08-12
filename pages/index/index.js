//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    goods: [],
    bads: [],
  },
  restaurants: [{
      name: '沙县小吃',
      good: '鸡腿尺寸爆击',
      bad: '又 low 又没品'
    },
    {
      name: '山寨沙县',
      good: '近是真理',
      bad: '比沙县还没追求'
    },
    {
      name: '木桶饭',
      good: '番茄牛腩炒鸡下饭',
      bad: '人家主营麻辣烫好吗？'
    },
    {
      name: '重庆小面（西城纪）',
      good: '抄手好吃',
      bad: '不要总想着去小面吃抄手'
    },
    {
      name: '淮南牛肉汤（西斗门很里面那家）',
      good: '分量十足',
      bad: '人有点多'
    },
    {
      name: '骨头饭',
      good: '人少，味道不错',
      bad: '只有骨头饭，没有副业'
    },
    {
      name: '大娘水饺',
      good: '分量足，味道好',
      bad: '这个点去没位置了'
    },
    {
      name: '老娘舅',
      good: '标准化快餐不折腾',
      bad: '菜品太少了'
    },
    {
      name: '开封菜',
      good: '炸鸡！可乐！还在等什么！',
      bad: '找个秤上去看看再组织你的想法'
    },
    {
      name: '金拱门',
      good: '这周的肥宅快乐餐额度还没用',
      bad: '汉堡一时爽，减肥火葬场'
    },
    {
      name: '忆陕西',
      good: '下楼就是，懒得走',
      bad: '虽然换老板了但还是不想去啊'
    },
    {
      name: '亳状元',
      good: '店面扩大了',
      bad: '问就是不认识字'
    },
    {
      name: '一笼一蒸',
      good: '馄饨烧卖荷叶饭都不错',
      bad: '今天不想走路'
    },
  ],
  getRandomBase: function() {
    const today = new Date();
    return today.getFullYear() * 10000 + today.getMonth() * 100 + today.getDate();
  },
  getRandom: function(seed, skip) {
    let n = seed % 49999;
    for (let i = 0; i < 55 + skip; ++i) {
      n *= n;
      n %= 49999;
    }
    return n;
  },
  restaurants_used: {},
  genSuggestion: function(num) {
    let index = 0;
    let ret = [];
    for (let i = 0; i < num; ++i) {
      let round = 0;
      do {
        index = this.getRandom(this.getRandomBase(), round) % this.restaurants.length;
        round ++;
      } while (index in this.restaurants_used);
      ret.push(this.restaurants[index]);
      this.restaurants_used[index] = 1;
    }
    return ret;
  },
  onLoad: function () {
    console.log('load');
    const goods = this.genSuggestion(2);
    const bads = this.genSuggestion(2);
    this.setData({
      goods: goods,
      bads: bads,
    })
  }
})