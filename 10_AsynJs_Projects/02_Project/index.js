document.addEventListener('keydown', function(event) { 
    let key =event.key;
    let keyCode =event.keyCode; //keycode is outdated
    let code =event.code;

    // so that space key can show
if (key === " ") { 
  key="space"
}

document.querySelector('#insert').innerHTML= 
`
<table>
  <tr>
    <th>Key</th>
    <th>keyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${key}</td>
    <td>${keyCode}</td> 
    <td>${code}</td>
  </tr>
</table>
`
  
  });