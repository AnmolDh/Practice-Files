// insert node at specific position

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

void insertAtPosition(int val, int pos){
    node* temp = new node(val);

    if (pos < 1){
        cout << "\nposition should be >= 1";
    } else if(pos == 1){
        temp -> next = head;
        head = temp;
    } else{
        node *cur = head;
        for (int i = 1; i < pos - 1; i++){
            if (cur != NULL){
                cur = cur -> next;
            }
        }

        if (cur != NULL){
            temp -> next = cur -> next;
            cur -> next = temp;
        } else {
            cout << "\nthe previous node is full";
        }
    }
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
    insert(4);
    insertAtPosition(3, 3);
    display();
    return 0;
}