import Per from './person.js';

export class Hero extends Per{
    canTalk = true;
    power;
    city;
    _firstname;
    _lastname;
    static canFly = true;
    constructor(pow, cty, fname, lname, msg){
        super(msg);
        this.power = pow;
        this.city = cty;
        this._firstname = fname;
        this._lastname = lname;
    }
    static canRun(){
        return "yes i can run";
    }
    fullname(){
        return this._firstname+" "+this._lastname;
    }
    get firstname(){
        return this._firstname;
    }
    set firstname(nfirstname){
        this._firstname = nfirstname;
    }
}

