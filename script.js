//表示するテキスト一覧
var textLists = [
    'div class="container"',
    '!doctype html',
    'meta charset="utf-8',
    'link rel="stylesheet"',
    'button onclick=',
    'script src=',
    'background-color: green;',
    'margin: 50px;',
    'padding: 10px',
    'width: 960px;',
    'height: 30px;',
    'text-decoration: none;',
    'font-size: 20px;',
    'text-align: center;',
    'button:hover',
    'cursor: pointer;',
    'color: red;',
    'display: inline-block;',
    'var',
    'function',
    'document.getElementById',
    'font-weight: bold;',
    'cursor: pointer;',
];

var checkTexts = [];

var p = document.getElementById('textArea');

//startボタンが押された、ランダムにテキストを表示する
function startGame() {

    createText();

    function createText() {
        //前の文字列を削除してから、次の文字列を表示する
        p.textContent = '';

        //ランダムな数値を取得する
        var rnd = Math.floor(Math.random() * textLists.length);

        //タイピングした文字が正しいか判定するために、文字列を1文字ずつに分解して、それぞれにspanタグを挿入する
        checkTexts = textLists[rnd].split('').map(function (value) {
            var span = document.createElement('span');

            span.textContent = value;
            p.appendChild(span);

            return span;
        });
    }

    //入力されたらkeyDown関数を発動する
    document.addEventListener('keydown', keyDown);

    function keyDown(e) {

        //キーボードからの入力は「e.key」に格納されている
        if (e.key === checkTexts[0].textContent) {
            //入力が正しければ、文字色を変える（クラスを与える）
            checkTexts[0].className = 'changeColor';

            //0番目の配列要素を削除して、次の1文字を比較対象にする
            checkTexts.shift();

            //配列要素が空になったら次の問題を出す
            if (!checkTexts.length) createText();
        }
        else {
            //入力が違っていたら、文字をブルブルさせる。
            checkTexts[0].className = 'buruburu';
        }
    }
}

function about(){
    alert('駆け出しエンジニアのタイピングゲームへようこそ！勉強の息抜きに楽しんでいってください。')
}
