window.onload = function () {
  const linksSocialMedia = {
    github: 'dayaneleal',
    youtube: 'cricridb',
    facebook: 'Dayane.cbLeal',
    instagram: 'day.crisbl',
    twitter: 'cricridb'
  }

  function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
      const social = li.getAttribute('class')
      li.children[0].href =
        'http://' + social + '.com/' + linksSocialMedia[social]
    }
  }

  changeSocialMediaLinks()

  function getGitHubProfileInfos(usuario){
    const url = `https://api.github.com/users/${usuario}`
    
    fetch(url).then( response => response.json()).then(data => {
      userName.textContent = data.name
      bio.textContent = data.bio
      photo.src = data.avatar_url
      userLogin.textContent = data.login
    })
  }

getGitHubProfileInfos('dayaneleal')

}