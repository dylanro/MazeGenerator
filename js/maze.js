class Maze {
  constructor(config) {
    this.cols = config.cols;
    this.rows = config.rows;
    this.w = config.width;
    this.h = config.height;

    this.stack = [];

    this.fillCells();

    this.current = cells[0];
  }

  fillCells() {
    for (let y = 0; y < this.cols; y++) {
      for (let x = 0; x < this.rows; x++) {
        cells.push(new Cell(x, y, this.w / this.cols, this.h / this.rows));
      }
    }
  }

  depthSearch() {

    this.current.visited = true;
    this.next = this.current.getRandomNeighbor();

      if (this.next != null) {

        this.stack.push(this.current);

        if (this.next.x > this.current.x) {
          //next is to the right
          this.current.removeEdge(2);
          this.next.removeEdge(4);
        }

        if (this.next.x < this.current.x) {
          //next is to the left
          this.current.removeEdge(4);
          this.next.removeEdge(2);
        }

        if (this.next.y > this.current.y) {
          //next is on the bottom
          this.current.removeEdge(3);
          this.next.removeEdge(1);
        }

        if (this.next.y < this.current.y) {
          //next is on top of current
          this.current.removeEdge(1);
          this.next.removeEdge(3);
        }

        this.current = this.next;
        this.current.visited = true;

      } else if (this.stack.length > 0) {
        this.current = this.stack.pop();
      }
    }

  display() {
    cells.forEach(function(element) {
      element.display();
    });
  }
}