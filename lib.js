function NotNull(val)
{
  return val != "";
}

function compareLength(a, b)
{
    if (a.length > b.length) 
    {
        return -1;
    }
    else if (a.length < b.length) 
    {
        return 1;
    }
    else return 0; 
}

function strip (str)
{   
    return str_res = str.split(" ").filter(NotNull).join(" ");
}

function reverse(str)
{
    return str_res = strip(str).split(" ").reverse().join(" ");
}

function sort(str)
{
    return str_res = strip(str).split(" ").sort(compareLength).join(" ");
}


module.exports = { strip: strip, sort: sort, reverse: reverse };