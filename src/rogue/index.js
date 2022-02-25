import Character from '../character';

class Rogue extends Character{
  constructor(name){
    super(name);
    this.attackCount =0;
  }
  talk() {
    return super.talk().toLowerCase().replace('!', '.');
  }

  attack() {
    this.attackCount += 1;
    if(this.attackCount % 5 !== 0){
      return 5;
    }
    else {
      this.health -=4;
      return super.attack();
    }
  }
}

export default Rogue;
