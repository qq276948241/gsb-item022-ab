#!/usr/bin/env node
"use strict";

// 按开尔文把色温说成冷暖。低于三千三是暖，从三千三到五千三之前是中，五千三及以上是冷。

function 判冷暖(开尔文) {
  if (开尔文 < 3300) {
    return "暖";
  }
  if (开尔文 < 5300) {
    return "中";
  }
  return "冷";
}

function 主程序(参数) {
  if (参数.length !== 1 || !/^[0-9]+开$/.test(参数[0])) {
    process.stderr.write("没法说冷暖：请给出一个不小于零的整数，后面紧跟开\n");
    return 2;
  }
  var 数字文本 = 参数[0].slice(0, -1);
  var 开尔文 = Number(数字文本);
  if (!Number.isSafeInteger(开尔文)) {
    process.stderr.write("没法说冷暖：请给出一个不小于零的整数，后面紧跟开\n");
    return 2;
  }
  process.stdout.write(判冷暖(开尔文) + "\n");
  return 0;
}

if (require.main === module) {
  process.exit(主程序(process.argv.slice(2)));
}

module.exports = { 主程序: 主程序, 判冷暖: 判冷暖 };
