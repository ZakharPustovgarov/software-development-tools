// Фильтр для удаления пустых элементов массива
function NotNull(val) 
{
  return val != "";
}

// Правила сравнения
function compareLength(a, b) 
{
    if (a.length > b.length) // если длина а больше длины b, то a ставиться перед b
    {
        return -1;
    }
    else if (a.length < b.length) // если длина b больше длины a, то b ставиться перед a
    {
        return 1;
    }
    else return 0; // в ином случае порядок не меняется
}

// Функция для удаления лишних пробелов
function strip (str)
{   
    return str_res = str.split(" ").filter(NotNull).join(" ");
}

// Функция для изменения порядка слов в обратную сторону
function reverse(str)
{
    return str_res = strip(str).split(" ").reverse().join(" ");
}

// Функция для сортировки слов по убыванию количества символов в слове
function sort(str)
{
    return str_res = strip(str).split(" ").sort(compareLength).join(" ");
}


module.exports = { strip: strip, sort: sort, reverse: reverse };