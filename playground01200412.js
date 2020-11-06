var button = document.createElement('button');
button.type = 'button'
button.className = 'btn btn-primary'
button.setAttribute('data-toggle','modal')
button.setAttribute('data-target','#exampleModalCenter')
button.innerHTML = 'Launch demo modal'

document.body.appendChild(button)

var div_modal_fade = document.createElement('div');
div_modal_fade.id = 'exampleModalCenter'
div_modal_fade.className = 'modal fade'
div_modal_fade.setAttribute('tabindex','1')
div_modal_fade.setAttribute('role','dialog')
div_modal_fade.setAttribute('aria-labelledby','exampleModalCenterTitle')
div_modal_fade.setAttribute('aria-hidden','true')

var div_modal_dialog = document.createElement('div');
div_modal_dialog.className = 'modal-dialog modal-dialog-centered'
div_modal_dialog.setAttribute('role','document')
div_modal_fade.appendChild(div_modal_dialog)

var div_modal_content = document.createElement('div');
div_modal_content.className = 'modal-content'
div_modal_dialog.appendChild(div_modal_content)

var div_modal_header = document.createElement('div');
div_modal_header.className = 'modal-header'
div_modal_content.appendChild(div_modal_header)

var h5 = document.createElement('h5');
h5.className = 'modal-title'
h5.id = 'exampleModalLongTitle'
h5.innerHTML = 'Modal title'
div_modal_header.appendChild(h5)

var button2 = document.createElement('button');
button.type = 'button'
button.className = 'close'
button.setAttribute('data-dismiss','modal')
button.setAttribute('aria-label','close')
h5.parentNode.insertBefore(button2, h5.nextSibling);

var span = document.createElement('span')
span.setAttribute('aria-hidden','true')
span.innerHTML = '&times;'
button2.appendChild(span)

var div_modal_body = document.createElement('div');
div_modal_body.className = 'modal-body'
div_modal_header.parentNode.insertBefore(div_modal_body, div_modal_header.nextSibling);

var div_modal_footer = document.createElement('div');
div_modal_footer.className = 'modal-footer'
div_modal_body.parentNode.insertBefore(div_modal_footer, div_modal_body.nextSibling);

var button3 = document.createElement('button');
button3.type = 'button'
button3.className = 'btn btn-secondary'
button3.setAttribute('data-dismiss','modal')
button3.innerHTML = 'close'
div_modal_footer.appendChild(button3)

document.body.appendChild(div_modal_fade)
