// insert at head and tail in circular linked list

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

void insertAtHead(int val){
    node* n = new node(val);

    if (head == NULL){
        n -> next = n;
        head = n;
        return;
    }

    node* temp = head;

    while (temp -> next != head){
        temp = temp -> next;
    }
    temp -> next = n;
    n -> next = head;
    head = n;
}

void insertAtTail(int val){
    if (head == NULL){
        insertAtHead(val);
        return;
    }

    node* n = new node(val);
    node* temp = head;

    while (temp -> next != head){
        temp = temp -> next;
    }

    temp -> next = n;
    n -> next = head;
}

void display(){
    node* temp = head;
    do{
        cout << temp -> data << " ";
        temp = temp -> next;
    } while (temp != head);
    
    cout << endl;
}

int main(){
    insertAtTail(2);
    insertAtTail(3);
    insertAtTail(4);
    insertAtHead(1);
    display();
    return 0;
}