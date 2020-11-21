var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  // newTree.parent = (this); // parens here?
  // newTree.sibling = this.children;
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  debugger;
  let found = false;
  const findValue = function(tree) {
    if (tree.value === target) { found = true; }
    for (var child of tree.children) {
      findValue(child);
    }
    return found;
  };

  return findValue(this);

  // if (this.value === target) { return true; }
  // if (this.children.length === 0) { return false; }

  // for (var child of this.children) {
  //   // conditional here ?
  //   return child.contains(target);
  // }

  // return false;
};

// treeMethods.contains = function(target) {

//     if(this.parent.parent.children[i - 1]) { do stuff }
//   // TEST does current value equal target
//     // YES return win
//     // NO
//       // does current node have siblings !!!to its right!!!?
//       // YES?
//         // iterate over all syblings
//           // for each sibling call contains
//       // NO?
//         // does current node have children
//           // YES ?
//             // iterate over all children
//               // for each child call contains
//           // NO ?
//             // does your parent have a sybling !!!to its left!!!?
//             // YES?
//               // does your sibling to the left have a child?
//               // YES?
//                 // iterate over all children
//                   // for each child call contains
//               // NO?
//             //NO?
// };


// var containsValue = false;
// if (this.value === target) { containsValue = true; }
// for (var i = 0; i < this.children.length; i++) {
//   var childArray = this.children[i];
//   containsValue = this.children[i].contains(target);
//   if (this.value !== target) { this.children[i + 1]; }
// }
// return containsValue;
// };


// treeMethods.contains = function(target) {
//   //use this

//   // search every child for target
//   // if no target return false

//   /*
//   // create function called containsValue
//     // if this.value === target
//       // return true -- we win
//     // else
//       // this.children.length > 1
//           // iterate over this.childen
//             // make recurisive call on current child
// */
//   // return false;

//   // if (this.children.length === 0) { return false; }

//   // _.each(this.children, function (child, key, obj) {
//   //   if (child.value === target) { return true; }
//   //   return child.contains(target);
//   // });
//   var returnVariable = false;
//   for (var i = 0; i < this.children.length; i++) {
//     if (this.value === target) { returnVariable = true; }
//     returnVariable = this.children[i].contains(target);
//   }
//   //
//   return returnVariable;
// };


// var mine = Tree('kitten');
// console.log(mine);
/*
 * Complexity: What is the time complexity of the above functions?
 */


// var mine = Tree();
// console.log(mine);
// mine.addChild(100);
// console.log(mine);
// mine.addChild(101);
// console.log(mine);
// mine.contains(202);










// treeMethods.contains = function(target) {
//   // console.log(this.value);
//   for (var child of this.children) {
//     if (child.value === target) { console.log('winner'); }
//     console.log(child.value);
//     child.contains(target);
//   }
//   console.log('===');
// };

/*
function(target) {
  console.log(val)
  children.each {
    function(target)
  }
}
*/