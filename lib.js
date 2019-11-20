function NotNull(val)
{
  return val != "";
}

function strip (str)
{   
    return str_res = str.split(" ").filter(NotNull).join(" ");
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

function sort(str)
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

    for (var i = 0; i < str_arr.length; i++)
    {
        var max = i;
        for (var k = i+1; k < str_arr.length; k++)
        {
            if (str_arr[max].length < str_arr[k].length) max = k;
        }
        if (i!= max)
        {
            buf = str_arr[max];
            str_arr[max] = str_arr[i];
            str_arr[i] = buf;
        }
        str_new += str_arr[i];
        if(i!=str_arr.length-1)str_new += " ";
    }
    return str_new;
}

module.exports = { strip: strip, sort: sort, reverse: reverse };