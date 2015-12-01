WIDTH = 700;
HEIGHT = 700;

var svg = d3.select("#graph").append("svg:svg").attr("width", WIDTH).attr("height", HEIGHT);
var lineg = svg.append("g");
var dotg = svg.append("g");
var centerg = svg.append("g");


var groups = []; // クラスター
var dots = [] // ノード

init(); // クラスター、ノードの初期化
draw(); // 描画

function init() {
	var N = 100;	// ノード数
	var K = 5;		// クラスター数

	for (var i = 0; i < K; i++) {
		// クラスターの初期値（色、中心座標）を定義
		var g = {
			dots:[],
			color: 'hsl(' + (i * 360/K) + ', 100%, 50%)',
			center: {
				x: Math.random() * WIDTH,
				y: Math.random() * HEIGHT
			},
			init: {
				center:{}
			}
		};

		g.init.center = {
			x: g.center.x,
			y: g.center.y
		};

		groups.push(g); // クラスターを配列に追加
	}

	for (i = 0; i < N; i++) {
		// ノードの初期値（座標、所属クラスター）を定義
		var dot = {
			x: Math.random() * WIDTH,
			y: Math.random() * HEIGHT,
			group: undefined // 所属クラスター
		};

		dot.init = {
			x: dot.x,
			y: dot.y,
			group: dot.group
		};
		dots.push(dot);
	}
}


function draw() {
	var circles = dotg.selectAll('circle')
	.data(dots)
	.enter()
	.append('circle');

	// 再度新規作成した時にアニメーションするように
	circles.transition()
	.duration(500)
	.attr('cx', function(d) { return d.x; })
	.attr('cy', function(d) { return d.y; })
	.attr('r', 5);
}