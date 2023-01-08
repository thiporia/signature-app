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
  khc: './static/khc_logo.png',
  choonsik: 'https://t1.daumcdn.net/comis/mail/img_choonsik_2.png',
  ryan: 'https://t1.daumcdn.net/comis/mail/img_ryan_2.png',
  con: 'https://t1.daumcdn.net/comis/mail/img_con_2.png',
  muzi: 'https://t1.daumcdn.net/comis/mail/img_muzi_2.png',
  prodo: 'https://t1.daumcdn.net/comis/mail/img_prodo_2.png',
  apeach: 'https://t1.daumcdn.net/comis/mail/img_apeach_2.png',
  neo: 'https://t1.daumcdn.net/comis/mail/img_neo_2.png',
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
