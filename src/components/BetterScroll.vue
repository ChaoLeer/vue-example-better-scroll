<template>
<div>
  <!-- 测试当前点击列表项 -->
  <div style="color: #ff0000">{{item}}</div>
  <div ref="wrapper" class="container">
    <ul class="list-content">
      <li @click="clickItem(item)" class="list-item"
        v-for="(item,idx) in data" :key="idx">{{item}}</li>
    </ul>
  </div>
</div>
</template>
<script>
import Vue from 'vue'
import Loading from './loading'
Vue.use(Loading)
import BetterScroll from 'better-scroll'
export default {
  name: 'BetterScrollExample',
  data() {
    return {
      item: null,
      data: [], // 存储列表数据
      scroll: null, // 存储scroll实例对象
      isPullUpLoad: false, // 存储上拉加载状态
      page: 1, // 当前页码，默认为第一页加载
      row: 10 // 每页数据条数
    }
  },
  created() {
    const vm = this
    // 此处模拟页面load后的首次加载数据
    vm.getData()
  },
  mounted() {
    const vm = this
    vm.$nextTick(() => {
      // 调用初始化scroll实例方法
      vm._initScroll()
    })
  },
  methods: {
    getData() {
      const vm = this
      // 此处使用遮罩加载，防止多次触发上拉(即用户短时间内重复上拉)
      vm.$loading.start('loading...')
      // console.info('加载数据--start')

      // 此处模拟异步请求数据------------此处只是示例代码，使用时候参考即可
      // axios('/url', 'post', {
      //   page: vm.page,
      //   row: vm.row
      // }).then(res => {
      //   vm.data = res.data
      //   console.info('数据加载--end')
      //   // 数据加载完成后，赋值给列表data后，需显示调用scroll的上拉完成方法，文档API要求
      //   vm.scroll.finishPullUp()
      //   // 数据加载完成后，移除加载动画遮罩层
      //   vm.$loading.hide()
      //   // 更新上拉状态为false
      //   vm.isPullUpLoad = false
      //   // 每上拉一次，页码加一
      //   vm.page += 1
      // })

      // 下面模拟，实际分页参数等可以参考上面的代码
      setTimeout(function() {
        for(let i = 0; i < 20; i++) {
          vm.data.push({
            text: '年后' + i
          })
        }
        // console.info('数据加载--end')
        // 数据加载完成后，赋值给列表data后，需显示调用scroll的上拉完成方法，文档API要求
        vm.scroll.finishPullUp()
        // 数据加载完成后，移除加载动画遮罩层
        vm.$loading.hide()
        // 更新上拉状态为false
        vm.isPullUpLoad = false
      }, 2000)
    },
    _initScroll() {
      const vm = this
      if (!vm.$refs.wrapper) {
        return
      }
      // 初始化scroll实例
      vm.scroll = new BetterScroll(vm.$refs.wrapper, {
        probeType: 1,
        pullUpLoad: {
          threshold: 50
        }
      })
      // 注册上拉事件
      vm.scroll.on('pullingUp', function() {
        // 上拉事件触发，更新上拉状态为true--------在这里没有实质用到这个变量，有可能在其他业务功能有用
        vm.isPullUpLoad = true
        // 调用上拉后的执行方法
        vm.loadingMore()
      })
    },
    // 上拉执行方法
    loadingMore() {
      const vm = this
      vm.getData()
    },
    // 禁用滚动
    disableScroll() {
      this.scroll && this.scroll.disable()
    },
    // 启用滚动
    enableScroll() {
      this.scroll && this.scroll.enable()
    },
    // 点击列表单项
    clickItem(item) {
      this.item = item
    }
  }
}
</script>
<style>
.container {
  margin: 0 auto;
  height: 500px;
  width: 300px;
  overflow: hidden;
  border: 1px solid #cacaca;
}
.list-content{
  padding: 10px;
}
.list-item {
  border-bottom: 1px solid #cacaca;
  background: #efefef;
  color: #787878;
  list-style: none;
  line-height: 38px;
}
</style>
