#include <iostream>
using namespace std;

int main()
{
    int i = 0;
    while (i < 5)
    {
        cout << i << endl;
        i++;
    }

    int j = 6;
    do
    {
        cout << j << endl;
        j++;
    } while (j < 10);

    for (int k = 10; k <= 15; k++)
    {
        cout << k << endl;
    }
    return 0;
}