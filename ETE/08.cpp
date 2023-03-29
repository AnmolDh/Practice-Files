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

void insE(int val){
    node* n = new node(val);
    node* temp = head;

    if (head == NULL){
        head = n;
        return;
    }

    while (temp -> next != NULL){
        temp = temp -> next;
    }
    temp -> next = n;
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
    insE(1);
    insE(3);
    insE(6);
    print(head);
    return 0;
}