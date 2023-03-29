// insert node at end

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

void insertAtEnd(int val){
    node* n = new node(val);

    if (head == NULL){
        head = n;
        return;
    }

    node* temp = head;
    while (temp -> next != NULL){
        temp = temp -> next;
    }

    temp -> next = n;
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
    insertAtEnd(1);
    insertAtEnd(2);
    display();
    return 0;
}