//タイピングする文字列を用意
var textLists = [
    'elephant',
    'japanese',
    'apple',
    'banana',
    'lemon',
    'orange',
    'monkey',
    'kangaroo',
    'melon',
    'soda'
];

var checkTexts = [];

var p = document.getElementById('text');

var rule = document.getElementById('rule');


function startGame() {

    createText();

    function createText() {
        //前の文字列を削除してから次の文字列を表示する
        p.textContent = '';

        //ランダムな数値を取得する
        var rnd = Math.floor(Math.random() * textLists.length);

        //文字列を1文字ずつに分解して、それぞれにspanタグを挿入する
        checkTexts = textLists[rnd].split('').map(function (value) {
            var span = document.createElement('span');

            span.textContent = value;
            p.appendChild(span);

            return span;
        });
    }

    //キーが押されたらkeyDown関数を発動
    document.addEventListener('keydown', keyDown);

    function keyDown(e) {

        //キーボードからの入力は「e.key」に格納されている
        if (e.key === checkTexts[0].textContent) {
            //入力が正しければ、文字色を変える
            checkTexts[0].className = 'color';

            //0番目の配列要素を削除して、次の1文字を比較対象にする
            checkTexts.shift();

            //配列要素が空になったら次の問題を出す
            if (!checkTexts.length) createText();
        }
        else{
            //入力が違っていたら、文字をブルブルさせる。
            checkTexts[0].className = 'buruburu';
        }
    }
}