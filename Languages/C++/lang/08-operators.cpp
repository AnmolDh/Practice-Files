#include <iostream>
using namespace std;

int main(){
    int x, y;

    // Arithmetic Operators
    int add = 2 + 2;
    int sub = 2 - 2;
    int multiply = 2 * 2;
    int divide = 2 / 2;
    int modulus = 2 % 2;
    int inc = 0;
    inc++;
    int dec = 1;
    dec--;

    // Assignmet Operators
    x = 5;
    x += 2;
    x -= 1;
    x *= 2;
    x /= 1;
    x %= 1;

    // Comparision Operators
    x == y;
    x != y;
    x > y;
    x < y;
    x >= y;
    x <= y;

    // Logical Operators
    x < 5 && x < 10;
    x < 5 || x < 10;
    !(x < 5 && x < 10);
    return 0;
}