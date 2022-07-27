function Book(title,author,pages,read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  // this.info = function () {
  //   if (this.read===true){
  //     this.status = 'finished reading'
  //   } else {
  //     this.status = 'not read yet'
  //   }
  //   return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`
  // };
  if (read == true) {
    this.status = 'finished reading'
  } else {
    this.status = 'not read yet'
  };
  
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`
  };
}
