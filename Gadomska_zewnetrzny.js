document.write(
  "ostatnia modyfikacja strony"
    .fontcolor("FFFF00")
    .strike()
    .fontsize(7) + "<br>"
);
    document.write(
      '<p style="color:#FFFF00; font-weight:strike; font-size:7px;">' +
        document.lastModified +
      '</p>'
    );
