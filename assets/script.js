// quickly create a 640x480 canvas, returning a handle containing all kaboom functions
const k = kaboom();
console.log("yo")
// all kaboom functions are on this handle now
k.vec2();
k.go();
k.scene();
k.add();

// options
kaboom({
    width: 640, // width of canvas
    height: 480, // height of canvas
    canvas: document.getElementById("game"), // use custom canvas
    scale: 2, // pixel size (for pixelated games you might want smaller size with scale)
    clearColor: [0, 0, 1, 1], // background color (default is a checker board background)
    fullscreen: true, // if fullscreen
    crisp: true, // if pixel crisp (for sharp pixelated games)
    debug: false, // debug mode
    noGlobal: true, // don't import kaboom functions into global namespace and use the context handle returned
    plugins: [ asepritePlugin, ], // load plugins
});

// with 'global' flag, all kaboom functions are in global namespace
vec2();
go();
scene();
add([
    text("oh hi", 32),
    pos(100,100)
]);
