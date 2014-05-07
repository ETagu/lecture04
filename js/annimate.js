var endFlipFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	foxkeh.removeEventListener("animationend", endFlipFoxkeh);

	foxkeh.setAttribute("class", "");
};
//foxkehのフリップの終了について
//slidein-foxkeh内のimgをここで選択

var endSlideinFoxkehAndStartFlipFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");

	foxkeh.removeEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);
	foxkeh.addEventListener("animationend", endFlipFoxkeh);

	foxkeh.setAttribute("class", "flip");
};
//foxkehのアニメーションの始まりと終わりの動きについて
//slidein-foxkeh内のimgを選択


var startSlideinFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	foxkeh.setAttribute("class", "slidein");

	foxkeh.addEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);
};
//slidein-foxkeh内のimgにfoxkehという名前を付ける。
//foxkehのclass属性にslideinを追加。
//foxkehに”animationend"というイベントが起きたらendslideinFoxkehAndStartFlipFoxehを行う。
var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);
//slideinFoxehButtonという名前をindex.html内に定義する。
//slideinFoxehButtonに"click"というイベントが起きたらstartSlideinFoxkehを行う。
