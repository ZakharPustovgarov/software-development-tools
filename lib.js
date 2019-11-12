function strip (str)
{
    var str_new = new String;
    var check = false;
    for (var i = 0; i < str.length; i++)
    {
        if (str[i] != " " && i == 0)
        {
          str_new = str_new + str[i]
          check = true;
        }
        else if (str[i] == " " && str[i+1] == " ")
        {

        }
        else if (str[i] == " " && i == str.length-1 )
        {

        }
        else if (check == false && str[i] == " " && str[i+1] != " ")
        {
          check = true;
        }
        else str_new = str_new + str[i];
    }  
    return str_new;
}

function reverse(str)
{
    var str_new = new String;
    var str_arr = new Array();
    var buf = "";
    for (var i = 0; i < str.length; i++)
    {
        if((str[i] != " " && str[i+1] == " ") || (i == str.length-1 && str[i] != " "))
        {
            buf += str[i]; 
            str_arr.push(buf);
            buf = "";
        }
        else if(str[i] != " " && str[i+1] != " ")
        {
            buf += str[i]; 
        }
    }

    for (var i = str_arr.length-1; i > -1; i--)
    {
    	
        str_new += str_arr[i];
        if(i!=0)str_new += " ";
    }
    return str_new;
}