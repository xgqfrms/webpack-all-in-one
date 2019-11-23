const log = console.log;

// 1. constructor bug
const func = () => {
    this.name = `xgqfrms`;
    title = `arrow function`;
    log(`this.name`, this.name);
};

log(`\nfunc`, func);
log(`\nfunc.prototype`, func.prototype);
// func.prototype undefined

// 2. prototype bug

func.prototype.print = function () {
    let name  = this.name;
    log(`\nname =`, name);
};
// TypeError: Cannot set property 'print' of undefined

// const obj = {
//     name: "webgeeker",
// };

// log(`\nfunc =`, func);
// log(`\nfunc.print =`, func.print);
