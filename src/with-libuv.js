import {setTimeout} from 'uv.so'

globalThis.setTimeout = setTimeout

setTimeout(() => console.log('B'), 0)

Promise.resolve().then(() => console.log('A'))
