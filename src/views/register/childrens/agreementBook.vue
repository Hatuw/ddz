<!-- 多动朕协议书组件 -->
<template>
  <div id="AgreementBook" v-if=" bookShow ">
    <!-- 顶部栏目 -->
    <div id="ReturnUrl-wrap">
      <div id="ReturnUrl">
        <i class="fa fa-angle-left" aria-hidden="true" @click.stop=" hide "></i>
        <span class="title">多动联用户协议书</span>
      </div>
    </div>
    <!-- 正文 -->
    <div class="content">
      <h3 class="content-title">多动朕体育器材共享服务协议</h3>
      <h5 class="content-l1">1 特别提醒</h5>
      <p class="content-l2">1.1 本《多动朕体育器材共享服务协议》（以下简称《协议》）是服务使用人（以下简称“用户”）与广州多动朕信息科技有限公司（以下简称“本公司”或者“我们”）之间关于用户使用多动朕微信网站，注册、使用、管理“多动朕信息平台”的账号，以及使用本公司提供的相关服务所订的协议。如对本协议有任何疑问，你可向广州多动朕信息科技有限公司客服咨询。如果您使用多动朕信息平台服务，您的使用行为将被视为对本协议全部内容的认可。</p>
      <h5 class="content-l1">2 服务内容</h5>
      <p class="content-12">2.1 本公司网络服务的具体内容由多动朕信息平台根据实际情况提供，例如论坛（bbs）、聊天室、电子邮件、发表新闻评论等。本公司保留随时变更、中断或终止部分或全部网络服务的权利。</p>
      <p class="content-12">2.2 用户理解，本公司仅提供相关的网络服务，除此之外与相关网络服务有关的设备（如电脑、调制解调器及其他与接入互联网有关的装置）及所需的费用（如为接入互联网而支付的电话费及上网费）均应由用户自行负担。</p>
      <h5 class="content-l1">3 使用规则</h5>
      <p class="content-l2">3.1 用户在申请使用广州多动朕信息科技有限公司的网络服务时，必须向本公司提供准确的个人资料，如个人资料有任何变动，必须及时通知我们，以便我们及时更新。</p>
      <p class="content-12">3.2　用户注册成功后，本公司将给予每个用户一个用户帐号及相应的密码，该用户帐号和密码由用户负责保管；禁止赠与、借用、租用、转让或售卖；用户应当对以其用户帐号进行的所有活动和事件负法律责任。</p>
      <p class="content-12">3.3　用户必须同意接受本公司通过短信或其他方式向用户发送的商品促销或其他相关商业信息。</p>
      <p class="content-12">3.4 用户在使用本公司网络服务过程中，必须遵循以下原则:</p>
      <p class="content-13">（1）遵守中国有关的法律和法规；</p>
      <p class="content-13">（2）不得为任何非法目的而使用本公司的网络服务系统；违者将对账号进行封停。</p>
      <p class="content-13">（3）遵守所有与网络服务有关的网络协议、规定和程序；违者将对账号进行封停。</p>
      <p class="content-13">（4）不得利用本公司网络服务系统进行任何可能对互联网的正常运转造成不利影响的行为；违者将对账号进行封停。</p>
      <p class="content-13">（5）不得利用本公司网络服务系统传输任何骚扰性的、中伤他人的、辱骂性的、恐吓性的、庸俗淫秽的或其他任何非法的信息资料；将视情节严重情况对用户进行处罚。</p>
      <p class="content-13">（6）不得利用本公司网络服务系统进行任何不利于本公司的行为；</p>
      <p class="content-13">（7）如发现任何非法使用用户帐号或帐号出现安全漏洞的情况，应立即通告本公司 </p>
      <p class="content-13">（8） 用户注册的账号昵称和姓名如存在违反法律法规或国家政策要求，或侵犯任何第三方合法权益时，本公司有权禁止用户继续用户继续使用该账户、昵称。 </p>
      <h5 class="content-l1">4 内容所有权</h5>
      <p class="content-12">4.1 我们提供的网络服务内容可能包括：文字、软件、声音、图片、录像、图表等。所有这些内容受版权、商标和其它财产所有权法律的保护。</p>
      <p class="content-12">4.2 用户只有在获得本公司或其他相关权利人的授权之后才能使用这些内容，而不能擅自复制、再造这些内容、或创造与内容有关的派生产品。</p>
      <h5 class="content-l1">5 隐私保护</h5>
      <p class="content-l2">5.1　保护用户隐私是我们的一项基本政策，我们保证不对外公开或向第三方提供用户注册资料及用户在使用网络服务时存储在用户的非公开内容，但下列情况除外：</p>
      <p class="content-l3">（1）事先获得用户的明确授权；</p>
      <p class="content-l3">（2）根据有关的法律法规要求；</p>
      <p class="content-l3">（3）按照相关政府主管部门的要求；</p>
      <p class="content-l3">（4）为维护社会公众的利益；</p>
      <p class="content-l3">（5）为维护用户的合法权益。</p>
      <p class="content-l2">5.2　本公司可能会与第三方合作向用户提供相关的网络服务，在此情况下，如该第三方同意承担与本公司同等的保护用户隐私的责任，则我们可将用户的注册资料等提供给该第三方。</p>
      <p class="content-l2">5.3　在不透露单个用户隐私资料的前提下，我们有权对整个用户数据库进行分析并对用户数据库进行商业上的利用。</p>
      <h5 class="content-l1">6 免责声明</h5>
      <p class="content-l2">6.1　若本公司已经明示其网络服务提供方式发生变更并提醒用户应当注意事项，用户未按要求操作所产生的一切后果由用户自行承担。</p>
      <p class="content-l2">6.2　用户明确同意其使用本公司网络服务所存在的风险将完全由其自己承担；因其使用本公司网络服务而产生的一切后果也由其自己承担，本公司对用户不承担任何责任</p>
      <p class="content-l2">6.3　我们不担保网络服务一定能满足用户的要求，也不担保网络服务不会中断，对网络服务的及时性、安全性、准确性也都不作担保。</p>
      <h5 class="content-l1">7 服务变更、中断或终止</h5>
      <p class="content-l2">7.1　如因系统维护或升级的需要而需暂停网络服务，我们将尽可能事先对客户进行通告。</p>
      <p class="content-l2">7.2　如发生下列任何一种情形，我们有权随时中断或终止向用户提供本协议项下的网络服务而无需通知用户：</p>
      <p class="content-l3">（1）用户提供的个人资料不真实；</p>
      <p class="content-l3">（2）用户违反本协议中规定的使用规则。</p>
      <p class="content-l2">7.3　除前款所述情形外，本公司同时保留在不事先通知用户的情况下随时中断或终止部分或全部网络服务的权利，对于所有服务的中断或终止而造成的任何损失，本公司无需对用户或任何第三方承担任何责任。</p>
      <h5 class="content-l1">8 违约赔偿</h5>
      <p class="content-l2">8.1　用户同意保障和维护本公司及其他用户的利益，如因用户违反有关法律、法规或本协议项下的任何条款而给本公司任何其他第三人造成损失，用户同意承担由此造成的损害赔偿责任。</p>
      <h5 class="content-l1">9 我们如何收集信息</h5>
      <p class="content-l2">我们收集信息是为了向您提供更好、更优、更个性化的服务，我们收集信息的方式如下:</p>
      <p class="content-l3">(1）您向我们提供的信息。当您注册我们账户及您在使用多动朕信息平台提供的相关服务时填写及/或提交的信息，包括您的姓名、性别、出生年月日、身份证号码、电话号码、电子邮箱、宿舍号、及相关附加信息如您的一卡通等信息。</p>
      <p class="content-l3">(2) 在您使用服务过程中收集的信息。为了提供并优化您需要的服务，我们会收集您使用服务的相关信息，这类信息包括： 在您使用多动朕信息平台服务，或访问多动朕平台网页时，多动朕自动接收并记录的您的浏览器和计算机上的信息，包括但不限于您的IP地址、浏览器的类型、使用的语言、访问日期和时间、软硬件特征信息及您需求的网页记录等数据；如您关注或使用公众号或其关联公司客户端软件，或访问移动网页使用淘宝平台服务时，淘宝可能会读取与您位置和移动设备相关的信息，包括但不限于设备型号、设备识别码、操作系统、分辨率、电信运营商等。 除上述信息外，我们还可能为了提供服务及改进服务质量的合理需要而收集您的其他信息，包括您与我们的客户服务团队联系时您提供的相关信息，您参与问卷调查时向我们发送的问卷答复信息，以及您与多动朕的关联方、多动朕合作伙伴之间互动时我们收集的相关信息。与此同时，为提高您使用多动朕信息平台提供的服务的安全性，更准确地预防钓鱼网站欺诈和木马病毒，我们可能会通过了解一些您的网络使用习惯、您常用的软件信息等手段来判断您账户的风险，并可能会记录一些我们认为有风险的URL。
      </p>
      <h5 class="content-l1">10 修改协议</h5>
      <p class="content-l2">10.1　我们将可能不时的修改本协议的有关条款，一旦条款内容发生变动，我们将会在相关的页面提示修改内容。</p>
      <p class="content-l2">10.2　如果不同意我们对服务条款所做的修改，用户有权停止使用网络服务。如果用户继续使用网络服务，则视为用户接受服务条款的变动。</p>
      <h5 class="content-l1">11 用户管理</h5>
      <p class="content-l2">11.1　用户单独承担发布内容的责任。用户对服务的使用是根据所有适用于服务的地方法律、国家法律和国际法律标准的。用户承诺：</p>
      <p class="content-l3">（1）在本公司的网页上发布信息或者利用网易的服务时必须符合中国有关法规（部分法规请见附录），不得在其它非本公司的网页上或者利用网易的服务制作、复制、发布、传播以下信息:</p>
      <p class="content-l4">（a）反对宪法所确定的基本原则的；</p>
      <p class="content-l4">（b）危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；</p>
      <p class="content-l4">（c）损害国家荣誉和利益的；</p>
      <p class="content-l4">（d）煽动民族仇恨、民族歧视，破坏民族团结的；</p>
      <p class="content-l4">（e）破坏国家宗教政策，宣扬xx和封建迷信的；</p>
      <p class="content-l4">（f）散布谣言，扰乱社会秩序，破坏社会稳定的；</p>
      <p class="content-l4">（g）散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</p>
      <p class="content-l4">（h）侮辱或者诽谤他人，侵害他人合法权益的； 违反上述8条规定，本公司将视情节严重对用户进行处罚，情节严重时，我们将会对违规账户进行封停。</p>
    </div>
    <!-- 按钮 -->
    <div class="btn-wrap">
      <button class="btn" @click.stop=" hide ">确定</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AgreementBook',
  data() {
    return {

    }
  },
  methods: {
    hide() {
      this.$emit('hide', false);
    }
  },
  props: {
    bookShow: {
      type: Boolean,
      required: true
    }
  }
}

</script>
<style scoped lang="scss">
$main_color: #0788ee; // 模板包裹层
#AgreementBook {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
} 

// 顶部栏目包裹层
#ReturnUrl-wrap {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
} 

// 顶部栏目
#ReturnUrl {
  padding: 10px 15px;
  height: 30px;
  line-height: 30px;
  background-color: $main_color;
  position: relative;
  .title {
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  i {
    font-size: 26px;
    color: #fff;
  }
} 

// 协议书正文
.content {
  margin-top: 50px;
  padding: 10px 20px 0;
  background-color: #fff;
  .content-title {
    text-align: center;
  }
  p {
    color: #314962;
    line-height: 20px;
  }
  .content-l1 {
    font-size: 12px;
    margin: 5px 0;
  }
  .content-l2 {}
  .content-l3 {}
} 

// 按钮包裹层
.btn-wrap {
  margin: 10px 20px;
  .btn {
    border: none;
    background-color: $main_color;
    color: #fff;
    width: 100%;
    height: 35px;
    line-height: 35px;
    border-radius: 20px;
  }
}

</style>
