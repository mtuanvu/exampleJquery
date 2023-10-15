if (caches.hasOwProperty(scr)) {
  if (cache[scr].isLoading === false) {
    crossfade(cache[src].$img);
  }
} else {
  $img = $("<img/>");
  cache[src] = {
    $img: $img,
    isLoading: true,
  };

  $img.on("load", function () {
    $img.hide();
    $frame.removeClass("is-loading").append($img);
    cache[src].isLoading = false;
    if (request === src) {
      crossfade($img);
    }
  });

  $frame.addClass("is-loading");

  $img.attr({
    src: src,
    alt: this.title || "",
  });
}

$(".thumb").eq(0).click();
