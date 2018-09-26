// import router from '../../router'
// 引入 html 模板，会被作为字符串引入
import template from './index.html'

// 引入 scss, 会生成 <style> 块插入到 <head> 头中
import './style.scss'

// 导出类
export default class {
	mount (container) {
		document.title = 'index'
		container.innerHTML = template
		// container.querySelector('.index').addEventListener('click', () => {
		// 调用 router.go 方法加载 /bar 页面
		// router.go('/foo')
		// })
	}
}
