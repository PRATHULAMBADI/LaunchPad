var options = [
  {
    "image": "logos/vistaprint.png",
    "title": "VISTAPRINT",
    "url": "https://www.vistaprint.in/vp/ns/sign_in.aspx?xnav=top&noguest=1"
  },
  {
    "image": "logos/venngage.png",
    "title": "VENNGAGE",
    "url": "https://infograph.venngage.com/signin"
  },
  {
    "image": "logos/zoom.png",
    "title": "ZOOM",
    "url": "https://zoom.us/signin"
  },
  {
    "image": "logos/upwork.png",
    "title": "UPWORK",
    "url": "https://www.upwork.com/ab/account-security/login"
  },
  {
    "image": "logos/swagger.png",
    "title": "SWAGGERHUB",
    "url": "https://app.swaggerhub.com/login"
  },
  {
    "image": "logos/godaddy.png",
    "title": "GODADDY",
    "url": "https://sso.godaddy.com/?realm=idp&path=%2Fproducts&app=account"
  },
  {
    "image": "logos/adobe.png",
    "title": "ADOBE",
    "url": "https://account.adobe.com/"
  },
  {
    "image": "logos/udemy.png",
    "title": "UDEMY",
    "url": "https://www.udemy.com/"
  },
  {
    "image": "logos/docker.png",
    "title": "DOCKERHUB",
    "url": "https://hub.docker.com/"
  },
  {
    "image": "logos/aws.png",
    "title": "Mumbai_AWS_Account",
    "url": "https://signin.aws.amazon.com/"
  },
  {
    "image": "logos/jira.png",
    "title": "Jira",
    "url": "https://www.atlassian.com/software/jira?&aceid=&adposition=&adgroup=93058444980&campaign=9124878606&creative=415596853193&device=c&keyword=jira&matchtype=e&network=g&placement=&ds_kids=p51242181056&ds_e=GOOGLE&ds_eid=700000001558501&ds_e1=GOOGLE&gclid=Cj0KCQjw6sHzBRCbARIsAF8FMpXzQ7RcC9nv_5ofg7eW6d2fxPLaJdvwjFYXGHYq1sSb97reohQUlNsaAi71EALw_wcB&gclsrc=aw.ds"
  },
  {
    "image": "logos/codacy.png",
    "title": "Codacy",
    "url": "https://app.codacy.com/wizard/projects"
  },
  {
    "image": "logos/bitbucket.png",
    "title": "Bit_Bucket",
    "url": "https://bitbucket.org/adapt-bfcdata/"
  },
  {
    "image": "logos/slack.png",
    "title": "Slack",
    "url": "https://bfc-adapt.slack.com/open"
  },
  {
    "image": "logos/microsoftoffice.png",
    "title": "Office_365",
    "url": "https://portal.office.com/account/#installs"
  },
  {
    "image": "logos/microsoftoffice365.png",
    "title": "Office_365_Admin",
    "url": "http://portal.office365.com/"
  },
  {
    "image": "logos/osdeployer.png",
    "title": "OS_deployer",
    "url": "http://192.168.10.10:8020/configurations.do"
  },
  {
    "image": "logos/openvpn.png",
    "title": "Open_VPN_Account",
    "url": "https://openvpn.net"
  },
  {
    "image": "logos/openvpn.png",
    "title": "BFC_OpenVPN_Console",
    "url": "https://13.234.103.225:943/admin/"
  },
  {
    "image": "logos/outlook.png",
    "title": "AWS_Mumbai_Outlook",
    "url": "http://portal.office365.com/"
  },
  {
    "image": "logos/godaddy.png",
    "title": "GoDaddy",
    "url": "https://in.godaddy.com"
  },
  {
    "image": "logos/symantec.png",
    "title": "Symantec",
    "url": "https://hostedendpoint.spn.com/default.aspx?ReturnUrl=%2fhome.aspx"
  },
  {
    "image": "logos/wifi.png",
    "title": "WorkDistict_Wifi",
    "url": "WorkDistict Network"
  },
  {
    "image": "logos/techjockey.png",
    "title": "Techjockey",
    "url": "https://www.techjockey.com/account/order"
  },
  {
    "image": "logos/zeplin.png",
    "title": "Zeplin",
    "url": "https://app.zeplin.io/project/5cbd618acd509171d2fa1b18/dashboard"
  },
  {
    "image": "logos/facebook.png",
    "title": "Facebook",
    "url": "https://www.facebook.com"
  },
  {
    "image": "logos/twitter.png",
    "title": "Twitter",
    "url": "https://twitter.com"
  },
  {
    "image": "logos/youtube.png",
    "title": "Youtube",
    "url": "https://www.youtube.com"
  },
  {
    "image": "logos/instagram.png",
    "title": "Instagram	",
    "url": "https://www.instagram.com"
  }
]
var tileMetaData = options;
 
var textbox = document.getElementById("");

function searchTile() {
  var searchValue = document.getElementById('search')
  var value = searchValue.value;
  tileMetaData = options.find(data => data.title === value)

}
function updateResult(value ) {
  let resultList = document.querySelector(".tiles-wrapper");
  resultList.innerHTML = "";
  var arr = [];
  options.map(function (check) {
      value.split(" ").map(function (word){
        if (check.title.toLowerCase().indexOf(word.toLowerCase()) != -1) {
          arr.push(check)
          }
      })
  })
  resultList.innerHTML = `${getUI(arr)}`;
}

function getUI(value) {
  var tag =[];
  for (i = 0; i < value.length; i++) {
    tag.push(`<section class='tile'>${createTile(value[i])}</section>`);
  }
  var res = tag.join("");
  return res;
}


window.onload = function () {
    for (i = 0; i < tileMetaData.length; i++) {
    addDiv(createTile(tileMetaData[i]))
    }
  displaydate()
}
function createTile(tileObj) {
  return '<a class="title-header-link"  href=' + tileObj.url + ' target="_blank" ><div class="tile-data-holder" title=' + tileObj.title + '><div class="icon-header"><div class="snapshot-icon"><img class="icon-img" src=' + getImageForTile(tileObj.image) + '></div></div><div><div class="icon-title"><header>' + getTitleForTile(tileObj.title) + '</header></div></div></div></a>'
}

function addDiv(htmlString) {
  var objTo = document.getElementById('holder');
  var divtest = document.createElement("section");
  divtest.className = "tile"
  divtest.innerHTML = htmlString;
  objTo.appendChild(divtest);
}
function getImageForTile(image="") {
  if (image.length == 0) {
    return "logos/globe-icon.png";
  }
  return image;
}
function getTitleForTile(title) {
  if (title.length > 12) {
    return title.substring(0, 12) + '...';
  }
  return title;
}

function displaydate(){
  var refresh=1000;
  mytime = setTimeout('dateformat()', refresh);
}
  
function dateformat() {
  
  var x = new Date();
  var hours = x.getHours();
  var minutes = x.getMinutes();
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  if (minutes < 10) {
    minutes = "0" + minutes;
   }
    var suffix = "AM";
	if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
	}
	if (hours == 0) {
	 hours = 12;
	}
  document.getElementById('dt').innerHTML = x.getDate()+ " "+months[x.getMonth()]+" "+x.getFullYear()+" "+ x.getHours()+":"+minutes+suffix;
  displaydate();
}

function getVisible() {
  var x = document.getElementById("searchBox");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
  
