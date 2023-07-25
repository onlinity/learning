
import {recent} from "./recentArticle.js"


/* For landing page */


document.getElementById('mostRecent').href = recent
let recentTitle = document.getElementById('mostRecentTitle')
recentTitle.href = recent
let recentLink = document.getElementById('mostRecentLink')
recentLink.href = recent

let recentImage = document.getElementById('recentArticleImage').src
let recentImg = document.getElementById('recentImg')
recentImg.src = recentImage

document.getElementById('mostRecentTitleText').innerHTML = document.getElementById('recentArticleTitle').innerHTML