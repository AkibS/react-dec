class Person{
    constructor(msg){
        this.message = msg;
    }
    saymessage(){
        return this.message.toUpperCase();
    }
}
class Human{
    constructor(msg){
        this.message = msg;
    }
    saymessage(){
        return this.message.toUpperCase();
    }
}

export default Person;
export { Human };