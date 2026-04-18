import numpy as np
import typing


class Node(object):

    def __init__(self, info, left, right):
        self.info = info
        self.left = left
        self.right = right


def visualize_tree(root: Node, depth: int=0, type : str = "Root") -> None:
    if root is None:
        return
    print('%s%s> %s' % ('--' * depth, type, root.info))
    if root.left is not None:
        visualize_tree(root.left, depth + 1, 'L')
    if root.right is not None:
        visualize_tree(root.right,  depth + 1, 'R')

def count_leafs(root: Node) -> int:
    """
    Counts the number of leafs in a binary tree. Recursive function.

    :param root: The root of the (sub)tree
    :return: the number of leafs
    """
    if root is None:
        return 0
    if root.left is None and root.right is None:
        return 1

    return count_leafs(root.left) + count_leafs(root.right)    


    



def get_height(root: Node) -> int:
    """
    Determines the height of a binary tree. Recursive function.

    :param root: The root of the (sub)tree
    :return: the height of the (sub)tree
    """
    if root is None:
        return -1

    return max(get_height(root.left), get_height(root.right)) + 1





def get_highest_value(root: Node) -> int:
    """
    Gets the highest value out of a binary tree (not a binary search tree!!)
    Recursive function.

    :param root: The root of the (sub)tree
    :return: the highest value within this (sub)tree
    """


    if root.left is None:
        if root.right is None:   #case where root is leaf
            return root.info    
        else:   #case where only left root is None
            max_right_subtree = get_highest_value(root.right)
            return max(max_right_subtree, root.info)       #ensure max left is smaller
    elif root.right is None:    #case where only root right in None
        max_left_subtree = get_highest_value(root.left)
        return max(max_left_subtree, root.info)       #ensure max right is smaller
    else:
        max_left_subtree = get_highest_value(root.left)
        max_right_subtree = get_highest_value(root.right)


    return max(max_left_subtree, max_right_subtree , root.info)    
        


def get_greatest_smaller_value(root: Node) -> Node:
    """
    Returns the node with the greatest value smaller than the root.
    You can assume that this is a binary search tree. Also, you can
    assume that this function will only be used if such smaller values
    exists. Hint: This function is not recursive. Think of the binary 
    search tree property

    :param root: The root of the (sub)tree
    :return: the Node with the greatest value smaller than the root
    """
    if root.left is None:   #edge case
        return None
    
    next_greatest_smaller = root.left    #subtree of only smaller values

    while next_greatest_smaller.right is not None:   #find bigger values in the subtree  of smaller values until None bigger
        next_greatest_smaller = next_greatest_smaller.right

    return next_greatest_smaller 


def get_smallest_greater_value(root: Node) -> Node:
    """
    Returns the node with the smallest value greater than the root.
    You can assume that this is a binary search tree. Also, you can
    assume that this function will only be used if such greater values
    exists. Hint: This function is not recursive. Think of the binary 
    search tree property

    :param root: The root of the (sub)tree
    :return: the Node with the smallest value greater than the root
    """
    if root.right is None:   #edge case
        return None
    
    next_smallest_greater = root.right    #subtree of only bigger values

    while next_smallest_greater.left is not None:   #find smaller values in the subtree  of bigger values until None smaller
        next_smallest_greater = next_smallest_greater.left

    return next_smallest_greater 
    


def is_binary_search_tree(root: Node) -> bool:
    """
    Returns whether the tree is a valid binary search tree. Hint:
    Recursive function. You can under some assumptions make use of
    get_smallest_greater_value and get_greatest_smaller_value.

    :param root: The root of the (sub)tree
    :return: true iff it is a valid binary search tree
    """
    if root is None:
        return True

    greatest_smaller = get_greatest_smaller_value(root)
    if greatest_smaller is not None:
        if greatest_smaller.info > root.info:
            return False
        
    smallest_greater = get_smallest_greater_value(root)
    if smallest_greater is not None:        
        if smallest_greater.info < root.info:
            return False

    left_subtree_bool = is_binary_search_tree(root.left)
    right_subtree_bool = is_binary_search_tree(root.right) 


    return left_subtree_bool and right_subtree_bool  

        


def search(root: Node, value: int) -> typing.Tuple[Node, typing.Optional[Node]]:
    """
    Given a binary search tree, returns a Tuple with the following two items:
     - the parent of the node with a certain value
     - the node with a certain value
    Note that having access to the parent will prove useful
    other functions, such as adding and removing.

    If the tree does not contain the value, return
    the parent of the node where it should have been
    placed, and a None value.

    :param root: The root of the (sub)tree
    :return: tuple of the nodes as described above
    """
    node = root

    while node is not None:
        if value == node.info:
            return root, node    
        elif value > node.info:
            root = node
            node = node.right
        elif value < node.info:
            root = node
            node = node.left
    
    return root, None


def add(root: Node, value: int) -> bool:
    """
    Adds a new node to the binary search tree, respecting the condition that
    for each node all values in the left sub-tree are smaller than its value,
    and all values in the right subtree are greater than its value.
    Only adds the node with the value, if it does not exist yet in the tree.

    :param root: the root of the (sub)tree
    :param value: the value to be added
    :return: true upon success, false upon failure
    """
    search_value_tuple = search(root, value)
    if search_value_tuple[1] is not None:
        return False

    if value > search_value_tuple[0].info:
        search_value_tuple[0].right = Node(value, None, None)
    else:
        search_value_tuple[0].left = Node(value, None, None)

    return True    



def remove(root: Node, value: int) -> bool:
    """
    Removes a node from the binary search tree, respecting the condition that
    for each node all values in the left sub-tree are smaller than its value,
    and all values in the right subtree are greater than its value.
    Only removes the node with the value, if it does exist in the tree.

    :param root: the root of the (sub)tree
    :param value: the value to be deleted
    :return: true upon success, false upon failure
    """
    search_value_tuple = search(root, value)
    parent = search_value_tuple[0]
    node = search_value_tuple[1]

    if node is None:
        return False

    
    node_is_right = True        #assume node is right of parent, doesnt affect egde case: unused when root.info == value
    if parent.left is node:     #figure out if node is left or right of parents, change var to False if not right, small optimization
        node_is_right = False  

    #convert to boolean values so I can use it for all cases, including XOR
    bool_left_is_none = bool(node.left is None)  
    bool_right_is_none = bool(node.right is None) 

    

    #case 1: leaf node case + parent is not node in case of removing only root node, should return false
    if bool_left_is_none and bool_right_is_none and parent is not node:    
        if node_is_right:   
            parent.right = None
        else:
            parent.left = None

        return True     

    #case 2: node has 1 child subtree case and handles edge case where the node is also the root, 
    if bool_left_is_none ^ bool_right_is_none and parent is not node:      
        if bool_left_is_none:   # the right child subtree should be the new child of parent
            new_child = node.right
        else:                   # the left child subtree should be the new child of parent
            new_child = node.left

        if node_is_right:   #if node is right of parents, replace parent.right with new_child, else parent.left        
            parent.right = new_child
        else:
            parent.left = new_child

        return True
    else:   #case 3: node has 2 subtree children or edge cases: tree of size 1 or node = parent = root node with 1 child 
        new_node = get_greatest_smaller_value(node)

        if bool(new_node is None):   #handles edge case where node is root with 1 subtree and greatest_smaller returned None
            new_node = get_smallest_greater_value(node)     #node should be replaced with new_node and new_node removed from old place

        if new_node is False:   #case where tree has 1 node only, removing results in empty tree
            return False

        remove(root, new_node.info)
        node.info = new_node.info       #replace value

        return True





    







    



    #switch / match cases don't work in codegrade!  I'll let my TA know.
    """
    node_is_right = True        #assume node is right of parent
    if search_value_tuple[0].left is search_value_tuple[1]:     #figure out if node is left or right of parents, change var to False if not right
        node_is_right = False  

    remove_cases_var = 0    #int var to switch cases and prevent redundant if-check, 0=2 child nodes, 1=1 child node, 2 = no child nodes, leaf    

    if search_value_tuple[1].left is None:
        remove_cases_var += 1

    if search_value_tuple[1].right is None:
        remove_cases_var += 1


    match remove_cases_var:
        case 0: # no child nodes

        case 1:
            if node_is_right:


        case 2:     #runs if leaf node, meaning both left and right are None of the node
            if node_is_right:   
                search_value_tuple[0].right = None
            else:
                search_value_tuple[0].left = None

    """




