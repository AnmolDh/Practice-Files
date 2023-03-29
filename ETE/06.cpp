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

void print(node* head){
    node* temp = head;

    while (temp != NULL){
        cout << temp -> data << " ";
        temp = temp -> next;
    }
    cout << endl;
}

int main(){
    node* first;
    node* second;
    node* head = first;
    first -> data = 12;
    first -> next = second;
    second -> data = 33;
    second -> next == NULL;

    print(head);

    return 0;
}