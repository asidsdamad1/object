function Hero(img, top, left, right, size) {
    this.img = img;
    this.top = top;
    this.left = left;
    this.size = size;
    this.right = right;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            'height="' + this.size + '"' +
            'src = "' + this.img + '"' +
            'style = "top: '+this.top+/*'px; left: '+this.left*/'px;right: '+this.right+'px; position: absolute;" />';
    }

    this.moveLeft = function() {
        this.right += 20;
        console.log('ok: ' + this.right);
    }
    this.moveRight = function() {
        this.left += 20;
        console.log('ok: ' + this.left);
    }


}

var hero = new Hero('pikachu.png', 20, 70, 70 ,  200);
function start() {
    if(hero.right < window.innerWidth - hero.size) {
        hero.moveLeft();
    }else {
        var startAgain = function () {
            if(hero.left < window.innerWidth - hero.size) {
                hero.moveRight();
            }
        }
    }

    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500);
}
start();