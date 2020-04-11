import "dart:html";

main() {
  InputElement element = document.createElement("input");
  element.setRangeText('This One', start:1, end:2, selectionMode: "start");
}
