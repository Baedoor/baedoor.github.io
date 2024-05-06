function sw(switch_id) {
    var songlist = document.getElementById(switch_id);
    if (songlist.hasAttribute("hidden") == true)  {
        songlist.removeAttribute("hidden");
    }
    else {
        songlist.setAttribute("hidden", "hidden");
    }
}