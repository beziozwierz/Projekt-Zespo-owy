class Div {
  constructor(type, height, width, parent) {
    this.inner = [];
    this.type = type;
    this.parent = parent;
    this.height = height;
    this.width = width;
    this.float = null;
  }
}

var global_name = "HTML";

var dragged = new Div(global_name, '100px','100px',null);
var pathToEdited = null;
model = new Div('Name', 0,0,null);
model.inner[0] = new Div('MainModel', '100%','100%',model);
