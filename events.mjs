import EventEmitter from "events";

const event = new EventEmitter();
// 监听 监听消息数量默认是10个
event.on("test", (data) => {
  console.log(data);
});

event.emit("test", "hello"); //派发事件

// 只想监听一次 once

event.once('testOnce', (data) => {
    console.log(data)
})

event.emit('testOnce', 'ljt1')
event.emit('testOnce', 'ljt2')

// 如何取消监听
const fn = (data) => {
    console.log(data)
}
event.on('testOff', fn)
event.off('testOff', fn)
event.emit('testOff', 'ljt');
