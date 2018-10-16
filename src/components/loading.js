var Loading = {}
var loadNode = null
Loading = {
  install: function(Vue) {
    Vue.prototype.$loading = {
      start(txt) {
        var loadingTpl = Vue.extend({
          data() {
            return {
              text: txt
            }
          },
          render(h) {
            const vm = this
            return h('div', {
              class: 'loading-wrapper'
            }, [
              h('div', {
                class: 'loading-wrapper__inner'
              }, vm.text)
            ])
          }
        })
        loadNode = new loadingTpl()
        var loadingTpl = loadNode.$mount().$el;
        document.body.appendChild(loadingTpl);
      },
      hide() {
        document.querySelector('.loading-wrapper').remove()
      }
    }
  }
}
export default Loading
