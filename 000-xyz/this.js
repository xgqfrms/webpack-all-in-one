const log = console.log;

function func() {
    this.name = `xgqfrms`;
};

func.prototype.print = function () {
    let name  = this.name;
    log(`\nname =`, name);
};

const obj = {
    name: "webgeeker",
};

log(`\nfunc =`, func);
log(`\nfunc.print =`, func.print);
// undefined

func.prototype.print.call(obj);
// name = webgeeker

func.prototype.print.apply({name: "new name"});
// name = new name

func.prototype.print({name: "new name"});
// name = undefined

func.prototype.print(this);
// name = undefined

func.prototype.print(obj);
// name = undefined

func.prototype.print();
// name = undefined

// func.print();
// TypeError: func.print is not a function

const fn = new func();

log(`\nfn`, fn);
log(`\nfn.print =`, fn.print);

fn.print();
// name = xgqfrms

fn.print.call(obj);
// name = webgeeker

fn.print.apply({name: "new name"});
// name = new name
