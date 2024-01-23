import data from "./data.js";

export default class Node {
  constructor(name, children = []){
    this.name = name;
    this.children = children;
  }

  getName(){
    return this.name;
  }

  setName(name){
    this.name = name;
  }

  addChild(child){
    this.children = [...this.children, child];
  }

  addChildren(children){
    this.children = children;
  }
}
