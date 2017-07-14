/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : juhuimai

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-07-14 16:34:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goods` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `price` decimal(10,1) DEFAULT NULL,
  `Curprice` decimal(10,1) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '泰国新鲜甜酸角 进口新鲜水果罗望子甜角', '2645_thumb_G_1453053185435.jpg', '63.9', '53.3', '进口水果', '泰国新鲜酸角');
INSERT INTO `goods` VALUES ('2', '4斤装泰国进口龙眼 去枝 小核新鲜桂圆水果湿桂圆', '2644_thumb_G_1453052042594.jpg', '47.4', '39.5', '进口水果', '泰国进口龙眼');
INSERT INTO `goods` VALUES ('3', '南非进口红西柚葡萄柚 新鲜水果 酸爽味苦回甘', '2643_thumb_G_1453051289358.jpg', '56.5', '46.3', '进口水果', '南非进口西红柚');
INSERT INTO `goods` VALUES ('4', '（测试商品）山竹大果 约2斤 泰国进口水果 新鲜水果', '2154_thumb_G_1440703593858.jpg', '56.4', '47.3', '进口水果', '山竹大果');
INSERT INTO `goods` VALUES ('5', '（测试商品）山竹大果 约2斤 泰国进口水果 新鲜水果', '2152_thumb_G_1440703315484.jpg', '33.6', '28.5', '进口水果', '山竹大果');
INSERT INTO `goods` VALUES ('6', '海南青芒 海南特产 热季热销产品 芒果1-2个 约2斤装', '2151_thumb_G_1440703065166.jpg', '65.3', '56.9', '进口水果', '海南青芒');
INSERT INTO `goods` VALUES ('7', '苹果陕西红富士80#苹果水果10斤装 苹果 新鲜水果', '2150_thumb_G_1440702696428.jpg', '102.0', '85.5', '进口水果', '红富士苹果');
INSERT INTO `goods` VALUES ('8', '马陆夏黑葡萄1斤 【3斤起拍】 毁包赔 新鲜水果 黑提 无核 葡萄', '2149_thumb_G_1440702497705.jpg', '24.5', '20.0', '进口水果', '马六甲黑葡萄');
INSERT INTO `goods` VALUES ('9', '蟹黄包180g 火锅丸子澳门豆捞食材蟹籽包 蟹子丸 海鲜水产 鱼丸蟹类制品', '25_thumb_G_1437504443197.jpg', '22.0', '19.0', '进口食品', '蟹黄堡');
INSERT INTO `goods` VALUES ('10', '悦胜 挪威超新鲜三文鱼 三文鱼中段刺身进口海鲜 广东2份包邮 500g', '24_thumb_G_1437504375288.jpg', '97.0', '78.0', '进口海鲜', '挪威三文鱼');
INSERT INTO `goods` VALUES ('11', '澳家熊出没蓝莓双色巧克力棒饼干36g 双色涂层型饼干', '2948_thumb_G_1487108181909.jpg', '4.2', '3.5', '糖果巧克力', '澳家蓝莓巧克力');
INSERT INTO `goods` VALUES ('12', '台湾牛轧糖手工进口扎糖果花生蔓越莓', '2647_thumb_G_1453054816230.jpg', '55.9', '48.9', '糖果巧克力', '台湾牛轧糖');
INSERT INTO `goods` VALUES ('13', '日本进口零食 悠哈味觉糖UHA 100%水果3口味蓝莓葡萄果汁软糖40g', '2646_thumb_G_1453054098575.jpg', '8.6', '6.9', '糖果巧克力', '悠哈味觉糖');
INSERT INTO `goods` VALUES ('14', '德芙 巧丝夹心威化巧克力棒22.5g/条', '1995_thumb_G_1440027679094.jpg', '34.4', '30.5', '糖果巧克力', '德芙巧克力');
INSERT INTO `goods` VALUES ('15', '澳家熊出没蓝莓双色巧克力棒饼干36g 双色涂层型饼干', '1948_thumb_G_1440011782799.jpg', '44.0', '40.5', '糖果巧克力', '澳家蓝莓巧克力');
INSERT INTO `goods` VALUES ('16', '澳家熊出没草莓双色巧克力棒饼干36g 双色涂层型饼干', '1946_thumb_G_1440011676582.jpg', '434.0', '100.5', '糖果巧克力', '澳家双色巧克力');
INSERT INTO `goods` VALUES ('17', '澳家熊出没双色巧克力棒饼干36g 双色涂层型饼干', '1944_thumb_G_1440011543037.jpg', '43.0', '40.0', '糖果巧克力', '熊出没双色巧克力');
INSERT INTO `goods` VALUES ('18', '德芙脆香米牛奶巧克力12g条装 ', '1916_thumb_G_1440007687789.jpg', '37.0', '35.0', '糖果巧克力', '德芙米香牛奶巧克力');
INSERT INTO `goods` VALUES ('19', '德芙牛奶巧克力14g/块 ', '1602_thumb_G_1439918977853.jpg', '434.0', '65.0', '糖果巧克力', '德芙牛奶巧克力');
INSERT INTO `goods` VALUES ('20', '德芙 士力架 35g 休闲零食品', '1589_thumb_G_1439917547204.jpg', '234.0', '35.0', '糖果巧克力', '德芙士力架零食');
INSERT INTO `goods` VALUES ('21', '新西兰进口 纽麦福 全脂纯牛奶 250ML*24盒', '2642_thumb_G_1452813213004.jpg', '34.0', '32.0', '牛奶乳品', '新西兰进口纽麦福');
INSERT INTO `goods` VALUES ('22', '圣牧 全程有机全脂纯牛奶 200ml*24盒', '2641_thumb_G_1452811936982.jpg', '43.0', '40.0', '牛奶乳品', '圣牧有机牛奶');
INSERT INTO `goods` VALUES ('23', '西班牙进口维加Vega脱脂纯牛奶 1L', '2640_thumb_G_1452811384769.jpg', '56.0', '25.0', '牛奶乳品', '西班牙脱脂牛奶');
INSERT INTO `goods` VALUES ('24', '伊利 安慕希希腊风味酸奶 原味 205g*12', '2639_thumb_G_1452810689357.jpg', '32.0', '27.0', '牛奶乳品', '安慕希风味酸奶');
INSERT INTO `goods` VALUES ('25', 's英国原装进口uht超高温杀菌全脂牛奶1l*6盒装', '2638_thumb_G_1452809795207.jpg', '234.0', '200.0', '牛奶乳品', '英国进口牛奶');
INSERT INTO `goods` VALUES ('26', '【礼盒装】 德国进口上质全脂牛奶 1L*10盒', '2637_thumb_G_1452808895926.jpg', '34.2', '30.5', '牛奶乳品', '德国上质全脂牛奶');
INSERT INTO `goods` VALUES ('27', '伊利牛奶 QQ星儿童成长牛奶健固190ml*15', '1386_thumb_G_1440437227407.jpg', '343.0', '37.0', '牛奶乳品', '伊利QQ星');
INSERT INTO `goods` VALUES ('28', '金典纯牛奶250ml*12盒整箱装 正品保证', '1351_thumb_G_1439836665983.jpg', '42.0', '38.0', '牛奶乳品', '金典纯牛奶');
INSERT INTO `goods` VALUES ('29', '德运Devondale 脱脂高钙奶粉1kg', '74_thumb_G_1437521987425.jpg', '43.5', '40.0', '牛奶乳品', '德云脱脂高钙奶');
INSERT INTO `goods` VALUES ('30', '波兰 进口牛奶 日昇（MLEKOVITA）全脂牛奶1L*12盒', '72_thumb_G_1437521848992.jpg', '123.4', '100.0', '牛奶乳品', '波兰进口奶');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `name` varchar(255) NOT NULL COMMENT '登录用户名',
  `password` varchar(255) NOT NULL COMMENT '登录使用的密码'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('dasdasd', 'adbc91a43e988a3b5b745b8529a90b61');
INSERT INTO `user` VALUES ('asasa aa', '9079b6ee1d5ca04ab00e44e877a222ee');
INSERT INTO `user` VALUES ('111111111', 'adbc91a43e988a3b5b745b8529a90b61');
INSERT INTO `user` VALUES ('asasasasasas', '3a08fe7b8c4da6ed09f21c3ef97efce2');
INSERT INTO `user` VALUES ('lvzuyao', '033c91317f9b6795106a825cf8ef773d');
INSERT INTO `user` VALUES ('6666666666', 'dcb64c94e1b81cd1cd3eb4a73ad27d99');
INSERT INTO `user` VALUES ('lvyao11', '96e79218965eb72c92a549dd5a330112');
