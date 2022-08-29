const fs = require('fs');

function create_file(file_name, content)
{
    fs.writeFile(file_name, content, function(err)
    {
      if(err)
      {
          return console.log(err)
      }
      return console.log(content)
    ;
    })
  }

  create_file("textfile.txt","The app that won the category for Best Campus Cup Solution is Uniwise. The developer is Tebogo Serogole who is the student of Tswane University of Technology")

function read_file(file_name)
  {
    fs.readFile(file_name, 'utf8', function(err,data)
    {
      if(err)
      {
          return console.log(err)
      }
      return console.log(data)
    ;
    })
  }

  read_file("textfile.txt")
