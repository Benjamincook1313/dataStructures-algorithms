import Node from "./Node.js";

const people = ["morgan", "taylor", "zuza", "rachna", "kyo", "dawa", "riley", "mien", "seamus", "harlow", "les", "endi", "isi"];

const nodes = {};

for(let person of people){
  nodes[person] = new Node(person);
}

// const { morgan, taylor, zuza, rachna, kyo, dawa, riley, mien, seamus, harlow, les, endi, isi } = nodes;


console.log(nodes);

export { nodes };