public class Solution {
    public int maxDepth(TreeNode root) {
        if(root==null) return 0;
        int leftdep=maxDepth(root.left);
        int rightdep=maxDepth(root.right);
        int maxdep=leftdep>rightdep? leftdep+1:rightdep+1;
        return maxdep;
    }
    
    public static void main(String[] args) {
    	Solution s=new Solution();
    	System.out.println(s.maxDepth(new TreeNode(15)));
	}
}