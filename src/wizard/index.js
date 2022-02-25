import Character from '../character';

class Wizard extends Character{
  talk() {
    return super.talk().toUpperCase();
  }

  attack() {
    if(typeof this.protectionSpell === 'undefined') this.protectionSpell = 3;
    if(this.protectionSpell > 0){
      this.protectionSpell -= 1;
      this.health +=1;
      return 2* super.attack();
    }
    this.health -=9;
    return super.attack();
  }
}

export default Wizard;
