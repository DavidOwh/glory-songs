/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// 歌名清单与路径配置
// 您需要将 MP3 文件放入 public/songs 文件夹中
// 原唱文件命名为: XX_song.mp3 (例如 01_song.mp3)
// 伴奏文件命名为: XX_music.mp3 (例如 01_music.mp3)

export type SongCategory = "华文诗歌" | "福建诗歌" | "广东诗歌";

export interface Song {
  id: number;
  title: string;
  category: SongCategory;
  originalPath: string; // 原唱 (Song) 路径
  accompanimentPath: string; // 伴奏 (Music) 路径
  recitationPath?: string; // 朗读 (Recitation) 路径
  lyrics: string; // 歌词内容
}

export const SONGS: Song[] = [
  // --- 福建诗歌 (Hokkien) ---
  {
    id: 1,
    title: "1. 牵我的手 (福建)",
    category: "福建诗歌",
    originalPath: "songs/01_song.mp3",
    accompanimentPath: "songs/01_music.mp3",
    recitationPath: "recitation/01_read.mp3",
    lyrics: "牵我的手我的主啊\n请祢别离开我\n这条路我还要走\n我需要祢来作伴\n\n牵我的手我的主啊\n请祢别离开我\n有时我会惊\n有时不知怎样走\n有时好像听不到祢的声\n\n副歌：\n牵我的手请祢跟我作伴\n给我的脚步又稳又定\n走到祢的门前\n听到祢的声\n跟我讲进来我孩子"
  },
  {
    id: 2,
    title: "2. 一条出路 (福建)",
    category: "福建诗歌",
    originalPath: "songs/02_song.mp3",
    accompanimentPath: "songs/02_music.mp3",
    recitationPath: "recitation/02_read.mp3",
    lyrics: "行出那条黑暗的路\n就要快快跟随主耶稣\n祂是黑暗的仇敌\n祂是希望的光明\n倚靠祂不怕遇到灾害\n\n副歌：\n耶稣会来帮助你\n耶稣会来保守你\n虽然不知头前的路\n祂会陪你行一条出路\n\n结束：\n虽然不知头前的路\n祂会陪你行一条出路\n祂会陪你行一条出路"
  },
  {
    id: 7,
    title: "7. 真正美 (福建)",
    category: "福建诗歌",
    originalPath: "songs/07_song.mp3",
    accompanimentPath: "songs/07_music.mp3",
    recitationPath: "recitation/07_read.mp3",
    lyrics: "1）父母的爱真正美，亲像春天的花蕊\n春风吹来阵阵花香味\n使阮心内充满欢喜\n心花开 阮的心花拢齐开\n真甘甜 老母抱阮惜归瞑\n牵着阮的手，艰苦给阮晟\n你的爱疼伴阮向前行\n\n2）上帝的爱真正美，导阮经过黑暗瞑\n赏赐父母将阮来养饲\n保护看顾一生无离\n心门开 永远活命赐给你\n天门开 接受耶稣趁此时\n牵着阮的手，风雨免惊惶\n祢的恩惠伴阮向前行"
  },
  {
    id: 10,
    title: "10. 上帝拢知 (福建)",
    category: "福建诗歌",
    originalPath: "songs/10_song.mp3",
    accompanimentPath: "songs/10_music.mp3",
    recitationPath: "recitation/10_read.mp3",
    lyrics: "阮的忧愁谁人知\n无人倘讲无人了解\n佳哉上帝有怜悯\n阮的苦痛祂拢知\n\n副歌：\n祂拢知祂了解\n每时准祂拢知\n不免痛苦满腹内\n相信上帝有大慈爱\n每时上帝有同在\n咱的未来祂有安排"
  },
  {
    id: 13,
    title: "13. 祂是疼的主 (福建)",
    category: "福建诗歌",
    originalPath: "songs/13_song.mp3",
    accompanimentPath: "songs/13_music.mp3",
    recitationPath: "recitation/13_read.mp3",
    lyrics: "感谢主赏赐阮福份 宝贵无比的福份\n将祂恩典从天送落来 万事拢可来排解\n\n副歌:\n祂是疼的主 每日听阮的心事\n改阮忧愁 瞭解阮鬱卒\n祂是疼的主 瞭解阮境遇\n阮知这款福份是从祂赏赐"
  },
  {
    id: 18,
    title: "18. 基督耶稣来作伴 (福建)",
    category: "福建诗歌",
    originalPath: "songs/18_song.mp3",
    accompanimentPath: "songs/18_music.mp3",
    recitationPath: "recitation/18_read.mp3",
    lyrics: "主耶稣引导阮的脚步\n亲像灯照人生的路途\n无论风有外大\n无论雨有外寒\n阮一生决心要随伊行\n\n伊的爱阮放在心肝内\n有耶稣的人心内会知\n无论人按怎看\n阮的心没变卦\n靠耶稣 咱生活着快活\n\n副歌：\n咱的心免着惊\n基督耶稣来作伴\n有困难伊拢嘛会知影\n咱的心免着惊\n基督耶稣来作伴\n为伊唱出感恩的歌声"
  },

  {
    id: 11,
    title: "11. 天父必保守 (广东)",
    category: "广东诗歌",
    originalPath: "songs/11_song.mp3",
    accompanimentPath: "songs/11_music.mp3",
    recitationPath: "recitation/11_read.mp3",
    lyrics: "1）天边飞雁不耕不收 我父仍将它保守\n可知你何等贵重 天父必保守。\n\n2）今天花儿引风轻歌 却奈何它一朝枯萎\n恩主也为它戴上华丽 天父必保守！\n\n副歌：\n我父慈爱 他必解你悲忧\n心中悲忧成为乐畅 天父深恩！\n\n3）虽遭风浪不须惊慌 我父洪恩一一担当\n必使狂风变平静 天父必保守!"
  },
  {
    id: 3,
    title: "3. 一条出路 (广东)",
    category: "广东诗歌",
    originalPath: "songs/03_song.mp3",
    accompanimentPath: "songs/03_music.mp3",
    recitationPath: "recitation/03_read.mp3",
    lyrics: "行出那黑暗的道路\n牵着手跟随我主耶稣\n祂是我们的盼望\n祂是明天的曙光\n倚靠祂不怕遇到灾害\n\n副歌：\n寻求祂必得到帮助\n软弱 能得到刚强\n虽然面对前路崎岖\n祂会陪你走出新的路\n\n结束：\n虽然面对前路崎岖\n祂会陪你走出新的路\n祂会陪你走出新的路"
  },
  {
    id: 4,
    title: "4. 恩曲 (广东)",
    category: "广东诗歌",
    originalPath: "songs/04_song.mp3",
    accompanimentPath: "songs/04_music.mp3",
    recitationPath: "recitation/04_read.mp3",
    lyrics: "无数苦恼全随浪水逝去\n乐意高歌心中恶尽除\n忘掉往日往昔泪\n今救主在心内\n上帝恩典一生永伴随\n\n曾落魄失意\n流离在恶梦内\n幸救主施恩典庇佑时\n迷路客现已醒悟\n今救主在心内\n愿与君共唱恩曲千千句\n\n尝立志\n将救主爱颂唱时时\n常愿意\n分享基督无迟疑\n惟望信望爱俱在\n将救恩藏心内\n迈向前路有主爱永伴随"
  },
  {
    id: 8,
    title: "8. 祢是知心友 (广东)",
    category: "广东诗歌",
    originalPath: "songs/08_song.mp3",
    accompanimentPath: "songs/08_music.mp3",
    recitationPath: "recitation/08_read.mp3",
    lyrics: "带我走过黑暗与我伴随\n世事幻变路远纵有疲累\n披星戴月深信祢是知己\n与我心结不舍弃\n\n每一天得祢示意踏前看\n劝慰我天天是每个片段\n恩主顾念此际在身边\n伴我抚慰千串\n\n以爱的心呵护我\n踏雪月缺路远又如何\n情系知己今有主跟我上路\n情心可得倾诉\n\n以祢的心呵护我\n踏雪月缺路远又如何\n情系知己今有主拖带上路\n情牵感激倾诉"
  },
  {
    id: 21,
    title: "21. 耶和华是爱 (广东)",
    category: "广东诗歌",
    originalPath: "songs/21_song.mp3",
    accompanimentPath: "songs/21_music.mp3",
    recitationPath: "recitation/21_read.mp3",
    lyrics: "1）耶和华是爱\n让我安身青草溪水边\n神令我省察心中的幽暗\n共同渡每一天\n\n2）耶和华是爱\n在困境中祂保守引牵\n神为我摆设丰足的恩惠\n在危难也不会变\n\n副歌：\n在世间 主恩与共，祂的爱存在常无尽\n神为我施恩惠保守勉励共同渡此世\n\n3）耶和华是爱\n让我安身青草溪水边\n无限满足快乐\n涌於心里在危难也不会变"
  },
  {
    id: 14,
    title: "14. 如此认识我 (广东)",
    category: "广东诗歌",
    originalPath: "songs/14_song.mp3",
    accompanimentPath: "songs/14_music.mp3",
    recitationPath: "recitation/14_read.mp3",
    lyrics: "1）谁像你如此认识我\n在我四周前后环绕我\n我奔跑、我躺臥、我坐下、我起来\n全部你也细察清楚\n\n2）年月有如闪电飞过\n但你的手从未离开过\n看春光、看豔阳、看落叶、看冰河\n你右手总昼夜扶持着我\n\n副歌：\n我在地上年日你已经数算过\n你心底的意念如海沙那么多\n我在地极与天涯仍旧看顾着我\n这高深的爱可测得透么 Oh…\n\n3）迎面障碍虽避不过\n但我有主同在能冲破\n有北风、有巨浪、有祸患、有艰难\n我藏身主荫下昂然步过"
  },

  // --- 华文诗歌 (Mandarin) ---
  {
    id: 5,
    title: "5. 除祢以外 (华语)",
    category: "华文诗歌",
    originalPath: "songs/05_song.mp3",
    accompanimentPath: "songs/05_music.mp3",
    recitationPath: "recitation/05_read.mp3",
    lyrics: "除祢以外\n在天上我还能有谁\n除祢以外\n在地上我别无眷恋\n\n除祢以外\n有谁能擦干我眼泪\n除祢以外\n有谁能带给我安慰\n\n副歌:\n虽然我的肉体\n和我的心肠\n渐渐地衰退\n\n但是神是我\n心里的力量\n是我的福份\n直到永远"
  },
  {
    id: 6,
    title: "6. 相约在主里 (华语)",
    category: "华文诗歌",
    originalPath: "songs/06_song.mp3",
    accompanimentPath: "songs/06_music.mp3",
    recitationPath: "recitation/06_read.mp3",
    lyrics: "1 我们相约在主里 共同生活常相忆\n2 回忆过去日子里 纵有欢笑也有泪滴\n\n1 我们相约在主里 将来有一天要再欢聚\n2 舍不得要告诉你 在主的爱里我等着你\n\n在主里祝福你 我在主里思念你\n愿主带领你 进入迦南地\n在主里祝福你 我在主里思念你\n愿主赐给你 丰富的奶与蜜\n你可不要忘记 我们相约在主里\n记得我们相约在主里"
  },
  {
    id: 9,
    title: "9. 天国再相见 (华语)",
    category: "华文诗歌",
    originalPath: "songs/09_song.mp3",
    accompanimentPath: "songs/09_music.mp3",
    recitationPath: "recitation/09_read.mp3",
    lyrics: "离别看似是一种隔绝\n我的眼泪心里不住倾泻\n可是我却相信\n天国里能再相见\n此刻道别只是一个暂别\n\n为你的生命献上感恩\n感谢天父每天施恩看顾\n期待重遇那天看见你的笑脸\n我知道你已与主一同在天\n\n副歌：\n耶稣说复活在我生命也在我\n信我的人虽然死了也必复活\n耶稣我相信你是复活与生命\n让我心因你话得着安慰"
  },
  {
    id: 12,
    title: "12. 祷告主仰望主 (华语)",
    category: "华文诗歌",
    originalPath: "songs/12_song.mp3",
    accompanimentPath: "songs/12_music.mp3",
    recitationPath: "recitation/12_read.mp3",
    lyrics: "祷告主仰望主\n祂是我拯救我力量\n敬畏主荣耀主\n祂是我性命的保障\n\n祂是我亮光是我的力量\n祂是我性命的保障\n我愿仰望祂赞美耶和华\n我心要歌颂赞美祂"
  },
  {
    id: 15,
    title: "15. 恩典之路 (华语)",
    category: "华文诗歌",
    originalPath: "songs/15_song.mp3",
    accompanimentPath: "songs/15_music.mp3",
    recitationPath: "recitation/15_read.mp3",
    lyrics: "你是我的主\n引我走正义路\n高山或低谷\n都是你在保护\n万人中唯独\n你爱我认识我\n永远不变的应许\n这一生都是祝福\n\n副歌：\n一步又一步.这是恩典之路.\n你爱.你手.将久紧紧抓住.\n一步又一步.这是盼望之路.\n你爱.你手.牵引我走这人生路。"
  },
  {
    id: 16,
    title: "16. 回家 (华语)",
    category: "华文诗歌",
    originalPath: "songs/16_song.mp3",
    accompanimentPath: "songs/16_music.mp3",
    recitationPath: "recitation/16_read.mp3",
    lyrics: "亲爱耶稣 我感谢祢来到这世界\n给我盼望 给我一个永恒的家\n亲爱天父 轻声唤我回到祂面前\n不再流浪 我看到家的光\n\n回家回家 回到永恒爱的家\n喜乐充满我的心 我不住赞美\n回家回家 回到永恒爱的家\n天父张开爱的双臂 我一生属于祂"
  },
  {
    id: 17,
    title: "17. 谢谢祢 (华语)",
    category: "华文诗歌",
    originalPath: "songs/17_song.mp3",
    accompanimentPath: "songs/17_music.mp3",
    recitationPath: "recitation/17_read.mp3",
    lyrics: "我能用什么报答祢恩典\n世上的一切 无法换取祢的爱\n白白的得来 无止尽赦免\n尽在宝血和十架\n\n谢谢祢 洗净我的罪\n谢谢祢 医治我伤悲\n谢谢祢 擦干我的眼泪\n挪去后悔 释放我的缠累\n\n谢谢祢 洗净我的罪\n谢谢祢 医治我伤悲\n谢谢祢用生命将我赎回\n我是天父永远最爱宝贝"
  },
  {
    id: 19,
    title: "19. 安息在主的怀里 (华语)",
    category: "华文诗歌",
    originalPath: "songs/19_song.mp3",
    accompanimentPath: "songs/19_music.mp3",
    recitationPath: "recitation/19_read.mp3",
    lyrics: "安息在主的怀里 安息在主的怀里\n你已卸下了世上的重担 安息在主的怀里\n\n我还记得初次相见 我还记得你的笑脸\n我还记得你的声音 我还记得你的勉励\n我还记得你的爱心 我还记得你的坚定\n我还记得你的温柔 我还记得你的身影\n\n安息在主的怀里 安息在主的怀里\n相信天家会再见到你 安息在主的怀里"
  },
  {
    id: 20,
    title: "20. 天上家乡 (华语)",
    category: "华文诗歌",
    originalPath: "songs/20_song.mp3",
    accompanimentPath: "songs/20_music.mp3",
    recitationPath: "recitation/20_read.mp3",
    lyrics: "有一个 永恒家乡 座落在 高高天上\n全世界 什么都比不上 它荣美 超过想象\n在那里 没有忧伤 在那里 天天欢唱\n赞美神 歌声响彻天堂 主荣耀 超过想象\n\n蓝天白云之上 公义像太阳\n主为我们预备地方\n地上虽有困难 心中不失望\n有盼望 在那高高的天上"
  },
  {
    id: 22,
    title: "22. 每一天 (华语)",
    category: "华文诗歌",
    originalPath: "songs/22_song.mp3",
    accompanimentPath: "songs/22_music.mp3",
    recitationPath: "recitation/22_read.mp3",
    lyrics: "每一天所度过的每一刻\n我得着能力胜过试炼\n我倚靠天父周详的供应\n我不用再恐慌与挂念\n祂的心极仁慈无可测度\n祂每天都有最好安排\n不论忧或喜祂慈爱显明\n劳苦中祂赐安泰\n\n每一天主自己与我相亲\n每时刻赐下格外怜恤\n我挂虑主愿安慰与担当\n祂的名为策士与权能\n祂保护祂的儿女如珍宝\n祂热心必要成全这事\n你日子如何力量也如何\n这是祂向我应许\n\n帮助我当我在困难危急\n让我全心信靠祢应许\n让我享受祢安慰的甜蜜\n教导我祢神圣的话语\n帮助我当困苦艰难来临\n牵著我就像慈父的手\n每一天每一刻飞逝无影\n引导我进应许之地"
  },
  {
    id: 23,
    title: "23. 伴我度过每一天 (华语)",
    category: "华文诗歌",
    originalPath: "songs/23_song.mp3",
    accompanimentPath: "songs/23_music.mp3",
    recitationPath: "recitation/23_read.mp3",
    lyrics: "当我来到你面前\n是你把我抱在怀里\n安慰我心中的忧虑\n为我擦干泪滴\n\n求你住在我心里\n给我安慰和鼓励\n主啊有你与我同在\n我就能勇敢站立\n\n你是我生命中的唯一\n你早已溶入我生命里\n有你是我最大的满足\n我已经离不开你\n\n有你同在我不怕风雨\n平安喜乐在我心里\n你伴我度过每一天\n你爱我不离不弃"
  },
  {
    id: 24,
    title: "24. 直到我们再相见 (华语)",
    category: "华文诗歌",
    originalPath: "songs/24_song.mp3",
    accompanimentPath: "songs/24_music.mp3",
    recitationPath: "recitation/24_read.mp3",
    lyrics: "当我想起你走过的路\n心中仍有不舍的泪\n但在主里，我抬起头\n因为盼望从未破碎\n\n十字架前，我再次想起\n主为我们付上的爱\n死亡不能夺走生命\n复活已经打开未来\n\n耶稣，谢谢你奇妙救恩\n你使黑夜变为光明\n如今他在你国度安息\n在你怀中，享永恒安宁\n\n耶稣，谢谢你信实应许\n离别不再是终点\n有一天，在荣耀里\n我们必定再次相见\n\n靠着十字架，我们前行\n靠着复活，我们歌唱\n直到那日，同声敬拜\n荣耀归你，永远君王\n\n耶稣，谢谢你奇妙救恩\n你为我们预备天家\n在你国度，我们重逢\n喜乐相见，直到永远\n直到我们，再相见"
  },
  {
    id: 25,
    title: "25. 主牵我手回家 (华语)",
    category: "华文诗歌",
    originalPath: "songs/25_song.mp3",
    accompanimentPath: "songs/25_music.mp3",
    recitationPath: "recitation/25_read.mp3",
    lyrics: "主牵我手，走过一生， 天父恩典，实在极深。\n不论高山，或是低谷， 主在身边，就是幸福。\n\n世上劳苦，已经放下， 跟着耶稣，回到天家。\n那里没有，病痛眼泪， 主里安息，非常甜美。\n\n天家好，天家美， 主耶稣，在等候。\n暂时别，莫伤悲， 在那天，再相会。\n\n天家好，天家美， 主耶稣，在等候。\n暂时别，莫伤悲， 在那天，再相会。\n\n一步一步，跟着主走， 主爱我们，直到永久。\n\n再相会，再相会， 在那天，再相会。\n\n天家好，天家美， 主耶稣，在等候。\n暂时别，莫伤悲， 在那天，再相会。\n\n天家好，天家美， 主耶稣，在等候。\n暂时别，莫伤悲， 在那天，再相会。"
  }
];
