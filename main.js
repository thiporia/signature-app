$('#kName').on('change', (e) => {
  if (e.target.value) {
    $('#span_kName').text(e.target.value)
  }
})

$('#eName').on('change', (e) => {
  if (e.target.value) {
    $('#span_eName').text(e.target.value)
  }
})

$('#dept').on('change', (e) => {
  if (e.target.value) {
    $('#span_dept').text(e.target.value)
  }
})

$('#email').on('change', (e) => {
  if (e.target.value) {
    $('#span_email').text(e.target.value)
  }
})

$('#phone').on('change', (e) => {
  if (e.target.value) {
    $('#span_phone').text(e.target.value)
  }
})

const IMAGES = {
  khc:
    'https://github.com/thiporia/signature-app/blob/main/static/khc_logo.png?raw=true',
  choonsik: 'https://t1.daumcdn.net/comis/mail/img_choonsik_2.png',
  ryan: 'https://t1.daumcdn.net/comis/mail/img_ryan_2.png',
  con: 'https://t1.daumcdn.net/comis/mail/img_con_2.png',
  muzi: 'https://t1.daumcdn.net/comis/mail/img_muzi_2.png',
  prodo: 'https://t1.daumcdn.net/comis/mail/img_prodo_2.png',
  apeach: 'https://t1.daumcdn.net/comis/mail/img_apeach_2.png',
  neo: 'https://t1.daumcdn.net/comis/mail/img_neo_2.png',
  jayg: 'https://t1.daumcdn.net/comis/mail/img_jayg_2.png',
  tube: 'https://t1.daumcdn.net/comis/mail/img_tube_2.png',
}

const setImage = (key) => {
  $('#signature_logo').attr('src', IMAGES[key])
}

$('#sel_logo').on('change', (e) => {
  setImage(e.target.value)
})

$('#generate_signature').on('click', () => {
  const copiedHTML = $('#div_signature').html()

  // Copy the text inside the text field
  navigator.clipboard.writeText(copiedHTML).then(() => {
    // Alert the copied text
    alert('Copied the text: ' + copiedHTML)
  })
})

$('#search_address').on('click', () => {
  new daum.Postcode({
    oncomplete: function (data) {
      console.log(data)
      // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
      // 예제를 참고하여 다양한 활용법을 확인해 보세요.
    },
  }).open()
})
