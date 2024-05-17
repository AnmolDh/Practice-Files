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

Node* createLL(int n){
  Node* head = NULL;
  Node* tail = NULL;
  for (int i = 0; i < n; i++){
    int x;
    cin >> x;

    Node* newNode = new Node(x);

    if (head == NULL){
      head = newNode;
      tail = newNode;
    }else{
      tail -> next = newNode;
      tail = newNode;
    }
  }
  return head;
}

Node* deleteHead(Node* head){
  Node* temp = head;
  head = head -> next;
  delete temp;
  return head;
}

Node* deleteTail(Node* head){
  Node* temp = head;
  while (temp -> next -> next != NULL){
    temp = temp -> next;
  }
  Node* garbage = temp -> next;
  temp -> next = NULL;
  delete garbage;
  
  return head;
}

void traversal(Node* temp){
  while (temp != 0){
    cout << temp -> data << " ";
    temp = temp -> next;
  }
  cout << endl;
}

int main(){
  int n;
  cin >> n;

  Node* head = createLL(n);

  head = deleteHead(head);
  head = deleteTail(head);
  traversal(head);
}