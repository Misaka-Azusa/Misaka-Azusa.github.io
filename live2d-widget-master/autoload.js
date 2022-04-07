// 注意：live2d_path 参数应使用绝对路径1�7
const live2d_path = "https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/";
//const live2d_path = "/live2d-widget/";

// 封装异步加载资源的方泄1�7
function loadExternalResource(url, type) {
	return new Promise((resolve, reject) => {
		let tag;

		if (type === "css") {
			tag = document.createElement("link");
			tag.rel = "stylesheet";
			tag.href = url;
		}
		else if (type === "js") {
			tag = document.createElement("script");
			tag.src = url;
		}
		if (tag) {
			tag.onload = () => resolve(url);
			tag.onerror = () => reject(url);
			document.head.appendChild(tag);
		}
	});
}

// 加载 waifu.css live2d.min.js waifu-tips.js
if (screen.width >= 768) {
	Promise.all([
		loadExternalResource(live2d_path + "waifu.css", "css"),
		loadExternalResource(live2d_path + "live2d.min.js", "js"),
		loadExternalResource(live2d_path + "waifu-tips.js", "js")
	]).then(() => {
		initWidget({
			waifuPath: live2d_path + "waifu-tips.json",
			//apiPath: "https://live2d.fghrsh.net/api/",
			cdnPath: "https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/"
		});
	});
}
// initWidget 第一个参数为 waifu-tips.json 的路径，第二个参数为 API 地址
// API 后端可自行搭建，参��1�7 https://github.com/fghrsh/live2d_api
// 初始化看板娘会自动加载指定目录下的1�7 waifu-tips.json

console.log(`
  く__,.ヘヽ.        /  ,ー､ 〄1�7
           ＄1�7 ', !-┢� 1�7-i  /  /´
           ／｀ｄ1�7'       L/／｀ヽ､
         /   ＄1�7,   /|   ,   ,       ',
       ｄ1�7   / /- 1�7/  ｄ1�7  L_ ﾄ1�7 ツ1�7!   i
        ﾄ1�7 ﾄ1�7 7ｲ｀ﾄ1�7   ﾄ1�7'ｄ1�7-ﾄ､!ハ|   |
          !,/7 '0'     ´0iソ|    |
          |.仄1�7"    _     ,,,, / |./    |
          ﾄ1�7'| i＄1�7.ｄ1�7,,__  _,.や1�7 /   .i   |
            ﾄ1�7'| | / k_７_/ﾄ1�7'ツ1�7,  ﾄ1�7.  |
              | |/i 〈|/   i  ,.ﾄ1�7 |  i  |
             .|/ /  ｉ：    ﾄ1�7!    ＄1�7  |
              kツ1�7>､ﾊ    _,.ﾍ､    /ｄ1�7!
              !'〄1�7//｢�Ｔ1�7', ＄1�7 ｢�'7'ｰr'
              ﾄ1�7'ヽL__|___i,___,ンﾚ|ツ1�7
                  ﾄ1�7-,/  |___./
                  'ｄ1�7'    !_,.:
`);
