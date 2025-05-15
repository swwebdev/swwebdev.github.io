import './style.css';
import Phaser, { Scene } from 'phaser';

const sizes = {
  width: 800,
  height: 800
}

const speedDown = 400;

const gameStartDiv = document.querySelector('#gameStartDiv');
const gameStartBtn = document.querySelector('#gameStartBtn');
const gameEndDiv = document.querySelector('#gameEndDiv');
const winLoseSpan = document.querySelector('#winLoseSpan');
const scoreSpan = document.querySelector('#scoreSpan');

class GameScene extends Phaser.Scene{
  constructor(){
    super('scene-game');
    this.player;
    this.cursor;
    this.playerSpeed = speedDown + 1000;
    this.target;
    this.points = 0;
    this.lives = 3;
    this.speedMultiplier = 0;
    this.textScore;
    this.textLives;
    this.bgMusic;
    this.collectSound;
    this.missSound;
    this.emitter;
  }

  preload() {
    this.load.image('bg', '/assets/background.png');
    this.load.image('rocket', '/assets/rocket.png');
    this.load.image('bolt', '/assets/bolt.png' );
    this.load.image('sparkle', '/assets/particle.png' );

    this.load.audio('bgMusic', '/assets/Level2.wav');
    this.load.audio('collect', '/assets/collect.wav');
    this.load.audio('miss', '/assets/miss.wav');
  }

  create() {
    this.scene.pause('scene-game')

    this.bgMusic = this.sound.add('bgMusic');
    this.collectSound = this.sound.add('collect');
    this.missSound = this.sound.add('miss');
    this.bgMusic.loop = true;
    this.bgMusic.play();

    this.add.image(0, 0, 'bg').setOrigin(0, 0);
    this.player = this.physics.add.image(0, sizes.height -200, 'rocket').setOrigin(0, 0);
    this.player.setImmovable(true);
    this.player.body.allowGravity = false;
    this.player.setCollideWorldBounds(true);
    this.player.setImmovable(true);
    this.player.setSize(200, 15).setOffset(0, 150);

    this.target = this.physics.add.image(0, 0, 'bolt').setOrigin(0, 0);
    this.target.setMaxVelocity(0, speedDown);

    this.physics.add.overlap(this.target, this.player, this.targetHit, null, this);

    this.cursor = this.input.keyboard.createCursorKeys();

    this.textScore = this.add.text(10, 10, 'Score: 0', {
      font: '25px C64',
      fill: '#FFFFFF',
    });

    this.textLives = this.add.text(sizes.width - 220, 10, 'Lives: 3', {
      font: '25px C64',
      fill: '#FFFFFF',
    });

    this.emitter = this.add.particles(0, 0, 'sparkle', {
      speed: 200, 
      gravityY: speedDown - 200,
      scale: 0.04,
      duration: 150,
      emitting: false
    })
    this.emitter.startFollow(this.player, this.player.width / 2, this.player.height / 2, true);
  }

  update() {
    if (this.target.y >= sizes.height) {
      this.missSound.play();
      this.lives--;
      this.textLives.setText(`Lives: ${this.lives}`)
      this.target.setY(0);
      this.target.setX(this.getRandomX());
    } 

    if (this.lives < 1) {
      this.gameOver();
    }

    const {left, right} = this.cursor;

    if (left.isDown) {
      this.player.setVelocityX(-this.playerSpeed);
    } else if (right.isDown) {
      this.player.setVelocityX(this.playerSpeed);
    } else {
      this.player.setVelocityX(0);
    }
  }

  getRandomX() {
    return Math.floor(Math.random() * 700);
  }

  targetHit() {
    this.emitter.start();
    this.collectSound.play();
    this.target.setY(0);
    this.target.setX(this.getRandomX());
    this.points++;
    this.speedMultiplier += 10;
    this.target.setMaxVelocity(0, speedDown + this.speedMultiplier);
    this.textScore.setText(`Score: ${this.points}`)
  }

  gameOver() {
    this.sys.game.destroy(true);

    gameEndDiv.style.display = 'flex';
    if(this.points >= 100) {
      scoreSpan.textContent = this.points;
      winLoseSpan.textContent = 'Nice job!'
    } else {
      scoreSpan.textContent = this.points;
      winLoseSpan.textContent = 'Well...you tried...'
    }
  }
}

const config = {
  type: Phaser.WEBGL,
  width: sizes.width,
  height: sizes.height,
  canvas: gameCanvas,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {y:speedDown},
      // debug: true
    }
  },
  scene: [GameScene]
}

const game = new Phaser.Game(config);

gameStartBtn.addEventListener('click', () => {
  gameStartDiv.style.display = 'none';
  game.scene.resume('scene-game');
})