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