import 'phaser';
import config from './Config/config';
import Model from './Model';
import GameScene from './Scenes/GameScene';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import CreditsScene from './Scenes/CreditsScene';
import OptionsScene from './Scenes/OptionsScene';
 
class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Options',OptionsScene);
    this.scene.add('Credits',CreditsScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Boot', BootScene);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.start('Boot');
  }
}
 
window.game = new Game();