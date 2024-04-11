function jsonToHTMLTable(parsedJson){
	var tableHeaders = new Array();
		for(var i = 0 ;i < parsedJson.length ; i++){
			for( var j = 0 ; j < Object.keys(parsedJson[i]).length ; j++){
				if(tableHeaders.indexOf(Object.keys(parsedJson[i])[j]) == -1 )
					tableHeaders.push(Object.keys(parsedJson[i])[j]);
			}
		}
		var headersHtml = "<tr>";

		for( var k = 0; k < tableHeaders.length ; k++){
			headersHtml += "<th>"+tableHeaders[k]+"</th>";
		}
		headersHtml+="</tr>";

		var rows="";
		for(var l = 0 ;l < parsedJson.length ; l++){
			rows += "<tr>";
			for( var m = 0 ;m < tableHeaders.length ; m++){
				if(typeof parsedJson[l][tableHeaders[m]] == 'undefined')
					rows += "<td></td>";
				else
				rows += "<td>"+  parsedJson[l][tableHeaders[m]]  +"</td>";
			}
			rows += "</tr>";
		}

		var horizontal_table= "<table class=\"table table-striped table-bordered table-hover\">"+headersHtml+rows+"</table>";
	return horizontal_table;
}

async function displayArchive(archiveUrl) {
    let archiveFetch = await fetch("https://eighteeneightythree.github.io/louisnel/archive_test.json");
    let archiveRecords = await archiveFetch.json();
    console.log(archiveRecords);

    let horizontal_html = jsonToHTMLTable(archiveRecords);
$("#archive_table").append(horizontal_html)

}

async function displayArchive2(archiveUrl) {
    let archiveFetch = await fetch("https://eighteeneightythree.github.io/louisnel/archive_test.json");
    let archiveRecords = await archiveFetch.json();
    console.log(archiveRecords);
  
    for (let i = 0; i < archiveRecords.length; i++) {
        var table = document.getElementById("archiveTable");
      let row = `
      <tr>
          <td>${archiveRecords[i].accessionNumber}</td>
              <td>${archiveRecords[i].description}</td>
              <td>${archiveRecords[i].media}</td>
              <td>${archiveRecords[i].archiveTag}</td>
              <td>${archiveRecords[i].year}</td>
              <td>${archiveRecords[i].collectionCode}</td>
      </tr>`
      
      console.log(row);
  
      table.innerHTML += row;
    }
    

  
  
  
  }
  
  


