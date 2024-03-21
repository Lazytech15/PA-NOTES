const ToDownload = document.getElementById('downloadData');
const confirm_btn = document.getElementById('btn-confirm');

let studentDetails = [];
const Subject_Container=[];



function getPageText(pageNum, PDFDocumentInstance) {
    return new Promise(function (resolve, reject) {
        PDFDocumentInstance.getPage(pageNum).then(function (pdfPage) {
            pdfPage.getTextContent().then(function (textContent) {
                var textItems = textContent.items;
                var rows = {};

                for (var i = 0; i < textItems.length; i++) {
                    var item = textItems[i];
                    // Group items by their vertical position
                    var top = Math.round(item.transform[5]);
                    if (!rows[top]) rows[top] = [];
                    rows[top].push(item.str);
                }

                // Sort rows by vertical position and concatenate the text items in each row
                var sortedRows = Object.keys(rows).sort((a, b) => -a + b); // sort in reverse order
                var finalString = "";
                for (var i = 0; i < sortedRows.length; i++) {
                    finalString += rows[sortedRows[i]].join(' ') + "\n";
                }

                resolve(finalString);
            });
        });
    });
}


  // Drag and drop
$('#file-upload-label').on('dragover', function(event) {
    event.preventDefault();
    $(this).addClass('dragover');
});

$('#file-upload-label').on('dragleave drop', function(event) {
    event.preventDefault();
    $(this).removeClass('dragover');
});

$('#file-upload-label').on('drop', function(event) {
    event.preventDefault();
    var file = event.originalEvent.dataTransfer.files[0];
    document.getElementById('file-upload-label').style="display:none;"
    document.getElementById('evaluation-container').style="display:block;"
    document.getElementById('side-input-container').style="top:30px; right:10px;transform:initial; height: auto;"
    document.getElementById('header-container').style="display:none;"
    document.getElementById('input-form').style="display:block;"
    handleFileUpload(file);
    
    console.log(file);
});

$('#file-upload').on("change", function() {
    if (this.files.length > 0) {
        var file = this.files[0];
        document.getElementById('file-upload-label').style="display:none;"
        document.getElementById('evaluation-container').style="display:block;"
        document.getElementById('side-input-container').style="top:30px; right:10px;transform:initial; height: auto;"
        document.getElementById('header-container').style="display:none;"
        document.getElementById('input-form').style="display:block;"
        handleFileUpload(file);
        console.log(file);
    } else {
        console.log('No file selected');
    }
});

$('#file-upload-label').on("click", function() {
    
});

function handleFileUpload(file) {
    if (file.type !== 'application/pdf') {
        console.error(file.name, 'is not a .pdf file.');
        return;
    }
    var fileReader = new FileReader();  
    fileReader.onload = function() {
        var typedarray = new Uint8Array(this.result);

        pdfjsLib.getDocument(typedarray).promise.then(function(pdf) {
            console.log('PDF loaded');
            
            // Fetch the first page
            var pageNumber = 1;
            renderPage(pageNumber, pdf);

            // Fetch the second page
            pageNumber = 2;
            renderPage(pageNumber, pdf);
        }, function (reason) {
            // PDF loading error
            console.error(reason);
        });
    };
    fileReader.readAsArrayBuffer(file);
    $('#file-upload-label').text(file.name); // Display the name of the uploaded file on the label
}

function renderPage(pageNumber, pdf) {
    pdf.getPage(pageNumber).then(function(page) {
        console.log('Page ' + pageNumber + ' loaded');
        
        var scale = 1.5;
        var viewport = page.getViewport({scale: scale});

        // Prepare canvas using PDF page dimensions
        var canvas = document.getElementById('the-canvas' + pageNumber); // use a different canvas for each page
        if (!canvas) {
            console.error('Canvas element with id "the-canvas' + pageNumber + '" not found.');
            return;
        }
        var context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render PDF page into canvas context
        var renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        var renderTask = page.render(renderContext);
        renderTask.promise.then(function () {
            console.log('Page ' + pageNumber + ' rendered');
        });


let List_Subjects=[];
let group = [];
async function processPage(pageNumber, pdf) {
    return getPageText(pageNumber, pdf).then(function(textPage) {
        var rows = textPage.split('\n');
        
        for (let i = 0; i < rows.length; i++) {
            if (rows[i].match("OL")) {
                const columns = rows[i].split(' ');
                let newRow = columns.join(' ');
                const COURSE_CODE = newRow;
                group.push({COURSE_CODE});
            } else if (rows[i].trim() === '' && group.length > 0) {
                List_Subjects.push(group);
            } else if (rows[i].match("Student")) {
                const student = rows[i];
                studentDetails = student;
        }
    }
        // Push the last group if it's not empty
        if (group.length > 0) {
            List_Subjects.push(group);
        }
    });
}

// Process the first page
processPage(1, pdf)
    .then(function() {
        console.log('Finished processing page 1');
        return processPage(2, pdf);
    })
    .then(function() {
        console.log('Finished processing page 2');
        console.log(studentDetails);
        document.getElementById('student_details').innerHTML = studentDetails; 
        List_Subjects = [...new Set(List_Subjects)];
        Subject_Container.push(...List_Subjects);
        
        
    }); 
    });
}

ToDownload.addEventListener('click', function(){
      // Get all the table bodies
const tableBodies = document.querySelectorAll('tbody');

let data = [];

// Iterate over each table body
tableBodies.forEach((tableBody, tableIndex) => {
    console.log(`Table ${tableIndex + 1}:`);
    

    // Get all the rows in the current table body
    const rows = tableBody.querySelectorAll('tr');

    rows.forEach((row, rowIndex) => {
        const cells = row.querySelectorAll('td');
        if (cells.length >= 3) {
            const firstValue = cells[0].innerText;
            const mergedParts = cells[1].innerText;
            const inputGrade = cells[2].querySelector('.input_grades').value;
            data.push([rowIndex, firstValue, mergedParts, inputGrade]);
        }
        
    });
});

function addCenteredText(doc, text, y) {
    let textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    let pageCenter = doc.internal.pageSize.width / 2;
    doc.text(text, pageCenter - textWidth / 2, y);
}

let doc = new jsPDF('p', 'pt', 'a4');
let startY = 30;

doc.setFontSize(16);
doc.setFontStyle('bold');
addCenteredText(doc, "ICCT Colleges Foundation Inc.", startY);
startY += 30;

doc.setFontSize(13);
addCenteredText(doc, "ANTIPOLO BRANCH", startY);
startY += 30;

doc.setFontSize(11);
doc.setFontStyle('normal');
addCenteredText(doc, `${studentDetails}`, startY);
startY += 30;

doc.setFontSize(14);

let theads = document.querySelectorAll('#prospectus-table thead');

// Prepare an array to hold the data for each section
let allData = [];
let sectionData = [];
studentDetails
// Iterate over the data array
for (let i = 0; i < data.length; i++) {
    // If the first value resets to 0 and it's not the first row, start a new section
    if (data[i][0] === 0 && i !== 0) {
        allData.push(sectionData);
        sectionData = [];
    }

    // Add the current row to the current section
    sectionData.push(data[i].slice(1)); // Remove the index from the row
}

// Add the last section to allData
allData.push(sectionData);

// Iterate over allData to create a table for each section
allData.forEach((sectionData, index) => {
    // Extract the header text
    let header = theads[index].innerText.trim();
    
    // Set the font size
doc.setFontSize(11); // Adjust the font size as needed
doc.setFontStyle('bold');
// Calculate the width of the header text
let headerWidth = doc.getStringUnitWidth(header) * doc.internal.getFontSize() / doc.internal.scaleFactor;

// Calculate the center of the page
let pageCenter = doc.internal.pageSize.width / 2;

// Add the header to the PDF, centered
doc.text(header, pageCenter - (headerWidth / 2), startY);
doc.autoTable({
    head: [['Course Code', 'Course Description', 'Grade Input']],
    body: sectionData,
    startY: startY + 10,
    styles: {
        fontSize: 9,
        cellPadding: 2,
    },
    columnStyles: {
        0: {cellWidth: 100, halign:'left'},
        1: {cellWidth: 330, halign: 'left'},
        2: {cellWidth: 75, halign: 'center'}
    },
    headStyles: {
        fillColor: [0, 0, 0],
        textColor: [255, 255, 255],
        fontStyle: 'bold',
        fontSize: 10
    }
});

    

    // Update startY for the next table
    startY = doc.autoTable.previous.finalY + 30; // Adjust this value as needed
});

doc.save('Prospectus.pdf');
    });

    confirm_btn.addEventListener('click', function(){
        document.getElementById('side-input-container').style="display:none;"
        document.getElementById('evaluation-container').style="display:none;"
        document.getElementById('student-form').style="display:block;"

        function processDataAndCalculateSum(DataGathered, valueToCompare) {
            let AllData = DataGathered.slice(0, -1); // Remove the last element
        
            // Process data
            let processedData = AllData.map(data => {
                let parts = data.COURSE_CODE.split(' ');
                let lastPart = Number(parts.pop()); // Convert to number here
                let mergedParts = parts.join(' ');
                return {
                    mergedParts,
                    lastPart
                };
            });
        
            let sum = 0;
            let dataEqualToValue = [];
            let firstValues = []; // New array to store the first values
        
            // Calculate sum and gather data
            for (let i = 0; i < processedData.length; i++) {
                let data = processedData[i];
                if (!isNaN(data.lastPart)) {
                    if (sum + data.lastPart > valueToCompare) {
                        break;
                    }
                    sum += data.lastPart;
                    dataEqualToValue.push({
                        number: data.lastPart,
                        mergedParts: data.mergedParts
                    });
                    let firstValue = data.mergedParts.split(' ')[0];
                        firstValues.push(firstValue);
    
                        // Add the first value to the current object
                        data.firstValue = firstValue;
                    if (sum === valueToCompare) {
                        // Remove the data from DataGathered
                        DataGathered.splice(i, 1);
                        // Reset processedData and i to reflect the change in DataGathered
                        processedData = DataGathered.slice(0, -1).map(data => {
                            let parts = data.COURSE_CODE.split(' ');
                            let lastPart = Number(parts.pop());
                            let mergedParts = parts.join(' ');
                            return {
                                mergedParts,
                                lastPart
                            };
                        });
                        i--;
                    }
                } else {
                    console.log(`"${data.lastPart}" cannot be converted to a number.`);
                }
            }
    
            // Remove the data that has been used in the comparison from DataGathered
            for (let data of dataEqualToValue) {
                let index = DataGathered.findIndex(d => d.COURSE_CODE === data.mergedParts + ' ' + data.number);
                if (index !== -1) {
                    DataGathered.splice(index, 1);
                }
            }
            console.log(dataEqualToValue);
            // Return the data that adds up to the sum and the first values
            return {
                dataEqualToValue,
                firstValues
            };

            
            
        }
        
    
        let valueOFSem1 = Number(document.getElementById('FirstYear-FirstSem').value);
        let valueOFSem2 = Number(document.getElementById('FirstYear-SecondSem').value) - valueOFSem1;
        let valueOFSem3 = Number(document.getElementById('FirstYear-ThirdSem').value) - (valueOFSem1 + valueOFSem2);
        let valueOFSem4 = Number(document.getElementById('SecondYear-FirstSem').value);
        let valueOFSem5 = Number(document.getElementById('SecondYear-SecondSem').value) - valueOFSem4;
        let valueOFSem6 = Number(document.getElementById('SecondYear-ThirdSem').value) - (valueOFSem5 + valueOFSem4);
        let valueOFSem7 = Number(document.getElementById('ThirdYear-FirstSem').value);
        let valueOFSem8 = Number(document.getElementById('ThirdYear-SecondSem').value) - valueOFSem7;
        let valueOFSem9 = Number(document.getElementById('ThirdYear-ThirdSem').value) - (valueOFSem7 + valueOFSem8);
        let valueOFSem10 = Number(document.getElementById('FourthYear-FirstSem').value);
        let valueOFSem11 = Number(document.getElementById('FourthYear-SecondSem').value) - valueOFSem10;
        
        let DataGathered = Subject_Container[0];
        let resultSem1 = processDataAndCalculateSum(DataGathered, valueOFSem1);
        let resultSem2 = processDataAndCalculateSum(DataGathered, valueOFSem2);
        let resultSem3 = processDataAndCalculateSum(DataGathered, valueOFSem3);
        let resultSem4 = processDataAndCalculateSum(DataGathered, valueOFSem4);
        let resultSem5 = processDataAndCalculateSum(DataGathered, valueOFSem5);
        let resultSem6 = processDataAndCalculateSum(DataGathered, valueOFSem6);
        let resultSem7 = processDataAndCalculateSum(DataGathered, valueOFSem7);
        let resultSem8 = processDataAndCalculateSum(DataGathered, valueOFSem8);
        let resultSem9 = processDataAndCalculateSum(DataGathered, valueOFSem9);
        let resultSem10 = processDataAndCalculateSum(DataGathered, valueOFSem10);
        let resultSem11 = processDataAndCalculateSum(DataGathered, valueOFSem11);
    
    function processSemesterData(resultSem, semesterId) {
        resultSem.dataEqualToValue.forEach((item, index) => {
            let parts = item.mergedParts.split(' ');
            parts.shift(); // Remove the first part
            item.mergedParts = parts.join(' '); // Join the remaining parts
            item.firstValue = resultSem.firstValues[index]; // Add the first value
        });
        populateTable(resultSem, semesterId);
    }
    
    function populateTable(StudentGrade, semesterId) {
        const tableBody = document.getElementById(semesterId);
        
        StudentGrade.dataEqualToValue.forEach((Course_Code) => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${Course_Code.firstValue}</td>
            <td>${Course_Code.mergedParts}</td>
            <td>
              <input class="input_grades" placeholder="Grades"></input>
            </td>
          `;
          tableBody.appendChild(row);
        });
        
    }
    
    processSemesterData(resultSem1, 'student-FirstYear-FirstSem');
    processSemesterData(resultSem2, 'student-FirstYear-SecondSem');
    processSemesterData(resultSem3, 'student-FirstYear-ThirdSem');
    processSemesterData(resultSem4, 'student-SecondYear-FirstSem');
    processSemesterData(resultSem5, 'student-SecondYear-SecondSem');
    processSemesterData(resultSem6, 'student-SecondYear-ThirdSem');
    processSemesterData(resultSem7, 'student-ThirdYear-FirstSem');
    processSemesterData(resultSem8, 'student-ThirdYear-SecondSem');
    processSemesterData(resultSem9, 'student-ThirdYear-ThirdSem');
    processSemesterData(resultSem10, 'student-FourthYear-FirstSem');
    processSemesterData(resultSem11, 'student-FourthYear-SecondSem');
    })


