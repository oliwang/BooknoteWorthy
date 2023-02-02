var template_strings = [
"", 
`
# {{book.title}}
by {{book.author}}

{{#each annotations}}
{{selected_text}} 
{{note}}
{{ibook_link}}

{{/each}}
`,
`
# {{book.title}}
by {{book.author}}

{{#each annotations}}

<div style="border-radius:10px; padding: 20px; background: #FFFBEB; margin: 10px 0px;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="30"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" fill="#F8CBA6"/></svg>
<div class="quote" style="font-weight:bold;font-size:1.2rem;margin-bottom:1rem;">
<a href="{{ibook_link}}">🔗</a> {{selected_text}}  
</div>
{{note}}
</div>

{{/each}}
`

];

var handlebars_template_quotes = Handlebars.compile(`
<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 w-full">
    <td class="p-4 w-3">
        <div class="flex items-center">
            <input 
            class="annotation_checkbox"
            id="{{annotation_location}}" 
            name="{{annotation_location}}" 
            value="{{annotation_location}}" 
            data-assetid="{{assetid}}"
            data-location="{{annotation_location}}"
            data-note="{{note}}"
            data-selectedtext="{{selected_text}}" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="{{annotation_location}}" class="sr-only">checkbox</label>
        </div>
    </td>
    <th scope="row" class="px-6 py-4 w-2/3 font-medium text-gray-900 dark:text-white" style="word-wrap: break-word;">
        {{selected_text}}
    </th>
    <td class="px-6 py-4" style="word-wrap: break-word;">
        {{note}}
    </td>
    <td class="px-6 py-4 w-3">
        <a class="deeplink text-right" href="ibooks://assetid/{{assetid}}#{{annotation_location}}">🔗</a>
    </td>
</tr>
`);

var template_result_item = Handlebars.compile(`
<div class="result_item flex flex-row justify-between items-center pt-2 pb-2">
    <input type="checkbox" 
        id="{{annotation_location}}" 
        name="{{annotation_location}}" 
        value="{{annotation_location}}" 
        data-assetid="{{assetid}}"
        data-location="{{annotation_location}}"
        data-note="{{note}}"
        data-selectedtext="{{selected_text}}"
    class="mr-4 annotation_checkbox">
    <div class="w-full flex flex-col rounded-lg shadow p-4 bg-stone-100">
        <blockquote class="selectedtext mb-2 text-l italic font-semibold text-gray-900 dark:text-white">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
            <p>{{selected_text}}</p>
        </blockquote>
        <div class="note text-gray-600 mt-2">{{note}}</div>
        <a class="deeplink text-right" href="ibooks://assetid/{{assetid}}#{{annotation_location}}">🔗</a>
    </div>
</div>
`);

var default_template_str = `
# {{book.title}}
by {{book.author}}

{{#each annotations}}

<div style="border-radius:10px; padding: 20px; background: #FFFBEB; margin: 10px 0px;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="30"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" fill="#F8CBA6"/></svg>
<div class="quote" style="font-weight:bold;font-size:1.2rem;margin-bottom:1rem;">
<a href="ibooks://assetid/{{assetid}}#{{annotation_location}}">🔗</a> {{selected_text}}  
</div>
{{note}}
</div>

{{/each}}

`;

var template_1 = `
# {{book.title}}
by {{book.author}}

{{#each annotations}}
<a href="ibooks://assetid/{{assetid}}#{{annotation_location}}">🔗</a> {{selected_text}} 
{{note}}

{{/each}}

`;



(async function () {

    const initSqlJs = window.initSqlJs;
    const SQL = await initSqlJs({
        // Required to load the wasm binary asynchronously. Of course, you can host it wherever you want
        // You can omit locateFile completely when running in node
        locateFile: () => "https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/sql-wasm.wasm"
    });

    var file_bk = document.querySelector("#file_bk");
    var file_ae = document.querySelector("#file_ae");
    var book_select = document.querySelector("#book_select");
    var result_content = document.querySelector("#result_content");
    var export_btn = document.querySelector("#export_btn");
    var template_textarea = document.querySelector("#template_str");
    template_textarea.value = template_strings[1];

    var selectall_checkbox = document.querySelector("#selectall_checkbox");

    var toast_success = document.querySelector("#toast_success");
    var toast_warning = document.querySelector("#toast_warning");

    var quote_table = document.querySelector("#quote_table");

    var template_btns = document.querySelectorAll(".template_btn");

    template_btns.forEach(btn=>{
        btn.addEventListener("click", function(event){
            insertToTemplate(event.target.innerHTML, template_textarea)
        })
    });

    var template_examples = document.querySelectorAll(".template_example");
    template_examples.forEach(example=>{
        example.addEventListener("click", function(event){
            index = parseInt(event.target.dataset.example);
            template_textarea.value = template_strings[index];
        })
    });

    


    var ae_db = null;

    file_ae.addEventListener("change", function (event) {
        var ae_file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function () {
            var buffer = new Uint8Array(reader.result);
            var db = new SQL.Database(buffer);
            ae_db = db;

        };
        reader.readAsArrayBuffer(ae_file);

    });
    file_bk.addEventListener("change", function (event) {
        var bk_file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function () {
            var buffer = new Uint8Array(reader.result);
            var db = new SQL.Database(buffer);
            var books = db.exec("SELECT ZASSETID, ZAUTHOR, ZTITLE FROM 'ZBKLIBRARYASSET' ORDER BY ZLASTENGAGEDDATE DESC");
            books = books[0].values;
            // console.log("Books", books);

            var select_str = "<option value='choose'>Select a book</option>";

            books.forEach(book => {
                select_str += `<option value="${book[0]}" data-title="${book[2]}" data-author="${book[1]}" data-assetid="${book[0]}">${book[2]} - ${book[1]}</option>`;
            });

            book_select.innerHTML = select_str;

        };
        reader.readAsArrayBuffer(bk_file);

    });

    book_select.addEventListener("change", function (event) {
        // console.log(event.target.value);
        if (event.target.value != "choose") {
            quote_table.classList.remove("hidden");
            export_btn.classList.remove("invisible");
        }

        var book_id = event.target.value;
        var annotations = ae_db.exec(`SELECT ZANNOTATIONLOCATION, ZANNOTATIONNOTE, ZFUTUREPROOFING5, ZANNOTATIONSELECTEDTEXT FROM 'ZAEANNOTATION' WHERE ZANNOTATIONASSETID = '${book_id}' AND ZANNOTATIONSELECTEDTEXT IS NOT NULL`);

        if (selectall_checkbox.checked) {
            selectall_checkbox.click();
        }

        if (annotations.length == 0) {
            result_content.innerHTML = "";
        } else {
            annotations = annotations[0].values;
            annotations.sort((a, b) => {
                cfi_a = new CFI(a[0]);
                cfi_b = new CFI(b[0]);

                return CFI.compare(cfi_a, cfi_b)
            })
            // deeplink = f'ibooks://assetid/{assetid}#{ZANNOTATIONLOCATION}'
            var result_str = "";
            annotations.forEach(annotation => {
                var annotation_location = annotation[0];
                var note = annotation[1];
                var selected_text = annotation[3];
                var assetid = book_id;
                result_str += handlebars_template_quotes({ assetid: assetid, annotation_location: annotation_location, note: note, selected_text: selected_text })

            })

            result_content.innerHTML = result_str;

        }


    });

    export_btn.addEventListener("click", function (event) {
        var book = {
            title: book_select.selectedOptions[0].dataset.title,
            author: book_select.selectedOptions[0].dataset.author,
            assetid: book_select.selectedOptions[0].dataset.assetid
        }

        var annotation_checkboxes = document.querySelectorAll('.annotation_checkbox:checked');

        if (annotation_checkboxes.length == 0) {
            showToast(toast_warning);
            return;
        }

        var annotations = [];

        annotation_checkboxes.forEach(checkbox => {
            var annotation = {
                annotation_location: checkbox.dataset.location,
                note: checkbox.dataset.note,
                selected_text: checkbox.dataset.selectedtext,
                assetid: checkbox.dataset.assetid,
                ibook_link: `ibooks://assetid/${checkbox.dataset.assetid}#${checkbox.dataset.location}`
            }
            annotations.push(annotation);
        })

        var template_str = template_textarea.value;

        var template = Handlebars.compile(template_str);

        var result = template({ book: book, annotations: annotations });

        console.log(result);
        // console.log(book, annotations)

        window.navigator.clipboard.writeText(result);

        showToast(toast_success);



    });

    template_textarea.addEventListener("change", function (event) {
        // console.log(event.target.value);
    });

    selectall_checkbox.addEventListener("click", function (event) {
        console.log("selectall_checkbox", "click")
        var annotation_checkboxes = document.querySelectorAll('.annotation_checkbox');
        var checked_annotation_checkboxes = document.querySelectorAll('.annotation_checkbox:checked');
        if (annotation_checkboxes.length != checked_annotation_checkboxes.length) {
            annotation_checkboxes.forEach(checkbox => {
                if (checkbox.checked === false) {
                    checkbox.click();
                }
            })
        } else {
            annotation_checkboxes.forEach(checkbox => {
                if (checkbox.checked === true) {
                    checkbox.click();
                }
            })
        }
    });


})();

function showToast(toast_item) {
    toast_item.classList.remove("invisible")
    toast_item.classList.add("visible");
    setTimeout(() => {
        toast_item.classList.remove("visible");
        toast_item.classList.add("invisible")
    }, 3000);

}

// https://stackoverflow.com/a/34278578
function insertToTemplate(str, textarea) {
    const [start, end] = [textarea.selectionStart, textarea.selectionEnd];
    textarea.setRangeText(str, start, end, 'select');
}



