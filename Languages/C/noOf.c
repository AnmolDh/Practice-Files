#include <stdio.h>

int handshake(int persons){
    int h_count = persons*(persons-1)/2;
    return h_count;   
}

int main(){
    int count = handshake(15);
    printf("%d", count);
}