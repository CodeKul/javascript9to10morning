var number = 1221; 
revers_num = 0;
while(number != 0)
    {
        rev = number%10;
        revers_num = revers_num*10+rev;
        //document.write(revers_num);
        number = parseInt(number/10);
    }
    document.write(revers_num);