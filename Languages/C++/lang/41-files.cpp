#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    // create and write to a file
    ofstream myFile("files.txt");
    myFile << "Hehe";
    myFile.close();

    // read a file
    string myText;
    ifstream MyReadFile("files.txt");

    while (getline(MyReadFile, myText))
    {
        cout << myText;
    }

    MyReadFile.close();
    return 0;
}