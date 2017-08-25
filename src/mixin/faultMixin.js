/**
 * 故障报修混合文件
 * 使用于equipment.vue,machine.vue文件
 */

export default {
  data() {
    return {
      pictures: [],
      showBtn: true
    }
  },
  methods: {
    chooseReason(reason, e) {
      if (e.target.tagName.toLocaleLowerCase() == 'i') {
        let i = e.target;
        if (i.classList.contains('fa-circle-thin')) {
          i.classList.remove('fa-circle-thin');
          i.classList.add('fa-check-circle');
        } else {
          i.classList.remove('fa-check-circle');
          i.classList.add('fa-circle-thin');
        }
      }
    }
  },
  computed: {
    curAddr() {
      return this.$store.state.curAddr;
    }
  },
  created() {
    // 如果仓库地址失效了,就从新获取一遍
    if (!this.$store.state.curAddr) {
      this.$store.dispatch('SET_ADDR');
    };
  },
  mounted() {
    let _self = this;
    document.querySelector('#app').style.backgroundColor = '#eaeef1';
  }
}
