'use strict';

// モジュールとしてファイルを外部に公開
module.exports = robot => {
    // 大文字小文字を問わず、文字がマッチすれば関数を実行する
    robot.hear(/hello>/i, msg => {
        // msgオブジェクトからユーザIDを受け取る
        const user_id = msg.message.user.id;

        // 「Hello, @ユーザー ID」と発言をする
        msg.send(`Hello <@${user_id}>`);
    });

    // 文字がマッチすれば関数を実行する
    robot.hear(/おみくじ/i, msg => {
        // msgオブジェクトからユーザIDを受け取る
        const username = msg.message.user.name;

        // おみくじのオブジェクト
        const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
        const lot = lots[Math.floor(Math.random() * lots.length)];

        // おみくじの内容とユーザ名を発言する
        msg.send(`${lot}, ${username}`);
      });
};