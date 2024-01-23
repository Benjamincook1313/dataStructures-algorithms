

class BinarySearchNode {
  constructor(data, left=null, right=null){
    this.data = data;
    this.left = left;
    this.right = right;
  }

  find(dataToFind){
    let current = this;

    while (current !== null){
      if(current.data === dataToFind) return current;
      else if(dataToFind < dataToFind ) current = current.left;
      else current = current.right
    }
  }
}