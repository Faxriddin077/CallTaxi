// Vue masked text
import StringMask from 'string-mask';

// const app = Vue.createApp({})
// app.config.globalProperties.$myGlobalVariable = globalVariable
// on vue 2
// Vue.prototype.$myGlobalVariable = globalVariable
const phoneFormatter = new StringMask("(##) ###-##-##");
const numberFormatter = new Intl.NumberFormat('uz-Uz', {
    style: 'decimal'
});

function unmask(value) {
    return value.toString().replaceAll(/([A-Za-z- ()])/g, '')
}

export const mask = {
    methods: {
        phoneFormatter: value => phoneFormatter.apply(value),
        price: value => numberFormatter.format(value) + "\rso\u2018m",
        unmask: value => unmask(value)
    }
}
