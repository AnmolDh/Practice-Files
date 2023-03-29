// insert at head and tail in doubly linked list
// deletion at position in doubly linked list

#include <iostream>
using namespace std;

class node{
    public:
    int data;
    node* next;
    node* prev;

    node(int val){
        data = val;
        next = NULL;
        prev = NULL;
    }
};

node* head = NULL;

void insertAtHead(int val){
    node* n = new node(val);

    n -> next = head;
    if (head != NULL){
        head -> prev = n;
    }
    head = n;
}

void insertAtTail(int val){
    if (head == NULL){
        insertAtHead(val);
        return;
    }

    node* n = new node(val);
    node* temp = head;

    while (temp -> next != NULL){
        temp = temp -> next;
    }
    temp -> next = n;
    n -> prev = temp;
}

void deletion(int pos){
    if (pos == 1){
        node* delhead = head;
        head = head -> next;
        head -> prev = NULL;

        delete delhead;
    }

    node* temp = head;
    int count = 1;

    while (temp != NULL && count != pos){
        temp = temp -> next;
        count++;
    }

    temp -> prev -> next = temp -> next;
    if (temp -> next != NULL){
        temp -> next -> prev = temp -> prev;
    }

    delete temp;
}

void display(){
    node* temp = head;
    while (temp != NULL){
        cout << temp -> data << " ";
        temp = temp -> next;
    }
    cout << endl;
}

int main(){
    insertAtTail(2);
    insertAtTail(3);
    insertAtHead(1);
    insertAtTail(43);
    insertAtTail(4);
    insertAtTail(5);

    display();
    
    deletion(4);
    
    display();
    
    return 0;
}