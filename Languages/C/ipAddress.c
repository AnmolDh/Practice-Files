// find class of IP Address
// Class A: 1 to 126
// Class B: 128 to 191
// Class C: 192 to 223
// Class D: 224 to 239
// Class E: 224 to 254 

#include <stdio.h>
#include<string.h>


void extractIPAdd(unsigned char *sourceStr,short *ipAdd){
    unsigned short len=0;
    unsigned char oct[4]={0},cnt=0,cnt1=0,i,buf[5];
    len=strlen(sourceStr);
    for(i=0;i<len;i++){
    if(sourceStr[i]!='.'){
     buf[cnt++]=sourceStr[i];   
    }
    if(sourceStr[i]=='.' || i==len-1){
        buf[cnt]='\0';
        cnt=0;
        oct[cnt1++]=atoi(buf);
    }
    }
    ipAdd[0]=oct[0];
    ipAdd[1]=oct[1];
    ipAdd[2]=oct[2];
    ipAdd[3]=oct[3];
}

void main() {
    unsigned char ip[20]={0};
    short ipAdd[4];
    printf("\n Enter ip Address is format xxx.xxx.xxx.xxx");
    scanf("%s",ip);
    extractIPAdd(ip,&ipAdd[0]);
    printf("\n IP address : %03d.%03d.%03d.%03d",ipAdd[0],ipAdd[1],ipAdd[2],ipAdd[3]);
    if(ipAdd[0]>=0 && ipAdd[0]<=127){
        printf(" its class A IP Address ");
    }
    if(ipAdd[0]>=128 && ipAdd[0]<=191){
        printf(" its class B IP Address ");
    }
    if(ipAdd[0]>=224 && ipAdd[0]<=239){
        printf(" its class C IP Address ");
    }
    if(ipAdd[0]>=240 && ipAdd[0]<=239){
        printf(" its class D IP Address ");
    }
    if(ipAdd[0]>=240 && ipAdd[0]<=254){
        printf(" its class E IP Address ");
    }
}