function treeIntersection(tree1, tree2){
    //init empty array to hold common values between trees
    let commonVal = [];

    //New hashtable
    const treeMap = new Map();

     let _walk = (node) => {
        if (node === null) return;

        if (node.left) _walk(node.left);
        //compare values in hashtables
        if (treeMap.has(node.value)){
        commonVal.push(node.value);
        } else {
            //set values in hashtable

          treeMap.set(node.value, 1);
          }
        if (node.right) _walk(node.right);
      };

      _walk(tree1.root);
      _walk(tree2.root);

      //return common values
      return commonVal;
    }



module.exports = treeIntersection;
