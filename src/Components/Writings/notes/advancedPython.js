export const advancedPython = `<!DOCTYPE html>
     <html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><title>Advanced Python</title><style>
     /* cspell:disable-file */
     /* webkit printing magic: print all background colors */
     html {
         -webkit-print-color-adjust: exact;
     }
     * {
         box-sizing: border-box;
         -webkit-print-color-adjust: exact;
     }
     
     html,
     body {
         margin: 0;
         padding: 0;
     }
     @media only screen {
         body {
             margin: 2em auto;
             max-width: 900px;
             color: rgb(55, 53, 47);
         }
     }
     
     body {
         line-height: 1.5;
         white-space: pre-wrap;
     }
     
     a,
     a.visited {
         color: inherit;
         text-decoration: underline;
     }
     
     .pdf-relative-link-path {
         font-size: 80%;
         color: #444;
     }
     
     h1,
     h2,
     h3 {
         letter-spacing: -0.01em;
         line-height: 1.2;
         font-weight: 600;
         margin-bottom: 0;
     }
     
     .page-title {
         font-size: 2.5rem;
         font-weight: 700;
         margin-top: 0;
         margin-bottom: 0.75em;
     }
     
     h1 {
         font-size: 1.875rem;
         margin-top: 1.875rem;
     }
     
     h2 {
         font-size: 1.5rem;
         margin-top: 1.5rem;
     }
     
     h3 {
         font-size: 1.25rem;
         margin-top: 1.25rem;
     }
     
     .source {
         border: 1px solid #ddd;
         border-radius: 3px;
         padding: 1.5em;
         word-break: break-all;
     }
     
     .callout {
         border-radius: 3px;
         padding: 1rem;
     }
     
     figure {
         margin: 1.25em 0;
         page-break-inside: avoid;
     }
     
     figcaption {
         opacity: 0.5;
         font-size: 85%;
         margin-top: 0.5em;
     }
     
     mark {
         background-color: transparent;
     }
     
     .indented {
         padding-left: 1.5em;
     }
     
     hr {
         background: transparent;
         display: block;
         width: 100%;
         height: 1px;
         visibility: visible;
         border: none;
         border-bottom: 1px solid rgba(55, 53, 47, 0.09);
     }
     
     img {
         max-width: 100%;
     }
     
     @media only print {
         img {
             max-height: 100vh;
             object-fit: contain;
         }
     }
     
     @page {
         margin: 1in;
     }
     
     .collection-content {
         font-size: 0.875rem;
     }
     
     .column-list {
         display: flex;
         justify-content: space-between;
     }
     
     .column {
         padding: 0 1em;
     }
     
     .column:first-child {
         padding-left: 0;
     }
     
     .column:last-child {
         padding-right: 0;
     }
     
     .table_of_contents-item {
         display: block;
         font-size: 0.875rem;
         line-height: 1.3;
         padding: 0.125rem;
     }
     
     .table_of_contents-indent-1 {
         margin-left: 1.5rem;
     }
     
     .table_of_contents-indent-2 {
         margin-left: 3rem;
     }
     
     .table_of_contents-indent-3 {
         margin-left: 4.5rem;
     }
     
     .table_of_contents-link {
         text-decoration: none;
         opacity: 0.7;
         border-bottom: 1px solid rgba(55, 53, 47, 0.18);
     }
     
     table,
     th,
     td {
         border: 1px solid rgba(55, 53, 47, 0.09);
         border-collapse: collapse;
     }
     
     table {
         border-left: none;
         border-right: none;
     }
     
     th,
     td {
         font-weight: normal;
         padding: 0.25em 0.5em;
         line-height: 1.5;
         min-height: 1.5em;
         text-align: left;
     }
     
     th {
         color: rgba(55, 53, 47, 0.6);
     }
     
     ol,
     ul {
         margin: 0;
         margin-block-start: 0.6em;
         margin-block-end: 0.6em;
     }
     
     li > ol:first-child,
     li > ul:first-child {
         margin-block-start: 0.6em;
     }
     
     ul > li {
         list-style: disc;
     }
     
     ul.to-do-list {
         text-indent: -1.7em;
     }
     
     ul.to-do-list > li {
         list-style: none;
     }
     
     .to-do-children-checked {
         text-decoration: line-through;
         opacity: 0.375;
     }
     
     ul.toggle > li {
         list-style: none;
     }
     
     ul {
         padding-inline-start: 1.7em;
     }
     
     ul > li {
         padding-left: 0.1em;
     }
     
     ol {
         padding-inline-start: 1.6em;
     }
     
     ol > li {
         padding-left: 0.2em;
     }
     
     .mono ol {
         padding-inline-start: 2em;
     }
     
     .mono ol > li {
         text-indent: -0.4em;
     }
     
     .toggle {
         padding-inline-start: 0em;
         list-style-type: none;
     }
     
     /* Indent toggle children */
     .toggle > li > details {
         padding-left: 1.7em;
     }
     
     .toggle > li > details > summary {
         margin-left: -1.1em;
     }
     
     .selected-value {
         display: inline-block;
         padding: 0 0.5em;
         background: rgba(206, 205, 202, 0.5);
         border-radius: 3px;
         margin-right: 0.5em;
         margin-top: 0.3em;
         margin-bottom: 0.3em;
         white-space: nowrap;
     }
     
     .collection-title {
         display: inline-block;
         margin-right: 1em;
     }
     
     .simple-table {
         margin-top: 1em;
         font-size: 0.875rem;
     }
     
     .simple-table-header {
         background: rgb(247, 246, 243);
         color: black;
         font-weight: 500;
     }
     
     time {
         opacity: 0.5;
     }
     
     .icon {
         display: inline-block;
         max-width: 1.2em;
         max-height: 1.2em;
         text-decoration: none;
         vertical-align: text-bottom;
         margin-right: 0.5em;
     }
     
     img.icon {
         border-radius: 3px;
     }
     
     .user-icon {
         width: 1.5em;
         height: 1.5em;
         border-radius: 100%;
         margin-right: 0.5rem;
     }
     
     .user-icon-inner {
         font-size: 0.8em;
     }
     
     .text-icon {
         border: 1px solid #000;
         text-align: center;
     }
     
     .page-cover-image {
         display: block;
         object-fit: cover;
         width: 100%;
         max-height: 30vh;
     }
     
     .page-header-icon {
         font-size: 3rem;
         margin-bottom: 1rem;
     }
     
     .page-header-icon-with-cover {
         margin-top: -0.72em;
         margin-left: 0.07em;
     }
     
     .page-header-icon img {
         border-radius: 3px;
     }
     
     .link-to-page {
         margin: 1em 0;
         padding: 0;
         border: none;
         font-weight: 500;
     }
     
     p > .user {
         opacity: 0.5;
     }
     
     td > .user,
     td > time {
         white-space: nowrap;
     }
     
     input[type="checkbox"] {
         transform: scale(1.5);
         margin-right: 0.6em;
         vertical-align: middle;
     }
     
     p {
         margin-top: 0.5em;
         margin-bottom: 0.5em;
     }
     
     .image {
         border: none;
         margin: 1.5em 0;
         padding: 0;
         border-radius: 0;
         text-align: center;
     }
     
     .code,
     code {
         background: rgba(135, 131, 120, 0.15);
         border-radius: 3px;
         padding: 0.2em 0.4em;
         border-radius: 3px;
         font-size: 85%;
         tab-size: 2;
     }
     
     code {
         color: #eb5757;
     }
     
     .code {
         padding: 1.5em 1em;
     }
     
     .code-wrap {
         white-space: pre-wrap;
         word-break: break-all;
     }
     
     .code > code {
         background: none;
         padding: 0;
         font-size: 100%;
         color: inherit;
     }
     
     blockquote {
         font-size: 1.25em;
         margin: 1em 0;
         padding-left: 1em;
         border-left: 3px solid rgb(55, 53, 47);
     }
     
     .bookmark {
         text-decoration: none;
         max-height: 8em;
         padding: 0;
         display: flex;
         width: 100%;
         align-items: stretch;
     }
     
     .bookmark-title {
         font-size: 0.85em;
         overflow: hidden;
         text-overflow: ellipsis;
         height: 1.75em;
         white-space: nowrap;
     }
     
     .bookmark-text {
         display: flex;
         flex-direction: column;
     }
     
     .bookmark-info {
         flex: 4 1 180px;
         padding: 12px 14px 14px;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
     }
     
     .bookmark-image {
         width: 33%;
         flex: 1 1 180px;
         display: block;
         position: relative;
         object-fit: cover;
         border-radius: 1px;
     }
     
     .bookmark-description {
         color: rgba(55, 53, 47, 0.6);
         font-size: 0.75em;
         overflow: hidden;
         max-height: 4.5em;
         word-break: break-word;
     }
     
     .bookmark-href {
         font-size: 0.75em;
         margin-top: 0.25em;
     }
     
     .sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; }
     .code { font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace; }
     .serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }
     .mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }
     .pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }
     .pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }
     .pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }
     .pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }
     .pdf .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
     .pdf:lang(zh-CN) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
     .pdf:lang(zh-TW) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
     .pdf:lang(ko-KR) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
     .pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP'; }
     .pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC'; }
     .pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC'; }
     .pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR'; }
     .pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
     .pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
     .pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
     .pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
     .highlight-default {
         color: rgba(55, 53, 47, 1);
     }
     .highlight-gray {
         color: rgba(120, 119, 116, 1);
         fill: rgba(145, 145, 142, 1);
     }
     .highlight-brown {
         color: rgba(159, 107, 83, 1);
         fill: rgba(187, 132, 108, 1);
     }
     .highlight-orange {
         color: rgba(217, 115, 13, 1);
         fill: rgba(215, 129, 58, 1);
     }
     .highlight-yellow {
         color: rgba(203, 145, 47, 1);
         fill: rgba(203, 148, 51, 1);
     }
     .highlight-teal {
         color: rgba(68, 131, 97, 1);
         fill: rgba(108, 155, 125, 1);
     }
     .highlight-blue {
         color: rgba(51, 126, 169, 1);
         fill: rgba(91, 151, 189, 1);
     }
     .highlight-purple {
         color: rgba(144, 101, 176, 1);
         fill: rgba(167, 130, 195, 1);
     }
     .highlight-pink {
         color: rgba(193, 76, 138, 1);
         fill: rgba(205, 116, 159, 1);
     }
     .highlight-red {
         color: rgba(212, 76, 71, 1);
         fill: rgba(225, 111, 100, 1);
     }
     .highlight-gray_background {
         background: rgba(241, 241, 239, 1);
     }
     .highlight-brown_background {
         background: rgba(244, 238, 238, 1);
     }
     .highlight-orange_background {
         background: rgba(251, 236, 221, 1);
     }
     .highlight-yellow_background {
         background: rgba(251, 243, 219, 1);
     }
     .highlight-teal_background {
         background: rgba(237, 243, 236, 1);
     }
     .highlight-blue_background {
         background: rgba(231, 243, 248, 1);
     }
     .highlight-purple_background {
         background: rgba(244, 240, 247, 0.8);
     }
     .highlight-pink_background {
         background: rgba(249, 238, 243, 0.8);
     }
     .highlight-red_background {
         background: rgba(253, 235, 236, 1);
     }
     .block-color-default {
         color: inherit;
         fill: inherit;
     }
     .block-color-gray {
         color: rgba(120, 119, 116, 1);
         fill: rgba(145, 145, 142, 1);
     }
     .block-color-brown {
         color: rgba(159, 107, 83, 1);
         fill: rgba(187, 132, 108, 1);
     }
     .block-color-orange {
         color: rgba(217, 115, 13, 1);
         fill: rgba(215, 129, 58, 1);
     }
     .block-color-yellow {
         color: rgba(203, 145, 47, 1);
         fill: rgba(203, 148, 51, 1);
     }
     .block-color-teal {
         color: rgba(68, 131, 97, 1);
         fill: rgba(108, 155, 125, 1);
     }
     .block-color-blue {
         color: rgba(51, 126, 169, 1);
         fill: rgba(91, 151, 189, 1);
     }
     .block-color-purple {
         color: rgba(144, 101, 176, 1);
         fill: rgba(167, 130, 195, 1);
     }
     .block-color-pink {
         color: rgba(193, 76, 138, 1);
         fill: rgba(205, 116, 159, 1);
     }
     .block-color-red {
         color: rgba(212, 76, 71, 1);
         fill: rgba(225, 111, 100, 1);
     }
     .block-color-gray_background {
         background: rgba(241, 241, 239, 1);
     }
     .block-color-brown_background {
         background: rgba(244, 238, 238, 1);
     }
     .block-color-orange_background {
         background: rgba(251, 236, 221, 1);
     }
     .block-color-yellow_background {
         background: rgba(251, 243, 219, 1);
     }
     .block-color-teal_background {
         background: rgba(237, 243, 236, 1);
     }
     .block-color-blue_background {
         background: rgba(231, 243, 248, 1);
     }
     .block-color-purple_background {
         background: rgba(244, 240, 247, 0.8);
     }
     .block-color-pink_background {
         background: rgba(249, 238, 243, 0.8);
     }
     .block-color-red_background {
         background: rgba(253, 235, 236, 1);
     }
     .select-value-color-pink { background-color: rgba(245, 224, 233, 1); }
     .select-value-color-purple { background-color: rgba(232, 222, 238, 1); }
     .select-value-color-green { background-color: rgba(219, 237, 219, 1); }
     .select-value-color-gray { background-color: rgba(227, 226, 224, 1); }
     .select-value-color-opaquegray { background-color: rgba(255, 255, 255, 0.0375); }
     .select-value-color-orange { background-color: rgba(250, 222, 201, 1); }
     .select-value-color-brown { background-color: rgba(238, 224, 218, 1); }
     .select-value-color-red { background-color: rgba(255, 226, 221, 1); }
     .select-value-color-yellow { background-color: rgba(253, 236, 200, 1); }
     .select-value-color-blue { background-color: rgba(211, 229, 239, 1); }
     
     .checkbox {
         display: inline-flex;
         vertical-align: text-bottom;
         width: 16;
         height: 16;
         background-size: 16px;
         margin-left: 2px;
         margin-right: 5px;
     }
     
     .checkbox-on {
         background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E");
     }
     
     .checkbox-off {
         background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E");
     }
         
     </style></head><body><article id="5660fabc-5b83-41d1-b34b-8106753c164e" class="page sans"><header><div class="page-header-icon undefined"><span class="icon">🐍</span></div><h1 class="page-title">Advanced Python</h1></header><div class="page-body"><p id="4a148a0a-8b18-4f2e-883a-ab8da74eee52" class="">Context Managers</p><ul id="983a2cba-7e05-430b-a094-e658ee525e4d" class="bulleted-list"><li style="list-style-type:disc">Useful for managing resources that need to be closed after a while.</li></ul><ul id="1619333a-a7f0-47a9-b9f2-1f9b9874b3d8" class="bulleted-list"><li style="list-style-type:disc">For example, if you try to open 100000 files, you are going to exceed the limit, so you must close some.</li></ul><pre id="6edb661f-a64f-49ba-b1e2-5fd94370e0d3" class="code"><code>##################
     # File example
     class FileManager():
         def __init__(self, filename, mode):
             self.filename = filename
             self.mode = mode
             self.file = None
               
         def __enter__(self):
             self.file = open(self.filename, self.mode)
             return self.file
           
         def __exit__(self, exc_type, exc_value, exc_traceback):
             self.file.close()
       
     # loading a file 
     with FileManager(&#x27;test.txt&#x27;, &#x27;w&#x27;) as f:
         f.write(&#x27;Test&#x27;)
       
     print(f.closed)
     
     
     
     ##################
     # Database example
     from pymongo import MongoClient
       
     class MongoDBConnectionManager():
         def __init__(self, hostname, port):
             self.hostname = hostname
             self.port = port
             self.connection = None
       
         def __enter__(self):
             self.connection = MongoClient(self.hostname, self.port)
             return self
       
         def __exit__(self, exc_type, exc_value, exc_traceback):
             self.connection.close()
       
     # connecting with a localhost
     with MongoDBConnectionManager(&#x27;localhost&#x27;, &#x27;27017&#x27;) as mongo:
         collection = mongo.connection.SampleDb.test
         data = collection.find({&#x27;_id&#x27;: 1})
         print(data.get(&#x27;name&#x27;))</code></pre><p id="8447983d-1ac2-4916-9530-5a487d43c1f7" class="">
     </p><p id="14658f64-da30-456c-a0e8-6655968a22ed" class="">Python instance variables are stored as dict.</p><pre id="9d16ccf0-b7b4-42cc-b9a8-e49f13963dc7" class="code"><code>class C:
         def __init__(self):
             self.a = 1
             self.b = 2
             self.c = 2
     
     a_object = C()
     instance_variables = vars(a_object)
     
     print(instance_variables)
     
     # Prints {&#x27;a&#x27;: 1, &#x27;b&#x27;: 2, &#x27;c&#x27;: 2}
     
     # Using Slots
     class ArticleWithSlots:
         __slots__ = [&quot;date&quot;, &quot;writer&quot;]
     
         def __init__(self, date, writer):
             self.date = date
             self.writer = writer</code></pre><p id="efde35e3-4e95-40c3-b53a-2509430db01c" class="">However, with large amounts of instance variables, dict access and set becomes O(n). One solution is to use __slot__.</p><p id="4c86360d-d82e-4e1d-876d-daf1f2147b77" class="">Reduces RAM, faster attribute access, </p><p id="c7862012-0981-48e7-8b2d-ae093161c39b" class="">
     </p><p id="6709685b-5730-43f7-9e4a-51934076fe3e" class="">Tradeoffs</p><p id="1cc7a214-981a-452e-bb0d-cf21994d313c" class="">Once you create __slot__, you can&#x27;t change it, it is fixed.</p><pre id="eda90387-d397-4f16-8920-517193d48bc0" class="code"><code># Normal
     x = 0
     def outer():
         x = 1
         def inner():
             x = 2
             print(&quot;inner:&quot;, x)
     
         inner()
         print(&quot;outer:&quot;, x)
     
     outer()
     print(&quot;global:&quot;, x)
     # inner: 2
     # outer: 1
     # global: 0
     
     
     # Nonlocal
     x = 0
     def outer():
         x = 1
         def inner():
             nonlocal x
             x = 2
             print(&quot;inner:&quot;, x)
     
         inner()
         print(&quot;outer:&quot;, x)
     
     outer()
     print(&quot;global:&quot;, x)
     # inner: 2
     # outer: 2
     # global: 0
     
     
     # Global
     x = 0
     def outer():
         x = 1
         def inner():
             global x
             x = 2
             print(&quot;inner:&quot;, x)
     
         inner()
         print(&quot;outer:&quot;, x)
     
     outer()
     print(&quot;global:&quot;, x)
     # inner: 2
     # outer: 1
     # global: 2</code></pre><p id="677da1d4-1724-4774-a4fd-71cc7cecaf31" class="">
     </p><p id="96b0caad-41f3-47f3-a94a-197ad8207fab" class="">Global Interpreter Lock</p><ul id="f2a717b3-3126-4379-8c4d-5f7f9594e675" class="bulleted-list"><li style="list-style-type:disc">Multithreading behavior does not work in python because of GIL. Single threaded and multithreaded programs behave the same, single interpreter.</li></ul><ul id="46e7f03c-ab47-484a-afa2-a9d2bff626b3" class="bulleted-list"><li style="list-style-type:disc">Basically, programs can be multithreaded, but each thread needs a request to acquire the GIL. Although this prevents deadlocks because there is only one lock, only one thread can be executed any time.</li></ul><ul id="a0bc189a-bc8d-4afb-82d6-9712d4388b9b" class="bulleted-list"><li style="list-style-type:disc">GIL can&#x27;t be removed yet because Python&#x27;s backend depends on extension of C, which is based on GIL.</li></ul><ul id="538166c4-ad03-4c7a-bda6-6e3602884ed1" class="bulleted-list"><li style="list-style-type:disc">To solve this problem, we use multiprocessing, which gives each process a different interpreter (each with its own GIL). However, the problem with multiprocessing is that it uses a lot of time and memory.</li></ul><p id="349dcc1b-d7d6-4e54-a605-a2c9e98d345f" class="">
     </p><p id="cb5d13c9-96ac-41cb-a9ab-605586e2ba65" class="">Generators and Decorators</p><ul id="515eda54-5b3d-4c63-9be4-88e9bc0a32c0" class="bulleted-list"><li style="list-style-type:disc">Generators are functions whose execution can be stopped and resumed midway. After a value is yielded back to the caller, a generator state is frozen. Once next() is called on the generator it resumes execution till its hits another yield or is done. </li></ul><ul id="3fdb82cd-09da-4498-94a9-bab82a2647d7" class="bulleted-list"><li style="list-style-type:disc">It is similar to an iterator in that you can loop through once. It&#x27;s also similar to a function.</li></ul><ul id="8c5d083c-03fe-451e-9459-c5e6564fe093" class="bulleted-list"><li style="list-style-type:disc">They can be used to handle large files since only part of it is handled at once, space efficient.</li></ul><ul id="57461e61-0aeb-468d-aaca-2ba0dbf3b491" class="bulleted-list"><li style="list-style-type:disc">A decorator in Python is a function that takes another function as its argument, and returns yet another function . Decorators can be extremely useful as they allow the extension of an existing function, without any modification to the original function source code.</li></ul><p id="8e3bcdaa-f0ce-4764-80d9-aebd33fde024" class="">
     </p><p id="ae3cf586-52cc-4fe1-a63a-6ccc5891634f" class="">Garbage Collection</p><ul id="10bbf66f-748b-49d9-8e97-d87e845d091c" class="bulleted-list"><li style="list-style-type:disc">Python has automatic garbage collection</li></ul><ul id="028c188d-8167-4b19-aca3-f03e4c494806" class="bulleted-list"><li style="list-style-type:disc">Reference counting - All objects have a reference count. Whenever an object is referenced, its reference increases by 1, whenever its dereferenced, it decreases by 1. When it hits 0, it gets deallocated.</li></ul><ul id="5f6d5353-486a-4650-9730-704ae3324e7b" class="bulleted-list"><li style="list-style-type:disc">Doesn&#x27;t catch cyclical references</li></ul><pre id="513dda71-a15f-4076-a289-e20fdb17fe9f" class="code"><code># EX 1
     a = []
     a.append(a)
     
     # EX 2
     a.other = b
     b.some_attr = a</code></pre><ul id="4dd64fb1-6613-46b1-ac55-fde0f1f81bcd" class="bulleted-list"><li style="list-style-type:disc">Assigning an object to variable, calling it as parameter in a function increases count</li></ul><ul id="94edac02-3313-4194-a4f7-7f240a7ec2ad" class="bulleted-list"><li style="list-style-type:disc">Generational Tracing<ul id="88b6aebc-710c-4519-a6df-36f5db210ea6" class="bulleted-list"><li style="list-style-type:circle">There is a threshold placed on the amount of objects that can be alive for each generation of garbage collection. Once the amount of objects hit above the threshold, an algorithm runs which marks all objects accessible and deletes all other inaccessible.</li></ul><ul id="f78fe7bb-52e9-45ac-9f60-46c81aa01290" class="bulleted-list"><li style="list-style-type:circle">Usually 3 generations with threshold 700, 10, 10.</li></ul></li></ul><p id="26dff875-8e7e-4001-9391-6ec51af9f6df" class="">
     </p><p id="954c7d45-a208-423a-9031-dad9298c8b3e" class="">Misc<div class="indented"><ul id="bbe79bc3-10db-4f2a-b350-a143658fe7de" class="bulleted-list"><li style="list-style-type:disc">Type annotations help improve readability since python variables are not type checked until when using.</li></ul><pre id="9e4dc85f-18e7-4862-8677-a5ba31f8ff83" class="code code-wrap"><code># Valid, but this won&#x27;t work in Java
     a = 5
     a = &quot;Hello&quot;
     print(a)
     
     # Example of type annotations. Stuff you see in Leetcode
     def mystery_combine(a: str, b: str, times: int) -&gt; str:
         return (a + b) * times</code></pre><p id="d69e1246-67b4-402c-8d57-e6185e6bc14e" class="">
     </p><ul id="4687ef2d-8820-4014-97cd-206b9b0478ab" class="bulleted-list"><li style="list-style-type:disc">*args - unpacking arguments</li></ul><ul id="6831aa23-07f9-40e8-9025-343e1f1e5ec6" class="bulleted-list"><li style="list-style-type:disc">**kwargs - unpacking keyword arguments, similar to unpacking from a dictionary</li></ul><pre id="bc36db00-b128-492f-abc4-0df67ebdd5f6" class="code"><code># similar to what you see in c++
     def myFun(*argv):
         for arg in argv:
             print (arg)
        
     myFun(&#x27;Hello&#x27;, &#x27;Welcome&#x27;, &#x27;to&#x27;, &#x27;GeeksforGeeks&#x27;)
     
     &quot;&quot;&quot;
     Hello
     Welcome
     to
     GeeksforGeeks
     &quot;&quot;&quot;
     
     def myFun(**kwargs):
         for key, value in kwargs.items():
             print (&quot;%s == %s&quot; %(key, value))
      
     # Driver code
     myFun(first =&#x27;Geeks&#x27;, mid =&#x27;for&#x27;, last=&#x27;Geeks&#x27;)
     
     &quot;&quot;&quot;
     last == Geeks
     mid == for
     first == Geeks
     &quot;&quot;&quot;</code></pre></div></p></div></article></body></html>`