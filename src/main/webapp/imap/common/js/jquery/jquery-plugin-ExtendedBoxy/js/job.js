var arrclass = new Array();
var arrjob = new Array();

arrclass[0] = new Class(5,"计算机/IT/网络类");
arrclass[1] = new Class(46,"动漫游戏类");
arrclass[2] = new Class(1,"文职类");
arrclass[3] = new Class(18,"翻译类");
arrclass[4] = new Class(19,"销售类");
arrclass[5] = new Class(3,"经营/管理类");
arrclass[6] = new Class(2,"财务/统(审)计类");
arrclass[7] = new Class(9, "人力资源类");
arrclass[8] = new Class(6, "广告装潢/包装设计");
arrclass[9] = new Class(20,"客户服务类");
arrclass[10] = new Class(8,"市场营销/公关类");
arrclass[11] = new Class(30,"商场/零售服务类");
arrclass[12] = new Class(26,"金融/保险/证券");
arrclass[13] = new Class(7,"行政/后勤类");
arrclass[14] = new Class(4, "工业/工厂类");
arrclass[15] = new Class(24,"咨询/顾问类");
arrclass[16] = new Class(25,"物流/贸易类");
arrclass[17] = new Class(17, "轻工类");
arrclass[18] = new Class(10, "机械/仪器/模具类");
arrclass[19] = new Class(27, "家具类");
arrclass[20] = new Class(45, "汽车制造/维护类");
arrclass[21] = new Class(21, "培训类");
arrclass[22] = new Class(11,"技工/普工类");
arrclass[23] = new Class(12, "机加工类");
arrclass[24] = new Class(13, "电子/通讯/仪表仪器类");
arrclass[25] = new Class(23,"陶瓷类");
arrclass[26] = new Class(15, "房产/建筑/物业类");
arrclass[27] = new Class(29,"服装类");
arrclass[28] = new Class(31,"印刷类");
arrclass[29] = new Class(16, "珠宝首饰类");
arrclass[30] = new Class(35, "医药/美容/保健类");
arrclass[31] = new Class(14,"生物化学/制药类");
arrclass[32] = new Class(28,"宾馆餐饮/旅游/服务");
arrclass[33] = new Class(22,"律师/法务类");
arrclass[34] = new Class(33,"文体/教育类");
arrclass[35] = new Class(38,"园林环保类");
arrclass[36] = new Class(40,"农林渔牧类");
arrclass[37] = new Class(42,"影视/娱乐类");
arrclass[38] = new Class(43,"测绘技术类");
arrclass[39] = new Class(44,"地矿治金类");
arrclass[40] = new Class(50,"其他类");

arrjob[0] = new Item(638,"IT技术总监/经理",5);
arrjob[1] = new Item(639,"IT项目总监/经理",5);
arrjob[2] = new Item(463,"软件工程师",5);
arrjob[3] = new Item(40,"软件开发与测试",5);
arrjob[4] = new Item(43,"数据库开发与管理",5);
arrjob[5] = new Item(41,"信息系统分析员",5);
arrjob[6] = new Item(42,"系统维护/网管",5);
arrjob[7] = new Item(464,"硬件测试",5);
arrjob[8] = new Item(465,"硬件工程师",5);
arrjob[9] = new Item(49,"计算机硬件维护",5);
arrjob[10] = new Item(466,"网站编辑",5);
arrjob[11] = new Item(44,"网站开发与策划",5);
arrjob[12] = new Item(330,"web开发/网站程序开发",5);
arrjob[13] = new Item(4,"电脑美工",5);
arrjob[14] = new Item(46,"网页设计/制作/美工",5);
arrjob[15] = new Item(332,"网络营销顾问",5);
arrjob[16] = new Item(375,"网络工程",5);
arrjob[17] = new Item(48,"网络安全管理",5);
arrjob[18] = new Item(47,"多媒体设计与开发",5);
arrjob[19] = new Item(216,"计算机培训教师",5);
arrjob[20] = new Item(700,"搜索引擎优化/SEO",5);
arrjob[21] = new Item(701,"电子商务/网店/商城",5);
arrjob[22] = new Item(702,"网站运营管理",5);
arrjob[23] = new Item(703,"打印/复印/外设维修",5);
arrjob[24] = new Item(45,"计算机辅助设计",5);
arrjob[25] = new Item(331,"ERP持术/应用",5);
arrjob[26] = new Item(467,"其他计算机/IT",5);
arrjob[27] = new Item(1,"文员",1);
arrjob[28] = new Item(2,"文秘",1);
arrjob[29] = new Item(3,"助理",1);
arrjob[30] = new Item(468,"高级秘书",1);
arrjob[31] = new Item(370,"文档管理",1);
arrjob[32] = new Item(372,"文案策划",1);
arrjob[33] = new Item(197,"前台礼仪",1);
arrjob[34] = new Item(371,"话务员",1);
arrjob[35] = new Item(469,"电脑操作/打字员",1);
arrjob[36] = new Item(470,"其他文职",1);
arrjob[37] = new Item(7,"英文翻译",18);
arrjob[38] = new Item(8,"日语翻译",18);
arrjob[39] = new Item(471,"法语翻译",18);
arrjob[40] = new Item(472,"德语翻译",18);
arrjob[41] = new Item(473,"俄语翻译",18);
arrjob[42] = new Item(9,"韩语翻译",18);
arrjob[43] = new Item(581,"西班牙语翻译",18);
arrjob[44] = new Item(10,"其他外语翻译",18);
arrjob[45] = new Item(474,"销售总监",19);
arrjob[46] = new Item(379,"销售经理",19);
arrjob[47] = new Item(482,"区域销售经理",19);
arrjob[48] = new Item(483,"分销经理",19);
arrjob[49] = new Item(480,"渠道经理",19);
arrjob[50] = new Item(479,"商务经理/专员",19);
arrjob[51] = new Item(476,"销售主管",19);
arrjob[52] = new Item(481,"渠道主管",19);
arrjob[53] = new Item(380,"销售工程师",19);
arrjob[54] = new Item(475,"销售代表",19);
arrjob[55] = new Item(408,"电话营销",19);
arrjob[56] = new Item(478,"推(营)销员",19);
arrjob[57] = new Item(477,"销售助理",19);
arrjob[58] = new Item(484,"其他销售",19);
arrjob[59] = new Item(378,"市场总监/经理/主管",8);
arrjob[60] = new Item(708,"产品/品牌企划",8);
arrjob[61] = new Item(709,"新闻媒介企划",8);
arrjob[62] = new Item(504,"公关经理",8);
arrjob[63] = new Item(77,"营销策划",8);
arrjob[64] = new Item(78,"市场调研员",8);
arrjob[65] = new Item(360,"公关专员",8);
arrjob[66] = new Item(79,"采购",8);
arrjob[67] = new Item(81,"业务员",8);
arrjob[68] = new Item(82,"营业员",8);
arrjob[69] = new Item(83,"促销员",8);
arrjob[70] = new Item(381,"医药代表",8);
arrjob[71] = new Item(75,"市场营销管理",8);
arrjob[72] = new Item(361,"广告企划",8);
arrjob[73] = new Item(503,"市场推广/拓展合作",8);
arrjob[74] = new Item(505,"其他营销公关",8);
arrjob[75] = new Item(11,"财务总监",2);
arrjob[76] = new Item(12,"财务经理",2);
arrjob[77] = new Item(13,"财务主管",2);
arrjob[78] = new Item(488,"财务分析",2);
arrjob[79] = new Item(447,"财务策划",2);
arrjob[80] = new Item(489,"成本管理",2);
arrjob[81] = new Item(14,"会计",2);
arrjob[82] = new Item(15,"出纳",2);
arrjob[83] = new Item(16,"收银",2);
arrjob[84] = new Item(17,"统计",2);
arrjob[85] = new Item(18,"审计",2);
arrjob[86] = new Item(373,"税务/税务师",2);
arrjob[87] = new Item(491,"其他财务",2);
arrjob[88] = new Item(492,"人力资源总监",9);
arrjob[89] = new Item(193,"人力资源经理",9);
arrjob[90] = new Item(493,"人力资源主管",9);
arrjob[91] = new Item(194,"人力资源专员",9);
arrjob[92] = new Item(496,"招聘经理/主管",9);
arrjob[93] = new Item(497,"招聘专员/助理",9);
arrjob[94] = new Item(315,"培训专员",9);
arrjob[95] = new Item(494,"绩效专员",9);
arrjob[96] = new Item(382,"绩效经理/主管",9);
arrjob[97] = new Item(383,"薪酬经理/主管",9);
arrjob[98] = new Item(495,"薪酬专员",9);
arrjob[99] = new Item(195,"培训经理/主管",9);
arrjob[100] = new Item(498,"其他人力资源",9);
arrjob[101] = new Item(499,"行政总监",7);
arrjob[102] = new Item(500,"行政经理",7);
arrjob[103] = new Item(501,"行政主管",7);
arrjob[104] = new Item(196,"行政专员/助理",7);
arrjob[105] = new Item(61,"后勤管理",7);
arrjob[106] = new Item(62,"总务",7);
arrjob[107] = new Item(64,"保安员/队长",7);
arrjob[108] = new Item(63,"司机",7);
arrjob[109] = new Item(377,"押运/调度",7);
arrjob[110] = new Item(274,"食堂厨师",7);
arrjob[111] = new Item(276,"其他后勤工作",7);
arrjob[112] = new Item(19,"总裁/CEO",3);
arrjob[113] = new Item(20,"总经理/副总经理",3);
arrjob[114] = new Item(21,"营销总监",3);
arrjob[115] = new Item(22,"经理",3);
arrjob[116] = new Item(25,"企业策划",3);
arrjob[117] = new Item(23,"经理助理",3);
arrjob[118] = new Item(27,"项目经理",3);
arrjob[119] = new Item(374,"信息主管/CIO",3);
arrjob[120] = new Item(24,"厂长/副厂长",3);
arrjob[121] = new Item(485,"店长",3);
arrjob[122] = new Item(704,"技术总监CTO",3);
arrjob[123] = new Item(705,"部门主管",3);
arrjob[124] = new Item(486,"合伙人",3);
arrjob[125] = new Item(487,"其他经营管理",3);
arrjob[126] = new Item(38,"生产主管/经理",4);
arrjob[127] = new Item(36,"ISO专员",4);
arrjob[128] = new Item(542,"RD经理",4);
arrjob[129] = new Item(543,"QA.QC质量管理",4);
arrjob[130] = new Item(28,"质检员",4);
arrjob[131] = new Item(32,"采购管理",4);
arrjob[132] = new Item(33,"设备管理",4);
arrjob[133] = new Item(34,"物料管理",4);
arrjob[134] = new Item(35,"品质主管/经理",4);
arrjob[135] = new Item(190,"车间主任",4);
arrjob[136] = new Item(538,"PE工程师",4);
arrjob[137] = new Item(539,"ME工程师",4);
arrjob[138] = new Item(445,"IE工程师",4);
arrjob[139] = new Item(540,"工艺工程师",4);
arrjob[140] = new Item(541,"SMT技术员",4);
arrjob[141] = new Item(29,"跟单员",4);
arrjob[142] = new Item(30,"计划员/调度员",4);
arrjob[143] = new Item(31,"仓库管理员",4);
arrjob[144] = new Item(37,"储备干部",4);
arrjob[145] = new Item(6,"普工/生产工",4);
arrjob[146] = new Item(729,"产品开发",4);
arrjob[147] = new Item(739,"产品分析",4);
arrjob[148] = new Item(544,"安全主任",4);
arrjob[149] = new Item(730,"组长/拉长",4);
arrjob[150] = new Item(731,"工程经理/主管",4);
arrjob[151] = new Item(732,"工程设备工程师",4);
arrjob[152] = new Item(733,"品管经理/主管",4);
arrjob[153] = new Item(734,"品管员",4);
arrjob[154] = new Item(735,"统计员",4);
arrjob[155] = new Item(39,"工程管理",4);
arrjob[156] = new Item(736,"维修工程师",4);
arrjob[157] = new Item(737,"化验/检验员",4);
arrjob[158] = new Item(738,"制造工程师",4);
arrjob[159] = new Item(545,"其他工厂生产",4);
arrjob[160] = new Item(99,"电焊工",11);
arrjob[161] = new Item(100,"氩弧焊工",11);
arrjob[162] = new Item(101,"电工",11);
arrjob[163] = new Item(391,"铆工",11);
arrjob[164] = new Item(103,"制冷工",11);
arrjob[165] = new Item(102,"锅炉工",11);
arrjob[166] = new Item(106,"普工",11);
arrjob[167] = new Item(189,"吹膜工",11);
arrjob[168] = new Item(205,"电梯工/空调工",11);
arrjob[169] = new Item(206,"叉车工/铲车",11);
arrjob[170] = new Item(394,"玻璃工艺",11);
arrjob[171] = new Item(188,"音箱技工",11);
arrjob[172] = new Item(740,"水工/木工/油漆工",11);
arrjob[173] = new Item(741,"装配工/包装工",11);
arrjob[174] = new Item(775,"火花机操作工",11);
arrjob[175] = new Item(742,"模具工",11);
arrjob[176] = new Item(743,"电镀员",11);
arrjob[177] = new Item(201,"汽车修理工/机修工",11);
arrjob[178] = new Item(766,"装配技工",11);
arrjob[179] = new Item(191,"摩托车技术工",11);
arrjob[180] = new Item(393,"玻璃钢工艺",11);
arrjob[181] = new Item(392,"压力容器焊工",11);
arrjob[182] = new Item(546,"其他技工",11);
arrjob[183] = new Item(108,"车工",12);
arrjob[184] = new Item(109,"钳工",12);
arrjob[185] = new Item(110,"铣工",12);
arrjob[186] = new Item(111,"刨工",12);
arrjob[187] = new Item(112,"磨工",12);
arrjob[188] = new Item(547,"锣工",12);
arrjob[189] = new Item(430,"CNC技术",12);
arrjob[190] = new Item(365,"钣金工",12);
arrjob[191] = new Item(395,"铸造工",12);
arrjob[192] = new Item(203,"冲床工",12);
arrjob[193] = new Item(204,"机床工",12);
arrjob[194] = new Item(744,"钻工",12);
arrjob[195] = new Item(745,"数控车床",12);
arrjob[196] = new Item(548,"其他机加工",12);
arrjob[197] = new Item(5,"设计总监",6);
arrjob[198] = new Item(50,"广告设计/创意策划",6);
arrjob[199] = new Item(51,"平面广告设计",6);
arrjob[200] = new Item(135,"室内装潢/设计",6);
arrjob[201] = new Item(513,"三维动画设计",6);
arrjob[202] = new Item(53,"工业产品设计",6);
arrjob[203] = new Item(60,"玩具设计",6);
arrjob[204] = new Item(56,"灯饰设计",6);
arrjob[205] = new Item(431,"鞋业设计",6);
arrjob[206] = new Item(438,"钟表设计",6);
arrjob[207] = new Item(449,"室内设计",6);
arrjob[208] = new Item(770,"展示设计",6);
arrjob[209] = new Item(376,"形象设计",6);
arrjob[210] = new Item(512,"工艺品设计",6);
arrjob[211] = new Item(771,"产品外观设计",6);
arrjob[212] = new Item(452,"窗帘设计",6);
arrjob[213] = new Item(713,"平面设计",6);
arrjob[214] = new Item(714,"多媒体设计与制作",6);
arrjob[215] = new Item(715,"管道工程设计",6);
arrjob[216] = new Item(716,"装饰维护",6);
arrjob[217] = new Item(717,"手绘设计",6);
arrjob[218] = new Item(52,"CAD绘图",6);
arrjob[219] = new Item(769,"包装工",6);
arrjob[220] = new Item(767,"广告工程",6);
arrjob[221] = new Item(432,"其他广告设计",6);
arrjob[222] = new Item(213,"电器工程师",13);
arrjob[223] = new Item(214,"电子工程师",13);
arrjob[224] = new Item(523,"电气工程师",13);
arrjob[225] = new Item(524,"电声工程师",13);
arrjob[226] = new Item(398,"PIE工程师",13);
arrjob[227] = new Item(399,"开发工程师",13);
arrjob[228] = new Item(400,"QE工程师",13);
arrjob[229] = new Item(218,"QC工程师",13);
arrjob[230] = new Item(437,"液晶工程师",13);
arrjob[231] = new Item(446,"音响工程师",13);
arrjob[232] = new Item(525,"数码产品开发",13);
arrjob[233] = new Item(416,"集成电路/IC设计/应用工程师",13);
arrjob[234] = new Item(417,"半导体技术",13);
arrjob[235] = new Item(397,"无线电技术",13);
arrjob[236] = new Item(208,"自动化工程师",13);
arrjob[237] = new Item(115,"综合布线/弱电",13);
arrjob[238] = new Item(116,"通讯工程",13);
arrjob[239] = new Item(118,"单片机/DSP/嵌入式硬件",13);
arrjob[240] = new Item(119,"仪器仪表/计量",13);
arrjob[241] = new Item(396,"plc编程/pcb设计",13);
arrjob[242] = new Item(418,"电子测试",13);
arrjob[243] = new Item(113,"电子/电器维修",13);
arrjob[244] = new Item(114,"电子技术员",13);
arrjob[245] = new Item(718,"电池/电源开发",13);
arrjob[246] = new Item(719,"激光/光电子技术",13);
arrjob[247] = new Item(720,"LED开发工程师",13);
arrjob[248] = new Item(721,"灯光工程师",13);
arrjob[249] = new Item(722,"监控员/视频工程师",13);
arrjob[250] = new Item(117,"电路设计",13);
arrjob[251] = new Item(207,"高压电工",13);
arrjob[252] = new Item(526,"其他电子通讯",13);
arrjob[253] = new Item(107,"机械维修",10);
arrjob[254] = new Item(94,"机械设计与制造",10);
arrjob[255] = new Item(321,"塑料模具制造",10);
arrjob[256] = new Item(442,"马达开发工程师",10);
arrjob[257] = new Item(96,"动力工程师",10);
arrjob[258] = new Item(443,"机械绘图",10);
arrjob[259] = new Item(320,"五金模具制造",10);
arrjob[260] = new Item(527,"CNC工程师",10);
arrjob[261] = new Item(528,"注塑工程师",10);
arrjob[262] = new Item(529,"焊接工程师",10);
arrjob[263] = new Item(530,"锅炉工程师",10);
arrjob[264] = new Item(531,"刀具工程师",10);
arrjob[265] = new Item(723,"开发工程师",10);
arrjob[266] = new Item(724,"结构工程师",10);
arrjob[267] = new Item(461,"试制工程师",10);
arrjob[268] = new Item(725,"省模",10);
arrjob[269] = new Item(726,"模具补师",10);
arrjob[270] = new Item(727,"数控工程师",10);
arrjob[271] = new Item(433,"油汽储运",10);
arrjob[272] = new Item(387,"检测技术/仪器",10);
arrjob[273] = new Item(386,"压铸模",10);
arrjob[274] = new Item(385,"钢结构工程师",10);
arrjob[275] = new Item(390,"传感器",10);
arrjob[276] = new Item(199,"液压传动",10);
arrjob[277] = new Item(202,"精密机械",10);
arrjob[278] = new Item(200,"模具设计",10);
arrjob[279] = new Item(97,"机电一体化",10);
arrjob[280] = new Item(98,"电气自动化",10);
arrjob[281] = new Item(384,"机械工程师",10);
arrjob[282] = new Item(388,"船舶工程",10);
arrjob[283] = new Item(389,"设备安装",10);
arrjob[284] = new Item(95,"内燃机及热能动力",10);
arrjob[285] = new Item(532,"其他机械仪器",10);
arrjob[286] = new Item(453,"修理工程师",45);
arrjob[287] = new Item(454,"修理技术员",45);
arrjob[288] = new Item(455,"汽车美容装饰",45);
arrjob[289] = new Item(456,"汽车电工",45);
arrjob[290] = new Item(457,"汽车电子研发",45);
arrjob[291] = new Item(458,"汽车销售",45);
arrjob[292] = new Item(459,"空调及电路检测",45);
arrjob[293] = new Item(728,"GPS管理维护",45);
arrjob[294] = new Item(460,"汽车业其他",45);
arrjob[295] = new Item(533,"建筑师",15);
arrjob[296] = new Item(130,"建筑设计",15);
arrjob[297] = new Item(534,"土木工程师",15);
arrjob[298] = new Item(211,"结构设计",15);
arrjob[299] = new Item(129,"施工管理/施工员",15);
arrjob[300] = new Item(402,"工民建",15);
arrjob[301] = new Item(405,"基础地下工程",15);
arrjob[302] = new Item(768,"工程报建",15);
arrjob[303] = new Item(131,"工程预结算",15);
arrjob[304] = new Item(132,"工程监理",15);
arrjob[305] = new Item(535,"设备工程师",15);
arrjob[306] = new Item(404,"建材与制品",15);
arrjob[307] = new Item(403,"暖通/空调",15);
arrjob[308] = new Item(136,"给排水/水电工程",15);
arrjob[309] = new Item(644,"质量安检",15);
arrjob[310] = new Item(212,"资料档案管理",15);
arrjob[311] = new Item(133,"路桥工程",15);
arrjob[312] = new Item(134,"物业管理",15);
arrjob[313] = new Item(536,"房地产评估",15);
arrjob[314] = new Item(651,"房地产开发/策划",15);
arrjob[315] = new Item(652,"房地产销售",15);
arrjob[316] = new Item(128,"地产代理",15);
arrjob[317] = new Item(537,"其他房产/建筑",15);
arrjob[318] = new Item(73,"客户服务专员/助理",20);
arrjob[319] = new Item(66,"客户服务经理",20);
arrjob[320] = new Item(270,"客户关系管理",20);
arrjob[321] = new Item(271,"客户培训",20);
arrjob[322] = new Item(272,"客户投述处理",20);
arrjob[323] = new Item(706,"客户咨询热线/呼叫中心人员",20);
arrjob[324] = new Item(707,"客户主任",20);
arrjob[325] = new Item(273,"售前/售后支持",20);
arrjob[326] = new Item(502,"其他客服",20);
arrjob[327] = new Item(67,"大堂经理/副理",28);
arrjob[328] = new Item(68,"楼面经理/主任",28);
arrjob[329] = new Item(640,"客房部经理",28);
arrjob[330] = new Item(281,"酒店领班",28);
arrjob[331] = new Item(280,"调酒师/吧台",28);
arrjob[332] = new Item(70,"服务员/侍者",28);
arrjob[333] = new Item(71,"前台接待/礼仪/接线生",28);
arrjob[334] = new Item(72,"酒店清洁员",28);
arrjob[335] = new Item(65,"厨师/厨工",28);
arrjob[336] = new Item(69,"导游",28);
arrjob[337] = new Item(649,"景区管理",28);
arrjob[338] = new Item(648,"景区/景点",28);
arrjob[339] = new Item(650,"景区培训",28);
arrjob[340] = new Item(641,"旅行计调",28);
arrjob[341] = new Item(642,"旅游外联",28);
arrjob[342] = new Item(643,"预定/票务人员",28);
arrjob[343] = new Item(275,"社区服务",28);
arrjob[344] = new Item(556,"家政服务",28);
arrjob[345] = new Item(557,"健身教练",28);
arrjob[346] = new Item(555,"营养师",28);
arrjob[347] = new Item(761,"救生员",28);
arrjob[348] = new Item(558,"寻呼/声讯服务",28);
arrjob[349] = new Item(762,"船长",28);
arrjob[350] = new Item(282,"其他餐旅服务",28);
arrjob[351] = new Item(74,"营业部经理",30);
arrjob[352] = new Item(76,"商场管理员",30);
arrjob[353] = new Item(290,"商场经理/店长",30);
arrjob[354] = new Item(295,"商场主管/组长",30);
arrjob[355] = new Item(710,"兼职店员",30);
arrjob[356] = new Item(711,"加盟专员",30);
arrjob[357] = new Item(712,"商品主管",30);
arrjob[358] = new Item(291,"收银员",30);
arrjob[359] = new Item(292,"促销专员/导购员",30);
arrjob[360] = new Item(293,"营业员/店员",30);
arrjob[361] = new Item(294,"理货员/陈列员",30);
arrjob[362] = new Item(506,"生鲜/防腐员",30);
arrjob[363] = new Item(296,"商场其他",30);
arrjob[364] = new Item(250,"物流经理",25);
arrjob[365] = new Item(251,"物流操作员",25);
arrjob[366] = new Item(253,"运输管理",25);
arrjob[367] = new Item(520,"货运代理",25);
arrjob[368] = new Item(521,"调度专员",25);
arrjob[369] = new Item(410,"pmc物控",25);
arrjob[370] = new Item(254,"快递员",25);
arrjob[371] = new Item(252,"仓库管理员",25);
arrjob[372] = new Item(255,"单证员",25);
arrjob[373] = new Item(85,"国内贸易",25);
arrjob[374] = new Item(86,"国际贸易",25);
arrjob[375] = new Item(84,"外贸人员",25);
arrjob[376] = new Item(451,"业务跟单",25);
arrjob[377] = new Item(87,"报关员",25);
arrjob[378] = new Item(88,"船务人员",25);
arrjob[379] = new Item(522,"其他物流贸易",25);
arrjob[380] = new Item(89,"金融/投资分析",26);
arrjob[381] = new Item(507,"投资管理/顾问",26);
arrjob[382] = new Item(305,"融资管理",26);
arrjob[383] = new Item(508,"风险管理",26);
arrjob[384] = new Item(93,"资产评估",26);
arrjob[385] = new Item(90,"证券",26);
arrjob[386] = new Item(91,"外汇",26);
arrjob[387] = new Item(92,"期货",26);
arrjob[388] = new Item(80,"保险经纪人",26);
arrjob[389] = new Item(301,"保险业务员",26);
arrjob[390] = new Item(510,"保险理赔员",26);
arrjob[391] = new Item(302,"税务专员",26);
arrjob[392] = new Item(303,"银行信贷",26);
arrjob[393] = new Item(304,"银行专员",26);
arrjob[394] = new Item(306,"炒股操盘手",26);
arrjob[395] = new Item(511,"拍卖师",26);
arrjob[396] = new Item(509,"国际结算/外汇交易",26);
arrjob[397] = new Item(307,"其他金融保险",26);
arrjob[398] = new Item(233,"咨询总监",24);
arrjob[399] = new Item(234,"咨询经理",24);
arrjob[400] = new Item(235,"咨询员",24);
arrjob[401] = new Item(230,"猎头顾问",24);
arrjob[402] = new Item(231,"专业顾问",24);
arrjob[403] = new Item(409,"电子商务顾问",24);
arrjob[404] = new Item(26,"企业管理/顾问",24);
arrjob[405] = new Item(236,"信息中介",24);
arrjob[406] = new Item(519,"涉外咨询师",24);
arrjob[407] = new Item(232,"其他咨询顾问",24);
arrjob[408] = new Item(180,"律师/法律顾问",22);
arrjob[409] = new Item(448,"法务人员",22);
arrjob[410] = new Item(350,"律师助理",22);
arrjob[411] = new Item(559,"法务主管",22);
arrjob[412] = new Item(560,"产权/专利顾问/专业代理",22);
arrjob[413] = new Item(561,"其他律师/法务",22);
arrjob[414] = new Item(514,"培训总监/经理",21);
arrjob[415] = new Item(515,"高级讲师",21);
arrjob[416] = new Item(516,"培训主持",21);
arrjob[417] = new Item(517,"培训助理",21);
arrjob[418] = new Item(316,"培训生",21);
arrjob[419] = new Item(237,"培训讲师",21);
arrjob[420] = new Item(310,"专业培训",21);
arrjob[421] = new Item(518,"其他培训",21);
arrjob[422] = new Item(143,"制鞋",17);
arrjob[423] = new Item(144,"制革",17);
arrjob[424] = new Item(145,"印刷",17);
arrjob[425] = new Item(549,"裁床",17);
arrjob[426] = new Item(407,"包装工程",17);
arrjob[427] = new Item(146,"食品工程/糖酒饮料/粮油副食",17);
arrjob[428] = new Item(221,"烘焙师",17);
arrjob[429] = new Item(222,"油脂技术师",17);
arrjob[430] = new Item(148,"陶瓷技术",17);
arrjob[431] = new Item(149,"纺织技术",17);
arrjob[432] = new Item(150,"化纤技术",17);
arrjob[433] = new Item(151,"染整技术",17);
arrjob[434] = new Item(553,"其他轻工",17);
arrjob[435] = new Item(590,"陶瓷设计师",23);
arrjob[436] = new Item(591,"陶瓷选料",23);
arrjob[437] = new Item(592,"陶瓷化验",23);
arrjob[438] = new Item(593,"陶瓷手工成型",23);
arrjob[439] = new Item(594,"瓷片技术员",23);
arrjob[440] = new Item(595,"陶瓷抛光工",23);
arrjob[441] = new Item(596,"陶瓷刮平工",23);
arrjob[442] = new Item(597,"陶瓷印花",23);
arrjob[443] = new Item(598,"陶瓷喷釉",23);
arrjob[444] = new Item(599,"陶瓷装罐工",23);
arrjob[445] = new Item(600,"计量员",23);
arrjob[446] = new Item(406,"窑炉技术员",23);
arrjob[447] = new Item(601,"其他陶瓷",23);
arrjob[448] = new Item(58,"家具设计",27);
arrjob[449] = new Item(602,"家具工艺结构",27);
arrjob[450] = new Item(603,"家具打样",27);
arrjob[451] = new Item(104,"木工",27);
arrjob[452] = new Item(604,"开料工",27);
arrjob[453] = new Item(605,"扪皮工",27);
arrjob[454] = new Item(606,"修边工",27);
arrjob[455] = new Item(607,"打磨工",27);
arrjob[456] = new Item(608,"排钻工",27);
arrjob[457] = new Item(105,"喷漆工",27);
arrjob[458] = new Item(610,"修色/配色师",27);
arrjob[459] = new Item(609,"实木贴皮",27);
arrjob[460] = new Item(186,"雕刻工",27);
arrjob[461] = new Item(746,"油漆工",27);
arrjob[462] = new Item(611,"其他家具",27);
arrjob[463] = new Item(59,"服装设计",29);
arrjob[464] = new Item(552,"服装打样/制版",29);
arrjob[465] = new Item(550,"面料辅料开发",29);
arrjob[466] = new Item(612,"服装陈列",29);
arrjob[467] = new Item(613,"服装跟单",29);
arrjob[468] = new Item(614,"电脑放码员",29);
arrjob[469] = new Item(653,"电脑排唛",29);
arrjob[470] = new Item(462,"纸样师傅",29);
arrjob[471] = new Item(142,"制衣/缝纫工",29);
arrjob[472] = new Item(615,"裁床",29);
arrjob[473] = new Item(551,"板房/楦头",29);
arrjob[474] = new Item(333,"烫部",29);
arrjob[475] = new Item(655,"尾部（打枣、打钉、开凤眼）",29);
arrjob[476] = new Item(656,"尾部（初查、中查、尾查）",29);
arrjob[477] = new Item(616,"车位工",29);
arrjob[478] = new Item(654,"车间收发",29);
arrjob[479] = new Item(617,"印染",29);
arrjob[480] = new Item(657,"包装",29);
arrjob[481] = new Item(618,"洗水技术",29);
arrjob[482] = new Item(658,"手擦技术",29);
arrjob[483] = new Item(659,"马骝技术",29);
arrjob[484] = new Item(747,"试衣专员",29);
arrjob[485] = new Item(748,"布料仓管员",29);
arrjob[486] = new Item(749,"服装IE员",29);
arrjob[487] = new Item(619,"其他服装",29);
arrjob[488] = new Item(750,"验布专员",29);
arrjob[489] = new Item(751,"毛/针/梭织专员",29);
arrjob[490] = new Item(54,"产品包装设计",31);
arrjob[491] = new Item(620,"印刷设备工程师",31);
arrjob[492] = new Item(621,"印刷工艺师",31);
arrjob[493] = new Item(622,"材料工程师",31);
arrjob[494] = new Item(623,"机长/领机",31);
arrjob[495] = new Item(624,"印刷机操作工",31);
arrjob[496] = new Item(625,"电脑照排/电子分色",31);
arrjob[497] = new Item(626,"文字录入/排版",31);
arrjob[498] = new Item(627,"版房",31);
arrjob[499] = new Item(628,"烫金/模贴",31);
arrjob[500] = new Item(629,"调墨工/调色员",31);
arrjob[501] = new Item(772,"啤板工",31);
arrjob[502] = new Item(773,"造纸管理技术员",31);
arrjob[503] = new Item(630,"复合/涂布/扫描",31);
arrjob[504] = new Item(631,"折页压痕/装订",31);
arrjob[505] = new Item(632,"流延/吹膜",31);
arrjob[506] = new Item(633,"分切工/切纸工",31);
arrjob[507] = new Item(634,"制袋/切袋",31);
arrjob[508] = new Item(635,"模压/割膜/裁切",31);
arrjob[509] = new Item(636,"糊盒/注塑",31);
arrjob[510] = new Item(637,"其他印刷",31);
arrjob[511] = new Item(565,"珠宝鉴定",16);
arrjob[512] = new Item(566,"首饰设计",16);
arrjob[513] = new Item(567,"首饰倒模 ",16);
arrjob[514] = new Item(568,"首饰起板",16);
arrjob[515] = new Item(569,"首饰雕腊 ",16);
arrjob[516] = new Item(570,"首饰执模 ",16);
arrjob[517] = new Item(571,"首饰镶嵌",16);
arrjob[518] = new Item(572,"首饰执边",16);
arrjob[519] = new Item(573,"首饰电金",16);
arrjob[520] = new Item(574,"首饰学徒",16);
arrjob[521] = new Item(334,"首饰车花",16);
arrjob[522] = new Item(335,"首饰唧蜡",16);
arrjob[523] = new Item(336,"首饰打磨",16);
arrjob[524] = new Item(337,"首饰链技",16);
arrjob[525] = new Item(338,"首饰批花",16);
arrjob[526] = new Item(575,"配石/分石员",16);
arrjob[527] = new Item(576,"珠宝营业员",16);
arrjob[528] = new Item(752,"石坯设计员",16);
arrjob[529] = new Item(753,"成品分选员",16);
arrjob[530] = new Item(754,"打边工",16);
arrjob[531] = new Item(774,"抛光工",16);
arrjob[532] = new Item(220,"游戏程序开发设计",46);
arrjob[533] = new Item(776,"游戏策划",46);
arrjob[534] = new Item(755,"珠宝维修",16);
arrjob[535] = new Item(577,"珠宝销售",16);
arrjob[536] = new Item(756,"珠宝店长",16);
arrjob[537] = new Item(757,"珠宝导购",16);
arrjob[538] = new Item(777,"游戏界面美工",46);
arrjob[539] = new Item(778,"游戏测试",46);
arrjob[540] = new Item(779,"游戏设备维修",46);
arrjob[541] = new Item(780,"游戏推广",46);
arrjob[542] = new Item(580,"珠宝首饰其他",16);
arrjob[543] = new Item(781,"网络游戏营销",46);
arrjob[544] = new Item(782,"游戏单片机编程",46);
arrjob[545] = new Item(783,"三维动画制作",46);
arrjob[546] = new Item(784,"flash动画制作",46);
arrjob[547] = new Item(785,"场地技术员",46);
arrjob[548] = new Item(120,"化工技术",14);
arrjob[549] = new Item(786,"卖场收银",46);
arrjob[550] = new Item(787,"商务导购",46);
arrjob[551] = new Item(121,"精细化工",14);
arrjob[552] = new Item(122,"高分子化工",14);
arrjob[553] = new Item(209,"分析化工",14);
arrjob[554] = new Item(210,"有机、无机化工",14);
arrjob[555] = new Item(124,"玻璃/化工工艺",14);
arrjob[556] = new Item(123,"化验员",14);
arrjob[557] = new Item(125,"电镀技术员",14);
arrjob[558] = new Item(217,"塑胶/注塑",14);
arrjob[559] = new Item(126,"化学药剂/化肥",14);
arrjob[560] = new Item(127,"生物化工/制药",14);
arrjob[561] = new Item(401,"热处理/废品处理",14);
arrjob[562] = new Item(554,"其他生化制药",14);
arrjob[563] = new Item(157,"中医",35);
arrjob[564] = new Item(158,"西医",35);
arrjob[565] = new Item(156,"护士",35);
arrjob[566] = new Item(411,"骨科医生",35);
arrjob[567] = new Item(412,"牙科医生",35);
arrjob[568] = new Item(413,"脑科医生",35);
arrjob[569] = new Item(414,"皮肤科医生",35);
arrjob[570] = new Item(154,"妇科医生",35);
arrjob[571] = new Item(444,"眼科医生",35);
arrjob[572] = new Item(434,"外科医生",35);
arrjob[573] = new Item(152,"内科医生",35);
arrjob[574] = new Item(153,"儿科医生",35);
arrjob[575] = new Item(415,"心理医生",35);
arrjob[576] = new Item(155,"药剂师",35);
arrjob[577] = new Item(160,"妇幼保健",35);
arrjob[578] = new Item(161,"临床医学",35);
arrjob[579] = new Item(162,"针灸推拿",35);
arrjob[580] = new Item(163,"桑拿技师",35);
arrjob[581] = new Item(164,"化妆/美容/整形师",35);
arrjob[582] = new Item(165,"兽医/宠物医生",35);
arrjob[583] = new Item(758,"医药代表",35);
arrjob[584] = new Item(759,"足浴技师/洗头技师",35);
arrjob[585] = new Item(760,"发型师/美甲师",35);
arrjob[586] = new Item(159,"其他医师",35);
arrjob[587] = new Item(562,"幼师",33);
arrjob[588] = new Item(178,"职业教育",33);
arrjob[589] = new Item(179,"家教",33);
arrjob[590] = new Item(175,"高等教育",33);
arrjob[591] = new Item(176,"中等教育",33);
arrjob[592] = new Item(167,"文化艺术",33);
arrjob[593] = new Item(169,"广播电视",33);
arrjob[594] = new Item(171,"厂报编辑",33);
arrjob[595] = new Item(440,"社会科学",33);
arrjob[596] = new Item(166,"记者/采编",33);
arrjob[597] = new Item(351,"体育/竞技",33);
arrjob[598] = new Item(172,"图书管理员",33);
arrjob[599] = new Item(177,"小学/幼儿教育",33);
arrjob[600] = new Item(763,"教师",33);
arrjob[601] = new Item(352,"其他文教",33);
arrjob[602] = new Item(137,"园艺师",38);
arrjob[603] = new Item(138,"花卉技师",38);
arrjob[604] = new Item(141,"污水处理",38);
arrjob[605] = new Item(140,"环保技术员",38);
arrjob[606] = new Item(139,"园林环境设计",38);
arrjob[607] = new Item(764,"废气处理员",38);
arrjob[608] = new Item(765,"通风工程技术员",38);
arrjob[609] = new Item(563,"其他园林环保",38);
arrjob[610] = new Item(181,"饲养员",40);
arrjob[611] = new Item(182,"饲料加工",40);
arrjob[612] = new Item(183,"种植技术员",40);
arrjob[613] = new Item(185,"植保技术员",40);
arrjob[614] = new Item(450,"粮食/油加工",40);
arrjob[615] = new Item(184,"农产品保鲜技术",40);
arrjob[616] = new Item(564,"其他农林渔牧",40);
arrjob[617] = new Item(441,"歌手",42);
arrjob[618] = new Item(342,"演员",42);
arrjob[619] = new Item(168,"摄影",42);
arrjob[620] = new Item(343,"模特儿",42);
arrjob[621] = new Item(439,"影视编剧",42);
arrjob[622] = new Item(170,"节目主持",42);
arrjob[623] = new Item(173,"DJ/音效师",42);
arrjob[624] = new Item(174,"化妆/美容师",42);
arrjob[625] = new Item(341,"影音器材管理",42);
arrjob[626] = new Item(340,"影视制作/策划",42);
arrjob[627] = new Item(344,"影视其他",42);
arrjob[628] = new Item(419,"测绘技术",43);
arrjob[629] = new Item(420,"地质治金",44);
arrjob[630] = new Item(435,"采矿设计",44);
arrjob[631] = new Item(436,"矿山机械设计",44);
arrjob[632] = new Item(645,"公务员",50);
arrjob[633] = new Item(646,"科研人员",50);
arrjob[634] = new Item(647,"实习生",50);
arrjob[635] = new Item(219,"其他",50);