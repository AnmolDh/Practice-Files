// count number of nodes

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

void count(){
    node* temp = head;
    int count = 0;
    while (temp != NULL){
        count++;
        temp = temp -> next;
    }
    cout << count << endl;
}

int main(){
    insert(1);
    insert(2);
    count();
    return 0;
}