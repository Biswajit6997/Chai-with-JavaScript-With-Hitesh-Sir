#include <stdio.h>
#include <string.h>


void load_menu(void);
void add(void);
void update(void);
void search(void);
void view(void);
struct emp e;
FILE *fp ;
struct emp
{
char id[5];
char name[100];
} ;




int main(int argc, char** argv)


{
    load_menu();
    return 0;
}


void load_menu(void)
    {
    int choice;


    do
    {
        printf("\n*****DEPARTMENT SYSTEM*****\n\n");
        printf("1. Add Records\n");
        printf("2. Update Records\n");
        printf("3. Search Records\n");
        printf("4. View Records\n");
        printf("5. Exit\n\n");
        printf("Choose one:\n");
        scanf("%d",&choice);


        switch(choice)
        {
            case 1: add();
                break;
            case 2: update();
                break;
            case 3: search();
                break;
                case 4: view();
                break;
            case 5: printf("Quitting program!\n");
                system("close");
                break;
            default: printf("Invalid choice!\n");
        }


        } while (choice != 5);
        system("cls");
        }


void add(void)
        {


        system("cls");


        fp = fopen ( "Department System.txt", "a" );
        if( fp == NULL )
        {
                printf("Cannot open file.\n");
                printf("Program stopped.\n");
                system("close");
         }
                printf("\n*****ADD RECORDS*****\n");
                printf("\nEnter Department ID : ");
                scanf("%s",e.id);
                printf("\nEnter Department Name: ");
                scanf("%s",e.name);
                fscanf(fp,"%s %s\n\n",e.id, e.name);
                fprintf(fp,"%s %s\n\n",e.id, e.name);
                fclose(fp);
        return;
        }


void update(void)
{


}


void search(void)
{
    char sid[5];
        system("cls");
        printf("\n*****SEARCH RECORDS*****\n");
        fp = fopen ("Department System.txt", "r");
        printf("\nEnter Department ID : ");
        scanf("%s",sid);


        printf("\nID        Name");
        while(!feof(fp)){
        fscanf(fp,"%s %s",&e.id,&e.name);
        if(strcmp(e.id,sid)==0)
        {
                printf("\n%s      %s ",e.id,e.name);
        }
}
        printf("\n\n");
        fclose(fp);
}






void view (void)
        {


        system("cls");
        printf("\n*****VIEW RECORDS*****\n");
        fp = fopen ( "Department System.txt", "r" ) ;
        if( fp == NULL )
        {
                printf("Cannot open file.\n");
                printf("Program stopped.\n");
                system("close");
         }
        printf("\nID        Name");
        while ( fscanf ( fp, "%s %s ", e.id, &e.name) != EOF )
        printf ( "\n%s      %s", e.id, e.name);
        printf("\n\n");
        fclose ( fp ) ;
        return;
}