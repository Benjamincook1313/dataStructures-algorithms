import data from "./data.js";
import Node from "./Node.js";
import { nodes } from "./createTree.js";
const { morgan, taylor, zuza, rachna, kyo, dawa, riley, mien, seamus, harlow, les, endi, isi } = nodes;

class Tree {
  constructor(root){
    this.root = root;
  }

  depthFirstSearch(name){
    if(this.root.name === name) return this.root;

    let stack = [...this.root.children];

    let ops = 0

    while(stack.length > 0){
      ops++;
      let current = stack.pop();
      if(current.name === name) return {current, ops};

      stack.push(...current.children);
    }

    return "Person does not exist";
  }

  breadthFirstSearch(name){
    if(this.root.name === name) return this.root;
    let queue = [...this.root.children];
    let count = 0;

    while(queue.length > 0){
      count++;
      let current = queue.shift();
      if(current.name === name) return {current, count};

      queue.push(...current.children);
    }

    return "Person does not exist";
  }
}
// GRANDCHILDREN DESCENDANTS
kyo.addChild(riley);
dawa.addChildren([seamus, harlow]);
riley.addChildren([les, endi]);
mien.addChild(isi);

// CHILDREN DESCENDANTS
taylor.addChild(kyo);
zuza.addChildren([dawa, riley]);
rachna.addChild(mien);

// ROOT NODE CHILDREN
morgan.addChildren([taylor, zuza, rachna]);

// ROOT NODE
const tree = new Tree(morgan);

console.log(tree);
console.log(tree.depthFirstSearch("taylor"));
console.log(tree.breadthFirstSearch("taylor"));
console.log('\n-----------------------------------------\n');
console.log(tree.depthFirstSearch("riley"));
console.log(tree.breadthFirstSearch("riley"));
