var Birds =
    [
        // birds
        // 1-
        new Bird('hojiro', 'ホオジロ'),
        new Bird('hiyodori', 'ヒヨドリ'),
        new Bird('misosazai', 'ミソサザイ'),
        new Bird('uguisu', 'ウグイス'),
        new Bird('ooruri', 'オオルリ'),
        new Bird('kibitaki', 'キビタキ'),
        new Bird('kogera', 'コゲラ'),
        new Bird('tobi', 'トビ'),
        new Bird('kakesu', 'カケス'),
        new Bird('suzume', 'スズメ'),
        // 11-
        new Bird('kisekirei', 'キセキレイ'),
        new Bird('bosogarasu', 'ハシボソガラス'),
        new Bird('gabicho', 'ガビチョウ'),
        new Bird('ikaru', 'イカル'),
        new Bird('jobitaki', 'ジョウビタキ'),
        new Bird('komadori', 'コマドリ'),
        new Bird('yabusame', 'ヤブサメ'),
        new Bird('sankouchou', 'サンコウチョウ'),
        new Bird('fukurou', 'フクロウ'),
        new Bird('aobato', 'アオバト'),
        // 21-
        new Bird('kijibato', 'キジバト'),
        new Bird('yamadori', 'ヤマドリ'),
        new Bird('koruri', 'コルリ'),
        new Bird('ruribitaki', 'ルリビタキ'),
        new Bird('mozu', 'モズ'),
        new Bird('shijukara', 'シジュウカラ'),
        new Bird('yamasemi', 'ヤマセミ'),
        new Bird('kawasemi', 'カワセミ'),
        new Bird('higara', 'ヒガラ'),
        new Bird('akahara', 'アカハラ'),
        // 31-
        new Bird('toratsugumi', 'トラツムギ'),
        new Bird('aogera', 'アオゲラ'),
        new Bird('oakagera', 'オオアカゲラ'),
    ];

function Bird(filePrefix, name) {
    this.filePrefix = filePrefix;
    this.name = name;
    this.favorite = false;
    this.pick = function () {
        playSe(this.filePrefix);
    }
    this.markFavorite = function () {
        this.favorite = !this.favorite;
    }
}