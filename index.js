const _0x5e2bc2=_0x44f7;function _0x44f7(_0x11c6c9,_0x45f86f){const _0x5633f7=_0x5633();return _0x44f7=function(_0x44f719,_0x3fac52){_0x44f719=_0x44f719-0x147;let _0xca66b9=_0x5633f7[_0x44f719];return _0xca66b9;},_0x44f7(_0x11c6c9,_0x45f86f);}(function(_0x4eac79,_0x25ded6){const _0x467630=_0x44f7,_0x5acc50=_0x4eac79();while(!![]){try{const _0x3dd263=-parseInt(_0x467630(0x20e))/0x1*(-parseInt(_0x467630(0x1f3))/0x2)+-parseInt(_0x467630(0x171))/0x3*(-parseInt(_0x467630(0x16a))/0x4)+-parseInt(_0x467630(0x192))/0x5+parseInt(_0x467630(0x1a5))/0x6+parseInt(_0x467630(0x1f2))/0x7*(-parseInt(_0x467630(0x15c))/0x8)+parseInt(_0x467630(0x15e))/0x9*(parseInt(_0x467630(0x1d4))/0xa)+parseInt(_0x467630(0x1a4))/0xb;if(_0x3dd263===_0x25ded6)break;else _0x5acc50['push'](_0x5acc50['shift']());}catch(_0x7293ca){_0x5acc50['push'](_0x5acc50['shift']());}}}(_0x5633,0xd7061));const ToDownload=document[_0x5e2bc2(0x183)](_0x5e2bc2(0x18a)),confirm_btn=document['getElementById'](_0x5e2bc2(0x151)),cancel_button=document[_0x5e2bc2(0x183)](_0x5e2bc2(0x1cf));let studentDetails=[];const Subject_Container=[];let firstThreeRows=[],AllTotalUnits=[],uniqueAllTotalUnits=[];const width=window[_0x5e2bc2(0x14a)];function getPageText(_0x3b8be4,_0x144d47){return new Promise(function(_0x2877f6,_0x21369b){const _0x2d7e27=_0x44f7;_0x144d47[_0x2d7e27(0x1f5)](_0x3b8be4)['then'](function(_0x1f14a6){const _0x56c057=_0x2d7e27;_0x1f14a6[_0x56c057(0x1b2)]()[_0x56c057(0x18d)](function(_0x52c09e){const _0x3f19de=_0x56c057;var _0x2b6afd=_0x52c09e[_0x3f19de(0x1e9)],_0xd022a={};for(var _0x1bfd78=0x0;_0x1bfd78<_0x2b6afd[_0x3f19de(0x1bd)];_0x1bfd78++){var _0x3ba604=_0x2b6afd[_0x1bfd78],_0x419028=Math['round'](_0x3ba604[_0x3f19de(0x178)][0x5]);if(!_0xd022a[_0x419028])_0xd022a[_0x419028]=[];_0xd022a[_0x419028][_0x3f19de(0x1aa)](_0x3ba604[_0x3f19de(0x18b)]);}var _0x45f316=Object['keys'](_0xd022a)['sort']((_0x284236,_0x2d7789)=>-_0x284236+_0x2d7789),_0x13d08e='';for(var _0x1bfd78=0x0;_0x1bfd78<_0x45f316[_0x3f19de(0x1bd)];_0x1bfd78++){_0x13d08e+=_0xd022a[_0x45f316[_0x1bfd78]]['join']('\x20')+'\x0a';}_0x2877f6(_0x13d08e);});});});}$('#file-upload-label')['on'](_0x5e2bc2(0x1ab),function(_0x42c4fb){const _0x370511=_0x5e2bc2;_0x42c4fb[_0x370511(0x188)](),$(this)[_0x370511(0x1ac)](_0x370511(0x1ab));}),$(_0x5e2bc2(0x1a7))['on'](_0x5e2bc2(0x1f4),function(_0x5df05f){const _0x49b34b=_0x5e2bc2;_0x5df05f[_0x49b34b(0x188)](),$(this)[_0x49b34b(0x1c8)](_0x49b34b(0x1ab));}),$(_0x5e2bc2(0x1a7))['on'](_0x5e2bc2(0x1c6),function(_0x2d33a2){const _0x376bf1=_0x5e2bc2;_0x2d33a2[_0x376bf1(0x188)]();var _0x2218b4=_0x2d33a2[_0x376bf1(0x1fc)][_0x376bf1(0x181)][_0x376bf1(0x1db)][0x0];document[_0x376bf1(0x183)]('file-upload-label')[_0x376bf1(0x20b)]='display:none;',document[_0x376bf1(0x183)]('evaluation-container')['style']='display:block;';const _0x4653dc=window[_0x376bf1(0x14a)];_0x4653dc>0x2bc&&(document[_0x376bf1(0x183)](_0x376bf1(0x1f8))[_0x376bf1(0x20b)]=_0x376bf1(0x193),document['getElementById'](_0x376bf1(0x176))['style']=_0x376bf1(0x1d3),document['getElementById'](_0x376bf1(0x17a))[_0x376bf1(0x20b)]=_0x376bf1(0x1e7),document[_0x376bf1(0x183)]('header-container')[_0x376bf1(0x20b)]=_0x376bf1(0x19c)),document[_0x376bf1(0x183)]('section')[_0x376bf1(0x20b)]=_0x376bf1(0x204),document[_0x376bf1(0x183)](_0x376bf1(0x1f7))[_0x376bf1(0x20b)]=_0x376bf1(0x1dd),handleFileUpload(_0x2218b4);}),$('#file-upload')['on'](_0x5e2bc2(0x1e3),function(){const _0xcc677f=_0x5e2bc2;if(this[_0xcc677f(0x1db)][_0xcc677f(0x1bd)]>0x0){var _0x4cd6ec=this[_0xcc677f(0x1db)][0x0];document[_0xcc677f(0x183)](_0xcc677f(0x149))['style']=_0xcc677f(0x19c),document['getElementById'](_0xcc677f(0x195))[_0xcc677f(0x20b)]=_0xcc677f(0x1dd),width>0x2bc&&(document[_0xcc677f(0x183)](_0xcc677f(0x1f8))[_0xcc677f(0x20b)]=_0xcc677f(0x193),document[_0xcc677f(0x183)](_0xcc677f(0x176))[_0xcc677f(0x20b)]=_0xcc677f(0x1d3),document['getElementById']('side-copy-right')[_0xcc677f(0x20b)]='display:\x20flex;bottom:-65px',document[_0xcc677f(0x183)](_0xcc677f(0x158))[_0xcc677f(0x20b)]=_0xcc677f(0x19c)),document[_0xcc677f(0x183)]('section')[_0xcc677f(0x20b)]=_0xcc677f(0x204),document[_0xcc677f(0x183)](_0xcc677f(0x1f7))[_0xcc677f(0x20b)]=_0xcc677f(0x1dd),handleFileUpload(_0x4cd6ec);}else console['log'](_0xcc677f(0x1da)),document[_0xcc677f(0x183)](_0xcc677f(0x149))[_0xcc677f(0x20b)]=_0xcc677f(0x1dd),document[_0xcc677f(0x183)](_0xcc677f(0x158))[_0xcc677f(0x20b)]=_0xcc677f(0x1dd);}),$('#file-upload-label')['on'](_0x5e2bc2(0x154),function(){});function handleFileUpload(_0xb0c6ba){const _0x38c543=_0x5e2bc2;if(_0xb0c6ba['type']!=='application/pdf'){console[_0x38c543(0x1a2)](_0xb0c6ba[_0x38c543(0x1e4)],_0x38c543(0x1d2));return;}var _0x2a31c9=new FileReader();_0x2a31c9[_0x38c543(0x15d)]=function(){const _0x3ec8ec=_0x38c543;var _0x9fdd02=new Uint8Array(this[_0x3ec8ec(0x1a9)]);pdfjsLib[_0x3ec8ec(0x1b8)](_0x9fdd02)[_0x3ec8ec(0x19a)][_0x3ec8ec(0x18d)](function(_0xbaffa9){const _0x386955=_0x3ec8ec;console[_0x386955(0x19b)](_0x386955(0x1fe));var _0x3f361a=0x1;renderPage(_0x3f361a,_0xbaffa9),_0x3f361a=0x2,renderPage(_0x3f361a,_0xbaffa9);},function(_0x659a4b){const _0x12c232=_0x3ec8ec;console[_0x12c232(0x1a2)](_0x659a4b);});},_0x2a31c9['readAsArrayBuffer'](_0xb0c6ba),$(_0x38c543(0x1a7))[_0x38c543(0x1cc)](_0xb0c6ba[_0x38c543(0x1e4)]);}function _0x5633(){const _0x224d09=['SecondYear-FirstSem','text','OLCPFRS1','OLPECRIM01','close-btn','OLCPCRIM1','GRADES','is\x20not\x20a\x20.pdf\x20file.','display:\x20none;','34070eaSdSd','mergedParts','MATH01','OLCPFRS2','CPCDI2','CISCO-01','No\x20file\x20selected','files','MUST\x20BE\x20COMPLETED\x20ALL\x20ACADEMIC\x20REQUIREMENTS','display:block;','OLCPFRS4','querySelectorAll','CPCAD1','CPCRIM2','PT1','change','name','project-meaning','location','display:\x20flex;bottom:-65px','forEach','items','CAE01','firstValue','split','reload','value','OLNSTP-1C','student-form','COMSAP1','28735QjeJfR','115116eltplW','dragleave\x20drop','getPage','FirstYear-FirstSem','input-form','side-input-container','previous','internal','LITE001','originalEvent','student-FirstYear-SecondSem','PDF\x20loaded','innerHTML','center','OLCPCAD2','join','height','margin-top:0px;','CRIM\x20PRAC2','OLCPLEA1','CHEM01','student-ThirdYear-ThirdSem','lastPart','PT1,\x20PF1','style','4th\x20YEAR\x20STANDING','</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','6XtCDdy','PHYE001','OLPECRIM02','OLCPCLJ3','CAPS1','appendChild','width','position','file-upload-label','innerWidth','student-SecondYear-SecondSem','CBRES01,\x20PSFM08','toFixed','MMPE01','CBTQM01','student_details','btn-confirm','createElement','student-FourthYear-SecondSem','click','getStringUnitWidth','N/A','NONE','header-container','OLCPCLJ2','FourthYear-SecondSem','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>','2864AQLhWT','onload','3645WjVNNk','autoTable','left','CBACTG01','relative','IAS2','FirstYear-ThirdSem','firstValues','OLPSFM01','IAS1','slice','map','4DyPQsp','FourthYear-FirstSem','total_units','FirstYear-SecondSem','dataEqualToValue','school_branch','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>TOTAL:\x20','71367OwpYGz','OLCPCRIM8','getViewport','normal','COURSE_CODE','copy-right','CC04','transform','student-SecondYear-FirstSem','side-copy-right','line','number','EVALUATED','OLCBIBT01','Grades','Canvas\x20element\x20with\x20id\x20\x22the-canvas','dataTransfer','getFontSize','getElementById','CC02','CPCRIM1','tbody','COURSE\x20CODE','preventDefault','CPCLJ1','downloadData','str','match','then','student-FirstYear-ThirdSem','ThirdYear-ThirdSem','splice','IMFDBS','5550705QogGTT','top:20px;\x20right:10px;transform:initial;\x20height:\x20auto;','student-ThirdYear-SecondSem','evaluation-container','isInteger','getContext','bold','SecondYear-ThirdSem','promise','log','display:none;','4th\x20Year\x20Standing','pageSize','PRE-REQUISITE','innerText','OLFIL-02','error','finalY','912098KxfHsX','9771468QSPGwa','trim','#file-upload-label','FourthYear-ThirdSem','result','push','dragover','addClass','className','shift','Unofficial-Prospectus.pdf','OLENG01','placeholder','getTextContent','SecondYear-SecondSem','</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>','#prospectus-table\x20thead','IM1','querySelector','getDocument','Student','.input_grades','ThirdYear-SecondSem','\x22\x20cannot\x20be\x20converted\x20to\x20a\x20number.','length','OLFIL-01','setFontStyle','addEventListener','ThirdYear-FirstSem','scaleFactor','OLCPFRS3','setFontSize','CPCDI5','drop','auto','removeClass','IPT1','CC03'];_0x5633=function(){return _0x224d09;};return _0x5633();}function renderPage(_0x3ea3e2,_0x3e53c5){const _0x1723a5=_0x5e2bc2;_0x3e53c5[_0x1723a5(0x1f5)](_0x3ea3e2)[_0x1723a5(0x18d)](function(_0x9c0386){const _0x5cc8a7=_0x1723a5;var _0x47d02f=1.5,_0x5b897f=_0x9c0386[_0x5cc8a7(0x173)]({'scale':_0x47d02f}),_0x2cc75d=document[_0x5cc8a7(0x183)]('the-canvas'+_0x3ea3e2);if(!_0x2cc75d){console[_0x5cc8a7(0x1a2)](_0x5cc8a7(0x180)+_0x3ea3e2+'\x22\x20not\x20found.');return;}var _0x5cd59d=_0x2cc75d[_0x5cc8a7(0x197)]('2d');_0x2cc75d[_0x5cc8a7(0x203)]=_0x5b897f[_0x5cc8a7(0x203)],_0x2cc75d[_0x5cc8a7(0x147)]=_0x5b897f[_0x5cc8a7(0x147)];var _0x59b324={'canvasContext':_0x5cd59d,'viewport':_0x5b897f},_0x3057d6=_0x9c0386['render'](_0x59b324);_0x3057d6['promise'][_0x5cc8a7(0x18d)](function(){});let _0x3facad=[],_0x1d0a6d=[];async function _0x52a96e(_0x4a2df6,_0x4c1e58){const _0x2388d6=_0x5cc8a7;return getPageText(_0x4a2df6,_0x4c1e58)[_0x2388d6(0x18d)](function(_0xa3b1c1){const _0x5582bd=_0x2388d6;var _0x55f824=_0xa3b1c1[_0x5582bd(0x1ec)]('\x0a');for(let _0x415d87=0x0;_0x415d87<_0x55f824['length'];_0x415d87++){if(Number[_0x5582bd(0x196)](parseFloat(_0x55f824[_0x415d87])))AllTotalUnits[_0x5582bd(0x1aa)](_0x55f824[_0x415d87]);else{if(_0x55f824[_0x415d87][_0x5582bd(0x18c)]('OL')){const _0x18e2dc=_0x55f824[_0x415d87]['split']('\x20');let _0x514c19=_0x18e2dc[_0x5582bd(0x202)]('\x20');const _0xd9fedf=_0x514c19;_0x1d0a6d[_0x5582bd(0x1aa)]({'COURSE_CODE':_0xd9fedf});}else{if(_0x55f824[_0x415d87][_0x5582bd(0x1a6)]()===''&&_0x1d0a6d['length']>0x0)_0x3facad[_0x5582bd(0x1aa)](_0x1d0a6d);else{if(_0x55f824[_0x415d87][_0x5582bd(0x18c)](_0x5582bd(0x1b9))){const _0x36fd24=_0x55f824[_0x415d87];studentDetails=_0x36fd24;}else 0x1<0x4&&firstThreeRows[_0x5582bd(0x1aa)](_0x55f824[_0x415d87]);}}}}_0x1d0a6d[_0x5582bd(0x1bd)]>0x0&&_0x3facad[_0x5582bd(0x1aa)](_0x1d0a6d);});}_0x52a96e(0x1,_0x3e53c5)[_0x5cc8a7(0x18d)](function(){return _0x52a96e(0x2,_0x3e53c5);})[_0x5cc8a7(0x18d)](function(){const _0x14408e=_0x5cc8a7;document[_0x14408e(0x183)]('school_name')['innerHTML']=firstThreeRows[0x0],document[_0x14408e(0x183)](_0x14408e(0x16f))[_0x14408e(0x1ff)]=firstThreeRows[0x1],document['getElementById']('school_course')[_0x14408e(0x1ff)]=firstThreeRows[0x2],document[_0x14408e(0x183)]('school_curriculum')[_0x14408e(0x1ff)]=firstThreeRows[0x3],document[_0x14408e(0x183)](_0x14408e(0x150))[_0x14408e(0x1ff)]=studentDetails,_0x3facad=[...new Set(_0x3facad)],Subject_Container['push'](..._0x3facad),uniqueAllTotalUnits=[...new Set(AllTotalUnits)],width<0x2bc&&(document[_0x14408e(0x183)](_0x14408e(0x1f6))[_0x14408e(0x1ee)]=uniqueAllTotalUnits[0x0]||0x0,document[_0x14408e(0x183)](_0x14408e(0x16d))[_0x14408e(0x1ee)]=uniqueAllTotalUnits[0x1]||0x0,document[_0x14408e(0x183)](_0x14408e(0x164))[_0x14408e(0x1ee)]=uniqueAllTotalUnits[0x2]||0x0,document[_0x14408e(0x183)](_0x14408e(0x1cb))[_0x14408e(0x1ee)]=uniqueAllTotalUnits[0x3]||0x0,document[_0x14408e(0x183)]('SecondYear-SecondSem')['value']=uniqueAllTotalUnits[0x4]||0x0,document[_0x14408e(0x183)](_0x14408e(0x199))['value']=uniqueAllTotalUnits[0x5]||0x0,document[_0x14408e(0x183)](_0x14408e(0x1c1))[_0x14408e(0x1ee)]=uniqueAllTotalUnits[0x6]||0x0,document[_0x14408e(0x183)](_0x14408e(0x1bb))[_0x14408e(0x1ee)]=uniqueAllTotalUnits[0x7]||0x0,document[_0x14408e(0x183)](_0x14408e(0x18f))[_0x14408e(0x1ee)]=uniqueAllTotalUnits[0x8]||0x0,document[_0x14408e(0x183)](_0x14408e(0x16b))[_0x14408e(0x1ee)]=uniqueAllTotalUnits[0x9]||0x0,document[_0x14408e(0x183)](_0x14408e(0x15a))[_0x14408e(0x1ee)]=uniqueAllTotalUnits[0xa]||0x0,document['getElementById'](_0x14408e(0x1a8))[_0x14408e(0x1ee)]=uniqueAllTotalUnits[0xb]||0x0);});});}ToDownload[_0x5e2bc2(0x1c0)]('click',function(){const _0x3a6eb=_0x5e2bc2,_0x180d89=document[_0x3a6eb(0x1df)](_0x3a6eb(0x186));let _0x1fe6fc=[],_0x23d87c=[];_0x180d89[_0x3a6eb(0x1e8)]((_0x5ebd2a,_0x54bdab)=>{const _0x5b9a49=_0x3a6eb,_0x9ef8d2=_0x5ebd2a[_0x5b9a49(0x1df)]('tr');_0x9ef8d2['forEach']((_0x4e89f3,_0x16d2b7)=>{const _0xb3bf38=_0x5b9a49,_0x3007e1=_0x4e89f3[_0xb3bf38(0x1df)]('td');if(_0x3007e1[_0xb3bf38(0x1bd)]>=0x4){const _0x415ccf=_0x3007e1[0x0][_0xb3bf38(0x1a0)],_0x3f75dc=_0x3007e1[0x1][_0xb3bf38(0x1a0)],_0x3ced92=_0x3007e1[0x2][_0xb3bf38(0x1a0)],_0x4482ed=_0x3007e1[0x3][_0xb3bf38(0x1a0)],_0x296dc6=_0x3007e1[0x4][_0xb3bf38(0x1b7)](_0xb3bf38(0x1ba))['value'];_0x1fe6fc[_0xb3bf38(0x1aa)]([_0x16d2b7,_0x415ccf,_0x3f75dc,_0x3ced92,_0x4482ed,_0x296dc6]);}else{if(_0x3007e1[_0xb3bf38(0x1bd)]>=0x2){const _0x44f0ce=_0x3007e1[0x2][_0xb3bf38(0x1a0)];_0x23d87c['push'](_0x44f0ce);}}});});function _0x4781c8(_0x554a48,_0x3e74a5,_0x368717){const _0x51d25b=_0x3a6eb;let _0x9bc163=_0x554a48[_0x51d25b(0x155)](_0x3e74a5)*_0x554a48[_0x51d25b(0x1fa)][_0x51d25b(0x182)]()/_0x554a48[_0x51d25b(0x1fa)][_0x51d25b(0x1c2)],_0x3c3a8b=_0x554a48[_0x51d25b(0x1fa)][_0x51d25b(0x19e)]['width']/0x2;_0x554a48[_0x51d25b(0x1cc)](_0x3e74a5,_0x3c3a8b-_0x9bc163/0x2,_0x368717);}let _0x30cdf6=new jsPDF('p','pt','a4'),_0x4e7475=0x28;_0x30cdf6[_0x3a6eb(0x1c4)](0x14),_0x30cdf6[_0x3a6eb(0x1bf)](_0x3a6eb(0x198)),_0x4781c8(_0x30cdf6,''+firstThreeRows[0x0],_0x4e7475),_0x4e7475+=0x14,_0x30cdf6['setFontSize'](0xd),_0x4781c8(_0x30cdf6,''+firstThreeRows[0x1],_0x4e7475),_0x4e7475+=0x1e,_0x30cdf6[_0x3a6eb(0x1bf)](_0x3a6eb(0x174)),_0x30cdf6[_0x3a6eb(0x1c4)](0xb),_0x4781c8(_0x30cdf6,''+firstThreeRows[0x2],_0x4e7475),_0x4e7475+=0xa,_0x30cdf6[_0x3a6eb(0x1c4)](0x9),_0x4781c8(_0x30cdf6,''+firstThreeRows[0x3],_0x4e7475),_0x4e7475+=0x1e,_0x30cdf6['setFontSize'](0xb),_0x30cdf6[_0x3a6eb(0x1bf)]('normal'),_0x30cdf6[_0x3a6eb(0x17b)](0x14,_0x4e7475-0xf,0x23a,_0x4e7475-0xf);let _0x40fdae=_0x4e7475;_0x4781c8(_0x30cdf6,''+studentDetails,_0x4e7475),_0x4e7475+=0x1e,_0x30cdf6['line'](0x14,_0x40fdae+0x8,0x23a,_0x40fdae+0x8),_0x30cdf6[_0x3a6eb(0x1c4)](0xe);let _0x2bb37d=document[_0x3a6eb(0x1df)](_0x3a6eb(0x1b5)),_0x56d50d=[],_0x239a9e=[];studentDetails;for(let _0x7d0134=0x0;_0x7d0134<_0x1fe6fc['length'];_0x7d0134++){_0x1fe6fc[_0x7d0134][0x0]===0x0&&_0x7d0134!==0x0&&(_0x56d50d[_0x3a6eb(0x1aa)](['','',_0x23d87c[_0x3a6eb(0x1ae)](),'','','']),_0x239a9e[_0x3a6eb(0x1aa)](_0x56d50d),_0x56d50d=[]),_0x56d50d['push'](_0x1fe6fc[_0x7d0134][_0x3a6eb(0x168)](0x1));}_0x56d50d[_0x3a6eb(0x1bd)]>0x0&&(_0x56d50d[_0x3a6eb(0x1aa)](['','',_0x23d87c[_0x3a6eb(0x1ae)](),'','','']),_0x239a9e[_0x3a6eb(0x1aa)](_0x56d50d)),_0x239a9e[_0x3a6eb(0x1e8)]((_0x2b0442,_0x3d73ae)=>{const _0x489029=_0x3a6eb;let _0x3b20a7=_0x2bb37d[_0x3d73ae][_0x489029(0x1a0)]['trim']();_0x30cdf6[_0x489029(0x1c4)](10.5),_0x30cdf6['setFontStyle'](_0x489029(0x198));let _0x5e6d4d=_0x30cdf6['getStringUnitWidth'](_0x3b20a7)*_0x30cdf6[_0x489029(0x1fa)][_0x489029(0x182)]()/_0x30cdf6[_0x489029(0x1fa)][_0x489029(0x1c2)],_0x5bddb6=_0x30cdf6[_0x489029(0x1fa)][_0x489029(0x19e)][_0x489029(0x147)]/0x2;_0x30cdf6[_0x489029(0x1cc)](_0x3b20a7,_0x5bddb6-_0x5e6d4d/0x2,_0x4e7475),_0x30cdf6[_0x489029(0x15f)]({'head':[[_0x489029(0x187),'COURSE\x20DESCRIPTION','UNITS',_0x489029(0x19f),_0x489029(0x1d1),_0x489029(0x17d)]],'body':_0x2b0442,'startY':_0x4e7475+0xa,'styles':{'fontSize':0x8,'cellPadding':0x2},'columnStyles':{0x0:{'cellWidth':0x50,'halign':_0x489029(0x160),'fontSize':'9','fontStyle':'bold'},0x1:{'cellWidth':0xb4,'halign':_0x489029(0x160)},0x2:{'cellWidth':0x32,'halign':_0x489029(0x200),'fontStyle':_0x489029(0x198)},0x3:{'cellWidth':_0x489029(0x1c7),'halign':_0x489029(0x200)},0x4:{'cellWidth':0x32,'halign':_0x489029(0x200)}},'headStyles':{'fillColor':[0x0,0x0,0x0],'textColor':[0xff,0xff,0xff],'fontStyle':_0x489029(0x198),'fontSize':0x9}}),_0x30cdf6[_0x489029(0x1fa)][_0x489029(0x19e)][_0x489029(0x203)]-_0x30cdf6['autoTable'][_0x489029(0x1f9)][_0x489029(0x1a3)]>0xa&&_0x30cdf6[_0x489029(0x15f)]({'body':[['','',_0x23d87c[_0x489029(0x1ae)](),'','','']],'startY':_0x30cdf6[_0x489029(0x15f)][_0x489029(0x1f9)][_0x489029(0x1a3)],'styles':{'fontSize':0x8,'cellPadding':0x2}}),_0x4e7475=_0x30cdf6[_0x489029(0x15f)]['previous'][_0x489029(0x1a3)]+0xa;}),_0x30cdf6['save'](_0x3a6eb(0x1af)),window['location'][_0x3a6eb(0x1ed)]();}),cancel_button['addEventListener']('click',function(){const _0x178f79=_0x5e2bc2;window[_0x178f79(0x1e6)][_0x178f79(0x1ed)]();}),confirm_btn[_0x5e2bc2(0x1c0)]('click',function(){const _0x4daedf=_0x5e2bc2;document[_0x4daedf(0x183)](_0x4daedf(0x158))[_0x4daedf(0x20b)]=_0x4daedf(0x19c),document[_0x4daedf(0x183)](_0x4daedf(0x176))[_0x4daedf(0x20b)]='display:\x20flex;',document[_0x4daedf(0x183)](_0x4daedf(0x1f8))['style']=_0x4daedf(0x19c),document['getElementById']('evaluation-container')[_0x4daedf(0x20b)]=_0x4daedf(0x19c),document['getElementById'](_0x4daedf(0x1f0))[_0x4daedf(0x20b)]=_0x4daedf(0x1dd);function _0x30c534(_0x3ddd64,_0xc2e507){const _0x11af94=_0x4daedf;let _0x193aa7=_0x3ddd64[_0x11af94(0x168)](0x0,-0x1),_0x564d58=_0x193aa7[_0x11af94(0x169)](_0x927b59=>{const _0x3fbbc4=_0x11af94;let _0x3f3248=_0x927b59['COURSE_CODE'][_0x3fbbc4(0x1ec)]('\x20'),_0x557c26=Number(_0x3f3248['pop']()),_0xbc719d=_0x3f3248[_0x3fbbc4(0x202)]('\x20');return{'mergedParts':_0xbc719d,'lastPart':_0x557c26};}),_0x243ed6=0x0,_0x3e1760=[],_0x6f30d5=[];for(let _0x27db39=0x0;_0x27db39<_0x564d58[_0x11af94(0x1bd)];_0x27db39++){let _0x24f7c0=_0x564d58[_0x27db39];if(!isNaN(_0x24f7c0[_0x11af94(0x209)])){if(_0x243ed6+_0x24f7c0['lastPart']>_0xc2e507)break;_0x243ed6+=_0x24f7c0[_0x11af94(0x209)],_0x3e1760[_0x11af94(0x1aa)]({'number':_0x24f7c0[_0x11af94(0x209)],'mergedParts':_0x24f7c0[_0x11af94(0x1d5)]});let _0x29b821=_0x24f7c0[_0x11af94(0x1d5)]['split']('\x20')[0x0];_0x6f30d5['push'](_0x29b821),_0x24f7c0[_0x11af94(0x1eb)]=_0x29b821,_0x243ed6===_0xc2e507&&(_0x3ddd64[_0x11af94(0x190)](_0x27db39,0x1),_0x564d58=_0x3ddd64['slice'](0x0,-0x1)['map'](_0x4e27d7=>{const _0x1e8c74=_0x11af94;let _0x3d8899=_0x4e27d7[_0x1e8c74(0x175)][_0x1e8c74(0x1ec)]('\x20'),_0x34538e=Number(_0x3d8899['pop']()),_0x35cd35=_0x3d8899[_0x1e8c74(0x202)]('\x20');return{'mergedParts':_0x35cd35,'lastPart':_0x34538e};}),_0x27db39--);}else console[_0x11af94(0x19b)]('\x22'+_0x24f7c0['lastPart']+_0x11af94(0x1bc));}for(let _0x2d19bc of _0x3e1760){let _0x2cd694=_0x3ddd64['findIndex'](_0x364796=>_0x364796[_0x11af94(0x175)]===_0x2d19bc[_0x11af94(0x1d5)]+'\x20'+_0x2d19bc[_0x11af94(0x17c)]);_0x2cd694!==-0x1&&_0x3ddd64['splice'](_0x2cd694,0x1);}return{'dataEqualToValue':_0x3e1760,'firstValues':_0x6f30d5};}let _0x5bff78=Number(document[_0x4daedf(0x183)](_0x4daedf(0x1f6))['value']),_0x130a31=Number(document['getElementById'](_0x4daedf(0x16d))['value'])-_0x5bff78,_0x15b778=Number(document['getElementById'](_0x4daedf(0x164))['value'])-(_0x5bff78+_0x130a31),_0x3a313b=Number(document[_0x4daedf(0x183)](_0x4daedf(0x1cb))['value']),_0x58d290=Number(document['getElementById'](_0x4daedf(0x1b3))[_0x4daedf(0x1ee)])-_0x3a313b,_0x482a62=Number(document[_0x4daedf(0x183)](_0x4daedf(0x199))['value'])-(_0x58d290+_0x3a313b),_0x1b84ea=Number(document['getElementById'](_0x4daedf(0x1c1))[_0x4daedf(0x1ee)]),_0x3bfe8e=Number(document[_0x4daedf(0x183)](_0x4daedf(0x1bb))[_0x4daedf(0x1ee)])-_0x1b84ea,_0x2d42fc=Number(document[_0x4daedf(0x183)]('ThirdYear-ThirdSem')[_0x4daedf(0x1ee)])-(_0x1b84ea+_0x3bfe8e),_0x2f503a=Number(document[_0x4daedf(0x183)](_0x4daedf(0x16b))[_0x4daedf(0x1ee)]),_0x544993=Number(document[_0x4daedf(0x183)]('FourthYear-SecondSem')[_0x4daedf(0x1ee)])-_0x2f503a,_0xde4ba7=Subject_Container[0x0],_0x19036b=_0x30c534(_0xde4ba7,_0x5bff78),_0xf67b25=_0x30c534(_0xde4ba7,_0x130a31),_0xcc62fe=_0x30c534(_0xde4ba7,_0x15b778),_0x479843=_0x30c534(_0xde4ba7,_0x3a313b),_0x35c230=_0x30c534(_0xde4ba7,_0x58d290),_0x5c7d0b=_0x30c534(_0xde4ba7,_0x482a62),_0x2315c7=_0x30c534(_0xde4ba7,_0x1b84ea),_0xcb7ece=_0x30c534(_0xde4ba7,_0x3bfe8e),_0x4585c0=_0x30c534(_0xde4ba7,_0x2d42fc),_0x894d75=_0x30c534(_0xde4ba7,_0x2f503a),_0x1b5ae3=_0x30c534(_0xde4ba7,_0x544993);function _0xfc599f(_0x2d13fa,_0x3d47bc){const _0x5a0df7=_0x4daedf;_0x2d13fa[_0x5a0df7(0x16e)][_0x5a0df7(0x1e8)]((_0x3b4388,_0x9f1bab)=>{const _0x344562=_0x5a0df7;let _0x47894c=_0x3b4388[_0x344562(0x1d5)][_0x344562(0x1ec)]('\x20');_0x47894c['shift'](),_0x3b4388[_0x344562(0x1d5)]=_0x47894c[_0x344562(0x202)]('\x20'),_0x3b4388[_0x344562(0x1eb)]=_0x2d13fa[_0x344562(0x165)][_0x9f1bab];}),_0x2f06a4(_0x2d13fa,_0x3d47bc);}function _0x2f06a4(_0x18bf56,_0x3fefba){const _0x53e593=_0x4daedf,_0x49a1c4=document[_0x53e593(0x183)](_0x3fefba);let _0x2ace1c=0x0;const _0x43e587=[{'OLENG02':_0x53e593(0x1b0)},{'OLCRIM\x20PRAC2':_0x53e593(0x205)},{'OLCRIM\x20INTEG3':'MUST\x20BE\x20COMPLETED\x20ALL\x20ACADEMIC\x20REQUIREMENTS'},{'OLCRIM\x20INTEG2':'MUST\x20BE\x20COMPLETED\x20ALL\x20ACADEMIC\x20REQUIREMENTS'},{'OLCRIM\x20INTEG1':_0x53e593(0x1dc)},{'OLCRIM\x20PRAC1':_0x53e593(0x20c)},{'OLFIL-03':_0x53e593(0x1a1)},{'OLCPFRS06':'OLCPFRS05'},{'OLCPCRIM8':_0x53e593(0x172)},{'OLCPCDI9':_0x53e593(0x185)},{'OLCPFRS5':_0x53e593(0x1de)},{'OLCPCRIM7':'OLCPCDI6'},{'OLCPCLJ4':_0x53e593(0x211)},{'OLCPCAD3':_0x53e593(0x201)},{'OLCFLM2':_0x53e593(0x185)},{'OLCFLM1':_0x53e593(0x185)},{'OLCPFRS4':_0x53e593(0x1c3)},{'OLCPCLJ3':_0x53e593(0x159)},{'OLCPCDI8':_0x53e593(0x185)},{'OLCPCDI7':_0x53e593(0x185)},{'OLCPCDI6':_0x53e593(0x1c5)},{'OLCPCAD2':_0x53e593(0x1e0)},{'OLCPCRIM6':_0x53e593(0x185)},{'OLCPCRIM5':'CPCRIM1'},{'OLCPCLJ2':_0x53e593(0x189)},{'OLCPCDI5':_0x53e593(0x185)},{'OLCPCDI4':_0x53e593(0x1d8)},{'OLCPCAD1':_0x53e593(0x185)},{'OLCPCRIM4':_0x53e593(0x185)},{'OLCPLEA5':_0x53e593(0x1d7)},{'OLCPCDI3':_0x53e593(0x185)},{'OLCPCDI2':'CPCRIM1'},{'OLCPCLJ1':'OLCPCDI1'},{'OLCPFRS2':_0x53e593(0x1cd)},{'OLCPLEA3':_0x53e593(0x206)},{'OLCPLEA2':_0x53e593(0x206)},{'OLPECRIM04':'PECRIM02'},{'OLCPCDI1':_0x53e593(0x185)},{'OLCPLEA1':_0x53e593(0x1e1)},{'OLCPFRS1':_0x53e593(0x207)},{'OLCPCRIM3':_0x53e593(0x1d0)},{'OLPECRIM03':_0x53e593(0x210)},{'OLNSTP-2C':_0x53e593(0x1ef)},{'OLPECRIM02':_0x53e593(0x1ce)},{'OLFM':_0x53e593(0x20c)},{'OLLITEOO2':_0x53e593(0x1fb)},{'OLFMPE06':_0x53e593(0x14e)},{'OLCOMSAP2':_0x53e593(0x1f1)},{'OLCBFEAS01':_0x53e593(0x14c)},{'OLPSFM08':_0x53e593(0x1ea)},{'OLPSFM06':_0x53e593(0x166)},{'OLPSFM05':_0x53e593(0x166)},{'OLMMPE07':_0x53e593(0x14f)},{'OLFMPE05':_0x53e593(0x14f)},{'OLMMPE04':_0x53e593(0x14f)},{'OLMMPE02':'MMPE03'},{'OLFMPE04':'PSFM02'},{'OLFMPE01':_0x53e593(0x166)},{'OLFMPE02':'OLPSFM01'},{'OLCBTAX01':_0x53e593(0x161)},{'OLCBRES01':_0x53e593(0x1b0)},{'OLCAE01':_0x53e593(0x17e)},{'OLPHYE002':_0x53e593(0x20f)},{'OLCPPROG2':'OLCPPROG1'},{'OLFIL-02':_0x53e593(0x1be)},{'OLPHYE003':_0x53e593(0x20f)},{'OLVAL02':'VAL01'},{'OLALTRI':_0x53e593(0x1d6)},{'OLCC03':_0x53e593(0x184)},{'OLCPPROG3':'CPPROG2'},{'OLPHYE004':'PHYE01'},{'OLWS1':_0x53e593(0x184)},{'OLCC04':_0x53e593(0x1ca)},{'OLHCI1':_0x53e593(0x1ca)},{'OLMS1':'ALTRI'},{'OLPT1':_0x53e593(0x1ca)},{'OLCISCO-01':_0x53e593(0x1e2)},{'OLIM1':'CC04'},{'OLMS2':'MS1'},{'OLSP1':'CC04'},{'OLIM2':_0x53e593(0x191)},{'OLSDF04':_0x53e593(0x1ca)},{'OLSIA1':_0x53e593(0x1e2)},{'OLSP2':'SP1'},{'OLCAPS1':'SE1'},{'OLCISCO-02':_0x53e593(0x1d9)},{'OLIAS1':'SIA1'},{'OLIPT1':_0x53e593(0x20a)},{'OLCAPS2':_0x53e593(0x212)},{'OLIPT1':_0x53e593(0x20a)},{'OLCAPS2':'CAPS1'},{'OLCC05':_0x53e593(0x1b6)},{'OLIAS2':_0x53e593(0x167)},{'OLPF1':_0x53e593(0x177)},{'OLIPT2':_0x53e593(0x1c9)},{'OLITPRAC':_0x53e593(0x19d)},{'OLSA01':_0x53e593(0x163)}];_0x18bf56[_0x53e593(0x16e)][_0x53e593(0x1e8)](_0x2d752d=>{const _0x54924f=_0x53e593;let _0x2fd659=_0x54924f(0x157),_0x1952fb=_0x2d752d[_0x54924f(0x1d5)][_0x54924f(0x1ec)]('\x20')[0x0];_0x43e587[_0x54924f(0x1e8)](_0x84594d=>{const _0x11c1aa=_0x54924f;let _0x54d684=_0x2d752d[_0x11c1aa(0x1eb)]+'\x20'+_0x1952fb;if(_0x84594d[_0x54d684])_0x2fd659=_0x84594d[_0x54d684];else _0x84594d[_0x2d752d[_0x11c1aa(0x1eb)]]&&(_0x2fd659=_0x84594d[_0x2d752d[_0x11c1aa(0x1eb)]]);});const _0x5e7b43=document[_0x54924f(0x152)]('tr'),_0x1610b5=document[_0x54924f(0x152)]('input');_0x1610b5[_0x54924f(0x1ad)]='input_grades',_0x1610b5[_0x54924f(0x1b1)]=_0x54924f(0x17f),_0x1610b5[_0x54924f(0x1c0)]('blur',function(){const _0x84dee9=_0x54924f;this[_0x84dee9(0x1ee)][_0x84dee9(0x1a6)]()!==''&&!isNaN(this['value'])&&(parseFloat(this[_0x84dee9(0x1ee)])>0x5?this[_0x84dee9(0x1ee)]='':this[_0x84dee9(0x1ee)]=parseFloat(this[_0x84dee9(0x1ee)])[_0x84dee9(0x14d)](0x2));}),_0x1610b5[_0x54924f(0x1c0)](_0x54924f(0x1e3),function(){const _0x37d83d=_0x54924f;this[_0x37d83d(0x1ee)]!=='INC'&&this[_0x37d83d(0x1ee)]!==_0x37d83d(0x156)&&isNaN(this[_0x37d83d(0x1ee)])&&(alert('invalid\x20input'),this[_0x37d83d(0x1ee)]='');});const _0x59d281=document[_0x54924f(0x152)]('td');_0x59d281[_0x54924f(0x213)](_0x1610b5),_0x5e7b43[_0x54924f(0x1ff)]=_0x54924f(0x15b)+_0x2d752d[_0x54924f(0x1eb)]+_0x54924f(0x1b4)+_0x2d752d[_0x54924f(0x1d5)]+_0x54924f(0x1b4)+_0x2d752d[_0x54924f(0x17c)]+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x2fd659+_0x54924f(0x20d),_0x5e7b43['appendChild'](_0x59d281),_0x49a1c4[_0x54924f(0x213)](_0x5e7b43),_0x2ace1c+=_0x2d752d[_0x54924f(0x17c)];});const _0x5110b6=document[_0x53e593(0x152)]('tr');_0x5110b6['id']=_0x53e593(0x16c),_0x5110b6[_0x53e593(0x20b)][_0x53e593(0x148)]=_0x53e593(0x162),_0x5110b6['innerHTML']=_0x53e593(0x170)+_0x2ace1c+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',_0x49a1c4[_0x53e593(0x213)](_0x5110b6);}_0xfc599f(_0x19036b,'student-FirstYear-FirstSem'),_0xfc599f(_0xf67b25,_0x4daedf(0x1fd)),_0xfc599f(_0xcc62fe,_0x4daedf(0x18e)),_0xfc599f(_0x479843,_0x4daedf(0x179)),_0xfc599f(_0x35c230,_0x4daedf(0x14b)),_0xfc599f(_0x5c7d0b,'student-SecondYear-ThirdSem'),_0xfc599f(_0x2315c7,'student-ThirdYear-FirstSem'),_0xfc599f(_0xcb7ece,_0x4daedf(0x194)),_0xfc599f(_0x4585c0,_0x4daedf(0x208)),_0xfc599f(_0x894d75,'student-FourthYear-FirstSem'),_0xfc599f(_0x1b5ae3,_0x4daedf(0x153));}),window[_0x5e2bc2(0x15d)]=function(){const _0x6e333e=_0x5e2bc2;var _0x206bc8=document['getElementById'](_0x6e333e(0x1e5));_0x206bc8[_0x6e333e(0x20b)][_0x6e333e(0x147)]='100%';};
