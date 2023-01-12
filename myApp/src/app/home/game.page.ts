import Phaser from 'phaser';
import { Component, OnInit } from '@angular/core';

import { Scene1 } from '../../client/src/Scene1';
import { Scene2 } from '../../client/src/Scene2';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class HomePage implements OnInit {

  ngOnInit() {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: "game-container",
      physics: {
          default: "arcade",
          arcade: {
              gravity: { y: 0 }
          }
      },
      scene: [Scene1, Scene2],
    };
    const game = new Phaser.Game(config);
  }
}
