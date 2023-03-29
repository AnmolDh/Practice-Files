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

node* top = NULL;

void push(int val){
    node* n = new node(val);
    n -> next = top;
    top = n;
}

void pop(){
    node* temp = top;
    top = temp -> next;
    delete temp;
}

void peek(){
    cout << top -> data;
}

int empty(){
    if (top == NULL){
        return 1;
    } else{
        return 0;
    }
}

void display(){
    node* temp = top;
    while (temp != NULL){
        cout << temp -> data << " ";
        temp = temp -> next;
    }
    cout << endl;
}

int main(){
    push(1);
    push(2);
    push(3);
    pop();
    display();
    empty();
    peek();
    return 0;
}