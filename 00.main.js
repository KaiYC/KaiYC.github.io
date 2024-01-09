const program = {
    'tableHead' : ['時間','議程','主持人 / 報告人'],
    'introSession' : [
        {
            'time' : '08:30-09:00',
            'content' : '報到',
            'speaker' : ''
        },
        {
            'time' : '09:00-09:15',
            'content' : ['衛生福利部長官、','國家衛生研究院長官致詞'],
            'speaker' : ['科技發展組劉明勳技監','國家衛生研究院院長']
        },
        {
            'time' : '09:15-09:30',
            'content' : '2035衛生福利科技政策白皮書介紹',
            'speaker' : '國家衛生研究院'
        },
    ],
    'Session1' : [
        'Session I：營造強健韌性幸福社會、優化友善健康與安全的生活環境、國人重大疾病防治',
        {
            'time' : '09:30-09:40',
            'content' : '第一章：營造強健韌性幸福社會',
            'speaker' : ['主持人：國衛院群健所邱弘毅所長','報告人：國衛院群健所邱弘毅所長'],
            'class' : 'ch1'
        },
        {
            'time' : '09:40-10:05',
            'content' : '討論 (Panel Discussion)',
            'speaker' : ['邀請專家與談','何啟功教授、李玉春教授、潘文涵教授、國健署長官、中醫藥所長官(暫定)'],
            'class' : 'ch1D'  
        },
        {
            'time' : '10:05-10:15',
            'content' : '第二章：優化友善健康與安全的生活環境',
            'speaker' : ['主持人：國衛院環醫所陳保中所長','報告人：國衛院環醫所吳威德助研究員'],
            'class' : 'ch2'  
        },
        {
            'time' : '10:15-10:40',
            'content' : '討論 (Panel Discussion)',
            'speaker' : ['邀請專家與談','李俊璋副校長、張偉嶠教授、陳明汝教授、楊振昌教授、楊榮森教授、蘇振隆教授、食藥署長官(暫定)'],
            'class' : 'ch2D'  
        },
        {
            'time' : '10:40-10:50',
            'content' : '第三章：國人重大疾病防治',
            'speaker' : ['主持人：國衛院洪文俊主任秘書','報告人：國衛院癌研所劉柯俊所長'],
            'class' : 'ch3'  
        },
        {
            'time' : '10:50-11:15',
            'content' : '討論 (Panel Discussion)',
            'speaker' : ['邀請專家與談','林先和教授、張上淳副校長、陳宜君主任、陳垚生副院長、楊志新院長、鍾飲文院長、疾管署長官、國健署長官(暫定)'],
            'class' : 'ch3D'
        }
    ],
    'Session2' : [
        'Session II：善用科技全面提升國民心理健康韌性、深耕優化高品質醫療服務、精進優質照顧服務體系、完善社會福利體系',
        {
            'time' : '11:15-11:25',
            'content' : '第四章：善用科技全面提升國民心理健康韌性',
            'speaker' : ['主持人：國衛院陳為堅副院長','報告人：國衛院神醫中心林彥鋒醫師'],
            'class' : 'ch4'  
        },
        {
            'time' : '11:25-11:50',
            'content' : '討論 (Panel Discussion)',
            'speaker' : ['邀請專家與談','田秀蘭院長、高淑芬副院長、陳柏熹教授、陳喬琪榮譽主治醫師、心健司長官(暫定)'],
            'class' : 'ch4D'
        },
        {
            'time' : '11:50-12:50',
            'content' : '午餐',
            'speaker' : '',
            'class' : 'sp'
        },
        {
            'time' : '12:50-13:05',
            'content' : '第五章：深耕優化高品質醫療服務',
            'speaker' : ['主持人：國衛院群健所邱弘毅所長','報告人：國衛院群健所陳麗光研究員'],
            'class' : 'ch5'  
        },
        {
            'time' : '13:05-13:30',
            'content' : '討論 (Panel Discussion)',
            'speaker' : ['邀請專家與談','吳肖琪特聘教授、吳明賢院長、李玉春教授、楊志新院長、蔡建松局長、醫事司長官(暫定)'],
            'class' : 'ch5D'  
        },
        {
            'time' : '13:30-13:45',
            'content' : ['第六章：精進優質照顧服務體系','第七章：完善社會福利體系'],
            'speaker' : ['主持人：國衛院高齡中心許志成執行長','報告人：國衛院高齡中心吳其炘副研究員'],
            'class' : 'ch67'  
        },
        {
            'time' : '13:45-14:10',
            'content' : '討論 (Panel Discussion)',
            'speaker' : ['邀請專家與談','王國羽教授、李淑貞主任、陳雅美教授、楊培珊教授、照護司長官、保護司長官(暫定)'],
            'class' : 'ch67D'  
        }
    ],
    'Session3' : [
        'Session III：強化衛生福利科技基礎建設、精進暨智能化生技醫藥及健康照護產業',
        {
            'time' : '14:10-14:20',
            'content' : '第八章：強化衛生福利科技基礎建設',
            'speaker' : ['主持人：國衛院群健所邱弘毅所長','報告人：國衛院生醫資源中心張新儀主任'],
            'class' : 'ch8'  
        },
        {
            'time' : '14:20-14:45',
            'content' : '討論 (Panel Discussion)',
            'speaker' : ['邀請專家與談','李佩淵名譽院長、徐建業教授、康勝閔協理、黃建寧校長、賴飛羆教授、資訊處長官、醫藥品查驗中心長官(暫定)'],
            'class' : 'ch8D'  
        },
        {
            'time' : '14:45-15:00',
            'content' : '休息',
            'speaker' : '',
            'class' : 'sp'
        },
        {
            'time' : '15:00-15:15',
            'content' : '第九章：精進暨智能化生技醫藥及健康照護產業',
            'speaker' : ['主持人：國衛院醫奈所吳嘉文所長','報告人：國衛院醫奈所吳嘉文所長'],
            'class' : 'ch9'  
        },
        {
            'time' : '15:15-15:40',
            'content' : '討論 (Panel Discussion)',
            'speaker' : ['邀請專家與談','吳漢章總經理、李友錚總經理、李芳蘭科長、李鍾熙理事長、廖俊仁創辦人、蕭耀貴總經理、食藥署長官、國合組長官(暫定)'],
            'class' : 'ch9D'  
        }
    ],
    'Session4' : [
        'Session IV：整合性議題',
        {
            'time' : '15:40-15:50',
            'content' : ['整合性議題','第一章：打造高齡福祉共融生態，普惠科技推廣及應用'],
            'speaker' : ['主持人：國衛院高齡中心許志成執行長','報告人：國衛院高齡中心許志成執行長'],
            'class' : 'intCh1'  
        },
        {
            'time' : '15:50-16:15',
            'content' : '討論 (Panel Discussion)',
            'speaker' : ['邀請專家與談','李玉嬋特聘教授、李淑貞主任、林佩欣理事長、胡紀平副所長、劉燦宏副院長、長照司長官(暫定)'],
            'class' : 'intCh1D'  
        },
        {
            'time' : '16:15-16:25',
            'content' : ['整合性議題','第二章：因應少子化趨勢發展相關科技及照護體系'],
            'speaker' : ['主持人：國衛院群健所邱弘毅所長','報告人：國衛院群健所蔡慧如研究員'],
            'class' : 'intCh2'  
        },
        {
            'time' : '16:25-16:50',
            'content' : '討論 (Panel Discussion)',
            'speaker' : ['邀請專家與談','王志堯院長、吳美環特聘教授、姚宗杰主治醫師、陳慧如主任醫師、黃立民院長、黃璟隆院長、醫事司長官(暫定)'],
            'class' : 'intCh2D'  
        },
        {
            'time' : '16:50-17:00',
            'content' : ['整合性議題','第三章：衛生福利科技相關法規'],
            'speaker' : ['主持人：國衛院群健所邱弘毅所長','報告人：國衛院群健所陳豐奇副所長'],
            'class' : 'intCh3'  
        },
        {
            'time' : '17:00-17:25',
            'content' : '討論 (Panel Discussion)',
            'speaker' : ['邀請專家與談','吳肖琪教授、吳明賢院長、李崇僖教授、李淑貞主任、陳鋕雄院長、健保署長官、社保司長官(暫定)'],
            'class' : 'intCh3D'  
        },
        {
            'time' : '17:25',
            'content' : '散會',
            'speaker' : '',
            'class' : 'sp'  
        }
    ],
    'note' : '註：與談人以筆劃排序'
}

function programGeneration(){
    //AMSession
    let AMSession = ''
    AMSession += `
        <table class="align-middle text-wrap" id="AMTable">
            <thead class="text-center">
                <tr>
                    <th scope="col" class="timeTopic col-1">${program.tableHead[0]}</th>
                    <th scope="col" class="headTopic col-6">${program.tableHead[1]}</th>
                    <th scope="col" class="col-5" >${program.tableHead[2]}</th>
                </tr>    
            </thead>
            <tbody>
    `
    //PMSession
    let PMSession = ''
    PMSession += `
        <table class="align-middle text-wrap mb-3" id="PMTable">
            <thead id="PMHead" class="text-center">
                <tr>
                <th scope="col" class="timeTopic col-1">${program.tableHead[0]}</th>
                <th scope="col" class="headTopic col-6">${program.tableHead[1]}</th>
                <th scope="col" class="col-5" >${program.tableHead[2]}</th>
                </tr>    
            </thead>
            <tbody id="PMBody">
    `

    //introSession
    for(let i=0; i<program.introSession.length; i++){
        AMSession += `
            <tr class="tableContent">
                <td class="time">${program.introSession[i].time}</td>
        `
        //content
        if(Array.isArray(program.introSession[i].content)){
            let breakContent = `${program.introSession[i].content[0]}`
            for(let j=1; j<program.introSession[i].content.length; j++){
                breakContent += `</br>${program.introSession[i].content[j]}`
            }
            AMSession += `
                <td class="topic">${breakContent}</td>
            `
        } else {
                AMSession += `
                    <td class="topic">${program.introSession[i].content}</td>
                `
        }
        //speaker
        if(Array.isArray(program.introSession[i].speaker)){
            let breakContent = `${program.introSession[i].speaker[0]}`
            for(let j=1; j<program.introSession[i].speaker.length; j++){
                breakContent += `</br>${program.introSession[i].speaker[j]}`
            }
            AMSession += `
                <td class="speaker">${breakContent}</td>
            `
        } else {
            AMSession += `
                <td class="speaker">${program.introSession[i].speaker}</td>
            `
        }
        AMSession += `</tr>`
    }
    
    //otherAMSession
    for(i in Object.keys(program)){
        if(Object.keys(program)[i] == "Session1" || Object.keys(program)[i] == "Session2"){
            let targetSession = program[Object.keys(program)[i]]
            AMSession += `
                <tr> 
                    <td colspan="3" class="text-center session py-3 px-3">${targetSession[0]}</td>
                </tr>
            `
            for(let j=1; j<targetSession.length; j++){
                AMSession += `
                <tr class="tableContent ${targetSession[j].class}" id="">
                    <td class="time">${targetSession[j].time}</td>
                `
                //content
                if(Array.isArray(targetSession[j].content)){
                    let breakContent = `${targetSession[j].content[0]}`
                    for(let k=1; k<targetSession[j].content.length; k++){
                        breakContent += `</br>${targetSession[j].content[k]}`
                    }
                    AMSession += `
                        <td class="topic">${breakContent}</td>
                    `
                } else {
                    AMSession += `
                        <td class="topic">${targetSession[j].content}</td>
                    `
                }
                //speaker
                if(Array.isArray(targetSession[j].speaker)){
                    let breakContent = `${targetSession[j].speaker[0]}`
                    for(let k=1; k<targetSession[j].speaker.length; k++){
                        breakContent += `</br>${targetSession[j].speaker[k]}`
                    }
                    AMSession += `
                        <td class="speaker">${breakContent}</td>
                    `
                } else {
                    AMSession += `
                        <td class="speaker">${targetSession[j].speaker}</td>
                    `
                }
                AMSession += `</tr>`  
            }
        } 
        else if(Object.keys(program)[i] == "Session3" || Object.keys(program)[i] == "Session4"){
            let targetSession = program[Object.keys(program)[i]]
            PMSession += `
                <tr> 
                    <td colspan="3" class="text-center session py-3 px-3">${targetSession[0]}</td>
                </tr>
            `
            for(let j=1; j<targetSession.length; j++){
                PMSession += `
                <tr class="tableContent ${targetSession[j].class}">
                    <td class="time">${targetSession[j].time}</td>
                `
                //content
                if(Array.isArray(targetSession[j].content)){
                    let breakContent = `${targetSession[j].content[0]}`
                    for(let k=1; k<targetSession[j].content.length; k++){
                        breakContent += `</br>${targetSession[j].content[k]}`
                    }
                    PMSession += `
                        <td class="topic">${breakContent}</td>
                    `
                } else {
                    PMSession += `
                        <td class="topic">${targetSession[j].content}</td>
                    `
                }
                //speaker
                if(Array.isArray(targetSession[j].speaker)){
                    let breakContent = `${targetSession[j].speaker[0]}`
                    for(let k=1; k<targetSession[j].speaker.length; k++){
                        breakContent += `</br>${targetSession[j].speaker[k]}`
                    }
                    PMSession += `
                        <td class="speaker">${breakContent}</td>
                    `
                } else {
                    PMSession += `
                        <td class="speaker">${targetSession[j].speaker}</td>
                    `
                }
                PMSession += `</tr>`  
            }
        }
    }
    document.getElementById('AMTableCol').innerHTML = AMSession
    document.getElementById('PMTableCol').innerHTML = PMSession
}

window.onload = programGeneration()

const tableHead = document.querySelector('#PMHead')
const tableBody = document.querySelector('#PMBody')
function adjectTableNarrow(){
    tableHead.remove();
    if(document.getElementById('AMTableCol').classList.contains('pe-1')){
        document.getElementById('AMTableCol').classList.remove('pe-1')
      };
    if(document.getElementById('PMTableCol').classList.contains('ps-1')){
        document.getElementById('PMTableCol').classList.remove('ps-1')
      };
    let tableAM = document.querySelector('#AMTable');
    tableAM.append(tableBody);
    let headTopic = document.getElementsByClassName('headTopic');
    for (var i=0; i<headTopic.length; i++){
      headTopic[i].style.width='auto';
    }
};
function adjectTableWide(){
    if(document.getElementById('AMTableCol').classList.contains('pe-1')){
      }else{
        document.getElementById('AMTableCol').classList.add('pe-1');
      };
    if(document.getElementById('PMTableCol').classList.contains('ps-1')){
      }else{
        document.getElementById('PMTableCol').classList.add('ps-1');
        // document.getElementById('PMFSession').classList.add('py-3')
      };
    let tablePM = document.querySelector('#PMTable');
    tablePM.append(tableBody);
    let headTopic = document.getElementsByClassName('headTopic');
    for (var i=0; i<headTopic.length; i++){
      headTopic[i].style.width='378.5px';
    }
};
var windowWidth = window.innerWidth;
if(windowWidth < '1200'){
    adjectTableNarrow();
  }else{
   adjectTableWide();
  }

window.addEventListener('resize',function(event){
  let newWidth = window.innerWidth;
  let newHeight = window.innerHeight;
  if(newWidth < '1200'){
    adjectTableNarrow();
  }else{
   let tablePM = document.querySelector('#PMTable');
   let tablePMBody = document.querySelector('#PMBody');
   tablePM.insertBefore(tableHead,tablePM.firstChild);
   adjectTableWide();
  }
})