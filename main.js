const linksSocialMedia = {
  github: 'Nty13',
  youtube: 'channel/UChz_B2zx5ikICf3wNl91aWg',
  facebook: 'nathaly.andrade.796',
  instagram: 'nathy.nam',
  twitter: 'nty_nam'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(Response => Response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      profilePicture.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
