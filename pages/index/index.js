var prase = [
  { id: 0,  content: 'a great many' },
  { id: 1,  content: 'come along' },
  { id: 2,  content: 'hand in hand' },
  { id: 3,  content: 'have sth. at heart' },
  { id: 4,  content: 'in contrast' },
  { id: 5,  content: 'of one’s choice' },
  { id: 6,  content: 'be apt to do sth' },
  { id: 7,  content: 'be confronted with' },
  { id: 8,  content: 'in a(n) … light' },
  { id: 9,  content: 'in the grip of' },
  { id: 10, content: 'in the meantime' },
  { id: 11, content: 'run for' },
  { id: 12, content: 'at the thought' },
  { id: 13, content: 'choose to do sth' },
  { id: 14, content: 'escape sb’s notice' },
  { id: 15, content: 'jump to one’s feet' },
  { id: 16, content: 'now and again' },
  { id: 17, content: 'rest assured (that)' },
  { id: 18, content: 'set off' },
  { id: 19, content: 'slowly but surely' },
  { id: 20, content: 'cast a spell on' },
  { id: 21, content: 'in place of' },
  { id: 22, content: 'put an end to sth' },
  { id: 23, content: 'after all' },
  { id: 24, content: 'all too often' },
  { id: 25, content: 'cope with' },
  { id: 26, content: 'doze off' },
  { id: 27, content: 'in case of' },
  { id: 28, content: 'in the long run' },
  { id: 29, content: 'look on…as…' },
  { id: 30, content: 'on a daily basis' },
  { id: 31, content: 'take…into consideration' },
  { id: 32, content: 'work out' },
  { id: 33, content: 'all at once' },
  { id: 34, content: 'catch sight of' },
  { id: 35, content: 'hang on to' },
  { id: 36, content: 'in place' },
  { id: 37, content: 'in the presence of' },
  { id: 38, content: 'kill time' },
  { id: 39, content: 'rip off' },
  { id: 40, content: 'trip (sb.) up' },
  { id: 41, content: 'at stake ' },
  { id: 42, content: 'every so often' },
  { id: 43, content: 'seize on' },
  { id: 44, content: 'take stock (of sth)' },
  { id: 45, content: 'wishful thinking' },
  { id: 46, content: 'meet with' },
  { id: 47, content: 'on the spot' },
  { id: 48, content: 'weigh…against…' },
  { id: 49, content: 'at the close of' },
  { id: 50, content: 'at the first opportunity' },
  { id: 51, content: 'give birth to' },
  { id: 52, content: 'in time' },
  { id: 53, content: 'live over' },
  { id: 54, content: 'long for' },
  { id: 55, content: 'prey on/upon' },
  { id: 56, content: 'shut … in' },
  { id: 57, content: 'sweep away' },
  { id: 58, content: 'to and fro' },
  { id: 59, content: 'get in the way of' },
  { id: 60, content: 'offend one’s eye' },
  { id: 61, content: 'sort…into' },
  { id: 62, content: 'sort out' },
  { id: 63, content: 'take…for…' },
  { id: 64, content: 'there is no point doing sth.' }
],
sentence = [
  { id: 0, content: '黄山以其日出和云海著称。' },
  { id: 1, content: '长江流经多种不同的生态系统。' },
  { id: 2, content: '长江是诸多濒危物种的栖息地。' },
  { id: 3, content: '珠江三角洲是主要经济区域和制造中心。' },
  { id: 4, content: '中国文化中，红色通常象征着好运与长寿。' },
  { id: 5, content: '封建社会中，黄色象征统治者的权力和权威。' },
  { id: 6, content: '武术的起源可以追溯到中国古代的军事训练。' },
  { id: 7, content: '古老水镇—乌镇，坐落在大运河畔。' },
  { id: 8, content: '丽江古镇被视为爱情和浪漫的天堂。' },
  { id: 9, content: '中国是世界上最大的出口国，正在吸引大量外国投资。' },
  { id: 10, content: '在我国，人们通常以大米为主食。 ' },
  { id: 11, content: '因其数量极少，大熊猫已被列为濒危物种。' },
  { id: 12, content: '年轻人通过旅行体验不同的文化、丰富知识、拓宽视野。' },
  { id: 13, content: '唐代是中国古典诗歌发展的全盛时期。' },
  { id: 14, content: '中国人过生日吃面条寓意长寿。' },
  { id: 15, content: '中国人把绘画和书法视为姐妹艺术。' },
  { id: 16, content: '道家思想对中医和茶道都有巨大影响。' },
  { id: 17, content: '中餐不仅色、香、味俱全，而且种类繁多。' },
  { id: 18, content: '舞龙舞狮是在中国广受欢迎的传统民间习俗。' },
  { id: 19, content: '说、学、逗、唱是相声表演的基本技能。' },
  { id: 20, content: '通过丝绸之路，中国古代的四大发明被引介到世界各地。' },
  { id: 21, content: '通过阅读，人们能更好地学会感恩、有责任心和与人合作。' },
  { id: 22, content: '学而不思则罔，思而不学则殆' },
  { id: 23, content: '绿水青山就是金山银山。' },
  { id: 24, content: ' “一带一路”是合作共赢之路。 ' },
  { id: 25, content: '青年一代有理想、有本领、有担当，国家才有前途。' },
  { id: 26, content: '西湖十景代表西湖胜景精华。' },
  { id: 27, content: '杭州这座城市八千年来辉煌相续，魅力独特。' },
  { id: 28, content: '京杭大运河是人类利用和改造自然的杰作。' },
  { id: 29, content: '电子商务改变了亿万人的购买和支付方式。' },
];
var SetTime = 36, time, timer;

Page({

  data: {
    hasStart: 0,
    stop: '暂停',
    prase: prase,
    sentence: sentence
  },

  timer(isStop, auto) {
    if (time < 0) time = 0;
    if (isStop <= 0) {
      wx.setNavigationBarTitle({ title: '计时结束' })
      wx.showModal({
        content: '时间到了哦~',
        cancelText: '再看一会',
        confirmText: '下一组',
        success: res => {
          if (res.confirm) {
            time = SetTime;
            this.init();
          }
        }
      })
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        wx.setNavigationBarTitle({ title: '剩余时间：' + time.toString() + '秒' })
        this.timer(time--);
      }, 1000);
    }
    
  },

  init() {
    this.timer();
    var p1, p2, p3, p4, s1, s2;
    p1 = p2 = p3 = p4 = s1 = s2 = 0;
    do {
      p1 = Math.floor(65 * Math.random());
      p2 = Math.floor(65 * Math.random());
      p3 = Math.floor(65 * Math.random());
      p4 = Math.floor(65 * Math.random());
    } while (p1 == p2 || p2 == p3 || p3 == p4 || p1 == p3 || p1 == p4 || p2 == p4);
    do {
      s1 = Math.floor(30 * Math.random());
      s2 = Math.floor(30 * Math.random());
    } while (s1 == s2);
    this.setData({ p1: p1, p2: p2, p3: p3, p4: p4, s1: s1, s2: s2 });  
  },

  stop() {
    if (this.data.stop == '暂停') {
      clearTimeout(timer);
      this.setData({ stop: '继续' })
    } else {
      this.timer();
      this.setData({ stop: '暂停' })
    }
  },

  next() {
    clearTimeout(timer);
    this.setData({ stop: '暂停', hasStart: 1 });
    this.init();
    time = SetTime;
  },

  contact() {
    this.stop();
    wx.showModal({
      title: '问题反馈',
      content: '新版本无法更新请长按删除本小程序，重新搜索进入。',
      confirmText: '联系QQ',
      success:res => {
        if (res.confirm) {
          wx.setClipboardData({
            data: '2536069850',
            success(res) {
              wx.showToast({
                title: '已复制 QQ 号',
              })
            }
          })
        }
        this.stop();
      }
    })
  },

  onHide(){
    this.stop();
  },
  onShow() {
    this.stop();
  },
  onShareAppMessage: () => { },
})