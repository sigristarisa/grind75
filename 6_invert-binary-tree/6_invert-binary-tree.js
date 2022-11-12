"use strict";
// --- 6. Invert Binary Tree --- //
/* Given the root of a binary tree, invert the tree, and return its root. */
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
    return TreeNode;
}());
var invertTree = function (root) {
    var _a;
    if (!root)
        return null;
    _a = [root.right, root.left], root.left = _a[0], root.right = _a[1];
    invertTree(root.left);
    invertTree(root.right);
    return root;
};
