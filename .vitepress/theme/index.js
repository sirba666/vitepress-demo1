import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'

export default {
  ...DefaultTheme,
  setup() {
    // 页面加载后，动态添加背景样式
    onMounted(() => {
      const style = document.createElement('style')
      style.textContent = `
        body {
          background-image: url('/vitepress-demo1/docs/public/images/a.jpg') !important;
          background-size: cover !important;
          background-position: center !important;
          background-attachment: fixed !important;
          opacity: 0.9 !important;
        }
        /* 加到 theme/index.js 的动态样式里 */
.vp-doc {
  background-color: rgba(255, 255, 255, 0.8) !important; /* 白色半透明背景 */
  padding: 2rem !important;
  border-radius: 8px;
}
    /* 全局强制深色文字（覆盖所有区域） */
        body,
        a, /* 所有链接 */
        .vp-nav *, /* 导航栏所有内容 */
        .vp-sidebar *, /* 侧边栏所有内容 */
        .vp-doc *, /* 主体内容所有元素 */
        .vp-right-anchor *, /* 右侧目录所有内容 */
        .vp-page-nav *, /* 页面底部导航 */
        .vp-footer *, /* 页脚所有内容 */
        button, /* 按钮 */
        h1, h2, h3, h4, h5, h6, /* 标题 */
        p, span, li /* 普通文字、列表 */ {
          color: #222 !important; /* 深灰色（比纯黑更柔和） */
          text-shadow: 0 0 1px rgba(0,0,0,0.1) !important; /* 轻微阴影，更清晰 */
        }

        /* 保留半透明背景，配合深色文字更易读 */
        .vp-nav, .vp-sidebar, .vp-doc, .vp-right-anchor, .vp-page-nav, .vp-footer {
          background-color: rgba(255, 255, 255, 0.8) !important;
          border-radius: 8px !important;
          padding: 1rem !important;
        }
      `
      document.head.appendChild(style)
    })
  }
}