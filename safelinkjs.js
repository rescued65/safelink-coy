var Base64 = {_ keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 + / =", menyandikan: fungsi (input) {var output = ""; var chr1, chr2, chr3, enc3, enc1, encod_, encode3; encod; (input); while (i <input.length) {chr1 = input.charCodeAt (i ++); chr2 = input.charCodeAt (i ++); chr3 = input.charCodeAt (i ++); enc1 = chr1 >> 2; enc2 = ( (chr1 & 3) << 4) | (chr2 >> 4); enc3 = ((chr2 & 15) << 2) | (chr3 >> 6); enc4 = chr3 & 63; if (isNaN (chr2)) {enc3 = enc4 = 64 ;} lain jika (isNaN (chr3)) {enc4 = 64;}

output = output + this._keyStr.charAt (enc1) + this._keyStr.charAt (enc2) + this._keyStr.charAt (enc3) + this._keyStr.charAt (enc4);}

return output;}, decode: function (input) {var output = ""; var chr1, chr2, chr3; var enc1, enc2, enc3, enc4; var i = 0; input = input.replace (/ [^ A- Za-z0-9 \ + \ / \ =] / g, ""); while (i <input.length) {enc1 = this._keyStr.indexOf (input.charAt (i ++)); enc2 = this._keyStr. indexOf (input.charAt (i ++)); enc3 = this._keyStr.indexOf (input.charAt (i ++)); enc4 = this._keyStr.indexOf (input.charAt (i ++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2); chr3 = ((enc3 & 3) << 6) | enc4; output = output + String.fromCharCode (chr1); jika (enc3! = 64) {output = output + String.fromCharCode (chr2);}

if (enc4! = 64) {output = output + String.fromCharCode (chr3);}}

output = Base64._utf8_decode (output); return output;}, _ utf8_encode: fungsi (string) {string = string.replace (/ \ r \ n / g, "\ n"); var utftext = ""; for (var n = 0; n <string.length; n ++) {var c = string.charCodeAt (n); if (c <128) {utftext + = String.fromCharCode (c);}

lain jika ((c> 127) && (c <2048)) {utftext + = String.fromCharCode ((c >> 6) | 192); utftext + = String.fromCharCode ((c & 63) | 128);}

else {utftext + = String.fromCharCode ((c >> 12) | 224); utftext + = String.fromCharCode (((c >> 6) & 63) | 128); utftext + = String.fromCharCode ((c & 63) | 128); }}

return utftext;}, _ utf8_decode: function (utftext) {var string = ""; var i = 0; var c = c1 = c2 = 0; while (i <utftext.length) {c = utftext.charCodeAt (i); if (c <128) {string + = String.fromCharCode (c); i ++;}

selain itu jika ((c> 191) && (c <224)) {c2 = utftext.charCodeAt (i + 1); string + = String.fromCharCode (((c & 31) << 6) | (c2 & 63)); i + = 2; }

else {c2 = utftext.charCodeAt (i +1); c3 = utftext.charCodeAt (i + 2); string + = String.fromCharCode (((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)) ; i + = 3;}}

return string;}}

var encode = document.getElementById ('encode'), decode = document.getElementById ('decode'), output = document.getElementById ('output'), input = document.getElementById ('input'); var User_ID = "" ; var protected_links = ""; var a_to_va = 0; var a_to_vb = 0; var a_to_vc = ""; fungsi auto_safelink () {auto_safeconvert ();}

function auto_safeconvert () {var a_to_vd = window.location.hostname; if (protected_links! = "" &&! protected_links.match (a_to_vd)) {protected_links + = "," + a_to_vd;} lain jika (protected_links == "")

{protected_links = a_to_vd;}

var a_to_ve = ""; var a_to_vf = new Array (); var a_to_vg = 0; a_to_ve = document.getElementsByTagName ("a"); a_to_va = a_to_ve.length; a_to_vf = a_to__v___v_v___v_v__vg = a_to_v_v__vg = a_to_vg = 0; a_to_ve] = false; var j = 0; var a_to_vi = ""; for (var i = 0; i <a_to_va; i ++)

{a_to_vh = false; j = 0; sementara (a_to_vh == false && j <a_to_vg)

{a_to_vi = a_to_ve [i] .href; if (a_to_vi.match (a_to_vf [j]) ||! a_to_vi ||! a_to_vi.match ("http"))

{a_to_vh = true;}

j ++;}

if (a_to_vh == false)

{var encryptedUrl = Base64.encode (a_to_vi);

var x = Math.floor ((Math.random () * 4) +1);

var xxx = null;

if (x == "1") {xxx = "hogan-redmer-lagi-lagi-menggembar.html"}

if (x == "2") {xxx = "support-and-reinforcement-in-mining.html"}

if (x == "3") {xxx = "aig-to-memperoleh-glatfelter-insurance.html"}

if (x == "4") {xxx = "rasisme-seksisme-persetujuan-oleh-pegawai.html"}

output.value = "https://modtruckcanterbussid.blogspot.com/2019/07/"+xxx+"?url="+ terenkripsi; a_to_ve [i] .rel =" nofollow "; a_to_vb ++; a_to_vc + = i +" ::: "+ a_to_ve [i] .href +" \ n ";}}

var a_to_vj = document.getElementById ("anonyminized"); var a_to_vk = document.getElementById ("found_links"); if (a_to_vj)

{a_to_vj.innerHTML + = a_to_vb;}

jika (a_to_vk)

{a_to_vk.innerHTML + = a_to_va;}}

function a_to_fa ()

{var a_to_vf = Array baru (); protected_links = protected_links.replace ("", ""); a_to_vf = protected_links.split (","); return a_to_vf;}

