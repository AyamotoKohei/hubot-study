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
};