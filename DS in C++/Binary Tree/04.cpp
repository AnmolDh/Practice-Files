#include <iostream>
using namespace std;

class node{
    public:
    int data;
    node* left;
    node* right;

    node(int val){
        data = val;
        left = NULL;
        right = NULL;
    }
};

node* insert(node* root, int val){
    if (root == NULL){
        return new node(val);
    }

    if (root -> data > val){
        root -> left = insert(root -> left, val);
    }

    else if (root -> data < val){
        root -> right = insert(root -> right, val);
    }

    return root;
}

void preorder(node* root){
    if (root == NULL){
        return;
    }

    cout << root -> data << " ";
    preorder(root -> left);
    preorder(root -> right);
}

node* search(node* root, int val){
    if (root == NULL){
        return NULL;
    }

    if (root -> data == val){
        return root;
    }

    if (root -> data > val){
        return search(root -> left, val);
    }

    else if (root -> data < val){
        return search(root -> right, val);
    }
}

int main(){
    node* root = NULL;
    root = insert(root, 1);
    insert(root, 2);
    insert(root, 3);
    insert(root, 4);
    preorder(root);

    if (search(root, 3) == NULL){
        cout << "no";
    }
    return 0;
}