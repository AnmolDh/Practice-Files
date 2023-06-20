// reverse a linked list

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

void insert(int val){
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

void reverse(){
    node *temp = NULL;
    node *prev = NULL;
    node *current = head;
    while(current != NULL) {
        temp = current->next;
        current->next = prev;
        prev = current;
        current = temp;
    }
    head = prev;
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
    insert(1);
    insert(2);
    insert(3);
    reverse();
    display();
    return 0;
}