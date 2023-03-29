#include <iostream>
using namespace std;

class node{
    public:
    int data;
    node* next;

    node(int val){
        data = val;
        next = NULL;
    }
};

node* head = NULL;

void insB(int val){
    node* n = new node(val);

    if (head == NULL){
        head = n;
        return;
    }
    else {
        n -> next = head;
        head = n;
    }
}

void print(node* head){
    node* temp = head;

    while (temp != NULL){
        cout << temp -> data << " ";
        temp = temp -> next;
    }
    cout << endl;
}

int main(){
    insB(1);
    insB(3);
    print(head);
    return 0;
}