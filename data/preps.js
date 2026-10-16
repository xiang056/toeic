// TOEIC 介係詞題庫（仿 Part 5 句子填空）
// 欄位：id（不可重複，進度靠它記錄）、sentence（空格寫成 ___）、answer、options（含正解，顯示時會打亂）、note（解說）
window.PREPS = [
  // 固定搭配：動詞／形容詞 + 介係詞
  { id: "p01", sentence: "All employees must comply ___ the new safety regulations.", answer: "with", options: ["with", "to", "for", "by"], note: "comply with 遵守（固定搭配）" },
  { id: "p02", sentence: "Ms. Kim is responsible ___ training new staff.", answer: "for", options: ["for", "of", "to", "with"], note: "be responsible for 負責…" },
  { id: "p03", sentence: "Mr. Tanaka is in charge ___ the marketing department.", answer: "of", options: ["of", "for", "with", "at"], note: "in charge of 負責、主管…" },
  { id: "p04", sentence: "We are looking forward ___ working with you.", answer: "to", options: ["to", "for", "at", "with"], note: "look forward to + V-ing；這裡的 to 是介係詞，後面接動名詞" },
  { id: "p05", sentence: "Applicants must be familiar ___ basic accounting software.", answer: "with", options: ["with", "to", "of", "at"], note: "be familiar with 熟悉（某事物）" },
  { id: "p06", sentence: "The new policy applies ___ all full-time employees.", answer: "to", options: ["to", "for", "with", "on"], note: "apply to 適用於…" },
  { id: "p07", sentence: "Please apply ___ the position by June 30.", answer: "for", options: ["for", "to", "with", "in"], note: "apply for 申請（職位、許可）；apply to 是向某單位申請或適用於" },
  { id: "p08", sentence: "The price of this item is subject ___ change without notice.", answer: "to", options: ["to", "for", "of", "with"], note: "be subject to 可能受…影響；容易遭受…" },
  { id: "p09", sentence: "The CEO's speech focused ___ the company's growth plans.", answer: "on", options: ["on", "in", "at", "for"], note: "focus on 專注於…" },
  { id: "p10", sentence: "The company specializes ___ online advertising.", answer: "in", options: ["in", "on", "at", "for"], note: "specialize in 專精於…" },
  { id: "p11", sentence: "Our sales figures this year are similar ___ last year's.", answer: "to", options: ["to", "with", "as", "from"], note: "be similar to 與…相似" },
  { id: "p12", sentence: "The new model is quite different ___ the previous one.", answer: "from", options: ["from", "with", "of", "than"], note: "be different from 與…不同" },
  { id: "p13", sentence: "She was promoted ___ senior manager last month.", answer: "to", options: ["to", "for", "as", "at"], note: "be promoted to + 職位 升任…" },
  { id: "p14", sentence: "Please refer ___ the attached document for details.", answer: "to", options: ["to", "for", "at", "on"], note: "refer to 參考、參閱" },
  { id: "p15", sentence: "The company invested heavily ___ new technology.", answer: "in", options: ["in", "on", "to", "at"], note: "invest in 投資於…" },
  { id: "p16", sentence: "We apologize ___ the inconvenience.", answer: "for", options: ["for", "to", "of", "about"], note: "apologize for + 事；apologize to + 人" },
  { id: "p17", sentence: "The success of the project depends ___ teamwork.", answer: "on", options: ["on", "in", "to", "with"], note: "depend on 取決於、依賴" },
  { id: "p18", sentence: "The committee consists ___ seven members.", answer: "of", options: ["of", "in", "with", "by"], note: "consist of 由…組成（不用被動）" },
  { id: "p19", sentence: "The price increase resulted ___ lower sales.", answer: "in", options: ["in", "from", "to", "on"], note: "result in 導致（後接結果）；result from 起因於（後接原因）" },
  { id: "p20", sentence: "The shipping cost is included ___ the total price.", answer: "in", options: ["in", "on", "at", "to"], note: "be included in 包含在…之中" },

  // 時間介係詞
  { id: "p21", sentence: "The meeting has been postponed ___ next Monday.", answer: "until", options: ["until", "by", "since", "at"], note: "postpone until 延到某時間點；until 表「持續到」，by 表「最晚在…之前」" },
  { id: "p22", sentence: "Please submit your report ___ Friday at the latest.", answer: "by", options: ["by", "until", "in", "on"], note: "by 表期限「在…之前完成」，常與 at the latest 連用" },
  { id: "p23", sentence: "The store opens ___ 9 a.m. every day.", answer: "at", options: ["at", "on", "in", "by"], note: "幾點幾分（時刻）用 at" },
  { id: "p24", sentence: "The conference will be held ___ May 15.", answer: "on", options: ["on", "in", "at", "for"], note: "特定日期、星期幾用 on" },
  { id: "p25", sentence: "Sales increased significantly ___ 2025.", answer: "in", options: ["in", "on", "at", "by"], note: "年份、月份、季節用 in" },
  { id: "p26", sentence: "The new branch will open ___ the end of the year.", answer: "by", options: ["by", "until", "since", "for"], note: "by 期限；open 是瞬間動作，不能接表持續的 until" },
  { id: "p27", sentence: "Mr. Lopez has worked here ___ 2019.", answer: "since", options: ["since", "for", "from", "in"], note: "現在完成式 + since + 過去時間點" },
  { id: "p28", sentence: "She has been the manager of this branch ___ five years.", answer: "for", options: ["for", "since", "during", "in"], note: "for + 一段時間長度" },
  { id: "p29", sentence: "Please turn off your phone ___ the presentation.", answer: "during", options: ["during", "while", "for", "among"], note: "during + 名詞；while 是連接詞，後面要接子句" },
  { id: "p30", sentence: "The package will arrive ___ three business days.", answer: "within", options: ["within", "during", "between", "among"], note: "within 在（期間）之內" },
  { id: "p31", sentence: "The meeting room is not available ___ the moment.", answer: "at", options: ["at", "in", "on", "for"], note: "at the moment 目前、此刻" },
  { id: "p32", sentence: "Visitors must sign in ___ arrival.", answer: "upon", options: ["upon", "at", "in", "for"], note: "upon / on arrival 一抵達就…" },
  { id: "p33", sentence: "All products are inspected ___ shipment.", answer: "prior to", options: ["prior to", "ahead", "in front", "since"], note: "prior to = before 在…之前" },
  { id: "p34", sentence: "The project was completed ahead ___ schedule.", answer: "of", options: ["of", "to", "for", "in"], note: "ahead of schedule 比預定提早；behind schedule 進度落後" },

  // 地點、位置
  { id: "p35", sentence: "The office is located ___ the fifth floor.", answer: "on", options: ["on", "in", "at", "to"], note: "樓層用 on（on the fifth floor）" },
  { id: "p36", sentence: "The hotel is located ___ the train station.", answer: "near", options: ["near", "among", "between", "across"], note: "near 在…附近；across 要寫成 across from 才是「在對面」" },
  { id: "p37", sentence: "The spare keys are ___ the top drawer.", answer: "in", options: ["in", "on", "at", "to"], note: "在抽屜、箱子等容器裡面用 in" },
  { id: "p38", sentence: "The profits will be divided ___ the three partners.", answer: "among", options: ["among", "between", "within", "through"], note: "among 用於三者以上；between 通常用於兩者之間" },
  { id: "p39", sentence: "The negotiations ___ the two companies lasted for weeks.", answer: "between", options: ["between", "among", "across", "toward"], note: "between 兩者之間" },
  { id: "p40", sentence: "The new office is within walking distance ___ the subway station.", answer: "of", options: ["of", "from", "to", "at"], note: "within walking distance of 在…步行可到的距離內" },

  // 原因、讓步、方式
  { id: "p41", sentence: "___ the bad weather, the outdoor event was held as planned.", answer: "Despite", options: ["Despite", "Although", "Because of", "Instead"], note: "Despite + 名詞（儘管）；Although 是連接詞，要接子句" },
  { id: "p42", sentence: "The flight was canceled ___ heavy snow.", answer: "due to", options: ["due to", "despite", "although", "instead of"], note: "due to = because of 由於…" },
  { id: "p43", sentence: "___ the director's absence, Ms. Chen will lead the meeting.", answer: "In", options: ["In", "On", "At", "By"], note: "in one's absence 在某人不在時" },
  { id: "p44", sentence: "All requests must be submitted ___ writing.", answer: "in", options: ["in", "on", "by", "with"], note: "in writing 以書面方式" },
  { id: "p45", sentence: "You can pay ___ credit card or bank transfer.", answer: "by", options: ["by", "with", "in", "on"], note: "by + 付款或交通方式（不加冠詞），如 by credit card、by train" },
  { id: "p46", sentence: "The museum is closed ___ renovations until next month.", answer: "for", options: ["for", "from", "with", "at"], note: "closed for renovations 因整修而關閉" },
  { id: "p47", sentence: "The store is open every day ___ national holidays.", answer: "except", options: ["except", "besides", "without", "beyond"], note: "except 除了…之外（排除在外）；besides 是「除了…還有」（包含在內）" },
  { id: "p48", sentence: "The registration fee is $50 ___ person.", answer: "per", options: ["per", "by", "for", "each"], note: "per 每（per person 每人、per hour 每小時）" },

  // 片語
  { id: "p49", sentence: "Ms. Patel will be ___ vacation next week.", answer: "on", options: ["on", "in", "at", "for"], note: "on vacation 休假中；類似：on a business trip 出差中" },
  { id: "p50", sentence: "Mr. Hill is currently ___ a business trip to Singapore.", answer: "on", options: ["on", "in", "at", "for"], note: "on a business trip 出差中" }
];
