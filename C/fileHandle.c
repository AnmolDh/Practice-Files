#include <stdio.h>
void main()
{
    FILE *fp;
    char ch;
    fp = fopen("fileHandle.c", "r");
    while (1)
    {
        ch = fgetc(fp);
        if (ch == EOF)
            break;
        printf("%c", ch);
    }
    fclose(fp);
}

/*
#include <stdio.h>
void main()
{
    FILE *fp;
    char ch;
    char buff[255];
    fp = fopen("fileHandle.c", "r");

    while (fscanf(fp, "%s", buff) != EOF){
        printf("%s", buff);
    }

    fclose(fp);
}
*/