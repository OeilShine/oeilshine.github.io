<template>
  <section style="border-top: 2px solid #eaecef;padding-top:1rem;margin-top:2rem;">
    <div>
      <!-- id 将作为查询条件 -->
      <span class="leancloud-visitors"
            data-flag-title="Your Article Title">
        <em class="post-meta-item-text">阅读量： </em>
        <i class="leancloud-visitors-count"></i>
      </span>
    </div>
    <h3>
      <a href="javascript:;"></a>
      评 论：
    </h3>
    <div id="vcomments"></div>
  </section>
</template>

<script>
export default {
  name: 'Valine',
  mounted: function () {
    // require window
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      document.getElementsByClassName('leancloud-visitors')[0].id
        = window.location.pathname
      this.window = window
      window.AV = require('leancloud-storage')
    }

    new Valine({
      el: '#vcomments',
      appId: 'VdMmKznz8zttdn44GbOTXE6V-gzGzoHsz',// your appId
      appKey: 'bEWmfNQFJH2xFXAYdSQor2Wg', // your appKey
      notify: false,  //邮箱通知，可关闭
      verify: false,  //反人类的算术验证码，建议关闭
      path: window.location.pathname,
      visitor: true, //访问计数
      avatar: 'mm',
      placeholder: 'write here'
    });
  },
}
</script>
