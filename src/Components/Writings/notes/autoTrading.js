export const autoTrading = `<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><title>Automated Trading</title><style>
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
	
</style></head><body><article id="09bd308d-2c1f-432f-9169-abca8356754e" class="page sans"><header><div class="page-header-icon undefined"><span class="icon">📈</span></div><h1 class="page-title">Automated Trading</h1></header><div class="page-body"><p id="80ec4b92-fd67-4cca-95e8-af82f01b0222" class="">By Max Dama</p><p id="bdb6f7ba-eb8e-4e3f-ae77-773e1dd4e434" class=""><a href="http://isomorphisms.sdf.org/maxdama.pdf">Full Textbook</a></p><nav id="bcdea7ae-10af-44d3-9f88-81b6489e8f87" class="block-color-gray table_of_contents"><div class="table_of_contents-item table_of_contents-indent-0"><a class="table_of_contents-link" href="#cc7a9bf2-e131-4b9d-b0ec-484f528cfdfe">1. Introduction</a></div><div class="table_of_contents-item table_of_contents-indent-0"><a class="table_of_contents-link" href="#8bab093d-2b01-462e-b7f9-fdd5eae12c58">2. Industry</a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#0a4b22a7-0818-4a75-ab15-2490ef8cbf77">2.1 History</a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#f859b7e9-04a0-412c-ac10-1efed5daaa80">2.2 Roles</a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#66dd2ce4-6d2b-4b39-b607-901c6798a05e">2.3 Buy Side</a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#dd7d4bca-7cdd-4964-b9e6-4aef56ba1aa7">2.4 Firms</a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#17d54634-38e9-4ff5-a605-912d5942a244">2.5 Sell Side</a></div><div class="table_of_contents-item table_of_contents-indent-0"><a class="table_of_contents-link" href="#d5c39695-dd6d-4707-b7fc-66bc1eb85da5">3. Brain Teasers</a></div><div class="table_of_contents-item table_of_contents-indent-0"><a class="table_of_contents-link" href="#5f82bca8-aa8a-425e-a02d-b77234febe5c">4. Alpha</a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#a8fc26f8-c754-4ba4-81f2-0465f96f616b">4.1 Reuter&#x27;s Carrier Pigeons</a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#762a10c9-ade8-4749-822b-84e67868d4aa">4.2 Traffic Analysis</a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#5477af4c-0e5f-40e9-9297-dc1e9b6f56c0">4.5 First Day of the Month</a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#477a59fa-d9ae-4804-b278-061ced7b49e9">4.6 Stock Market Wizards</a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#11c9b900-12b3-4c58-ba3f-6773dfda54ad">4.7 Weighted Midpoint</a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#699ec9a4-3d3b-4c9e-9b8c-837162766ad4">4.8 Toolbox</a></div><div class="table_of_contents-item table_of_contents-indent-2"><a class="table_of_contents-link" href="#e9cafdd3-397b-4c06-8d20-a733acea5498">Regression</a></div><div class="table_of_contents-item table_of_contents-indent-2"><a class="table_of_contents-link" href="#77f353f1-4afe-402f-8010-b17bb65b144d">Machine Learning</a></div><div class="table_of_contents-item table_of_contents-indent-2"><a class="table_of_contents-link" href="#3b6fea71-48eb-4d8b-a91f-ac1e3c4f0099">Normalization</a></div><div class="table_of_contents-item table_of_contents-indent-2"><a class="table_of_contents-link" href="#6de22816-655f-4193-8599-a1c43fbea69a">EMA Smoothing</a></div><div class="table_of_contents-item table_of_contents-indent-2"><a class="table_of_contents-link" href="#ee742997-d1d3-485e-b672-0da6de646df8">Trim Outliers</a></div><div class="table_of_contents-item table_of_contents-indent-2"><a class="table_of_contents-link" href="#4cc61a96-a0da-440d-bc98-37e24801f9e5">Debug and Check Data</a></div><div class="table_of_contents-item table_of_contents-indent-2"><a class="table_of_contents-link" href="#965c8fb9-ff47-4745-995b-b779977eb427">Fast Online Algorithms</a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#19e84c82-d8fa-4acb-871f-21ba54acd08a">4.9 Machine Learning</a></div><div class="table_of_contents-item table_of_contents-indent-0"><a class="table_of_contents-link" href="#66cfb0b3-c190-4ca0-a40e-2a6d333e97c4">5. Simulation</a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#6c677246-11a8-47ad-bf57-9739e0589f1c">5.1 Data</a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#9077ed86-67ff-44ac-816f-a2c3aa26f174">5.2 Simulators</a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#7c2453b3-deba-4fe3-ace5-d22b6105f904">5.3 Pitfalls</a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#286d85e1-ec32-4175-8562-a842ac77eafd">5.4 Optimization</a></div><div class="table_of_contents-item table_of_contents-indent-0"><a class="table_of_contents-link" href="#9e61e54b-46f6-46f0-a5d8-93e2ccd5a51b">6. Risk</a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#aef2baae-f67d-48ce-8769-347bb266114d">6.1 Single Strategy Allocation</a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#a47f8bf0-2fdd-4b94-bf46-02371233a3e7">6.2 Multiple Strategies</a></div><div class="table_of_contents-item table_of_contents-indent-0"><a class="table_of_contents-link" href="#5e89f50d-50db-4363-8e8b-57f766b7c163">7. Execution</a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#4e66a5b2-7c5d-4c29-a2fc-8a4e0b4ac353">7.1 Liquidity Impact</a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#2313349e-7f79-4afe-8e68-a9b921e36d1a">7.2 Slicing Up Orders</a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#22b55bde-1224-43c1-aa82-83d4115f5741">7.3 Alpha Loss</a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#4b70dc79-9873-43c9-8c2a-0e8ab2cd8c3a">7.4 Execution Shortfall</a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#5616b611-68a1-4279-a71b-53124a2583db">7.5 Capacity</a></div><div class="table_of_contents-item table_of_contents-indent-0"><a class="table_of_contents-link" href="#5bc2bc8b-e5ed-4fbd-9290-3deb6cb6b5d7">8. Programming</a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#e85dca47-42fd-4c73-ac80-497ce082e02a">8.1 Design Patterns</a></div></nav><h1 id="cc7a9bf2-e131-4b9d-b0ec-484f528cfdfe" class="">1. Introduction</h1><p id="77e1c419-039b-4690-9ccf-59d0bab215e5" class="">Programming is the fastest way to take an idea and turn it into reality (compare it to writing a book, publishing, building, etc). Trading is the most direct way to make money (compare it to starting the next Facebook, programming, hiring, advertising, sales, etc). By combining both, you get the path from your brain to cash.</p><p id="34ec3a9d-6227-4172-94ca-fcadb259d72d" class="">Quantitative trading is satisfying because you combine a diverse amount of fields from computer science, statistics, math, psychology, economics, business, operations research, and history.</p><h1 id="8bab093d-2b01-462e-b7f9-fdd5eae12c58" class="">2. Industry</h1><h2 id="0a4b22a7-0818-4a75-ab15-2490ef8cbf77" class="">2.1 History</h2><p id="fcfc1ff0-daa5-429e-aae6-c3f1fb878a62" class=""><strong>Arabia 0 B.C.</strong>
• Venue: Bazaar
• Participants: Traders, Merchants, Villagers
• Reasons: hedgers, informed traders, liquidity seekers, position traders
• Traders can become market makers by setting up a tent
• Queues form outside of market maker’s tents
• Market is based on the Bazaar’s schedule and the merchant’s travel plans
<strong>Wall Street 1880
</strong>• Venue: Banks’ Telephones
• Participants: Bankers acting as market makers and as salesmen
• Reasons: Ripping off clients
• Electronic communication
• Trading fees and bid/ask spreads
• Goods, money, and trading separate
<strong>Wall Street 1950
</strong>• Venue: Big Board
• Participants: Pit traders, specialists
• Reasons: investment, speculation, excitement
<strong>Wall Street 2011
</strong>• Venue: Computer Science Data Structure
• Participants: Traders (in all roles)
• Reasons: all of the above
• Trades are automatically matched by software
• Guarantees best execution
• Much faster pace
• Limit orders
• Heisenberg Uncertainty Principle of Finance</p><h2 id="f859b7e9-04a0-412c-ac10-1efed5daaa80" class="">2.2 Roles</h2><table id="e316b99d-3574-425e-8be0-040ff1ede302" class="simple-table"><tbody><tr id="15a1db2f-4f79-4f92-bdf3-c12d65efefad"><td id="@e\e"></td><td id="]cHP">Front Office</td><td id="m_n@">Back Office</td></tr><tr id="f1504550-1e69-4048-a210-1a5399869d41"><td id="@e\e">Buy Side</td><td id="]cHP">Asset management at a big bank.
Hedge fund (strategies constrained
to prospectus) Prop trading (fastest
moving) Matlab, Java, Functional Languages. 70-100k+large bonus</td><td id="m_n@">Data scraping and maintenance,
Execution, Server administration
Bash, SQL, SVN, Linux, C++. 90-
100k+small bonus</td></tr><tr id="33f99ba3-e25c-485e-8b87-dc5f4f6f6397"><td id="@e\e">Sell Side</td><td id="]cHP">Sales &amp; Trading at a big bank (taking
&amp; executing orders, creating derivatives
by client reques, execution algos) Excel.
70-80k+medium bonus</td><td id="m_n@">Technology, Operations, or Risk
Management at a big bank (hard to
transition to front office) C++, internal
language, hacky code. 90-100k+small
bonus</td></tr></tbody></table><p id="c372cac5-fead-4920-b658-ad24953b5147" class=""><em>Data from 2011</em></p><ul id="a0794d5d-c72a-4490-a393-c70bbfbd8fc8" class="bulleted-list"><li style="list-style-type:disc">The sell side is like an investment bank that prices the offerings (IPO) and markets them.</li></ul><ul id="5e2e737c-f0ba-4ed8-abd6-406121ce5f95" class="bulleted-list"><li style="list-style-type:disc">The buy side learns about the new shares available from the sell side and buys them if interested.</li></ul><ul id="f8dc6c06-5b57-49e6-ba18-dc93e1d5a037" class="bulleted-list"><li style="list-style-type:disc">The front office refers to people who interact with other clients or works in a revenue-generating group.</li></ul><ul id="b886489b-180b-4339-89e1-7d8684a7993f" class="bulleted-list"><li style="list-style-type:disc">The back office quants facilitate the front office team whenever they have a request.</li></ul><h2 id="66dd2ce4-6d2b-4b39-b607-901c6798a05e" class="">2.3 Buy Side</h2><p id="07213bda-141c-4425-b683-e6aee4d6af28" class="">Each buy side firm follows one or more investment strategies. The frequency a firm trades (monthly, daily, millisecondly, etc) has a big impact on the firm&#x27;s investment strategy.</p><ul id="21944354-602a-4ee1-869e-5eeb2c9ad1d6" class="bulleted-list"><li style="list-style-type:disc"><strong>High Frequency (intraday) - hardware is key</strong><ul id="007a293a-276d-427e-8e38-550508ae7d9c" class="bulleted-list"><li style="list-style-type:circle"><strong>Market Making</strong> - Get inside the bid-ask spread and buy low sell high (also provides liquidity to the market, thus consider market making)</li></ul><ul id="a2eca0d5-433c-49f9-96db-5c6c8720f76e" class="bulleted-list"><li style="list-style-type:circle"><strong>Arbitrage</strong> - Take advantage of things trading at different prices on different exchanges or through different derivatives</li></ul><ul id="b6f47b8c-32df-4c6a-b0eb-379807d6fc33" class="bulleted-list"><li style="list-style-type:circle"><strong>Momentum</strong> - If it&#x27;s going up, it&#x27;s going to go up more</li></ul><ul id="588bb556-bc6b-4743-bc09-4363937727c5" class="bulleted-list"><li style="list-style-type:circle"><strong>Mean Reversion</strong> - If it&#x27;s going up, it&#x27;s going to go down</li></ul></li></ul><ul id="b99375d8-6354-42a8-95a1-1c61f211ac41" class="bulleted-list"><li style="list-style-type:disc"><strong>Low Frequency (monthly)</strong><ul id="52a5f497-d653-48a1-9780-32aeaa051fe8" class="bulleted-list"><li style="list-style-type:circle"><strong>Relative Value</strong> - model stock vs stock value by management quality, accounting criteria (normalized by sector), analyst estimates, news, etc</li></ul><ul id="c3cef65a-8527-4227-ae64-eed8dfd685a6" class="bulleted-list"><li style="list-style-type:circle"><strong>Tactical Asset Allocation</strong> - model sector vs currency vs commodities by macroeconomic trends, commodity prices, foreign exchange rates, etc</li></ul></li></ul><ul id="210050df-3110-45aa-8356-cc8ddd2eb0bc" class="bulleted-list"><li style="list-style-type:disc">Specialty<ul id="166ff9a0-1cc2-4b44-8bd3-f33eed049762" class="bulleted-list"><li style="list-style-type:circle">Emerging market - Like India Fund</li></ul><ul id="ed522064-4b59-4fbc-bdbf-f54534bbbd02" class="bulleted-list"><li style="list-style-type:circle">Behavioral - model human vs self</li></ul><ul id="76f00f52-a346-4783-b2f9-63344a9ae496" class="bulleted-list"><li style="list-style-type:circle">News Based - text mining, web scraping, natural language processing</li></ul></li></ul><h2 id="dd7d4bca-7cdd-4964-b9e6-4aef56ba1aa7" class="">2.4 Firms</h2><p id="6e2440a1-7951-4625-8c02-67be4330de1c" class="">• Jane Street</p><p id="4df66815-667b-4a25-8b39-6e89a0b9f54a" class="">• SIG
• IMC
• DE Shaw
• Jump
• Renaissance
• Getco
• Jane Street
• Allston
• Chopper
• Hudson River Trading
• Optiver
• CTC
• Fox River Partners
• Sun Trading
• Matlock Capital
• Ronin Capital
• Tradelink
• DRW
• Traditum
• Infinium
• Transmarket
• Spot
• Geneva Trading
• Quantres
• Tradebot
• Tradeworx
• Virtu
• Cutler Group
• Two Sigma
• Millennium / World Quant
• SAC</p><p id="0c9e9bd3-a1cf-4681-9da6-5d5496a224c7" class="">• HBK
• Citadel
• IV Capital
• Tower Research
• Knight
• Blue Crest
• Winton Capital
• GSA Capital
<strong>Startups (as of Mar 2011)</strong>
• Headlands
• Teza
• Aardvark
• Eladian
• AienTech
• Circulum Vite</p><h2 id="17d54634-38e9-4ff5-a605-912d5942a244" class="">2.5 Sell Side</h2><p id="16b2ff1c-26d5-48eb-8c7d-2130842de692" class="">Most derivatives are just a combination of swaps and options.</p><p id="549de60c-9499-4434-8c9e-6f7a19dde861" class="">Swaps are basically pieces of paper that entitle the signing parties to get money from each other depending on what happens in the future. For example, interest rate swaps entitle one party to payments based on the level of let’s say LIBOR while the other gets fixed payments. Another example is credit default swaps which entitle one party to a lump sum of cash if a company fails to pay interest on a loan (defaults) while the other gets periodic payments in normal conditions. A final example is equity swaps. A bank will buy a stock you want to own and then sell you a piece of paper saying you owe them for it. For example, if you are Mark Cuban and you get $5.7 billion worth of YHOO stock but you are contractually restricted from selling it, you can sell an equity swap on YHOO and completely sidestep the legal restrictions. The bank hedges its risk by selling the stock and you don’t have to worry if there is a tech bubble because you essentially dumped your stock.</p><p id="f947f33a-ff80-4815-ab46-125f621f094d" class="">In general, derivatives are designed for one or more of the following reasons:
• Avoid or shield taxes
• Decrease capital or margin requirements
• Repackage risk factors (ex. skew swaps)
• Dodge other regulations: short sale restrictions, international investment restrictions, AAA rating requirements</p><p id="44bdad86-4a82-471c-8b3b-5ec49b46122f" class="">The phrase “algorithmic trading” has a different meaning depending on if you are in Chicago or New York. In Chicago, it will mean using a computer to place trades to try to make a profit. In New York, it means using a computer to work client orders to try to minimize impact.</p><h1 id="d5c39695-dd6d-4707-b7fc-66bc1eb85da5" class="">3. Brain Teasers</h1><p id="28f92129-7f2a-4ea3-80a7-45a772ec23ec" class="">A bunch of math questions</p><h1 id="5f82bca8-aa8a-425e-a02d-b77234febe5c" class="">4. Alpha</h1><p id="0dc5fb36-5088-4e3f-9569-0aa4a9afc096" class="">Alpha is the ability to predict the future. Defined as the additional return over a naive forecast. Alpha comes from four sources:</p><ul id="a0e6bf64-a742-4a64-9823-6730e8b022b0" class="bulleted-list"><li style="list-style-type:disc">Information</li></ul><ul id="56541e78-02c1-40fe-8a60-7fba80ed65f0" class="bulleted-list"><li style="list-style-type:disc">Processing</li></ul><ul id="2634184b-4ea9-4648-9ddd-19809cca7534" class="bulleted-list"><li style="list-style-type:disc">Modeling</li></ul><ul id="ee5c2c3f-e165-4da4-b41b-2196eac5db3a" class="bulleted-list"><li style="list-style-type:disc">Speed</li></ul><p id="6b027d30-b5b8-452a-9cd2-322718b8bbaa" class="">Alpha is often nothing more than taking commonly available data and mathematically encoding it in a signal correctly.</p><h2 id="a8fc26f8-c754-4ba4-81f2-0465f96f616b" class="">4.1 Reuter&#x27;s Carrier Pigeons</h2><p id="47c7e04c-f8a7-4b62-b44c-b43d66a7879e" class="">In 1850, a man named Reuter had pigeons that would transport stock prices and important events between Paris and London. This is by far the fastest way at that time, so he had an advantage in speed, which is an example of Alpha. This is also the origin of modern high-frequency trading.</p><h2 id="762a10c9-ade8-4749-822b-84e67868d4aa" class="">4.2 Traffic Analysis</h2><p id="e7656c09-536c-4160-9eae-612d91249186" class="">By monitoring the hype of penny stocks, it is possible to predict when their prices might skyrocket without even knowing the content of message posts through NLP.</p><h2 id="5477af4c-0e5f-40e9-9297-dc1e9b6f56c0" class="">4.5 First Day of the Month</h2><p id="374215ce-38a7-45d4-b08b-03db1bf9d479" class="">The first day of the month is probably the most important trading day of the month as inflows come from 401(k) plans, IRAs, etc. and mutual funds have to put this new money into stocks.</p><p id="9fa2f813-d9c7-4e53-919f-2097f676feaa" class="">Over the past 16 years, buying the close on SPY on the last day of the month and selling one day later would result in a successful trade 63% of the time with an average return of 0.37% (as opposed to 0.03% and a 50%-50% success rate if you buy on any random day). &quot;If the last half of the last day of the month was negative and the first half of the first day of the month was  negative, buy at 11 a.m. and hold for the rest of the day.&quot;</p><h2 id="477a59fa-d9ae-4804-b278-061ced7b49e9" class="">4.6 Stock Market Wizards</h2><ol type="1" id="a63b8ac8-c8fa-4408-9706-09e2de993527" class="numbered-list" start="1"><li>Cumulative TICK indicator: number of NYSE stocks trading up minus trading down (mean
reversion signal, only trade 95th percentile long/short readings, expect just 2-4 setups per year), trade by buying call/put options, may take a few weeks to resolve</li></ol><ol type="1" id="1529bb56-dc37-4e33-9562-8625c3198717" class="numbered-list" start="2"><li>To judge if an insider buying is significant, look at their net worth and salary (eg if the amount
the insider bought is greater than their annual salary then it’s significant) and make sure it’s the purchase of new shares, not the exercise of options.</li></ol><h2 id="11c9b900-12b3-4c58-ba3f-6773dfda54ad" class="">4.7 Weighted Midpoint</h2><p id="a0f70730-34c2-4484-b02c-1c5d24b450db" class="">Citadel vs Teza was a legal case in 2010 where Citadel, one of the largest hedge funds, sued Teza, a startup trading firm founded by an ex-Citadel executive, for stealing trading strategies.</p><p id="ee32e8e4-b8e0-4478-bef7-51aa402ad0b1" class="">The case filings mention the “weighted midpoint” indicator used in high-frequency trading. In market making, one would like to know the true price of an instrument. The problem is that there is no true price. There is a price where you can buy a certain size and a different one where you can sell. How one combines these (possibly also using the prices at which the last trades occurred or the prices of other instruments) is a source of alpha.
One sophisticated approach is the “microprice”, which weights the bid price by the proportion of size on the ask, and vice versa. This makes sense because if the ask is bigger, it is likely that the bid will be knocked out first because fewer trades have to occur there to take all the liquidity and move it to the next price level. So a bigger ask than bid implies the true price is closer to the bid.</p><h2 id="699ec9a4-3d3b-4c9e-9b8c-837162766ad4" class="">4.8 Toolbox</h2><h3 id="e9cafdd3-397b-4c06-8d20-a733acea5498" class="">Regression</h3><p id="e4c1e91a-b75a-423a-ae7e-18303429d23e" class="">An automatic way to find the relationship between a signal and returns. It will find how well the signal works, how strong signals correspond to big returns, and whether to flip the sign of the signal’s predictions.</p><p id="e5a6485a-65e5-4020-84c0-c296d08346f8" class="">Let us say you are using an analyst’s estimates to predict a stock’s returns. You have a bunch of confusing, contradictory prior beliefs about what effect they will have:</p><ol type="1" id="2c7a66ea-2c87-4d09-a38c-ac52bbaf86b2" class="numbered-list" start="1"><li>The analyst knows the company the best so the predictions are good</li></ol><ol type="1" id="e150ef8e-9692-46f7-8a3f-45bbb473a7f5" class="numbered-list" start="2"><li>Everyone follows the analyst’s predictions so the trade is overcrowded and we should trade opposite</li></ol><ol type="1" id="b99eb84c-7d19-4bde-bb3b-3e2dbd360857" class="numbered-list" start="3"><li>The prediction is accurate in the near term, but it is unclear how far into the future it might help</li></ol><ol type="1" id="01c5d374-0522-49d6-ae44-6512ffe2bc4d" class="numbered-list" start="4"><li>Analysts are biased by other banking relationships to the company and so produce biased reports
16</li></ol><ol type="1" id="62f47cd4-cace-4633-b27b-44c243153f87" class="numbered-list" start="5"><li>It is unclear if the analyst is smart or dumb since the predictions can never be perfect</li></ol><p id="a08b72e2-009f-4e6f-a0be-d81b0a37899d" class="">In this case, you can take a time series of the analyst’s predictions, and a time-series of the stock’s returns, run regression on the returns given the predictions, and the computer will instantaneously tell the relationship.</p><h3 id="77f353f1-4afe-402f-8010-b17bb65b144d" class="">Machine Learning</h3><p id="47d01ea7-21f4-4507-af4f-65abfbafb9c8" class="">ML is like linear regression but more general. It can predict categories or words rather than just numerical values. It can also find more complicated patterns in data rather than just single straight lines. </p><h3 id="3b6fea71-48eb-4d8b-a91f-ac1e3c4f0099" class="">Normalization</h3><p id="f3b86310-0e47-48e2-b551-c4819345cb7f" class="">When generating signals, it could be more clever if we are just interested in a proportion. For example, if <style>@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')</style><span data-token-index="0" contenteditable="false" class="notion-text-equation-token" style="user-select:all;-webkit-user-select:all;-moz-user-select:all"><span></span><span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>s</mi><mi>i</mi><mi>g</mi><mi>n</mi><mi>a</mi><mi>l</mi><mo>=</mo><mi>b</mi><mi>e</mi><mi>s</mi><mi>t</mi><mi mathvariant="normal">_</mi><mi>b</mi><mi>i</mi><mi>d</mi><mi mathvariant="normal">_</mi><mi>s</mi><mi>i</mi><mi>z</mi><mi>e</mi><mo>−</mo><mi>b</mi><mi>e</mi><mi>s</mi><mi>t</mi><mi mathvariant="normal">_</mi><mi>a</mi><mi>s</mi><mi>k</mi><mi mathvariant="normal">_</mi><mi>s</mi><mi>i</mi><mi>z</mi><mi>e</mi></mrow><annotation encoding="application/x-tex">signal = best\_bid\_size - best\_ask\_size</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8888799999999999em;vertical-align:-0.19444em;"></span><span class="mord mathnormal">s</span><span class="mord mathnormal">i</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mord mathnormal">na</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:1.00444em;vertical-align:-0.31em;"></span><span class="mord mathnormal">b</span><span class="mord mathnormal">es</span><span class="mord mathnormal">t</span><span class="mord" style="margin-right:0.02778em;">_</span><span class="mord mathnormal">bi</span><span class="mord mathnormal">d</span><span class="mord" style="margin-right:0.02778em;">_</span><span class="mord mathnormal">s</span><span class="mord mathnormal">i</span><span class="mord mathnormal">ze</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:1.00444em;vertical-align:-0.31em;"></span><span class="mord mathnormal">b</span><span class="mord mathnormal">es</span><span class="mord mathnormal">t</span><span class="mord" style="margin-right:0.02778em;">_</span><span class="mord mathnormal">a</span><span class="mord mathnormal">s</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord" style="margin-right:0.02778em;">_</span><span class="mord mathnormal">s</span><span class="mord mathnormal">i</span><span class="mord mathnormal">ze</span></span></span></span></span><span>﻿</span></span>, then signal has no bounds, which means we can&#x27;t tell the strength of the signal. However, if we do <style>@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')</style><span data-token-index="0" contenteditable="false" class="notion-text-equation-token" style="user-select:all;-webkit-user-select:all;-moz-user-select:all"><span></span><span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>s</mi><mi>i</mi><mi>g</mi><mi>n</mi><mi>a</mi><mi>l</mi><mo>=</mo><mo stretchy="false">(</mo><mi>b</mi><mi>e</mi><mi>s</mi><mi>t</mi><mi mathvariant="normal">_</mi><mi>b</mi><mi>i</mi><mi>d</mi><mi mathvariant="normal">_</mi><mi>s</mi><mi>i</mi><mi>z</mi><mi>e</mi><mo>−</mo><mi>b</mi><mi>e</mi><mi>s</mi><mi>t</mi><mi mathvariant="normal">_</mi><mi>a</mi><mi>s</mi><mi>k</mi><mi mathvariant="normal">_</mi><mi>s</mi><mi>i</mi><mi>z</mi><mi>e</mi><mo stretchy="false">)</mo><mi mathvariant="normal">/</mi><mo stretchy="false">(</mo><mi>b</mi><mi>e</mi><mi>s</mi><mi>t</mi><mi mathvariant="normal">_</mi><mi>b</mi><mi>i</mi><mi>d</mi><mi mathvariant="normal">_</mi><mi>s</mi><mi>i</mi><mi>z</mi><mi>e</mi><mo>+</mo><mi>b</mi><mi>e</mi><mi>s</mi><mi>t</mi><mi mathvariant="normal">_</mi><mi>a</mi><mi>s</mi><mi>k</mi><mi mathvariant="normal">_</mi><mi>s</mi><mi>i</mi><mi>z</mi><mi>e</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">signal = (best\_bid\_size - best\_ask\_size) / (best\_bid\_size + best\_ask\_size)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8888799999999999em;vertical-align:-0.19444em;"></span><span class="mord mathnormal">s</span><span class="mord mathnormal">i</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mord mathnormal">na</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:1.06em;vertical-align:-0.31em;"></span><span class="mopen">(</span><span class="mord mathnormal">b</span><span class="mord mathnormal">es</span><span class="mord mathnormal">t</span><span class="mord" style="margin-right:0.02778em;">_</span><span class="mord mathnormal">bi</span><span class="mord mathnormal">d</span><span class="mord" style="margin-right:0.02778em;">_</span><span class="mord mathnormal">s</span><span class="mord mathnormal">i</span><span class="mord mathnormal">ze</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:1.06em;vertical-align:-0.31em;"></span><span class="mord mathnormal">b</span><span class="mord mathnormal">es</span><span class="mord mathnormal">t</span><span class="mord" style="margin-right:0.02778em;">_</span><span class="mord mathnormal">a</span><span class="mord mathnormal">s</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord" style="margin-right:0.02778em;">_</span><span class="mord mathnormal">s</span><span class="mord mathnormal">i</span><span class="mord mathnormal">ze</span><span class="mclose">)</span><span class="mord">/</span><span class="mopen">(</span><span class="mord mathnormal">b</span><span class="mord mathnormal">es</span><span class="mord mathnormal">t</span><span class="mord" style="margin-right:0.02778em;">_</span><span class="mord mathnormal">bi</span><span class="mord mathnormal">d</span><span class="mord" style="margin-right:0.02778em;">_</span><span class="mord mathnormal">s</span><span class="mord mathnormal">i</span><span class="mord mathnormal">ze</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:1.06em;vertical-align:-0.31em;"></span><span class="mord mathnormal">b</span><span class="mord mathnormal">es</span><span class="mord mathnormal">t</span><span class="mord" style="margin-right:0.02778em;">_</span><span class="mord mathnormal">a</span><span class="mord mathnormal">s</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord" style="margin-right:0.02778em;">_</span><span class="mord mathnormal">s</span><span class="mord mathnormal">i</span><span class="mord mathnormal">ze</span><span class="mclose">)</span></span></span></span></span><span>﻿</span></span>, then we have successfully normalized it.</p><h3 id="6de22816-655f-4193-8599-a1c43fbea69a" class="">EMA Smoothing</h3><p id="b3aa5886-48a9-4b30-bfc9-8adc57a18caa" class="">There&#x27;s a problem though, and that is we generate many signal values in a short amount of time. Although it may have a good alpha, it&#x27;s very short. To solve this problem, we can use EMA Smoothing. Essentially, we give the most recent value the most weight, but we consider a history of values.</p><h3 id="ee742997-d1d3-485e-b672-0da6de646df8" class="">Trim Outliers</h3><p id="cf10a991-c7ac-4d3c-84c5-45ee523aba1b" class="">For strategies that are based on training a regression model on a training set and then using it to predict forward, trimming the outliers of the historical returns in the training set often makes predictions more accurate. Any model that is sensitive to single points (such as regression-based on a squared criterion), is a good candidate for trimming outliers.</p><h3 id="4cc61a96-a0da-440d-bc98-37e24801f9e5" class="">Debug and Check Data</h3><p id="00b4f69d-8d32-4157-9a54-02bbd6d7e0e2" class="">Always check data for errors. Like data from outside of regular hours, a gap in the data, or a holiday.</p><h3 id="965c8fb9-ff47-4745-995b-b779977eb427" class="">Fast Online Algorithms</h3><p id="ef62da00-7753-4c2a-ad3b-18453b71dab5" class="">The right way to simulate is to use a sliding window validation and online algorithms, such as EMA. Batch (training the entire dataset) tends to make models overfit.</p><h2 id="19e84c82-d8fa-4acb-871f-21ba54acd08a" class="">4.9 Machine Learning</h2><p id="acb358ed-2488-461d-927e-3bd5cb64fc73" class="">ML is a higher-level way of coming up with alpha models. The whole point of ML is to allow some flexibility to find the best model. However, if you give it too much freedom, it will pick a worse one. The balance can be studied as a science, but the practice of finding the right balance is an art.</p><h1 id="66cfb0b3-c190-4ca0-a40e-2a6d333e97c4" class="">5. Simulation</h1><h2 id="6c677246-11a8-47ad-bf57-9739e0589f1c" class="">5.1 Data</h2><p id="bd09fe62-e20c-4a2f-b0e3-a1252b5906c2" class="">Data usually come in &quot;bars&quot; or &quot;ticks&quot;. Order book data shows every order submitted and canceled. Usually includes date, open, high, low, close, volume.</p><h2 id="9077ed86-67ff-44ac-816f-a2c3aa26f174" class="">5.2 Simulators</h2><table id="0be30ea3-74ed-4ee4-9c6f-91121902c3c9" class="simple-table"><tbody><tr id="95ef2188-8ba4-42af-a37a-f6dcb4cbb99c"><td id="QhXp">Test</td><td id="Rojj">Run Time</td><td id="kWTX">Setup Time</td><td id="Qis[">Completeness</td><td id="~kPs">Good For</td></tr><tr id="d04ed54f-66a6-468f-a12f-3cb8f4a3df75"><td id="QhXp">Backtest</td><td id="Rojj">Long</td><td id="kWTX">Long</td><td id="Qis[">Good</td><td id="~kPs">Everything</td></tr><tr id="93f64eba-ce32-467b-b850-2f60230a4e07"><td id="QhXp">Event Study</td><td id="Rojj">Medium</td><td id="kWTX">Medium</td><td id="Qis[">Good</td><td id="~kPs">News</td></tr><tr id="ebaa7afa-4fa5-4abf-a0eb-72d9c65535ae"><td id="QhXp">Correlation</td><td id="Rojj">Fast</td><td id="kWTX">Fast</td><td id="Qis[">Bad</td><td id="~kPs">Prototyping</td></tr><tr id="c0730dde-26dc-44b6-97fb-0a983676cacc"><td id="QhXp">Paper Trading</td><td id="Rojj">Live</td><td id="kWTX">None</td><td id="Qis[">Good</td><td id="~kPs">Production Testing</td></tr></tbody></table><p id="893f0abd-db30-4ab6-9696-8ca55280d0b1" class=""><strong>Backtest</strong> - Simulating a strategy on historic data and analyzing the profit and loss curve. </p><p id="764fd597-b1d8-438a-99ca-54ae7ad4410e" class=""><strong>Event Study</strong> - You find all the points in time that you have a signal and then average their proceeding and preceding return paths. This shows you on average what happens before and after. We can see Alpha and information leakage around the event period.</p><p id="68b5630e-f935-4d23-8a1a-a5e75255a920" class=""><strong>Correlation</strong> - The correlation of a signal with future returns is a quick measure of how accurately it predicts. Faster than a backtest because it can easily be constructed in Excel.</p><p id="2d17ebf5-52c9-4299-b294-ea845476eeab" class=""><strong>Paper Trading</strong> - Trading a strategy through your broker&#x27;s API but using fake money. Takes time unless if you have a high-frequency bot that generates lots of data in a short amount of time.</p><h2 id="7c2453b3-deba-4fe3-ace5-d22b6105f904" class="">5.3 Pitfalls</h2><p id="c3282740-ccc1-4786-98fe-1acc162bc898" class=""><strong>Time travel</strong> - Giving a strategy too much information when testing. For example, you try to predict time T with a moving average, but T was calculated in the moving average.</p><p id="4403062c-7ffc-4b0c-a2d3-732733aa866a" class=""><strong>Survivorship Bias</strong> - If you test all companies in the S&amp;P 500, you will be biased because companies that went bankrupt or have decreasing market capitalization have disappeared from the dataset.</p><p id="6b7ebfa4-de4f-4cf3-9054-948b11e47cc0" class=""><strong>Adverse Selection</strong> - When executing limit orders, you will only get orders filled when someone thinks it will be profitable to trade at your price, which means every position you trade is slightly against you than in simulation.</p><p id="eea0a743-6e7c-4d67-a523-22d17c6df4ef" class=""><strong>Instantaneous Communication</strong> - It is impossible to trade on a price right when you see it, which is a problem for high-frequency systems.</p><p id="e1cda921-88a3-46b2-83c0-2d220d5fc423" class=""><strong>Transaction Costs</strong> - Hard to estimate the transaction costs because it changes based on the volatility of the market and the liquidity of the stock.</p><p id="28dce5d5-b0ed-4af2-8834-f6f3a3d56e92" class=""><strong>Unrealistic Backtesting</strong> - maybe data is not precise enough to simulate a real process.</p><h2 id="286d85e1-ec32-4175-8562-a842ac77eafd" class="">5.4 Optimization</h2><p id="66ee1157-6bba-4bb1-8bdd-9eb23828c8f2" class="">A backtest strategy can be thought of</p><p id="19eb3fad-1728-4b08-a4c5-e5a975929eb7" class=""><style>@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')</style><span data-token-index="0" contenteditable="false" class="notion-text-equation-token" style="user-select:all;-webkit-user-select:all;-moz-user-select:all"><span></span><span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>p</mi><mi>r</mi><mi>o</mi><mi>f</mi><mi>i</mi><mi>t</mi><mo>=</mo><mi>b</mi><mi>a</mi><mi>c</mi><mi>k</mi><mi>t</mi><mi>e</mi><mi>s</mi><mi>t</mi><mi mathvariant="normal">_</mi><mi>s</mi><mi>t</mi><mi>r</mi><mi>a</mi><mi>t</mi><mi>e</mi><mi>g</mi><mi>y</mi><mo stretchy="false">(</mo><mi>p</mi><mi>a</mi><mi>r</mi><mi>a</mi><mi>m</mi><mi>e</mi><mi>t</mi><mi>e</mi><mi>r</mi><mn>1</mn><mo separator="true">,</mo><mi>p</mi><mi>a</mi><mi>r</mi><mi>a</mi><mi>m</mi><mi>e</mi><mi>t</mi><mi>e</mi><mi>r</mi><mn>2</mn><mo separator="true">,</mo><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">profit = backtest\_strategy(parameter1, parameter2,...)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8888799999999999em;vertical-align:-0.19444em;"></span><span class="mord mathnormal">p</span><span class="mord mathnormal">ro</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal">i</span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:1.06em;vertical-align:-0.31em;"></span><span class="mord mathnormal">ba</span><span class="mord mathnormal">c</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">t</span><span class="mord mathnormal">es</span><span class="mord mathnormal">t</span><span class="mord" style="margin-right:0.02778em;">_</span><span class="mord mathnormal">s</span><span class="mord mathnormal">t</span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">a</span><span class="mord mathnormal">t</span><span class="mord mathnormal">e</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mopen">(</span><span class="mord mathnormal">p</span><span class="mord mathnormal">a</span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">am</span><span class="mord mathnormal">e</span><span class="mord mathnormal">t</span><span class="mord mathnormal" style="margin-right:0.02778em;">er</span><span class="mord">1</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.16666666666666666em;"></span><span class="mord mathnormal">p</span><span class="mord mathnormal">a</span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">am</span><span class="mord mathnormal">e</span><span class="mord mathnormal">t</span><span class="mord mathnormal" style="margin-right:0.02778em;">er</span><span class="mord">2</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.16666666666666666em;"></span><span class="mord">...</span><span class="mclose">)</span></span></span></span></span><span>﻿</span></span></p><p id="073ab1da-2fc9-47f5-b602-a556f8381b5b" class="">Generally, you want to have a few parameters and brute force all possible combinations with max profit. However, there are also a couple of optimizations to save time, though it may not lead to the global value.</p><h1 id="9e61e54b-46f6-46f0-a5d8-93e2ccd5a51b" class="">6. Risk</h1><h2 id="aef2baae-f67d-48ce-8769-347bb266114d" class="">6.1 Single Strategy Allocation</h2><p id="8dd588cb-4649-4226-ae27-5514356e75d4" class="">Assume you have a strategy that is profitable, otherwise, bet $0. How much do you allocate to make as much money as possible? If you put 100%, you go to $0 on the first losing trade. If you put 99%, you would go to $1. Even if you won the next trade, it will still only go to $2. Clearly, this is an optimization problem.</p><p id="67f81638-8645-490f-b917-bd20f40fb628" class="">The solution to this fractional capital optimization is called the Kelly Criterion.</p><figure id="c9ed614c-8375-40aa-a826-a68eff8d887f" class="equation"><style>@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')</style><div class="equation-container"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>K</mi><mi mathvariant="normal">%</mi><mo>=</mo><mfrac><mrow><mi>b</mi><mi>p</mi><mo>−</mo><mi>q</mi></mrow><mi>b</mi></mfrac></mrow><annotation encoding="application/x-tex">K\% =\frac{bp-q}{b}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.80556em;vertical-align:-0.05556em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">K</span><span class="mord">%</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:2.0574399999999997em;vertical-align:-0.686em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3714399999999998em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">b</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">b</span><span class="mord mathnormal">p</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">q</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></div></figure><p id="3372d2fa-7213-4bc4-a31c-c21d281a06fe" class="">K = The Kelly percentage, percent of the total wealth you should allocate.</p><p id="d8e2db50-554f-4f85-a9d8-4d57aa48a511" class="">p = probability of winning</p><p id="8aa5fbfe-3461-4faf-a385-71c443d34908" class="">q = probability of losing</p><p id="181d3ea7-59dd-4c95-bac4-afa5ca253c35" class="">b = ratio of win:lose. (e.g. if we stand to either win $2 or lose $1, we have odds of 2:1 and we would set b to 2.)</p><h2 id="a47f8bf0-2fdd-4b94-bf46-02371233a3e7" class="">6.2 Multiple Strategies</h2><p id="57d0a391-33a2-4da8-9962-d01cc623eb35" class="">Putting money in a strategy with lower expected profit can help out because the benefits of canceling risk are initially more powerful than sacrificing some profit. Calculate with covariance.</p><h1 id="5e89f50d-50db-4363-8e8b-57f766b7c163" class="">7. Execution</h1><p id="8fe2115e-5ee2-4df4-949b-0be16204f34d" class="">Avoid slippage because it can make an alpha-generating strategy lose money. </p><p id="78c7f692-a283-4f7a-a334-2358f0c89903" class="">Participation rate = Percent of ADV</p><p id="ffb45f90-950c-4a71-aca3-4bfcdff33065" class="">If you transact 100,000 shares of GOOG in one day which trades an average of 3.0M shares per day, then your participation rate is 100,000/3,000,000 = 3%. The participation rate is actually the percentage of the volume that transacts in the stock over a given range of time. So if 500,000 shares are traded every hour, and you buy 100,000 positions over the course of an hour, then your participation rate is 20%. A higher participation rate increases slippage and vice versa. 1% could be considered high.</p><h2 id="4e66a5b2-7c5d-4c29-a2fc-8a4e0b4ac353" class="">7.1 Liquidity Impact</h2><p id="87154612-7cc7-4974-b005-3f62d22f9c69" class="">Liquidity impact is money you lose when there aren&#x27;t enough sellers so you have to bid more. The key determinants are spread and depth.</p><figure id="24988e80-78b4-4362-be42-f45a41f2d4e3" class="image"><a href="Automated%20Trading%2024988e8078b44362be42f45a41f2d4e3/Untitled.png"><img style="width:528px" src="Automated%20Trading%2024988e8078b44362be42f45a41f2d4e3/Untitled.png"/></a></figure><h2 id="2313349e-7f79-4afe-8e68-a9b921e36d1a" class="">7.2 Slicing Up Orders</h2><p id="4abb7d07-31d8-49d7-85af-f754fae05a26" class="">To reduce liquidity impact, you can slice up your order over time. Try VWAP, which is like a flat U-shape on a time vs volume graph.</p><p id="2d70c474-c8b7-4351-92f5-e55afcff849d" class="">Spreads usually widen because of high volatility. The way this works is because of market makers, which are like warehouses. Rather than selling to another buyer, you sell to a market maker and they find a buyer. Of course, they will charge you a spread in case the price falls down before they find another buyer. When volatility is high, the price has a tendency to move faster so the market makers charge higher spreads.</p><h2 id="22b55bde-1224-43c1-aa82-83d4115f5741" class="">7.3 Alpha Loss</h2><p id="3085f074-94be-4ced-8126-13c02f45f3cf" class="">You only attempt to trade into a position that is going to make money, so the longer you take to get in, the more of that profit is gone. However, this contradicts the idea of liquidity impact, where you want to trade over a longer time horizon, so this is an optimization problem.</p><h2 id="4b70dc79-9873-43c9-8c2a-0e8ab2cd8c3a" class="">7.4 Execution Shortfall</h2><p id="2f80dc7e-3981-4791-b89e-ce94f13ea012" class="">Execution shortfall = liquidity impact + alpha loss</p><figure id="ff45e160-e011-460c-bbe7-7d4a77b27cad" class="image"><a href="Automated%20Trading%2024988e8078b44362be42f45a41f2d4e3/Untitled%201.png"><img style="width:480px" src="Automated%20Trading%2024988e8078b44362be42f45a41f2d4e3/Untitled%201.png"/></a></figure><h2 id="5616b611-68a1-4279-a71b-53124a2583db" class="">7.5 Capacity</h2><p id="a06c7f98-b9d1-4dbb-bc08-768fb1905273" class="">By moving around too much money, there are too many transaction costs, which will wipe out your Alpha. Therefore, set a capacity on the graph above so you can&#x27;t trade above the line.</p><h1 id="5bc2bc8b-e5ed-4fbd-9290-3deb6cb6b5d7" class="">8. Programming</h1><h2 id="e85dca47-42fd-4c73-ac80-497ce082e02a" class="">8.1 Design Patterns</h2><p id="97b14095-281a-4720-b59a-691add27f6f7" class=""><strong>Batch</strong> - Matrix of data where the row is a date and column is variables of interest.</p><p id="0f97d9b0-2b53-48f9-a042-b093a6e4353f" class=""><strong>Scheduled</strong> - Follow the time and change for signals.</p><p id="ffecb64b-eea9-4265-8781-8d40b3efc7a4" class=""><strong>Event-Driven</strong> - Listen for events, and calculate the number of indicators triggered.</p><p id="08d00585-5c63-4a88-b9c6-714c061397bc" class=""><strong>Augmented Intelligence</strong> - chaotic world → human → computer → market</p><p id="9db26e4a-32ab-4adc-a981-515d076f8e5f" class="">Humans are good at analyzing world events while computers are good at following parameters precisely and unemotionally.</p><p id="488fb16f-2689-4002-af61-15cc9186edcc" class="">The human turns on or off the model whenever they feel like it. Examples could include turning on a momentum model a few minutes before an earnings announcement; turning on the mean-reversion model on days that seem dull, etc.</p><pre id="1c34febf-3011-4611-9e56-20c50844b09d" class="code"><code>Batch(Pattern)
	download some historical data
	re-optimize a model
	if conditions met:
		output buy signals
		import into execution software
		sanity check and submit

Scheduled(Pattern)
	turn on data stream
	at time of day x:
		calculate indicators
		if conditions met:
			submit order

Event(Pattern)
	register data stream listener
	turn on data stream
	listener (on new data event):
		calculate indicators
		if conditions met:
			submit order

AugInt(Pattern)
	have a feeling # human
	set parameters # human
	[other design pattern system here] # computer</code></pre><p id="f3abadf2-d4b4-4421-b98f-61f0b546d7e6" class="">
</p><p id="f39bb549-9e9f-4da9-8acf-30eb280c9fc0" class="">
</p></div></article></body></html>`