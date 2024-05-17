#include <iostream>
using namespace std;

class Node{
  public:
  int data;
  Node* next;

  Node(int d){
    data = d;
    next = NULL;
  }
};

Node* arrToLL(int arr[]){
  Node* h = new Node(arr[0]);
  Node* temp = h;
  for (int i = 1; i < 5; i++){
    Node* t = new Node(arr[i]);
    temp -> next = t;
    temp = t;
  }
  return h;
}

void countLL(Node* temp){
  int count = 0;
  while (temp != NULL){
    count++;
    temp = temp->next;
  }
  cout << count << endl;

}

int main(){
  int arr[5] = {1, 2, 3, 4, 5};
  Node* h = arrToLL(arr);

  countLL(h);

  while (h != NULL){
    cout << h->data << " ";
    h = h-> next; 
  }
  
}