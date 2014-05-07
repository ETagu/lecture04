var endSlideinFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
<<<<<<< HEAD
	foxkeh.setAttribute("class", "slidein");
};
//スライドを終了させるためのテキスト
//slidein-foxkeh imgからfoxkehを選択

var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
slideinFoxkehButton.addEventListener("mouseover", slideinFoxkeh);
=======
	foxkeh.setAttribute("class", "");
};
//mouseoverという動きでslideinfoxkehが発動するという動きを追加

var startSlideinFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	foxkeh.setAttribute("class", "slidein");

	foxkeh.addEventListener("animationend", endSlideinFoxkeh);
};
//foxkehのスライドのアニメーションの始まりについて
//endSlideinFoxkehの一連の動きを追加

var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);
>>>>>>> origin/make_slidein_retriable
//clickという動作をするとstartslideinfoxkehが発動するというイベントを追加
