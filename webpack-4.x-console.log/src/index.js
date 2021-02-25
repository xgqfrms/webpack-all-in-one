
const log = console.log;

// 注释 ✅
function test() {
    // console.log('✅ webpack 4.x console.log testing');
    const id = `666🚀`;
    alert(`id = ${id}`);
    return console.log('✅ webpack 4.x console.log return');;
}
test();

console.error('❌ webpack 4.x console.error testing');
console.warn('⚠️☢️⚠☣️ webpack 4.x console.error testing');
console.log('✅ webpack 4.x console.log testing');

