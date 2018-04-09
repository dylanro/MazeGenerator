class Cell {
  constructor(x, y ,w ,h) {
    this.x = x; //rework how the variables here related to the maze settings
    this.y = y;
    this.w = w;
    this.h = h;

    this.top = true;
    this.right = true;
    this.bottom = true;
    this.left = true;

    this.visited = false;

    this.neighbors = [];
  }

  display() {
    //console.log(index(this.x, this.y));
    if(this.top == true) {
      rc.line(this.x*this.w, this.y*this.h, this.x*this.w+this.w, this.y*this.h);
      console.log("thattest");
    }
  }

  removeEdge(num) {
    switch (num) {
        case 1: this.top = false; break;
        case 2: this.right = false; break;
        case 3: this.bottom = false; break;
        case 4: this.left = false; break;
    }
  }
}

//gets the array index of a cell from its row/col number
function index(x, y) {
  return x + y * numOfCols;
}
