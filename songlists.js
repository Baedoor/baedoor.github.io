function sl(songlist_id) {
    var songlist = document.getElementById(songlist_id);
    if (songlist.hasAttribute("hidden") == true)  {
        songlist.removeAttribute("hidden");
    }
    else {
        songlist.setAttribute("hidden", "hidden");
    }
}