public class LinkList {
    class Node{
        String data;
        Node next;
        Node(String data){
            this.data = data;
            this.next = null;
        }
    }
    Node head;

//    add first
    public void addFirst(String data){
        Node newNode = new Node(data);
        if (head == null){
            head = newNode;
            return;
        }
        newNode.next = head;
        head = newNode;
    }

//    add last
    public void addLast(String data){
        Node newNode = new Node(data);
        if (head == null){
            head = newNode;
            return;
        }
        Node curr = head;
        while (curr.next != null){
            curr = curr.next;
        }
        curr.next = newNode;
    }

//    delete first
    public void deleteFirst(){
        head = head.next;
    }

//    delete last
    public void deleteLast(){
        Node curr = head;
        while (curr.next.next != null){
            curr = curr.next;
        }
        curr.next = null;
    }



//    print linked list
    public void printList(){
        if (head == null){
            System.out.println("empty list");
            return;
        }
        Node curr = head;
        while (curr != null){
            System.out.print(curr.data + " -> ");
            curr = curr.next;
        }
        System.out.println("null");
    }

//    size of
    public void size(){
        int count = 0;
        Node curr = head;
        while (curr != null){
            count++;
            curr = curr.next;
        }
        System.out.println(count);
    }

    public static void main(String[] args){
        LinkList list = new LinkList();
        list.addFirst("a");
        list.addFirst("b");
        list.addFirst("d");
        list.printList();
        list.addLast("huh");
        list.printList();
        list.deleteFirst();
        list.printList();
        list.deleteLast();
        list.printList();
        list.size();
    }
}
