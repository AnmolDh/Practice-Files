// insert node at beginning

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

void insertAtBeginning(int val){
    node* n = new node(val);

    if (head == NULL){
        head = n;
        return;
    }

    n -> next = head;
    head = n;
}

void display(node* head){
    node* temp = head;
    while (temp != NULL){
        cout << temp -> data << " ";
        temp = temp -> next;
    }
    cout << endl;
}

int main(){
    insertAtBeginning(1);
    insertAtBeginning(2);
    display(head);
    return 0;
}